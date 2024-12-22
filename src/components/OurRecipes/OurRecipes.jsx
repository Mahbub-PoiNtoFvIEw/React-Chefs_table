import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import propTypes from 'prop-types';

const OurRecipes = ({handleWantToCook}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('Chefs.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="md:grid grid-cols-2 gap-4">
            {
                recipes.map((recipe,idx) => <Recipe 
                    key={idx} 
                    recipe={recipe}
                    handleWantToCook={handleWantToCook}></Recipe>)
            }
        </div>
    );
};

OurRecipes.propTypes = {
    handleWantToCook: propTypes.func
}

export default OurRecipes;