import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import Grid from "@mui/material/Grid";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div style={{ 
        background: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`, 
        backgroundSize: 'cover',
        width: '100%',
        height: '600px',
      }}>
      </div>

      <Container style={{marginTop: '2rem'}}>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}> 
          <p style={{fontSize: "3rem", margin: '0', fontWeight: 'bold'}}>{movie.title}</p>
          <p style={{marginLeft: '5%', fontSize: '1.5rem'}}>{movie.tagline?'-':''} {movie.tagline}</p>
        <Stack>
        <Stack style={{marginTop: '2rem'}} direction="row" spacing={1}>
          <MovieFilterIcon />
          <p>{movie.release_date}</p>
          <p style={{textTransform:'uppercase'}}>({movie.original_language})</p>
          <p>·</p>
          <p>{movie.production_countries[0].iso_3166_1}</p>
          <p>·</p>
          <p>{movie.runtime} minutes</p>
        </Stack>
        <Stack style={{listStyle: 'none', marginTop: '1rem'}} direction="row" >
          {movie.genres.map((g) => (
            <li key={g.name}>
              <Chip label={g.name} sx={{...chip}} />
            </li>
          ))}
        </Stack>
        </Stack>

        <Stack style={{marginTop: '1rem'}} spacing={1}>
          <Rating name="half-rating-read" defaultValue={(movie.vote_average)/2} precision={0.5} readOnly />
        </Stack>  
        <Stack>
          <p style={{fontSize: '2rem', marginBottom: '0'}}>Overview</p>
          <p style={{fontSize: '1.2rem'}}>{movie.overview}</p>
        </Stack>

        </Grid>
      </Grid>
    </Box>
    </Container>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>
  );
};
export default MovieDetails ;