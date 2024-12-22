
const WantToCook = (recipe) => {
    const {recipe_name, calories, preparing_time} = recipe;
    console.log(recipe.recipe_name)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="text-left">
                            <th></th>
                            <th>Name</th>
                            <th>Times</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-[#150B2B0D]">
                            <th className="px-3">1</th>
                            <td>{recipe_name}</td>
                            <td>{preparing_time} minutes</td>
                            <td>{calories} calories</td>
                            <td><button className='btn bg-[#0BE58A] rounded-xl mr-2 py-2 px-4 text-[#150B2B]'>Preparing</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WantToCook;