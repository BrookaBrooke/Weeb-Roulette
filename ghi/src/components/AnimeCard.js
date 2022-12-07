import React from "react";

const AnimeCard = (props) => {
  //   const [animeInfo, setAnimeInfo] = useState([]);

  //   useEffect(() => {
  //     async function getAnimeInfo() {
  //       const url = "http://localhost:8000/anime_list/1";
  //       const result = await fetch(url);
  //       const data = await result.json();
  //       console.log(data);
  //       setAnimeInfo(data.data);
  //     }
  //     if (animeInfo === null) {
  //       getAnimeInfo();
  //     }
  //   }, []);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.coverImageTopOffset} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text"></p>
        <a href="/detail" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default AnimeCard;
