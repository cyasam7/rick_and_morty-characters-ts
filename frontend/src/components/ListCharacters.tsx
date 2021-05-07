import React from "react";
import { ICharacter, ICharacters } from "../types/types";
import CharacterCard from "./CharacterCard";

const ListCharacters: React.FC<ICharacters> = (props) => {
  return (
    <div className="grid gap-2 grid-cols-12 mt-5">
      {props.characters.map((character: ICharacter, index) => (
        <CharacterCard key={index} {...character} />
      ))}
    </div>
  );
};

export default ListCharacters;
