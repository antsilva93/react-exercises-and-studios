import RecipeImage from "./RecipeImage";
import recipedata from "./recipe.json";
import styles from "./styling.css";


function AuthorInfo() {
  
  const recipeAuthor = recipedata.map((data) => (
    <div key={data.name}>{data.author}</div>
    ));
    
    const recipeAuthorImage = recipedata.map((data) => (
      <div key={data.name}>
        <img src={data.authorImage} alt={data.author} className="authorImage" />
      </div>
    ));
    
    const recipeWebsite = recipedata.map((data) => (
    <div key={data.name}>
      <a href={data.website}/>
      </div>
    ));

   return (
    <div>      
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 