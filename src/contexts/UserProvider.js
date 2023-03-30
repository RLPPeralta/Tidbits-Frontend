import axios from "axios";
import { useEffect, useState } from "react";
import UserContext from "./UserContext";

export const UserProvider = (props) => {

    const [ user, setUser ] = useState([]);
    const baseUrl = "http://localhost:3000/api/users/";

    useEffect(() => {
        async function fetchData() {
            await getAllUsers();
        }
        fetchData();
    }, []);
    
    function getAllUsers() {
        return axios.get(baseUrl).then(response => setUser(response.data));
    } 
    
    function getUser(userId) {
        return axios.get(baseUrl + userId).then(response => {
            return new Promise(resolve => resolve(response.data)     
            )
        });
    }  

    function createUser(email, password, firstName, lastName, bio, continent) {       
        let user = { email, password, firstName, lastName, bio, continent };
        
        return axios.post(baseUrl, user)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function signInUser(email, password) {
        let user = { email, password };

        return axios.post(`${baseUrl}login`, user)
            .then(response => {
                localStorage.setItem('myRecipeToken', response.data.token)
                return new Promise(resolve => resolve(response.data));
            }
        );
    } 

    function editUser(user) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myRecipeToken')}`
        };

        return axios.put(baseUrl + user.userId, user, { headers: myHeaders })
            .then(response => {
                getAllUsers();
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    return (
        <UserContext.Provider value={{
            user,
            createUser,
            signInUser,
            getUser,
            editUser
        }}>
            { props.children }
        </UserContext.Provider>
    )
}