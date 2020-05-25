import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import avatar from '../img/thumbnail_image.png'
import HeadShake from 'react-reveal/HeadShake'
import Swing from 'react-reveal/Swing'
import Jump from 'react-reveal/Jump'


class Resume extends Component {
  render() {
    return(
      <div className= 'landing-grid'style={{  fontFamily: 'Roboto Mono'}}>
        <Grid style ={{paddingTop: '10em'}}>
          <div class="mdl-layout-spacer"></div>
          <Cell col={4} style= {{ background:'rgba(47,43,14,0.65)'}}>
          <div className="resume-personal-info" style= {{color:'#E3DFBF'}} >
              <div style={{textAlign: 'center'}}>
                <img class="avatar-resume-img"
                  src={avatar}
                  alt="avatar"
                  style={{height: '200px'}}
                   />
              </div>

              <div style={{fontFamily: 'Roboto Mono'}}class="floating-div">
              <HeadShake>
              <h2 style={{fontFamily: 'Roboto Mono',paddingTop: '0.5em'}}>Joshua Luong</h2>
              </HeadShake>
              <h4 style={{fontFamily: 'Roboto Mono'}}>Combined Major in Computer Science and
              Microbiology & Immunology</h4>
              <h5 style={{fontFamily: 'Roboto Mono'}}>
              Year 3
              </h5>
              <hr style={{borderTop: '3px solid #CCC8AB', width: '75%',  marginLeft: 'auto', marginRight: 'auto'}}/>
              <h5>Phone</h5>
              <Swing>
                <p><a href="tel:7782883221" style={{textDecoration: 'none', color: '#E3DFBF'}}>(778) 288- 3221</a></p>
              </Swing>
              <h5>Email</h5>
              <Jump>
                <p><a href="mailto:joshualuong@hotmail.com" style={{ textDecoration: 'none', color: '#E3DFBF'}}>joshualuong@hotmail.com</a></p>
              </Jump>
              <h5>LinkedIn</h5>
              <Jump>
                <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joshua-luong/" style={{ textDecoration: 'none', color: '#E3DFBF'}}>linkedin.com/in/joshua-luong</a></p>
              </Jump>
              <hr style={{borderTop: '3px solid #CCC8AB', width: '75%',  marginLeft: 'auto', marginRight: 'auto'}}/>
            <h2>Skills</h2>
            <h5>Languages And Technologies</h5>
            <p>Java, C++, JavaScript, React, Python, NodeJS*, Express*, HTML/ CSS</p>
            <h5>Tools</h5>
            <p>Git, Perforce, Jira</p>
            <h5>Databases</h5>
            <p>MySQL, PostgreSQL, JDBC, ODBC</p>
            <p>*Currently learning</p>
              </div>
          </div>
          </Cell>
            <div class="mdl-layout-spacer"></div>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2017}
              endYear={2023}
              schoolName="The University of British Columbia "
              schoolDescription="BSc. Combined Computer Science and Microbiology & Immunology"
              />
                <hr style={{borderTop: '3px solid #2F2B0E'}} />

              <h2>Experience</h2>

              <Experience
                startYear={"Sept 2019"}
                endYear={"May 2020"}
                jobName="SAP: Software Developer"
                jobDescription={ <div><p>Developing analytics, reporting, business intelligence, and data visualization software in backend and front-end (with experience in UI/UX design and software security management) for 50,000+ users</p>
                                  <p>Shared responsibility for the  <strong style={{color:'#968E50'}}>complete upgrade of the product </strong> by providing critical enhancements on E2E logic, data source connectivity, and UI solutions, given a sensitive timeline</p>
                                  <p>Aided in development for <strong style={{color:'#968E50'}}>Excel XLSX</strong> report object (text, images, charts, etc.) data-XML conversion with precise formatting calculations- a highly requested exporting feature for the reporting product, and showcased in the beta release</p>
                                  <p>With JavaScript/ JSP, worked on the on-going migration of front-end Flash to <strong style={{color:'#968E50'}}>SAP UI5 </strong>UI, resulting in a more seamless and modern UI</p>
                                  <p>Provided efficient and robust solutions to code defects and feature enhancements, while professionally communicating with customers through <strong style={{color:'#968E50'}}>very high priority customer incidents</strong></p>
                                  <p>Led in front-end and backend report <b style={{color:'#968E50'}}>delivery feature</b> with layers of server, user, and external destination (SMTP, FTP, etc.) logic through usage of various internal APIs and JNI calls</p> </div>}
                />
              <hr style={{borderTop: '3px solid #2F2B0E'}} />
              <h2>Projects</h2>
              <Experience
                startEndYear={"May 2019 | Feb 2020"}
                jobName="Multilevel Snake Game: React Programming Project"
                jobDescription={ <div><p>Developed a single player snake game using vanilla <strong style={{color:'#968E50'}}>JavaScript, HTML, and CSS </strong>while learning the language</p>
                  <p>Incorporated a welcome page, allowing the user to select the level of difficulty: easy (no extra obstacle), or hard (“bad apple” with random movement- if eaten, the player loses)</p>
                  <p>Updated the high scores for both levels after every game using <strong style={{color:'#968E50'}}>localStorage</strong></p>
                  <p>Redesigned the game to use <strong style={{color:'#968E50'}}>React.js framework </strong>through functional components and hooks for the game logic, and state management on localStorage for updating the high score</p> </div>}
                />
                <Experience
                  startEndYear={"May 2019"}
                  jobName="Clinic Bookings: Java Programming Project"
                  jobDescription={ <div><p>Designed a <strong style={{color:'#968E50'}}>bookings application </strong>that uses a HashMap to organize a doctor’s patients and their respective appointments</p>
                    <p>Implemented a fixed scheduling rate that uses the <strong style={{color:'#968E50'}}>Gmail SMTP </strong>to email patients when their appointments are within a week of the current date- personalized emails with the patient’s name and doctor are sent out </p>
                    <p>Constructed a database in <strong style={{color:'#968E50'}}>MySQL using JDBC </strong>to store patients, along with their respective information and appointment dates</p>
                    <p>Implemented a GUI using JavaFX </p> </div>}
                  />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
