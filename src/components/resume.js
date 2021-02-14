import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import avatar from '../img/thumbnail_image.png'
import Bounce from 'react-reveal/Bounce'


class Resume extends Component {
  render() {
    return (
      <div id='resume'>
        <div class="mdl-layout-spacer"></div>
        <Grid id="no-margin" style={{ background: '#444E74', paddingTop: '10em !important', margin: '0 !important', padding: '0 !important' }}>

          <Cell id="no-margin" col={4} tablet={12} phone={12} style={{ width: '100%' }}>
            <div className="resume-right-col">
              <h2 style={{ marginTop: '0', paddingTop: '1em', textAlign: 'center' }}><i className="fas fa-pencil-alt" aria-hidden="true" style={{ color: 'black' }} /> Education</h2>


              <Education
                startYear={2017}
                endYear={2022}
                schoolName="The University of British Columbia "
                schoolDescription="BSc. Combined Computer Science and Microbiology & Immunology"
              />
            </div>
          </Cell>
          <Cell id="no-margin" col={8} tablet={12} phone={12} style={{ width: '100%' }}>
            <div className="resume-right-col">
              <hr class="style13"></hr>
              <h2 style={{ textAlign: 'center' }}><i className="fas fa-briefcase" aria-hidden="true" style={{ color: 'black', marginTop: '0', paddingTop: '1em' }} /> Experience</h2>

              <Experience
                startYear={"Sept 2019"}
                endYear={"May 2020"}
                jobName="SAP: Software Developer"
                jobDescription={<ul>
                  <li><p>Developing analytics, reporting, business intelligence, and data visualization software in backend and front-end (with experience in UI/UX design and software security management) for 50,000+ users</p></li>
                  <li><p>Shared responsibility for the  <strong style={{ color: '#8CA2DD' }}>complete upgrade of the product </strong> by providing critical enhancements on E2E logic, data source connectivity, and UI solutions, given a sensitive timeline</p></li>
                  <li><p>Aided in development for <strong style={{ color: '#8CA2DD' }}>Excel XLSX</strong> report object (text, images, charts, etc.) data-XML conversion with precise formatting calculations- a highly requested exporting feature for the reporting product, and showcased in the beta release</p></li>
                  <li><p>With JavaScript/ JSP, worked on the on-going migration of front-end Flash to <strong style={{ color: '#8CA2DD' }}>SAP UI5 </strong>UI, resulting in a more seamless and modern UI</p></li>
                  <li><p>Provided efficient and robust solutions to code defects and feature enhancements, while professionally communicating with customers through <strong style={{ color: '#8CA2DD' }}>very high priority customer incidents</strong></p></li>
                  <li><p>Led in front-end and backend report <b style={{ color: '#8CA2DD' }}>delivery feature</b> with layers of server, user, and external destination (SMTP, FTP, etc.) logic through usage of various internal APIs and JNI calls</p></li> </ul>}
              />
            </div>
          </Cell>
          <Cell id="no-margin" col={12} style={{ width: '100%' }}>
            <div className="resume-right-col" style={{ marginBottom: '3em' }}>
              <hr class="style13"></hr>
              <h2 style={{ paddingTop: '1em', textAlign: 'center' }}><i className="fas fa-file-code" aria-hidden="true" style={{ color: 'black' }} /> Projects</h2>
              <Experience
                startEndYear={"June 2020"}
                jobName="Store-2-Door: Group Academic Programming Project"
                jobDescription={<ul>
                  <li><p>Developed a <strong style={{ color: '#8CA2DD' }}>full stack application</strong> aimed towards immunocompromised individuals during the <strong style={{ color: '#8CA2DD' }}>COVID-19</strong> pandemic by creating a non-profit essential items delivery service</p></li>
                  <li> <p>Contributed to seamless, modern UI using <strong style={{ color: '#8CA2DD' }}>React</strong> for both types of users: Transporters and Receivers, where back-end implementation in <strong style={{ color: '#8CA2DD' }}>Node.js</strong> matches two users together to fulfil the delivery service </p></li>
                  <li><p>Created efficient <strong style={{ color: '#8CA2DD' }}>SQL</strong>  queries to populate the front-end with vital information for users, such as pages for the Receivers (shopping lists, available stores, receipts), and Transporters (incoming orders, service ratings)</p></li>
                  <li><p>Achieved an <strong style={{ color: '#8CA2DD' }}>A+</strong> grade for this final project</p></li> </ul>}
              />
              <Experience
                startEndYear={"Feb 2020 | May 2019 "}
                jobName="Multilevel Snake Game: React Programming Project"
                jobDescription={<ul><li><p>Developed a single player snake game using vanilla <strong style={{ color: '#8CA2DD' }}>JavaScript, HTML, and CSS </strong>while learning the language</p></li>
                  <li><p>Incorporated a welcome page, allowing the user to select the level of difficulty: easy (no extra obstacle), or hard (“bad apple” with random movement- if eaten, the player loses)</p></li>
                  <li><p>Updated the high scores for both levels after every game using <strong style={{ color: '#8CA2DD' }}>localStorage</strong></p></li>
                  <li><p>Redesigned the game to use <strong style={{ color: '#8CA2DD' }}>React.js framework </strong>through functional components and hooks for the game logic, and state management on localStorage for updating the high score</p></li> </ul>}
              />
              <Experience
                startEndYear={"May 2019"}
                jobName="Clinic Bookings: Java Programming Project"
                jobDescription={<ul><li><p>Designed a <strong style={{ color: '#8CA2DD' }}>bookings application </strong>that uses a HashMap to organize a doctor’s patients and their respective appointments</p></li>
                  <li><p>Implemented a fixed scheduling rate that uses the <strong style={{ color: '#8CA2DD' }}>Gmail SMTP </strong>to email patients when their appointments are within a week of the current date- personalized emails with the patient’s name and doctor are sent out </p></li>
                  <li><p>Constructed a database in <strong style={{ color: '#8CA2DD' }}>MySQL using JDBC </strong>to store patients, along with their respective information and appointment dates</p></li>
                  <li><p>Implemented a GUI using JavaFX </p></li> </ul>}
              />

              <a href='https://www.dropbox.com/s/pc6et00l03jh7lt/Joshua_Luong_Resume.pdf?dl=0' target="_blank" style={{ color: 'white', marginBottom: '1.5em', size: '2em' }}>Click to view resume</a>
              <p style={{ padding: '1em' }}></p>
            </div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Resume;
/*          <Cell col={4} tablet={12} phone={12} >
            <Bounce left duration={700} delay={300}>
              <div className="resume-personal-info" style={{ color: '#323232', background: 'rgba(255,255,255,0.9)', height: '100%', overflow: 'auto' }} >
                <div style={{ textAlign: 'center' }}>
                  <img class="avatar-resume-img"
                    src={avatar}
                    alt="avatar"
                    style={{ height: '200px' }}
                  />
                </div>

                <div class="floating-div">
                  <h2 style={{paddingTop: '0.5em' }}>Joshua Luong</h2>
                  <h4 >Combined Major in Computer Science and
                  Microbiology & Immunology</h4>
                  <h5 >
                    Year 3
                  </h5>



                  <hr style={{ borderTop: '3px solid #323232', width: '75%', marginLeft: 'auto', marginRight: 'auto' }} />
                  <h2>Skills</h2>
                  <h5>Languages And Technologies</h5>
                  <p>Java, C++, JavaScript, React*, NodeJS*, HTML/ CSS</p>
                  <h5>Tools</h5>
                  <p>Git, Perforce, Jira</p>
                  <h5>Databases</h5>
                  <p>MySQL, PostgreSQL, JDBC, ODBC</p>
                  <p>*Currently learning</p>
                </div>
              </div></Bounce>
          </Cell>

*/