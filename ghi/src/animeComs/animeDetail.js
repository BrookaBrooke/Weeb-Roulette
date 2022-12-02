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

import { useAnimeQueueQueries } from "./weeb_roulette/queries";

export default function AnimeDetail(props) {
  const { animeId } = props;
  const { data } = useAnimeQueueQueries(animeId);
  const [animeData, setAnimeData] = React.useState(null);
  React.useEffect(() => {
    if (data) {
      setAnimeData(data);
    }
  }, [data]);

  if (animeData)
    return (
      <Container sx={{ mt: 1 }}>
        <Box align="center">
          <Typography variant="h3" sx={{ py: 3 }}>
            {animeData.name}
          </Typography>
          <Box
            component="img"
            sx={{ height: { xs: 240, md: 420, lg: 500 }, mx: "auto" }}
            src={animeData.posterImage}
          />
          <Paper sx={{ m: 1, maxWidth: { xs: 490, md: 610, lg: 730 } }}>
            <Typography>{animeData.synopsis}</Typography>
          </Paper>
        </Box>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={3} sm={3} md={3}>
            <List sx={{ maxWidth: 360, bgcolor: "background.paper" }}>
              <ListItem>
                <ListItemText primary="Title" secondary={animeData.titles} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Synopsis"
                  secondary={animeData.synopsis}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    );
}
