import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import Blink from 'react-blink-text';
import { HashLink as Link } from 'react-router-hash-link';

class App extends Component {
  render() {
    function style() {
      var selectorId = document.querySelector('.mdl-layout');
      selectorId.MaterialLayout.toggleDrawer();
    }
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <div>
                <Link style={{textDecoration: 'none', color: '#323232', fontSize: '1.5em', float: 'left' }} to="/#home">

                  josh luong

           </Link>
                <div style={{ display: 'inline-block' }}>
                  <Blink fontFamily='Roboto' textDecoration='none' color='black' fontSize='1.5em' text=' |'></Blink>
                </div>
              </div>

            }


            scroll>
            <Navigation>
              <Link to={process.env.PUBLIC_URL + "/#home"}>Home</Link>
              <Link to={process.env.PUBLIC_URL + "/#resume"}>Resume</Link>
              <Link to={process.env.PUBLIC_URL + "/#aboutme"}>About</Link>
              <Link to={process.env.PUBLIC_URL + "/#contact"}>Contact</Link>
            </Navigation>
          </Header>
          <Drawer id='burger' title={<Link onClick={() => style()} style={{textDecoration: 'none', color: 'black' }} to="/">josh</Link>}>
            <Navigation style={{ color: 'black' }}>
              <Link to={process.env.PUBLIC_URL + "/#home"} onClick={() => style()}>Home</Link>
              <Link to={process.env.PUBLIC_URL + "/#resume"} onClick={() => style()}>Resume</Link>
              <Link to={process.env.PUBLIC_URL + "/#aboutme"} onClick={() => style()}>About</Link>
              <Link to={process.env.PUBLIC_URL + "/#contact"} onClick={() => style()}>Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>

    );
  }
}

export default App;


//<Link to="/projects">Projects</Link>
