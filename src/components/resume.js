import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import avatar from '../img/thumbnail_image.png'
import Fade from 'react-reveal/Fade';


class Resume extends Component {
  render() {
    return (
      <div id='resume'>
        <div class="mdl-layout-spacer"></div>
        <Grid id="no-margin" className='dark-background' style={{ paddingTop: '10em !important', margin: '0 !important', padding: '0 !important' }}>

          <Cell id="no-margin" col={4} tablet={12} phone={12} style={{ width: '100%' }}>
            <div className="resume-right-col dark-background">
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
            <div className="resume-right-col dark-background">
              <hr class="style13"></hr>
              <h2 style={{ textAlign: 'center' }}><i className="fas fa-briefcase" aria-hidden="true" style={{ color: 'black', marginTop: '0', paddingTop: '1em' }} /> Experience</h2>

              <Experience
                startYear={"Sept 2019"}
                endYear={"May 2020"}
                jobName="SAP: Software Developer"
                jobDescription={<ul>
                  <li>
                    <p>Maintained analytics, reporting, business intelligence, and data visualization software in <strong>backend</strong> and <strong>frontend</strong> (with
                    experience in UI/UX and security management) for 50,000+ users
                    </p>
                  </li>
                  <li>
                    <p> Surpassed <strong>25+ critical enhancements</strong> in a sensitive timeline for the product’s major version upgrade regarding
                        <strong> asynchronous E2E logic</strong>, <strong>data source connectivity</strong>, and <strong>UI solutions</strong>
                    </p>
                  </li>
                  <li>
                    <p>Reduced high priority <strong>customer</strong> incidents and <strong>50+ code defects/ feature enhancements</strong> by providing efficient and robust
                    Java and JavaScript solutions
                    </p>
                  </li>
                  <li>
                    <p>Contributed to the on-going migration of frontend Flash prompting to <strong>SAP UI5</strong>, resulting in a more seamless and modern
                    interface via <strong>JavaScript/ JSP</strong>
                    </p>
                  </li>
                  <li>
                    <p>Expedited development for report - XML conversion with precise formatting calculations – a highly requested <strong>Excel XLSX </strong>
                    exporting feature – by completing <strong>20+ critical enhancements</strong>; displayed in the BETA release
                    </p>
                  </li>
                  <li>
                    <p>Overhauled <strong>frontend and backend</strong> feature development for scheduling behaviour using layers of server and user tokens
                    through internal <strong>APIs</strong> and <strong>JNI</strong> calls; created an efficient and secure way to schedule up to 5 destinations per report
                    </p>
                  </li>
                </ul>}
              />
            </div>
          </Cell>
          <Cell id="no-margin" col={12} style={{ width: '100%' }}>
            <div className="resume-right-col" style={{ marginBottom: '3em' }}>
              <hr class="style13"></hr>
              <h2 style={{ paddingTop: '1em', textAlign: 'center' }}><i className="fas fa-file-code" aria-hidden="true" style={{ color: 'black' }} /> Projects</h2>

              <div>
                <Fade big>
                  <Experience
                    startYear={"Jan 2021"}
                    endYear={"Present"}
                    jobName="UBC Courses Data Visualization: Group Programming Project"
                    jobDescription={
                      <ul>
                        <li>
                          <p>Streamlining UBC course data visualization for <strong>10,000+ </strong>data entries by developing a full stack application using JSON
                    parsing, <strong>TypeScript</strong>, and <strong>NodeJS</strong>
                          </p>
                        </li>
                        <li>
                          <p>Deploying a <strong>scalable</strong>, <strong>asynchronous</strong> query engine using Promises to customize searches to achieve efficient user
                    customizable functionality
                    </p>
                        </li>
                        <li>
                          <p>Prioritizing the best coding practices via <strong>test-driven development</strong> (100+ black-box/ white-box tests) and continuous
                    integration/ agile methodology via the <strong>Mocha.js</strong> testing framework and <strong>Git</strong> version control, as well as regular regression testing
                    </p>
                        </li>
                      </ul>}
                  />
                </Fade>
                <div style={{ textAlign: 'center' }}>
                  <p>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                  </p>

                </div>

                <Fade>
                  <Experience
                    startEndYear={"June 2020"}
                    jobName="Store-2-Door: Group Programming Project"
                    jobDescription={
                      <ul>
                        <li><p>Developed a <strong>full stack application</strong> aimed towards immunocompromised individuals during the <strong>COVID-19</strong> pandemic by creating a non-profit essential items delivery service</p></li>
                        <li> <p>Contributed to seamless, modern UI using <strong>React</strong> for both types of users: Transporters and Receivers, where back-end implementation in <strong>Node.js</strong> matches two users together to fulfil the delivery service </p></li>
                        <li><p>Created efficient <strong>SQL</strong>  queries to populate the front-end with vital information for users, such as pages for the Receivers (shopping lists, available stores, receipts), and Transporters (incoming orders, service ratings)</p></li>
                      </ul>}
                  />
                </Fade>
              </div>


              <div style={{ textAlign: 'center' }}>
                <p>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </p>

              </div>
              <Fade>
                <Experience
                  startEndYear={"Feb 2020"}
                  jobName="Meal-Print, a carbon footprint calculator for food: SAP Hackathon"
                  jobDescription={
                    <ul>
                      <li>
                        <p>Designed an Android application to integrate <strong>Firebase Machine Learning</strong> cloud-based APIs to recognize text from menus or
                      food receipt images, which are then ranked on the carbon footprint impacts
                      </p>
                      </li>
                      <li>
                        <p>Calculations allow users to avoid food items with a large carbon impact and gamification points
                      </p>
                      </li>
                    </ul>}
                />
              </Fade>
              <div>
                <div style={{ textAlign: 'center' }}>
                  <p>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                  </p>

                </div>
                <Fade>
                  <Experience
                    startEndYear={"Feb 2020 | May 2019 "}
                    jobName="Multilevel Snake Game: React Programming Project"
                    jobDescription={<ul><li><p>Developed a single player snake game using vanilla <strong>JavaScript, HTML, and CSS </strong>while learning the language</p></li>
                      <li><p>Incorporated a welcome page, allowing the user to select the level of difficulty: easy (no extra obstacle), or hard (“bad apple” with random movement- if eaten, the player loses)</p></li>
                      <li><p>Updated the high scores for both levels after every game using <strong>localStorage</strong></p></li>
                      <li><p>Redesigned the game to use <strong>React.js framework </strong>through functional components and hooks for the game logic, and state management on localStorage for updating the high score</p></li> </ul>}
                  />
                </Fade>
                <div style={{ textAlign: 'center' }}>
                  <p>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                  </p>

                </div>

                <Fade>
                  <Experience
                    startEndYear={"May 2019"}
                    jobName="Clinic Bookings: Java Programming Project"
                    jobDescription={<ul><li><p>Designed a <strong>bookings application </strong>that uses a HashMap to organize a doctor’s patients and their respective appointments</p></li>
                      <li><p>Implemented a fixed scheduling rate that uses the <strong>Gmail SMTP </strong>to email patients when their appointments are within a week of the current date- personalized emails with the patient’s name and doctor are sent out </p></li>
                      <li><p>Constructed a database in <strong>MySQL using JDBC </strong>to store patients, along with their respective information and appointment dates</p></li>
                      <li><p>Implemented a GUI using JavaFX </p></li> </ul>}
                  />

                </Fade>
              </div>
              <Cell col={12} style={{ textAlign: 'center' }}>
                <a href='https://www.dropbox.com/s/pc6et00l03jh7lt/Joshua_Luong_Resume.pdf?dl=0' target="_blank" style={{ color: 'white', marginBottom: '1.5em', size: '2em' }}>View Resume</a>
              </Cell>
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