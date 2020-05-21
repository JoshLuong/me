import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import avatar from '../img/thumbnail_image.png'



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <div class="mdl-layout-spacer"></div>
          <Cell col={4}>
          <div className="resume-personal-info">
            <div style={{textAlign: 'center'}}>
              <img class="avatar-resume-img"
                src={avatar}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <div class="floating-div">

            <h2 style={{paddingTop: '0.5em'}}>Joshua Luong</h2>
            <h4 style={{color: 'grey'}}>Combined Major in Computer Science and
            Microbiology & Immunology, Year 3</h4>
            <hr style={{borderTop: '3px solid #2F2B0E', width: '75%',  marginLeft: 'auto', marginRight: 'auto'}}/>
            <h5>Phone</h5>
            <p>(778) 288- 3221</p>
            <h5>Email</h5>
            <p>joshualuong@hotmail.com</p>
            <h5>LinkedIn</h5>
            <p>www.linkedin.com/in/joshua-luong</p>
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
                                  <p>Shared responsibility for the complete upgrade of the product by providing critical enhancements on E2E logic, data source connectivity, and UI solutions, given a sensitive timeline</p>
                                  <p>Aided in development for report object data-XML conversion with precise formatting calculations- a highly requested exporting feature for the reporting product, and showcased in the beta release</p>
                                  <p>With JavaScript/ JSP, worked on the on-going migration of front-end Flash to SAP UI5 UI, resulting in a more seamless and modern UI</p>
                                  <p>Provided efficient and robust solutions to code defects and feature enhancements, while professionally communicating with customers through very high priority customer incidents</p>
                                  <p>Led in front-end and backend feature with layers of server, user, and external destination logic through usage of various internal APIs and JNI calls</p> </div>}
                />
              <hr style={{borderTop: '3px solid #2F2B0E'}} />
              <h2>Projects</h2>
              <Experience
                startEndYear={"Feb 2020"}
                jobName="Multilevel Snake Game: React Programming Project"
                jobDescription={ <div><p>Developed a single player snake game using vanilla JavaScript, HTML, and CSS while learning the language</p>
                  <p>Incorporated a welcome page, allowing the user to select the level of difficulty: easy (no extra obstacle), or hard (“bad apple” with random movement- if eaten, the player loses)</p>
                  <p>Updated the high scores for both levels after every game using localStorage</p>
                  <p>Redesigned the game to use React.js framework through functional components and hooks for the game logic, and state management on localStorage for updating the high score</p> </div>}
                />
                <Experience
                  startEndYear={"May 2019"}
                  jobName="Clinic Bookings: Java Programming Project"
                  jobDescription={ <div><p>Designed a bookings application that uses a HashMap to organize a doctor’s patients and their respective appointments</p>
                    <p>Implemented a fixed scheduling rate that uses the Gmail SMTP to email patients when their appointments are within a week of the current date- personalized emails with the patient’s name and doctor are sent out </p>
                    <p>Constructed a database in MySQL using JDBC to store patients, along with their respective information and appointment dates</p>
                    <p>Implemented a GUI using JavaFX </p> </div>}
                  />
                <hr style={{borderTop: '3px solid #2F2B0E'}} />
              <h2>Skills</h2>
              <Skills
                skill="Languages/ Technologies: Java, C++, JavaScript, React.js*, Python*, Express*, HTML/ CSS"
                progress={100}
                />
                <Skills
                  skill="Tools: 			 Git, Perforce, Jira"
                  progress={80}
                  />
                  <Skills
                    skill="Databases: 		 MySQL, PostgreSQL*, JDBC, ODBC"
                    progress={50}
                    />
                    <Skills
                      skill="* currently Learning"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
