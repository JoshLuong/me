import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Swing from 'react-reveal/Swing'
import Blink from 'react-blink-text';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div id='contact' style={{ position: 'relative' }}>
        <Footer style ={{padding:'15px 15px'}} className='header-color' size="mini">
          <div style={{margin:'auto'}}>
          <FooterSection type="middle">
            <FooterLinkList style={{ paddingTop: '1 em', color: '#323232', fontSize: '1.2em', marginBottom: '0px' }}>
              <Grid>
              <Cell col ={4} tablet={12} cell ={12}><a target="_blank" rel="noopener noreferrer" aria-hidden="true" href="https://www.linkedin.com/in/joshua-luong/"> LinkedIn</a></Cell>
              
              <Cell col ={4}  tablet={12}cell ={12}><a target="_blank" rel="noopener noreferrer" aria-hidden="true" display="inline" href="mailto:joshualuong@hotmail.com"> joshualuong@hotmail.com</a></Cell>
              <Cell col ={4} tablet={12}cell ={12}> <a target="_blank" rel="noopener noreferrer" aria-hidden="true" href="tel:7782883221"> (778) 288-3221</a></Cell>
              <Cell style={{marginBottom: '0.25em'}}col={12}>
                <p style={{color:'grey'}}>© 2021 Joshua Luong</p>
                <p className='contact-message'>Built With Love Using ReactJS and MDL</p>
              </Cell>
              </Grid>
            </FooterLinkList>
          </FooterSection>
          </div>
        </Footer>
      </div>
    )
  }
}

export default Contact;
