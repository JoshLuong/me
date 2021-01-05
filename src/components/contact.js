import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import avatar from '../img/thumbnail_image.png'
import Swing from 'react-reveal/Swing'
import Jump from 'react-reveal/Jump'


class Contact extends Component {
  render() {
    return(
      <div className=" landing-grid">
        <Grid style={{paddingTop:'10em',   justifyContent: 'center'}}>
          <div class="mdl-layout-spacer"></div>
          <Cell col={6} className="contact-grid">
            <img
              src={avatar}
              alt="avatar"
              style={{height: '250px', marginTop : '3em'}}
               />
             <h4 id="bottom_p"style={{fontFamily: 'Roboto Mono', width: '75%', margin: 'auto', paddingTop: '1em'}}>Want to know more? Contact me on any of these platforms!</h4>

          </Cell>
            <div class="mdl-layout-spacer"></div>
          <Cell col={6} className="contact-grid">
          <div >
            <h2>Contact Me</h2>
            <hr/>

            <div style = {{fontSize: '20px', color: 'white', fontFamily: 'Anton'}}className="contact-list">
              <List className="center-style">
              <ListItem className="center-style">
                <ListItemContent className="list-content center-style">
                  <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joshua-luong/" style={{fontSize: '20px', textDecoration: 'none', color: 'white'}}>linkedin.com/in/joshua-luong</a></p>
                </ListItemContent>
              </ListItem>
                <ListItem className="center-style">
                <Swing count={1}duration={2000} >
                  <ListItemContent className="list-content center-style" style={{width:"100%"}}>
                    <i  className="fa fa-phone-square" aria-hidden="true"/>
                    <p><a href="tel:7782883221" style={{fontSize: '20px',  textDecoration: 'none', color: 'white'}}>(778) 288- 3221</a></p>
                  </ListItemContent>
                  </Swing>
                </ListItem>
                <ListItem className="center-style">
                  <ListItemContent className="list-content center-style">
                    <i className="fa fa-envelope center-style" aria-hidden="true"/>
                    <p><a href="mailto:joshualuong@hotmail.com" style={{fontSize: '20px', textDecoration: 'none', color: 'white'}}>joshualuong@hotmail.com</a></p>
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
            </div>
            <br/>
          </Cell>
            <Cell col={12}></Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
