import React, { useState, useEffect } from "react";
import { useGetAnimeQuery } from '/app/src/store/animeApi'
import Pagination from '/app/src/animeComs/animeComsImport/Pagination'

const AnimeList = () => {
  // const { data } = useGetAnimeQuery();
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const[currentPage, setCurrentPage] = useState(1);
  const[animePerPage, setAnimesPerPage] = useState(20);

  const fetchAnimes = async () => {
    setLoading(true);
    const url = `http://localhost:8000/anime_list/${currentPage - 1}`;
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    setAnimes(data.data);
    setLoading(false);
  };

  const indexOfLastAnime = currentPage * animePerPage;
  const indexOfFirstAnime = indexOfLastAnime - animePerPage;
  const currentAnime = animes.slice(indexOfFirstAnime, indexOfLastAnime);

  useEffect(() => {
    fetchAnimes();
  }, []); // componentDidMount

  function Card(props){
    return(
      <div className="card">
        <div className="card_body">
          <img src={props.img}/>
          <h2 className="card_title">{props.title}</h2>
          <p className="card_description">{props.description}</p>
        </div>
        <button className="card_button">Add to List</button>
      </div>
    )
  }

  return (
    <div className="container">
      <h1 className="header-title">List of Animes</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="table-head"></th>
          </tr>
        </thead>
        <tbody>
          {animes.map((anime) => {
            return (
              <tr key={anime.id}>
                <td className="model-text">
                  <Card 
                  img={anime.attributes.posterImage.tiny}
                  title={anime.attributes.canonicalTitle}
                  description={anime.attributes.description}
                  />
                </td>
                {/* Figure out on click redirect to detail page */}
                {/* assign id value to onclick function */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination animePerPage={animePerPage} totalAnimes={100}/>
    </div>
  );
};
export default AnimeList;
