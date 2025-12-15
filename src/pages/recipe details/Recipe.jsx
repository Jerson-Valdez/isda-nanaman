import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router'; 
import { IconArrowLeft, IconCheck, IconChefHat } from '@tabler/icons-react';

export default function Recipe() {
    const { id } = useParams(); 
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => {
            setRecipe(data.meals[0]);
            setLoading(false);
        })
        .catch(err => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
            </div>
        );
    }

    if (!recipe) return <div className="text-center p-10">Recipe not found!</div>;

    const getIngredients = () => {
        let ingredients = [];
        for (let i = 1; i <= 20; i++) {
            if (recipe[`strIngredient${i}`]) {
                ingredients.push({
                    name: recipe[`strIngredient${i}`],
                    measure: recipe[`strMeasure${i}`]
                });
            }
        }
        return ingredients;
    };

    return (
        <div className="min-h-screen bg-orange-50 pb-20">
         
            <div className="relative h-96 w-full">
                <img 
                    src={recipe.strMealThumb} 
                    alt={recipe.strMeal} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                
               
                <button onClick={() => window.history.back()} className="cursor-pointer absolute top-6 left-6 bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-full text-white transition">
                    <IconArrowLeft size={24} />
                </button>

                <div className="absolute bottom-10 left-0 w-full px-6 md:px-20 text-white">
                    <span className="bg-orange-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                        {recipe.strCategory}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black drop-shadow-lg">
                        {recipe.strMeal}
                    </h1>
                    <div className="flex items-center gap-2 mt-4 text-gray-200">
                        <IconChefHat size={20} />
                        <p className="text-lg">{recipe.strArea} Cuisine</p>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                
                <div className="md:col-span-1">
                    <div className="bg-white p-8 rounded-2xl sticky top-10 shadow-2xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            Ingredients
                        </h2>
                        <ul className="space-y-3">
                            {getIngredients().map((ing, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-700">
                                    <IconCheck size={18} className="text-orange-500 mt-1 shrink-0" />
                                    <span className="text-sm md:text-base">
                                        <span className="font-bold">{ing.measure}</span> {ing.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Instructions</h2>
                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-light">
                        
                        {recipe.strInstructions.split('\r\n').map((step, index) => (
                            step.trim() && (
                                <p key={index} className="mb-4">
                                    {step}
                                </p>
                            )
                        ))}
                    </div>

                    
                    {recipe.strYoutube && (
                        <a 
                            href={recipe.strYoutube} 
                            target="_blank" 
                            rel="noreferrer"
                            className="mt-8 inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition"
                        >
                            Watch on YouTube
                        </a>
                    )}
                </div>

            </div>
        </div>
    );
}