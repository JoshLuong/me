import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Swing from 'react-reveal/Swing'
import Blink from 'react-blink-text';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div id='contact' style={{ position: 'relative' }}>
        <Footer className='header-color' size="mini">
          <FooterSection type="middle">
            <FooterLinkList style={{ paddingTop: '1 em', color: '#323232', fontSize: '1.2em' }}>
              <a target="_blank" rel="noopener noreferrer" aria-hidden="true" href="https://www.linkedin.com/in/joshua-luong/"> LinkedIn</a>
              <a target="_blank" rel="noopener noreferrer" aria-hidden="true" href="tel:7782883221"> (778) 288-3221</a>
              <a target="_blank" rel="noopener noreferrer" aria-hidden="true" href="mailto:joshualuong@hotmail.com"> Email</a>
            </FooterLinkList>
          </FooterSection>
          <FooterSection type="right">
            <FooterLinkList style={{ paddingTop: '1 em', color: '#323232', fontSize: '1.2em' }}>
              <p>© 2021 Joshua Luong</p>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </div>
    )
  }
}

export default Contact;
