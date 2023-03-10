import React from 'react'
import './mainContent.css'
import { Data } from '../../fakeData/FakeInfoDest'
import {Room, ContentPaste} from '@mui/icons-material';


const MainContent = () => {
  return (
    <section className='main container section'>
        <div className="secTitle">
          <h3 className="title">
            Most visited destinations
          </h3>
        </div>

        <div className="secContent grid">
            {Data.map((item, idx) => (
              <div key={idx} className='singleDestination'>
                <div className="imageDiv">
                  <img src={item.imageSrc} alt={item.destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">
                    {item.destTitle}
                  </h4>
                  <span className="continent flex">
                      <Room className="icon"/>
                      <span className="name">
                        {item.location}
                      </span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {item.grade}
                        <small> +1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{item.fees}</h5>
                    </div>
                  </div>

                  <div className="description">
                      <p>{item.description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <ContentPaste className='icon'/>
                  </button>
                </div>
              </div>
            ))}
        </div>
    </section>
  )
}

export default MainContent
