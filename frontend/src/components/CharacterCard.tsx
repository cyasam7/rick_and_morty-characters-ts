import React from "react";
import { ICharacter } from "../types/types";

const CharacterCard: React.FC<ICharacter> = (props) => {
  return (
    <div className="md:col-span-6 sm:col-span-12  bg-gray-600 shadow-sm container mx-auto flex ">
      <img src={props.image} className="w-1/2" alt="" />
      <div className="w-1/3">
        <div className="container mx-auto p-5 text-white">
          <p className="font-extrabold text-3xl">{props.name}</p>
          <div className="flex font-bold">
            <p>{props.status}</p>
            <p>{props.species}</p>
          </div>
          <p className="font-extralight text-gray-400">Last known location:</p>
          <p>{props.location.name}</p>
          <p className="font-extralight text-gray-400">First seen in:</p>
          <p>{props.origin.name}</p>

          <button className="px-3 py-2 mt-2 bg-green-600 rounded-lg hover:bg-green-500">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};
export default CharacterCard;
