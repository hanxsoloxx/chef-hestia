import Header from "./Components/Header";
import Form from "./Components/Form";
import React from "react";
import Recipe from "./Components/Recipe";


export default function App () {
  const [recipe, setRecipe] = React.useState("")
return (
    <>
      <Header />
      <Form setRecipe={setRecipe} />
      {recipe && <Recipe recipe={recipe} />}
    </>
)

}