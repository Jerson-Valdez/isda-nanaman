import { NavLink } from 'react-router'
import './recipe-card.css'

export default function RecipeCard({ id, title, img }) {
    return (
        <div className="group flex flex-col justify-between bg-white h-100 w-11/12 p-2 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 
                sm:w-70">
            <div className="h-60 w-full overflow-hidden rounded-2xl">
                <img 
                    src={img} 
                    alt={title}
                    title={title} 
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:inset" 
                />
            </div>

            <h2 className="text-2xl p-3 text-gray-800 font-bold group-hover:text-orange-500 duration-300">{title}</h2>
            <NavLink 
                to={`/recipe/${id}`} 
                className='flex justify-center bg-orange-500 text-orange-50 font-bold rounded-md p-2 m-3 hover:bg-orange-600 duration-300 cursor-pointer'>
                    View Recipe
            </NavLink>
        </div>
    )
}