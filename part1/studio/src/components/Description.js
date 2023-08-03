import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = 'https://www.jameshoffmann.co.uk/weird-coffee-science/caffe-shakerato';
    let authorPhoto = 'https://images.squarespace-cdn.com/content/v1/5d39c0ab87164d000167b2e2/1600945711706-RICUCBD9HQ9PEWESXJ8E/_DSC4757.jpg?format=2500w';
    let authorName = 'James Hoffmann';
    return (
        <div className = {StyleSheet.RecipeAuthorBlock}>
            <img src={authorPhoto} alt = "A portrait of James Hoffmann" className={StyleSheet.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Weird Coffee Science: Caffe Shakerato</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Fruity Espresso Recipe</h1>
                    <p>A shaken espresso with earl grey syrup</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;