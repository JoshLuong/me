import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../img/thumbnail_image.png'
import avatar1 from '../img/thumbnail_image1.png'
import avatar2 from '../img/thumbnail_image2.png'
import avatar3 from '../img/thumbnail_image3.png'
import avatar4 from '../img/thumbnail_image4.png'
import Jump from 'react-reveal/Jump'
import Bounce from 'react-reveal/Bounce'
import { Slide } from 'react-slideshow-image';


// using MDL similar to bootsrap
// inline style
//5ki

class Landing extends Component {
  Slideshow () {
    const properties = {
      duration: 3000,
      transitionDuration: 400,
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
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid id = "no-margin"className="mdl-grid--no-spacing landing-grid">
          <Cell className = "mdl-grid--no-spacing"id = "no-margin" col={12} style ={{margin: 'auto', position: 'absolute'}}>
            <div>
            {this.Slideshow()}
            </div>


            <div className="banner-text" >
              <Bounce left duration={1000}>
                <h1 id ="landing-title">Software Developer</h1>
                <h5 style= {{ fontFamily: 'Roboto Mono', color:'white', size:'2em', marginTop: '0'}}>Frontend | Backend</h5>
              </Bounce>


            <Bounce right duration={700} delay={300}>
              <p>HTML/ CSS | JavaScript | React | NodeJS | Express</p>
              <p id="bottom_p">Java | C++ | MySQL | PostgreSQL</p>
            </Bounce>


            </div>
            <div className="banner-text" >
            <Bounce right duration={700} delay={300}>
              <br/>
              <p style= {{fontSize:'1.5em', marginTop:'2em', marginBottom:'2em', padding:'10'}}>Currently Seeking <strong style={{color:'#968E50'}}>2021</strong> Internships !</p>
              <br/>
            </Bounce>
            </div>
              <br/>
          </Cell>
          <p></p>
        </Grid>
      </div>
    )
  }
}

export default Landing;
