let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {

  function GiveRating(props) {

    let isWithinRange = (0 < props.amount < 6);

    return isWithinRange ? (<h3>{stars[props.rating - 1]}</h3>
    ) : (
      null
    );
  };
  stars = GiveRating(props);
  
  return stars;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
