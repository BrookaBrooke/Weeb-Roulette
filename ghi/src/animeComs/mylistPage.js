// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { Container } from "@mui/material";
// import Grid from "@mui/system/Unstable_Grid/Grid";
// import { makeStyles } from "@mui/material";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function ListPage() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div>
//       <Grid container spacing={5}>
//         <Grid item xs={2}>
//           <CardHeader
//             avatar={
//               <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                 R
//               </Avatar>
//             }
//             title="Pikachu has had enough of Ash's shit"
//             subheader="September 14, 2016"
//           />
//           <CardMedia
//             component="img"
//             height="194"
//             image="https://archives.bulbagarden.net/media/upload/thumb/4/49/Ash_Pikachu.png/1200px-Ash_Pikachu.png"
//             alt="Pokemon"
//           />
//           <CardContent>
//             <Typography variant="body2" color="text.secondary">
//               Pikachu can generate powerful electricity have cheek sacs that are
//               extra soft and super stretchy.
//             </Typography>
//           </CardContent>
//           <CardActions disableSpacing>
//             <IconButton aria-label="add to favorites">
//               <FavoriteIcon />
//             </IconButton>
//             <ExpandMore
//               expand={expanded}
//               onClick={handleExpandClick}
//               aria-expanded={expanded}
//               aria-label="show more"
//             >
//               <ExpandMoreIcon />
//             </ExpandMore>
//           </CardActions>
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent>
//               <Typography paragraph>Show info:</Typography>

//               <Typography paragraph>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
//                 ea perferendis atque repudiandae quisquam sed, officia sint
//                 magnam ipsam. Quis ab tempore ipsam temporibus excepturi nam
//                 voluptatibus quo facilis dolore.
//               </Typography>
//             </CardContent>
//           </Collapse>
//         </Grid>
//       </Grid>

//       <Grid container spacing={5}>
//         <Grid item xs={2}>
//           <Card sx={{ maxWidth: 345 }}>
//             <CardHeader
//               avatar={
//                 <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                   R
//                 </Avatar>
//               }
//               title="Pikachu has had enough of Ash's shit"
//               subheader="September 14, 2016"
//             />
//             <CardMedia
//               component="img"
//               height="194"
//               image="https://archives.bulbagarden.net/media/upload/thumb/4/49/Ash_Pikachu.png/1200px-Ash_Pikachu.png"
//               alt="Pokemon"
//             />
//             <CardContent>
//               <Typography variant="body2" color="text.secondary">
//                 Pikachu can generate powerful electricity have cheek sacs that
//                 are extra soft and super stretchy.
//               </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//               <IconButton aria-label="add to favorites">
//                 <FavoriteIcon />
//               </IconButton>
//               <ExpandMore
//                 expand={expanded}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//               >
//                 <ExpandMoreIcon />
//               </ExpandMore>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//               <CardContent>
//                 <Typography paragraph>Show info:</Typography>

//                 <Typography paragraph>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Aliquam ea perferendis atque repudiandae quisquam sed, officia
//                   sint magnam ipsam. Quis ab tempore ipsam temporibus excepturi
//                   nam voluptatibus quo facilis dolore.
//                 </Typography>
//               </CardContent>
//             </Collapse>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function ListPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative"></AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Anime List Page
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate numquam magnam autem recusandae id, enim iusto qui
              repudiandae assumenda, quidem minima quis adipisci dolorem ut
              praesentium maxime tempore explicabo ad?
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Anime
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
