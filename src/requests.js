const API_KEY = "935a662370ad0e546a4e39a5c067d8a5";
// const express = require("express");
// const app = express();
// app.use("/", express.static("static"));
// app.use(express.json());
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// const router = express.Router();
// router.use(express.json());
// const port = (process.env.port || 3000);

//   //Middleware for logging all Requests made to the Server
//   app.use((req, res, next) => {
//     console.log(`${req.method} request for ${req.url}`);
//     next();
//       });
    
//  app.use("/api", router);

//  app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
//     });
        

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrignals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;