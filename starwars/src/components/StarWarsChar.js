import React from 'react';

const StarWarsChar = props => {
    return (
        <div>
            <h2>{props.charName}</h2>
            <p>{props.birthYear}</p>
            <p>{props.eyeColor}</p>
            {/* <p>{props.films}</p> */}
            <p>{props.gender}</p>
            <p>{props.hairColor}</p>
            <p>{props.height}</p>
            {/* <p>{props.homeworld}</p> */}
            <p>{props.mass}</p>
            <p>{props.skinColor}</p>
            {/* <p>{props.species}</p> */}
            {/* <p>{props.starships}</p> */}
            {/* <p>{props.vehicles}</p> */}
        </div>
    );
};

export default StarWarsChar;