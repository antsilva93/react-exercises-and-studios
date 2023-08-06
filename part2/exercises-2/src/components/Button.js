import './styles.css';

function Button() {

   function onLearnMore() {
      alert('splish splash');
   };

   return ( 
         <button>
            <onLearnMore />
            Learn More
         </button>
   );
}

export default Button;