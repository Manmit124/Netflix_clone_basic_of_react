import React from 'react'
import img from "../logo.png"
import { Link } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
const Header = () => {
  return (
    <div className='header'>
        <img src={img} alt="" />

        <div>
          <Link to="/tvshow">Tv shows 
          </Link>
          <Link to="/tvshow">Movies
          </Link>
          <Link to="/tvshow">Recenty Added 
          </Link>
          <Link to="/tvshow">My List
          </Link>
        </div>
        <ImSearch></ImSearch>
    </div>
  )
}

export default Header
