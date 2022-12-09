import React, { useState, useEffect } from "react";
import { useGetAnimeQuery } from "/app/src/store/animeApi";
import Pagination from "/app/src/animeComs/paginate";
import { Link } from "react-router-dom";

const AnimeList = () => {
  const { data, error, isLoading } = useGetAnimeQuery();
  // const [animes, setAnimes] = useState([]);
  const [profile, setProfile] = useState([]);
  const [queues, setQueues] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  const [animePerPage] = useState(20);
  const [open, setOpen] = React.useState(false);

  if (isLoading) {
    return null;
  }

  // const fetchAnimes = async () => {
  //   const url = `http://localhost:8000/anime_list/${currentPage * 20}`;
  //   const result = await fetch(url);
  //   const data = await result.json();
  //   console.log(data);
  //   setAnimes(data.data);
  // };

  // const fetchProfile = async (profile_id) => {
  //   const url = `http://localhost:8000/profiles/${profile_id}`;
  //   const result = await fetch(url);
  //   const data = await result.json();
  //   console.log(data);
  //   setProfile(data);
  // };

  const addToQueue = async (queue_id, id) => {
    const url = `http://localhost:8000/add_anime_to_queue/${queue_id}`;
    const result = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ anime_id: id }),
    });
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  // useEffect(() => {
  //   fetchAnimes();

  // }, []); // componentDidMount

  function Card(props) {
    return (
      <div className="card">
        <div className="card_body">
          <Link to={`/animedetail/${props.id}`}>
            <img src={props.img} alt="" />
          </Link>
          <h2 className="card_title">{props.title}</h2>
          <p className="card_description">{props.description}</p>
        </div>
        <button className="card_button" onClick={handleOpen}>
          Add to List
        </button>
        {open ? (
          <ul className="menu">
            <li className="menu-item">
              <button className="list_button" onClick={addToQueue}>
                Anime Queue Title
              </button>
            </li>
          </ul>
        ) : null}
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
            {data.map((anime) => {
              return (
                <tr key={anime.id}>
                  <td className="model-text">
                    <Card
                      id={anime.id}
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
