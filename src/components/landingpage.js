import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../img/thumbnail_image.png'
import avatar1 from '../img/thumbnail_image1.png'
import avatar2 from '../img/thumbnail_image2.png'
import avatar3 from '../img/thumbnail_image3.png'
import avatar4 from '../img/thumbnail_image4.png'
import { Slide } from 'react-slideshow-image';
import Contact from './contact';
import AboutMe from './aboutme';
import Resume from './resume';
import TextLoop from "react-text-loop";

// using MDL similar to bootsrap
// inline style
//5ki
// https://kaboompics.com/photo/8482/tropical-botanical-garden-in-belem-lisbon-portugal


class Landing extends Component {
  compo(){
    console.log("YES");
  }
  componentDidMount() {
    const section1 = document.querySelector('.mdl-layout__header')
    
    document.querySelector('.landing-grid').addEventListener('scroll', () => {
      section1.style.backgroundColor = document.querySelector('.welcome-page').getBoundingClientRect().top <= -15 ? `#ffffff` : 'transparent';
    })
  }
  avatar() {
    if (window.innerWidth < 750) {
      return (
        <div id='home' className="image-container avatar-img" style={{ height: '250px' }}>
          <img src={avatar4} height="250" width="250" />
        </div>
      )
    }
    return (
      <div id='home' className="slide-container">
        <div className="image-container avatar-img">
              <img src={avatar2} height="300" width="300"/>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }} className="landing-grid">
        <Grid id="no-margin" className="mdl-grid--no-spacing welcome-page">
          <Cell className="mdl-grid--no-spacing background-image" id="no-margin" col={12} style={{ margin: 'auto', position: 'relative' }}>
            <div>
              {this.avatar()}
            </div>


            <div className="banner-text">
              <h1>
                <TextLoop mask={true}adjustingSpeed={150} interval={1000}springConfig={{ stiffness: 140, damping: 12 }}>
                  <span className="animation-entry" aria-hidden="true" style={{color: '#ef476f', display: 'inline', opacity: 1 }}>Backend</span>
                  <span className="animation-entry" aria-hidden="true" style={{color: '#70c1b3', display: 'inline', opacity: 1 }}>Frontend</span>
                  <span className="animation-entry" aria-hidden="true" style={{color: '#f9c74f', display: 'inline', opacity: 1 }}>Software</span>

                </TextLoop>{" "}
                Developer.
              </h1>
              <h5 style={{ fontSize: '2em' }}></h5>
              <div className='landing-page-skills'>
              <p>
                    <i className="fab fa-js" aria-hidden="true" /> JavaScript
                </p>
                <p>
                    <i className="fab fa-html5" aria-hidden="true" /> HTML5
                </p>

                <p>
                    <i className="fab fa-css3" aria-hidden="true" /> CSS3
                </p>
                <p>
                    <i className="fab fa-react" aria-hidden="true" /> ReactJS
                </p>
                <p style={{ display: 'inline', whiteSpace: 'nowrap' }}>
                    <i className="fab fa-node-js" aria-hidden="true" /> NodeJS
                </p>
                <p>
                    <i className="fab fa-cuttlefish" aria-hidden="true" />++
                </p>
                  <p>
                    <i className="fab fa-java fa-5x" aria-hidden="true" /> Java
                </p>
                <p>
                    <i className="fas fa-database" aria-hidden="true" /> MySQL
                </p>
              </div>
            </div>
            <br />
          </Cell>
          <p></p>
        </Grid>
        <Resume />
        <AboutMe />
        <Contact />
      </div>
    )
  }
}

export default Landing;
