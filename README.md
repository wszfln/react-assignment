# Assignment 1 - ReactJS app.

Name: Yingying Lu

## Overview.

This movie application is based on labs and adds many new features and new endpoints in tmdb-api. New must-watch pages and actor pages have been added. In addition, some of the original functions of the program have been beautified and improved, and the movie details page has been optimized to make the web page better.

### Features.

+ Modified movie details page:
  + Added a movie poster at the top
  + modified the movie introduction information and keywords, and added new MUI components
  + added a cast section, and added a link button that can directly link to actor details on this section
  + added a list of similar movies
+ Added must-see pages:
  + People can add must-watch movies to this page from the Upcoming page, or delete them
  + Added search and filter functions to search for movie names and filter movies by genre
+ Added actor page:
  + Added sorting function, actors are displayed on this page in descending order of popularity
  + Added a search function to search based on actor names
+ Added actor details page:
  + This page lists the actor's biography, popularity and birthday age information, images and acted movies
  + Users can jump to the movie details page by clicking the more information button in the list of movies they have acted in
+ Pagination:
  + Paginate all pages to only show 10 movies or actors per page

## Setup requirements.

Installed React Paginate: npm install react-paginate
Added bootstrap styles in the public/index.js: <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

## API endpoints.

+ Actors who act in the movie - movie/:movie_id/credits
+ Similar movies - movie/:id/similar
+ Get movie keywords - movie/:movie_id/keywords
+ Actor details - person/:id
+ Show popular actors - person/popular
+ Actor images - person/:id/images
+ Movies that a actor acted - person/:id/movie_credits

## Routing.

+ /movies/mustWatch - displays all selected must-see movies.
+ /people - displays list of popular actors.
+ /people/:id - displays an actor's details.

## Independent learning
+ React paginate is used to implement pagination
  + Source code file name: 
    src/Components/movieList/index.js
    src/Components/peopleList/index.js
  + References:
    youtube tutorial: https://www.youtube.com/watch?v=kMuRr53RjcE&t=1177s

+ Bootstrap is used to add styles for pagination buttons
  + References:
    Doc: https://getbootstrap.com/docs/5.3/components/pagination/
    