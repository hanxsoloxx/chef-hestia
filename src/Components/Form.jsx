import React from 'react'
import Hestia from "../assets/baker.png";
export default function Form ({ setRecipe }) {
    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    const [isLoading, setIsLoading] = React.useState(false)

    function addNewIngredient (event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        event.currentTarget.reset()
    }

    async function kindleRecipe () {
        setIsLoading(true)
        const prompt =`I have these ingredients: ${ingredients.join(", ")}. Please generate a recipe for me.`
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
    },
    body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 1024,
        messages: [{
            role: "user",
            content: prompt
        }]
    })
})
const data = await response.json()
console.log(data)
setRecipe(data.choices[0].message.content)
setIsLoading(false)
    }

    return (

    
    <main>
        <form onSubmit={addNewIngredient}>
            <input 
            type="text" 
            aria-label="Add Ingredient"
            placeholder="e.g. oregano"
            name='ingredient'
            />
            <button>Add Ingredient</button>
        </form>
        <div className='ingredients-card'>
            <h2>What's in the pantry?</h2>
        <ul>
            {ingredientsListItems}
        </ul>
        <button className='recipe-button' onClick={kindleRecipe} disabled={isLoading}>Kindle a recipe</button>
        {isLoading && <img src={Hestia} className='loading-chef'/>}
        </div>
    </main>

    )
}