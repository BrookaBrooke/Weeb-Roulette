// import React, { useState, useEffect } from "react";

// const AnimeDetail = () => {
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
//           {animes.map((synopsis) => {
//             return (
//               <tr key={synopsis}>
//                 <td className="model-text">{synopsis.attributes.synopsis}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default AnimeDetail;

// BREAK

import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";

// export default function AnimeDetail(props) {
//   const [animeInfo, getAnimeInfo] = useState([]);
//   // const { animeId } = props;
//   // // const { data } = "http://localhost:8000/anime_list";

//   // const [animeData, setAnimeData] = React.useState(null);
//   // React.useEffect(() => {
//   //   if (data) {
//   //     setAnimeData(data);
//   //   }
//   // }, [data]);

const AnimeDetail = () => {
  const [animes, setAnimes] = useState([]);

  const fetchAnimes = async () => {
    const url = "http://localhost:8000/anime_list";
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    setAnimes(data.data);
  };

  if (animes)
    return (
      <Container sx={{ mt: 1 }}>
        <Box align="center">
          <Typography variant="h3" sx={{ py: 3 }}>
            {animes.name}
          </Typography>
          <Box
            component="img"
            sx={{ height: { xs: 240, md: 420, lg: 500 }, mx: "auto" }}
            src={animes.posterImage}
          />
          <Paper sx={{ m: 1, maxWidth: { xs: 490, md: 610, lg: 730 } }}>
            <Typography>{animes.synopsis}</Typography>
          </Paper>
        </Box>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={3} sm={3} md={3}>
            <List sx={{ maxWidth: 360, bgcolor: "background.paper" }}>
              <ListItem>
                <ListItemText primary="Title" secondary={animes.titles} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Picture"
                  secondary={animes.coverImageTopOffset}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Synopsis" secondary={animes.synopsis} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    );
};

export default AnimeDetail;

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
