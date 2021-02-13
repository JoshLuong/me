import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Swing from 'react-reveal/Swing'
import Blink from 'react-blink-text';

class Contact extends Component {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Grid style={{ justifyContent: 'center' }}>
          <div class="mdl-layout-spacer"></div>
          <div class="mdl-layout-spacer"></div>

          <Cell col={12} className="contact-grid">
            <div>
              <h2 style={{ paddingTop: '1 em', color: '#323232' }}>
                <i className="fas fa-id-badge" aria-hidden="true" style={{ color: '#323232' }} />
                  Contact Me
                </h2>
            </div></Cell>
          <Cell col={4} className="contact-grid" style={{ borderTop: '5px solid' }}>
            <div>
              <div className="contact-list">
                <List className="center-style">
                  <ListItem className="center-style">
                    <ListItemContent className="list-content center-style">
                      <i className="fab fa-linkedin" aria-hidden="true" style={{ color: '#323232' }} />
                      <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joshua-luong/" style={{ fontSize: '20px', textDecoration: 'none', color: 'black' }}>linkedin.com/in/joshua-luong</a></p>
                    </ListItemContent>
                  </ListItem>
                </List>
              </div>
            </div>
            <br />
          </Cell>
          <Cell col={4} className="contact-grid" style={{ borderTop: '5px solid' }}>
            <div>
              <div className="contact-list">
                <List className="center-style">
                  <ListItem className="center-style">
                    <Swing count={1} duration={2000} >
                      <ListItemContent className="list-content center-style" style={{ width: "100%" }}>
                        <i className="fa fa-phone-square" aria-hidden="true" style={{ color: '#323232' }} />
                        <p><a href="tel:7782883221" style={{ fontSize: '20px', textDecoration: 'none', color: 'black' }}>(778) 288- 3221</a></p>
                      </ListItemContent>
                    </Swing>
                  </ListItem>
                </List>
              </div>
            </div>
            <br />
          </Cell>
          <Cell col={4} className="contact-grid" style={{ borderTop: '5px solid' }}>
            <div>
              <div className="contact-list">
                <List className="center-style">
                  <ListItem className="center-style">
                    <ListItemContent className="list-content center-style">
                      <i style={{ color: '#323232' }} className="fa fa-envelope center-style" aria-hidden="true" />
                      <p><a href="mailto:joshualuong@hotmail.com" style={{ fontSize: '20px', textDecoration: 'none', color: 'black' }}>joshualuong@hotmail.com</a></p>
                    </ListItemContent>
                  </ListItem>


                </List>
              </div>
            </div>
            <br />
          </Cell>
          <Cell col={12}></Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
