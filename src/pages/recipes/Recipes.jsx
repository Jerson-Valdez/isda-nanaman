import { useEffect, useState } from 'react'
import './recipes.css'
import heroImg from '../../assets/hero-seafood.png'
import RecipeCard from '../../components/cards/recipe card/RecipeCard'
import { IconArrowMoveDown } from '@tabler/icons-react'

export default function Recipes() {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(response => response.json())
        .then(data => setRecipes(data.meals))
    }, [])

    return (
        <div className="flex flex-col items-center gap-4 overflow-x-hidden overflow-y-auto">
            <div className="flex relative w-full h-150 mb-12">
                <img src={heroImg} alt="Image Header Seafood" className='w-full h-full object-cover relative z-0'/>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-orange-50 via-transparent/10 to-transparent"></div>
                <div className="absolute inset-0 z-9 bg-orange-500/5"></div>
                <div className="text-orange-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                    <h1 className='font-black text-5xl drop-shadow-2xl'>Isda Nanaman?</h1>
                    <h1 className='font-black text-7xl drop-shadow-2xl sm:text-8xl'>Lutong Paombong</h1>
                    <p className='font-extralight text-2xl drop-shadow-2xl mt-4'>Sawa kana ba sa paulit-ulit na luto ng isda?</p>
                    <p className='font-extralight text-2xl drop-shadow-2xl'>Discover new ways to cook our local harvest. From fishpond to table.</p>
                </div>
                <div className="flex flex-col items-center absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                    <p className='text-orange-500'>Scroll Down</p>
                    <IconArrowMoveDown size={48} className="text-orange-500" />
                </div>
            </div>
            <h1 className="font-black text-5xl text-gray-900 text-center">Featured Seafood Recipes</h1>
            <p className='font-extralight text-gray-600'>Fresh from the waters of Paombong, Bulacan</p>
            <div className="h-2 w-30 bg-orange-500 rounded-2xl mb-10"></div>
            <div className="flex flex-wrap justify-center gap-6">
                {recipes.map(recipe => (
                    <RecipeCard 
                        key={recipe.idMeal}
                        id =  {recipe.idMeal}
                        title = {recipe.strMeal}
                        img = {recipe.strMealThumb}
                    />
                ))}
            </div>
        </div>
    )
}