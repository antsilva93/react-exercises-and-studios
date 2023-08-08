let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {

  function GiveRating(props) {

    return <h3>{stars[props.rating - 1]}</h3>
   
  };
  
  if (props >=1 && props <=5 ) {
    return <GiveRating />
  } else {
    return null;
  }
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
