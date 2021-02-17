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
  avatar() {
    if (window.innerWidth < 750) {
      return (
        <div id='home' className="image-container avatar-img" style={{ height: '250px' }}>
          <img src={avatar4} height="300" width="300" />
        </div>
      )
    }
    return (
      <div id='home' className="slide-container">
        <div className="image-container avatar-img">
              <img src={avatar2} />
        </div>
      </div>
    )
  }
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }} className="landing-grid">
        <Grid id="no-margin" className="mdl-grid--no-spacing">
          <Cell className="mdl-grid--no-spacing background-image" id="no-margin" col={12} style={{ margin: 'auto', position: 'relative' }}>
            <div>
              {this.avatar()}
            </div>


            <div className="banner-text">
              <h1>
                <TextLoop mask={true}adjustingSpeed={150} interval={1000}springConfig={{ stiffness: 140, damping: 12 }}>
                  <span className="animation-entry" aria-hidden="true" style={{color: '#cfeefc', display: 'inline', opacity: 1 }}>Backend</span>
                  <span className="animation-entry" aria-hidden="true" style={{color: '#a5dad7', display: 'inline', opacity: 1 }}>Frontend</span>
                  <span className="animation-entry" aria-hidden="true" style={{color: '#e6d8ad', display: 'inline', opacity: 1 }}>Software</span>

                </TextLoop>{" "}
                Developer.
              </h1>
              <h5 style={{ fontSize: '2em' }}></h5>
              <div className='landing-page-skills'>
                <div style={{ paddingTop: '1.5em', paddingBottom: '1.5em' }}>
                  <p style={{ display: 'inline', whiteSpace: 'nowrap' }}>
                    <i className="fab fa-js" aria-hidden="true" /> JavaScript
                </p>
                </div>
                <div style={{ paddingTop: '1.5em', display: 'inline' }}>
                  <p>
                    <i className="fab fa-html5" aria-hidden="true" /> HTML5
                </p>
                  <p>
                    <i className="fab fa-css3" aria-hidden="true" /> CSS3
                </p>
                </div>
                <div style={{ marginTop: '1.5em' }}>
                  <p>
                    <i className="fab fa-react" aria-hidden="true" /> ReactJS
                </p>
                  <p style={{ display: 'inline', whiteSpace: 'nowrap' }}>
                    <i className="fab fa-node-js" aria-hidden="true" /> NodeJS
                </p>
                </div>
                <div style={{ paddingTop: '1em', paddingBottom: '2em' }}>
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
