import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"

import { Link } from "react-router-dom";
const apikey = "415a8fc6998df5a745fdffc5b08b99b9";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const nowPlaying="now_playing";
const popular="popular";
const topRated="top_rated";
const imgUrl = "https://image.tmdb.org/t/p/original";
const Card = ({ img }) => <img className="card" src={img} alt="conver"></img>;
const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
};
const Home = () => {
  const [upcomingMovies, setupcomingMovies] = useState([]);
  const[nowPlayingMovies,setnowPlaying]=useState([]);
  const[popularMovies,setPopular]=useState([]);
  const[topRatedMovies,settopRated]=useState([]);
  const[genre,setAllGenre]=useState([]);
  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
      setupcomingMovies(results);
    };
    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`);
      setnowPlaying(results);
    };
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apikey}`);
      setPopular(results);
    };
    const fetchToprated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`);
      settopRated(results);
    };
    const fetchsetAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apikey}`);
      setAllGenre(genres);
    };
    fetchsetAllGenre();
    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchToprated();
 

  }, []);
  return (
    <div className="home">
      <div className="banner" style={{
        backgroundImage:popularMovies[0]? `url(${`${imgUrl}/${popularMovies[1].poster_path}`})`:"rba(16,16,16)"
      }}>
      {
        popularMovies[0] && (
          <h1>{popularMovies[0].original_title}</h1>

        )
      }
      {
        popularMovies[0]&& (

      <p>{popularMovies[0].overview}</p>
        )
      }
      <div>
                    <button><BiPlay /> Play  </button>
                    <button>My List <AiOutlinePlus /> </button>
                </div>
      </div>

      <Row title={"Upcoming"} arr={upcomingMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} />
    

    <div className="genrebox">
      { 
        genre.map((item)=>(
          <Link key={item.id} to={'/genre/${item.id}'}>{item.name}</Link>
        ))
      }
    </div>
    </div>
  );
};

export default Home;
