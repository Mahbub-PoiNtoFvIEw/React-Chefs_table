import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
function Header() {
    return (
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-4 my-6">
            <div>
                <h2 className="text-4xl font-bold">Recipe Calories</h2>
            </div>
            <div >
                <ul className="flex gap-6 items-center">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="flex gap-4 items-center">   
                <div className="bg-[#150B2B0D] py-1 px-4 rounded-2xl">
                    <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow focus:outline-none bg-[#150B2B00] placeholder:text-[#150B2BB3]" placeholder="Search" />
                    <FiSearch className="h-4 w-4 opacity-70 " />
                    </label>
                </div>
                <div className="bg-[#0BE58A] text-[#150B2B] p-2 rounded-full">
                    <CgProfile />
                </div>
            </div>
        </div>
    );
}

export default Header;