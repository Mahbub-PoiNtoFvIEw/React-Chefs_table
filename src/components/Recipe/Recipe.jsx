import propTypes from 'prop-types';
import { CiClock1 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({recipe}) => {
    const {recipe_name, short_description, ingredients, preparing_time, calories, image} = recipe;
    console.log(recipe);
    return (
        <div className="border-[.1rem] border-[#28282833] p-4 rounded-2xl space-y-4">
            <img className="h-52 w-full rounded-2xl" src={image} alt="" />
            <h3>{recipe_name}</h3>
            <p>{short_description}</p>
            <div>
                <h3 className='font-bold text-xl'>Ingredients : {ingredients.length}</h3>
                {
                    ingredients.map((ingredient, idx) => <li className='ml-8' key={idx}>{ingredient}</li>)
                }
            </div>
            <div className='flex justify-between items-center'>
                <span className='flex gap-2 items-center'><CiClock1 /> {preparing_time} minutes</span>
                <span className='flex gap-2 items-center'><AiOutlineFire />{calories} calories</span>
            </div>
            <button className='btn bg-[#0BE58A] rounded-3xl py-2 px-8 text-[#150B2B]'>Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: propTypes.object.isRequired
}

export default Recipe;