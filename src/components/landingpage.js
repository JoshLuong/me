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
  componentDidMount() {
    this.Animation();
  }

  Animation() {
    const delay = (ms) => {
      const startPoint = new Date().getTime()
      while (new Date().getTime() - startPoint <= ms) {/* wait */ }
    }
    console.log("here")
    let entries = document.getElementsByClassName('animation-entry');
    console.log(entries)
    for (let i = 0; i < entries.length; i++) {
      setTimeout(function () {
        console.log(entries[i].style.opacity + "opac")
        if (i > 0) {
          entries[i - 1].style.transitionDuration = '0.8s'
          entries[i - 1].style.opacity = 0;
          entries[i - 1].style.display = 'none'
          delay(1000)
        }
        if (i < entries.length) {
          delay(1000)
          entries[i].style.transitionDuration = '0.8s'
          entries[i].style.opacity = 1;
          entries[i].style.display = 'inline';

        }

      }, (i + 1) * 2000);
    }
  }
  Slideshow() {
    if (window.innerWidth < 750) {
      return (
        <div id='home' className="image-container avatar-img" style={{height:'250px'}}>
          <img src={avatar4} height="300"width="300" />
        </div>
      )
    }
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
      <div id='home' className="slide-container">
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
      <div style={{ width: '100%', margin: 'auto' }} className="landing-grid">
        <Grid id="no-margin" className="mdl-grid--no-spacing">
          <Cell className="mdl-grid--no-spacing background-image" id="no-margin" col={12} style={{ margin: 'auto', position: 'relative' }}>
            <div>
              {this.Slideshow()}
            </div>


            <div className="banner-text" style={{marginTop:'0px !important'}}>
              <h1 id="landing-title">
                <Typing>
                <span className="animation-entry" aria-hidden="true" style={{ transition: 'opacity 10s ease-in-out', color: '#dfe8ec', display: 'inline', opacity: 1 }}>Backend </span>
                  <Typing.Backspace count={8} />
                  <span className="animation-entry" aria-hidden="true" style={{ transition: 'opacity 10s ease-in-out', color: '#bfd1d9', display: 'inline', opacity: 1 }}>Frontend </span>
                  <Typing.Backspace count={9} />
                  <span className="animation-entry" aria-hidden="true" style={{ transition: 'opacity 10s ease-in-out', color: '#dfe8ec', display: 'inline', opacity: 1 }}>Full Stack </span>
                
                </Typing>
                Developer.
              </h1>
              <h5 style={{ fontSize: '2em' }}></h5>
              <div style={{ paddingTop: '1.5em', paddingBottom: '1.5em' }}>
                  <p style={{ display: 'inline', whiteSpace: 'nowrap' }}>
                    <i className="fab fa-js" aria-hidden="true" /> JavaScript
                </p>
                </div>
              <div style={{ paddingTop: '1.5em', display: 'inline' }}>
                <p style={{  paddingTop: '1.5em',display: 'inline', whiteSpace: 'nowrap' }}>
                  <i className="fab fa-html5" aria-hidden="true" /> HTML5
                </p>
                <p style={{  paddingTop: '1.5em',display: 'inline', whiteSpace: 'nowrap' }}>
                  <i className="fab fa-css3" aria-hidden="true" /> CSS3
                </p>
              </div>
              <div style={{ marginTop: '1.5em' }}>
                <p style={{ display: 'inline', whiteSpace: 'nowrap' }}>
                  <i className="fab fa-react" aria-hidden="true" /> ReactJS
                </p>
                <p style={{ display: 'inline', whiteSpace: 'nowrap' }}>
                  <i className="fab fa-node-js" aria-hidden="true" /> NodeJS
                </p>
              </div>
              <div style={{ paddingTop: '1em', paddingBottom: '2em' }}>
                <p style={{ display: 'inline', whiteSpace: 'nowrap' }}>
                  <i className="fab fa-java fa-5x" aria-hidden="true" /> Java
                </p>
                <p style={{ display: 'inline', whiteSpace: 'nowrap' }}>
                  <i className="fab fa-cuttlefish" aria-hidden="true" />++
                </p>
                <p style={{ display: 'inline', whiteSpace: 'nowrap' }}>
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
