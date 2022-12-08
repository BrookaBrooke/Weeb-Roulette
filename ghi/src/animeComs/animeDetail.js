import { Container, Row, Col, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";

const AnimeDetail = (item) => {
  // const { data } = useGetAnimeQuery();
  const [animes, setAnimes] = useState([]);
  // const [detail, setDetail] = useState([]);
  // const [addtoqueue, setQueue] = useState([])
  const [currentPage, setCurrentPage] = useState();

  const fetchAnimeDetail = async (id) => {
    const url = `http://localhost:8000/anime_detail/${id}`;
    const result = await fetch(url);
    const data = await result.json();
    setAnimes(data.data);
  };

  useEffect(() => {
    fetchAnimeDetail();
  }, []); // componentDidMount

  function Card(props) {
    return (
      <div className="card">
        <div className="card_body">
          <a href="http://localhost:3000/detail/{id}" role="button">
            <img src={props.img} alt="" />
          </a>
          <h2 className="card_title">{props.title}</h2>
          <p className="card_description">{props.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="header-title">detail</h1>
      <div className="extra container">
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
                      synopsis={anime.attributes.synopsis}
                      episodecount={anime.attributes.episodeCount}
                    />
                  </td>
                  {/* Figure out on click redirect to detail page */}
                  {/* assign id value to onclick function */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnimeDetail;
