import React from 'react';
import StarWarsChar from './StarWarsChar';


const StarWarsList = props => {
    return (
        <div className="flex">
            {props.charList.map((char, i) => (
                <StarWarsChar
                key={i}    
                charName={char.name}
                birthYear={char.birth_year}
                eyeColor={char.eye_color}
                films={char.films}
                gender={char.gender}
                hairColor={char.hair_color}
                height={char.height}
                homeworld={char.homeworld}
                mass={char.mass}
                skinColor={char.skin_color}
                species={char.species}
                starships={char.starships}
                vehicles={char.vehicles}
                />
            ))};
        </div>
    )
}

export default StarWarsList;

