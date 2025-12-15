import { BrowserRouter, Routes, Route } from "react-router"
import Recipes from "./pages/recipes/Recipes"
import Recipe from "./pages/recipe details/Recipe"
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
