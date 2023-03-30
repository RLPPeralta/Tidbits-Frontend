import axios from "axios";
import { useEffect, useState } from "react";
import RecipeContext from "./RecipeContext";

export const RecipeProvider = (props) => {

    const [ recipe, setRecipe ] = useState([]);
    const baseUrl = "http://localhost:3000/api/recipe/";

    useEffect(() => {
        async function fetchData() {
            await getAllRecipes();
        }
        fetchData();
    }, []);

    function getAllRecipes() {
        return axios.get(baseUrl).then(response => setRecipe(response.data));
    }

    function getRecipe(id) {
        return axios.get(baseUrl + id).then(response => {
            return new Promise (resolve => resolve(response.data));
        });
    }

    function addRecipe(recipe) {
        console.log('addRecipe()')        
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myRecipeToken')}`
        };
    
        return axios.post(baseUrl, recipe, { headers: myHeaders })
            .then(response => {
                getAllRecipes();
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function editRecipe(recipe) {
        console.log('editRecipe()') 
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myRecipeToken')}`
        };
    
        return axios.put(baseUrl + recipe.id, recipe, { headers: myHeaders })
            .then(response => {
                getAllRecipes();
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function deleteRecipe(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myRecipeToken')}`
        };

        return axios.delete(baseUrl + id,{ headers: myHeaders }).then(response => {
            getAllRecipes();
            return new Promise (resolve => resolve(response.data));
        });
    }

    return (
        <RecipeContext.Provider value={{
            recipe,
            getAllRecipes,
            getRecipe,
            addRecipe,
            editRecipe,
            deleteRecipe
        }}>
            { props.children }
        </RecipeContext.Provider>
    )
};

export default RecipeProvider