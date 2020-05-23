import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Fade from 'react-reveal/Fade';

class About extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid mdl-grid--no-spacing">
          <Cell col={12}>

            <div className="banner-text" id="about-me-text">
              <h1>About Me</h1>
              <p>Hi! I'm a third year student studying at The University of British Columbia based in Vancouver, BC. I love the outdoors-
              I am always looking for excuses to go on hikes, go camping, or to just bathe in the sun. My new found hobby (thanks to COVID-19)
              is baking/ cooking. I love exloring new recipies and cuisines. Talk to me about the great outdoors!</p>
              <p>I have previously worked in agile development team settings, where I focused on feature development in both backend
              and front-end, developing high quality, scalable features from start to finish. Through my work terms,
              I have gained valuable experience on how to efficiently find solutions to tough problems.
              Through my work, I have gained insights on how to thrive in team environments, what my learning styles are, and how to stay motivated in this line of work.</p>

              <p id="bottom_p">Working in team settings, I have fostered my ability to promote success through collaboration,
              while also producing creative solutions that commit to quality. This was especially evident while communicating with both senior developers and customers,
              all while proudly producing quality code and customer satisfaction.</p>


            </div>

            <div className="banner-text">
              <h2>Critic Reviews</h2>
                <Fade left cascade duration={1000} delay={500}>
                  <div class="stars">
                    <span class="star on"></span>
                    <span class="star on"></span>
                    <span class="star on"></span>
                    <span class="star on"></span>
                    <span class="star half"></span>

                  </div>
              </Fade>
              <p>"Joshua works very hard.
              He works very well with other interns, as well as senior team members.
              He has demonstrated in his last four months of work terms great team work by effectively
              listening, and sharing or conveying ideas.
              The volume of work produced along with speed, accuracy has exceeded expectations."<p>  -  A Previous Employer</p></p>
              <br></br>
              <Fade left cascade duration={1000} delay={500}>
                <div class="stars">
                  <span class="star on"></span>
                  <span class="star on"></span>
                  <span class="star on"></span>
                  <span class="star on"></span>
                  <span class="star before"></span>


                </div>
              </Fade>
              <p>"A heart felt protagonist. Must see."<p>  -  The Times</p></p>
              <br></br>
              <Fade left cascade duration={1000} delay={500}>
                <div class="stars">
                  <span class="star on"></span>
                  <span class="star on"></span>
                  <span class="star on"></span>
                  <span class="star on"></span>
                  <span class="star on"></span>

                </div>
              </Fade>
              <p>"Shockingly hard working."<p>  -  The Guardian</p></p>
              <br></br>


            </div>
            <br></br>


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
