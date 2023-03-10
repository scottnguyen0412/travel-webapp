import React from 'react'
import './home.css'
import Video from '../../assets/flycam-danang.mp4'
import {LocationOnOutlined, FilterListOutlined, FacebookOutlined,
      Instagram, CardTravel, FormatListBulleted, AppRegistrationOutlined
} from '@mui/icons-material';

const Home = () => {
  return (
    <section className='home'>
      <div className="overlay">
      </div>
        <video src={Video} autoPlay muted loop type="video/mp4">
        </video>
        <div className="homeContent container">
          <div className="textDiv">
            <span className="smallText">
              Our Services
            </span>
            <h1 className="homeTitle">
              Search your Holidays
            </h1>
          </div>
          

          <div className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city" >Search your destination:</label>
              <div className="input flex">
                <input type="text" placeholder='Input your destination'/>
                <LocationOnOutlined className="icon"/>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date" >Select your date:</label>
              <div className="input flex">
                <input type="date" placeholder='Input your destination'/>
              </div>
            </div>

            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max Price:</label>
                <h3 className="total">$50000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="50000" min="1000"/>
              </div>
            </div>

            <div className="searchOptions flex">
                <FilterListOutlined className='icon'/>
                <span>Filters</span>
            </div>
          </div>

          <div className="homeFooterIcons flex">
            <div className="rightIcons">
                  <FacebookOutlined className='icon'/>
                  <Instagram className='icon'/>
                  <CardTravel className='icon'/>
            </div>

            <div className="leftIcons">
                <FormatListBulleted className='icon'/>
                <AppRegistrationOutlined className='icon'/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home
