
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cook from './components/Cook/Cook'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
import OurRecipesHeader from './components/OurRecipesHeader/OurRecipesHeader'

function App() {
  const [wantToCook, setWantToCook] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  const handleWantToCook = recipe =>{
    
    if(!wantToCook.some(obj => obj.recipe_id === recipe.recipe_id)){
      const newCook = [...wantToCook, recipe];
      setWantToCook(newCook);
      // console.log('nothing')
    }else{
      setToastMessage("Recipe already added!");
      setTimeout(() => setToastMessage(""), 5000);
    }
  }

  const removeWantToCook = (id) =>{
    const remainingCooking = wantToCook.filter(cook => cook.recipe_id !== id);
    setWantToCook(remainingCooking);
    console.log(wantToCook,'removing',id,'r',remainingCooking)
  }
  // console.log(wantToCook)

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OurRecipesHeader></OurRecipesHeader>
      {toastMessage && (
        <div className="fixed top-[30%] right-5 bg-[#FFFFFF] text-[#150B2B99] py-2 px-4 rounded shadow-lg animate-fade-in-out">
          <p className='py-2 px-4'>{toastMessage}</p>
        </div>
      )}
      <main className='mt-8 md:grid grid-cols-5 lg:mx-16 mx-2'>
        <div className='col-span-3'>
        <OurRecipes handleWantToCook={handleWantToCook}></OurRecipes>
        </div>
        <div className='col-span-2'>
        <Cook wantToCook={wantToCook} removeWantToCook={removeWantToCook}></Cook>
        </div>
      </main>
    </>
  )
}

export default App
