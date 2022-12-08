import React, { useState, useEffect } from "react";
// import { useGetAnimeQuery } from '/app/src/store/animeApi'
import Pagination from "/app/src/AnimeComs/paginate";

const AnimeList = (item) => {
  // const { data } = useGetAnimeQuery();
  const [animes, setAnimes] = useState([]);
  // const [detail, setDetail] = useState([]);
  // const [addtoqueue, setQueue] = useState([])
  const [currentPage, setCurrentPage] = useState();
  const [animePerPage] = useState(20);

  const fetchAnimes = async () => {
    const url = `http://localhost:8000/anime_list/${currentPage * 20}`;
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    setAnimes(data.data);
  };

  const fetchAnimeDetail = async (id) => {
    const url = `http://localhost:8000/anime_detail/${id}`;
    const result = await fetch(url);
    const data = await result.json();
    setAnimes(data.data);
  };

  // const addToQueue = async (queue_id) => {
  //   const url = `http://localhost:8000/add_anime_to_queue/${queue_id}`;
  //   const result = await fetch(url, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({anime_id: id})
  //   })

  // };

  useEffect(() => {
    fetchAnimes();
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
        <button className="card_button">Add to List</button>
      </div>
    );
  }

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="header-title">List of Animes</h1>
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
      </div>
      <Pagination
        animePerPage={animePerPage}
        totalAnimes={200}
        paginate={paginate}
      />
    </div>
  );
};
export default AnimeList;
