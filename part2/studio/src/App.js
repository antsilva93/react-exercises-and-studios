import "./App.css";
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";
// import SaveButton from "./components/SaveButton";
// import ClickedButton from "./components/ClickedButton";

export default function App() {
  return (
    <>
      {/* <RecipeImage /> */}
      {/* <RecipeName /> */}
      {/* <SaveButton /> */}
      {/* <ClickedButton /> */}
      <RateARecipe rating={4} />
      <Button saveButton={true} />
      {/* <AuthorInfo /> */}
      {/* <IngredientList /> */}
    </>
  );
}
