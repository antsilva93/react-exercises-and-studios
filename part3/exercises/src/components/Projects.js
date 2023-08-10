import data from "../data.json";
import {useState} from 'react';

const MyProjects() {
    const [index, setIndex] useState(0);
    function handleClick() {
        if ( index < data.projects.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0);
        }
    }


}