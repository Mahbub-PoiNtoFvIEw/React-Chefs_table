
import './App.css'
import Banner from './components/Banner/Banner'
import Cook from './components/Cook/Cook'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
import OurRecipesHeader from './components/OurRecipesHeader/OurRecipesHeader'

function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OurRecipesHeader></OurRecipesHeader>
      <main className='mt-8 md:grid grid-cols-3 lg:mx-16 mx-2'>
        <div className='col-span-2'>
        <OurRecipes ></OurRecipes>
        </div>
        <div>
        <Cook></Cook>
        </div>
      </main>
    </>
  )
}

export default App
