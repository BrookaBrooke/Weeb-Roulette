import React, { useState } from "react";
import { useGetAnimeQuery } from "/app/src/store/animeApi";
import Pagination from "/app/src/animeComs/Paginate";
import { Link } from "react-router-dom";

const AnimeList = () => {
  const { data, isLoading } = useGetAnimeQuery();
  const [setCurrentPage] = useState();
  const [animePerPage] = useState(20);
  const [open, setOpen] = React.useState(false);

if (isLoading) {
  return null;
   }

 const handleOpen = () => {
   setOpen(!open);
 };

 function Card(props) {
   return (
     <div className="card">
       <div className="card_body">
         <Link to={`/detail`}>
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
             <button className="list_button">
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
           {data.data.map((anime) => {
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
