import React, { useState, useEffect } from "react";

const AnimeDetail = () => {
  const [animes, setAnimes] = useState([]);

  const fetchAnimes = async () => {
    const url = "http://localhost:8000/anime_list";
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    setAnimes(data.data);
  };

  useEffect(() => {
    fetchAnimes();
  }, []); // componentDidMount

  return (
    <div className="container">
      <h1 className="header-title">List of Animes</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="table-head">Name</th>
          </tr>
        </thead>
        <tbody>
          {animes.map((synopsis) => {
            return (
              <tr key={synopsis}>
                <td className="model-text">{synopsis.attributes.synopsis}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default AnimeDetail;

// BREAK

// import { useEffect, useState } from "react";
// import AnimeList from "./animelistPage";
// import

// function AnimeDetail() {
//   const [animeData, setAnimeData] = useState(null);
//   const [search, setSearch] = useState("");
//   // const { animeId } = props;

//   useEffect(() => {
//     async function getAnimeInfo() {
//       const response = await fetch("http://localhost:8000/anime_detail");
//       const data = await response.json();
//       console.log(data);

//       setAnimeData(data);
//     }
//     if (animeData == null) {
//       getAnimeInfo();
//     }
//   }, []);

//   if (animeData === null) {
//     return <p>Loading...</p>;
//   }
//   return (
//     <>
//       <AnimeList search={search} setSearch={setSearch} />
//       <table className="table table-stripped">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Detail</th>
//           </tr>
//         </thead>
//         <tbody>
//           {animeData.map((anime_data) => {
//             return (
//               <tr key={anime_data.title}>
//                 <td> {anime_data.title} </td>
//                 <td> {anime_data} </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default AnimeDetail;
