import { Card } from "./components/Card";
import * as S from "./styles/App";
import axios from "axios";
import { useEffect, useState } from "react";

import IconLoader from "./assets/loader.gif";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [isLoader, setIsLoader] = useState(true);

  const isLastPage = page == totalPages;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        setTotalPages(response.data.info.pages);
        setTotalCharacters(response.data.info.count);

        const newCharacters = [...characters, ...response.data.results];

        setCharacters(newCharacters);
        setIsLoader(false);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Finalizou!");
      }
    }
    fetchData();
  }, [page]);

  function handleShowMore() {
    setPage((state) => state + 1);
  }

  return (
    <>
      {isLoader && (
        <S.Loader>
          <img src={IconLoader} alt="" />
        </S.Loader>
      )}

      <S.Container>
        <S.Header>
          <S.Title>Ricky and Morty</S.Title>
          <S.Subtitle>N° de Personagens: {totalCharacters}</S.Subtitle>
        </S.Header>
        <S.List>
          {characters.map(({ image, name, gender, species }, index) => (
            <Card
              key={index}
              imageUrl={image}
              name={name}
              genre={gender}
              specie={species}
            />
          ))}
        </S.List>
        {!isLastPage ? (
          <S.Button onClick={handleShowMore}>Carregar Mais</S.Button>
        ) : null}
      </S.Container>
    </>
  );
}

export default App;
