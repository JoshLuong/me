import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../img/thumbnail_image.png'
import avatar1 from '../img/thumbnail_image1.png'
import avatar2 from '../img/thumbnail_image2.png'
import avatar3 from '../img/thumbnail_image3.png'
import avatar4 from '../img/thumbnail_image4.png'
import Bounce from 'react-reveal/Bounce'
import { Slide } from 'react-slideshow-image';
import Typing from 'react-typing-animation';
import Contact from './contact';
import AboutMe from './aboutme';
import Resume from './resume';
// using MDL similar to bootsrap
// inline style
//5ki

class Landing extends Component {
  Slideshow() {
    const properties = {
      duration: 3000,
      transitionDuration: 1000,
      infinite: true,
      indicators: false,
      arrows: false,
      pauseOnHover: false,
      onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      }
    }
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div className="image-container avatar-img">
              <img src={avatar} />
            </div>
          </div>
          <div className="each-slide">
            <div className="image-container avatar-img">
              <img src={avatar1} />
            </div>
          </div>
          <div className="each-slide">
            <div className="image-container avatar-img">
              <img src={avatar2} />
            </div>
          </div>
          <div className="each-slide">
            <div className="image-container avatar-img">
              <img src={avatar3} />
            </div>
          </div>
          <div className="each-slide">
            <div className="image-container avatar-img">
              <img src={avatar4} />
            </div>
          </div>
        </Slide>
      </div>
    )
  }
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }} className = "landing-grid">
        <Grid id="no-margin" className="mdl-grid--no-spacing">
          <Cell className="mdl-grid--no-spacing" id="no-margin" col={12} style={{ margin: 'auto', position: 'relative' }}>
            <div>
              {this.Slideshow()}
            </div>


            <div className="banner-text" >
              <h1 id="landing-title"><Typing><span>Software Developer</span></Typing></h1>
              <h5>Front-end | Back-end</h5>



              <p>HTML5/ CSS3 | JavaScript (ES6) | ReactJS | NodeJS </p>
              <p id="bottom_p">Java | C++ | MySQL | PostgreSQL</p>
              <div style ={{borderTop: '3px solid', width: '90%', margin: 'auto'}}>
              <Bounce duration={window.innerWidth > 400 ? '700' : '0'} delay={window.innerWidth > 400 ? '1500' : '0'}>
                <br />
                <p style={{ fontSize: '1.5em', marginTop: '2em', marginBottom: '2em', padding: '10' }}>
                  Currently Seeking <strong style={{ color: '#8CA2DD' }}>2021</strong> Internships !</p>
                <br />
              </Bounce>
              </div>
            </div>
            <br />
          </Cell>
          <p></p>
        </Grid>
        <Resume/>
        <AboutMe/>
        <Contact/>
      </div>
    )
  }
}

export default Landing;
