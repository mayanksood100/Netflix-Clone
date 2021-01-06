import React from 'react';
import Row from './Row.js';
import requests from './requests';
import Banner from './Banner.js';
import Navbar from './Navbar.js';
import './App.css';
function App() {
  return (
    <div className="App">
    <Navbar />  
    <Banner />
    <Row title="Netflix Orginals" fetchUrl={requests.fetchNetflixOrignals} isLargeRow/>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
