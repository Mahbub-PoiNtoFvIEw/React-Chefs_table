import propTypes from 'prop-types';
import { useState } from 'react';
const Cook = ({wantToCook, removeWantToCook}) => {
    const [cooking, setCooking] = useState([])
    const [totalPreparingTime, setTotalPreparingTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    const handleToAddCooking = (recipe) =>{ 
        // Add new recipe to the cooking list
        const newCookingList = [...cooking, recipe];
        
        // Calculate the new total preparing time and total calories
        const newTotalPreparingTime = newCookingList.reduce(
        (total, recipe) => total + recipe.preparing_time,
        0
        );
        const newTotalCalories = newCookingList.reduce(
        (total, recipe) => total + recipe.calories,
        0
        );

        // Update states
        setCooking(newCookingList);
        setTotalPreparingTime(newTotalPreparingTime);
        setTotalCalories(newTotalCalories);
    }
    
    return (
        <div className="ml-4 border-[.1rem] border-[#28282833] rounded-2xl p-4">
            <h3 className="text-xl font-bold text-center">Want To Cook : {wantToCook.length}</h3>
            <div className="overflow-x-auto">
                <table className="table-auto">
                    <thead>
                        <tr className="text-left">
                            <th></th>
                            <th>Name</th>
                            <th>Times</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        wantToCook.map((recipe, idx)=> 
                        <tbody key={idx}>
                            <tr className="bg-[#150B2B0D]">
                                <th className="px-3">{idx+1}</th>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time} minutes</td>
                                <td>{recipe.calories} calories</td>
                                <td>
                                    <button 
                                    onClick={()=>
                                    {
                                        handleToAddCooking(recipe)
                                        removeWantToCook(recipe.recipe_id);
                                    }
                                    }
                                    className='btn bg-[#0BE58A] rounded-xl mr-2 py-2 px-4 text-[#150B2B]'>Preparing</button></td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
            {/* Currently Cooking section */}
            <h3 className="text-xl font-bold text-center">Currently Cooking : {wantToCook.length}</h3>
            <div className="overflow-x-auto">
                <table className="table-auto">
                    <thead>
                        <tr className="text-left">
                            <th></th>
                            <th>Name</th>
                            <th>Times</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    {
                        cooking.map((recipe, idx)=> 
                        <tbody key={idx}>
                            <tr className="bg-[#150B2B0D]">
                                <th className="px-3">{idx+1}</th>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time} minutes</td>
                                <td>{recipe.calories} calories</td>
                            </tr>
                        </tbody>)
                    }
                    <tbody>
                        <tr>
                            <th className="px-3"></th>
                            <td></td>
                            <td>Total time ={totalPreparingTime} minutes</td>
                            <td>Total calories ={totalCalories} calories</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Cook.propTypes ={
    wantToCook: propTypes.array,
    removeWantToCook: propTypes.func
}

export default Cook;