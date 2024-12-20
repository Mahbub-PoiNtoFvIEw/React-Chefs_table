import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const OurRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('Chefs.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="md:grid grid-cols-2 gap-4">
            {
                recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default OurRecipes;