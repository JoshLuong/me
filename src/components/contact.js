import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import avatar from '../img/thumbnail_image.png'


class Contact extends Component {
  render() {
    return(
      <div className="contact-body landing-grid">
        <Grid className="contact-grid">
          <Cell col={6}>

            <h2>Josh Luong</h2>
            <img
              src={avatar}
              alt="avatar"
              style={{height: '250px'}}
               />
             <h4 style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Currently seeking 2020 internships!</h4>

          </Cell>
          <Cell col={6}>
          <div style={{height:'500px'}}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="list-content" style={{fontSize: '25px', fontFamily: 'Anton',  color: 'white', width:"100%"}}>
                    <i  style={{width:'100'}} className="fa fa-phone-square" aria-hidden="true"/>
                    (778) 288- 3221
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: 'white'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    joshualuong@hotmail.com
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
