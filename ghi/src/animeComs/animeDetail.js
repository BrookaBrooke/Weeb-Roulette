import { Container, Row, Col, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function AnimeDetail() {
  // const { data } = useGetAnimeQuery();
  const [animes, setAnimes] = useState([]);
  // const [detail, setDetail] = useState([]);
  // const [addtoqueue, setQueue] = useState([])
  const [currentPage, setCurrentPage] = useState();
  const [animePerPage] = useState(20);

  const fetchAnimes = async () => {
    const url = "http://localhost:8000/anime_detail/1";
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    setAnimes(data.data);
  };

  useEffect(() => {
    fetchAnimes();
  }, []); // componentDidMount

  return (
    <div className="card">
      <h1 className="header-title">yo</h1>
      {animes.map((anime) => {
        console.log(animes);
        return (
          <tr key={anime.id}>
            <td>
              <h1>{anime.attributes.canonicalTitle}</h1>
            </td>
          </tr>
        );
      })}
    </div>
  );
}

export default AnimeDetail;
