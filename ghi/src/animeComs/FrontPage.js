// import React, { useState, useEffect } from "react";

// const FrontPage = () => {
//   const [popularityRank, setPopularityRank] = useState([]);

//   const fetchpopularityRank = async () => {
//     const url = "http://localhost:8000/anime_list";
//     const result = await fetch(url);
//     const data = await result.json();
//     console.log(data);
//     setPopularityRank(data.data);
//   };

//   useEffect(() => {
//     fetchPopularityRank();
//   }, []);

//   return (
//     <div className="container">
//       <h1 className="header-title">Trending Animes</h1>
//       <table className="table">
//         <thead>
//           <tr>
//             <th className="table-head">Trending Animes</th>
//           </tr>
//         </thead>
//         <tbody>
//           {popularityRank.map((popularityRank) => {
//             return (
//               <tr key={popularityRank.id}>
//                 <td className="model-text">
//                   img= {popularityRank.attributes.popularityRank}
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default FrontPage;

import React, { useState, useEffect } from "react";

const FrontPage = () => {
  const [animes, setAnimes] = useState([]);

  const fetchAnimes = async () => {
    const url = "http://localhost:8000/anime_list/1";
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
      <h1 className="header-title">Pop Anime</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="table-head">Pop Anime</th>
          </tr>
        </thead>
        <tbody>
          {animes.map((anime) => {
            return (
              <tr key={anime.id}>
                <td className="model-text">
                  title={anime.attributes.canonicalTitle}
                  img={anime.attributes.posterImage.tiny}
                  title={anime.attributes.canonicalTitle}
                  popularityRank={anime.attributes.popularityRank}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default FrontPage;
