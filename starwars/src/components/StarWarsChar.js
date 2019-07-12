import React from 'react';
import styled from 'styled-components';

const CharContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #aaa;
    margin: 1rem auto;
    padding: 0.75rem;
    border-radius: 1.5rem;
    h3 {
        color: white;
    }
`;
// width: 90%;

const CharTrait = styled.p`
    margin: 0 0.25rem;
`;
// color: white;


const StarWarsChar = props => {
    return (
        <CharContainer>
            <h3>{props.charName}  </h3>
            <CharTrait><b>Birth Year:</b> {props.birthYear}</CharTrait>
            <CharTrait><b>Eye Color:</b> {props.eyeColor}</CharTrait>
            {/* <CharTraits>{props.films}</CharTraits> */}
            <CharTrait><b>Gender:</b> {props.gender}</CharTrait>
            <CharTrait><b>Hair Color:</b> {props.hairColor}</CharTrait>
            <CharTrait><b>Height:</b> {props.height}</CharTrait>
            {/* <CharTrait>{props.homeworld}</CharTrait> */}
            <CharTrait><b>Mass:</b> {props.mass}</CharTrait>
            <CharTrait><b>Skin Color:</b> {props.skinColor}</CharTrait>
            {/* <CharTrait>{props.species}</CharTrait> */}
            {/* <CharTrait>{props.starships}</CharTrait> */}
            {/* <CharTrait>{props.vehicles}</CharTrait> */}
        </CharContainer>
    );
};

export default StarWarsChar;