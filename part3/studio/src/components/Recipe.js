const RecipeAuthor = () => {
   let authorLink = "https://www.acouplecooks.com/fernet-sour-cocktail/";
   let authorPhoto = "https://www.acouplecooks.com/wp-content/uploads/2021/06/bio.jpg";
   let authorName = "Sonja Overhiser";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ['Fernet-Branca', 'Green Chartreuse', 'lime juice', 'simple syrup', 'ice'];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Fernet Sour</h1>
            <p>A uniquely sour and herbacious cocktail</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.acouplecooks.com/wp-content/uploads/2020/09/Fernet-Cocktail-003.jpg" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}