import axios from "axios";
import { useEffect, useState } from "react";
import RecipeContext from "./RecipeContext";
import UserContext from "./UserContext";

export const RecipeProvider = (props) => {

    const [ recipe, setRecipe ] = useState([]);
    const [ user, setUser ] = useState([]);
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

    function getRecipe(recipeId) {
        return axios.get(baseUrl + recipeId).then(response => {
            return new Promise (resolve => resolve(response.data));
        });
    }

    function getCurrentUserRecipes() {

        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myRecipeToken')}`
        };

        return axios.get(`${baseUrl}userrecipes`, { headers: myHeaders }).then(response => {
            return new Promise (resolve => resolve(response.data));
        });
    }


    function getUserRecipesById(userId) {
        return axios.get(`${baseUrl}userprofilerecipes/${userId}`).then(response => {
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
    
        return axios.put(baseUrl + recipe.recipeId, recipe, { headers: myHeaders })
            .then(response => {
                getAllRecipes();
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function deleteRecipe(recipeId) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myRecipeToken')}`
        };

        return axios.delete(baseUrl + recipeId,{ headers: myHeaders }).then(response => {
            getAllRecipes();
            return new Promise (resolve => resolve(response.data));
        });
    }

    function searchRecipe(searchQuery) {
        return  axios.get(`${baseUrl}/search/${searchQuery}`);   
      }

    return (
        <RecipeContext.Provider value={{
            recipe,
            getAllRecipes,
            getRecipe,
            getCurrentUserRecipes,
            getUserRecipesById,
            addRecipe,
            editRecipe,
            deleteRecipe,
            searchRecipe
        }}>
            { props.children }
        </RecipeContext.Provider>
        
    )
};

export default RecipeProvider