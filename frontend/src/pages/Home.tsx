import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCharacters from "../components/ListCharacters";
import { listCharacters } from "../redux/actions/Characters";
import { IStore } from "../redux/store";
function Home() {
  const dispatch = useDispatch();
  const { characters } = useSelector((state: IStore) => state.characters);
  useEffect(() => {
    dispatch(listCharacters());
  }, [dispatch]);

  return (
    <>
      <h1 className="font-mono font-extrabold text-white text-4xl">
        Personajes
      </h1>
      <ListCharacters characters={characters} />
    </>
  );
}

export default Home;
