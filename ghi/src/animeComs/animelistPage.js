// import React, { useState, useEffect } from "react";

// const AnimeList = () => {
//   const [animes, setAnimes] = useState([]);

//   const fetchAnimes = async () => {
//     const url = "http://localhost:8000/anime_list";
//     const result = await fetch(url);
//     const data = await result.json();
//     console.log(data);
//     setAnimes(data.data);
//   };

//   useEffect(() => {
//     fetchAnimes();
//   }, []); // componentDidMount

//   return (
//     <div className="container">
//       <h1 className="header-title">List of Animes</h1>
//       <table className="table">
//         <thead>
//           <tr>
//             <th className="table-head">Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {animes.map((anime) => {
//             return (
//               <tr key={anime.id}>
//                 <td className="model-text">
//                   {anime.attributes.canonicalTitle}
//                 </td>
//                 {/* Figure out on click redirect to detail page */}
//                 {/* assign id value to onclick function */}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default AnimeList;

// 2.60 KiB
// import React, { useState, useEffect } from "react";
// import { useGetAnimeQuery } from '/app/src/store/animeApi'
// import Pagination from '/app/src/animeComs/animeComsImport/Pagination'
// const AnimeList = () => {
//   // const { data } = useGetAnimeQuery();
//   const [animes, setAnimes] = useState([]);
//   const[currentPage, setCurrentPage] = useState();
//   const[animePerPage] = useState(20);
//   const fetchAnimes = async () => {
//     const url = `http://localhost:8000/anime_list/${currentPage * 20}`;
//     const result = await fetch(url);
//     const data = await result.json();
//     console.log(data);
//     setAnimes(data.data);
//   };

//   const addToQueue = async () => {
//     const url = `http://localhost:8000/add_anime_to_queue/${0}`;
//   }

//   useEffect(() => {
//     fetchAnimes();
//   }, []); // componentDidMount
//   function Card(props){
//     return(
//       <div className="card">
//         <div className="card_body">
//           <img src={props.img}/>
//           <h2 className="card_title">{props.title}</h2>
//           <p className="card_description">{props.description}</p>
//         </div>
//         <button className="card_button">Add to List</button>
//       </div>
//     )
//   }
//   //Change Page
//   const paginate = pageNumber => setCurrentPage(pageNumber);
//   return (
//     <div className="container">
//       <h1 className="header-title">List of Animes</h1>
//       <table className="table">
//         <thead>
//           <tr>
//             <th className="table-head"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {animes.map((anime) => {
//             return (
//               <tr key={anime.id}>
//                 <td className="model-text">
//                   <Card
//                   img={anime.attributes.posterImage.tiny}
//                   title={anime.attributes.canonicalTitle}
//                   description={anime.attributes.description}
//                   />
//                 </td>

//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//     </div>
//   );
// };
// export default AnimeList;
