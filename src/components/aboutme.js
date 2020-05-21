import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>

            <div className="banner-text" id="about-me-text">
              <h1>About Me</h1>
              <p>I have previously worked in agile development team settings, where I focused on feature development in both backend
              and front-end, developing high quality, scalable features from start to finish. Through my work terms, as well as programming projects,
              I have gained valuable experience on how to efficiently find solutions to tough problems, as well as rigorously test and debug them.
              Through my work, I have gained insights on how to thrive in team environments, what my learning styles are, and how to stay motivated in this line of work.</p>

              <p id="bottom_p">Working in team settings, many of which are oriented around customer care, I have fostered my ability to promote success through collaboration,
              while also producing creative solutions that commit to quality. This was especially evident during my time working at SAP,
              as I worked directly on time sensitive customer code defects, while communicating with both senior developers and customers,
              all while proudly producing quality code and customer satisfaction.</p>



        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>

            </div>

            <div className="banner-text">
              <h2>Ratings And Reviews</h2>
              <div class="stars">
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star half"></span>

              </div>
              <p>"Joshua works very hard.
              He works very well with other interns as well as senior team members.
              He is very punctual and always on time to every (daily, weekly) meetings. He has demonstrated in his last four months of work terms great team work by effectively
              listening, and sharing or conveying ideas.
              The volume of work produced, along with speed, accuracy has exceeded expectations."<p>  -  A Previous Employer</p></p>
              <br></br>


            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
