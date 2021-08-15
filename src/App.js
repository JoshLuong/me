import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import Blink from 'react-blink-text';
import { HashLink as Link } from 'react-router-hash-link';

class App extends Component {
  componentDidMount() {
    console.log("HERE")
    const [red, green, blue] = [69, 111, 225]
    const section1 = document.querySelector('.header-color')
    
    window.addEventListener('scroll', () => {
      console.log('scroll')
      let y = 1 + (window.scrollY || window.pageYOffset) / 150
      y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
      const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
      console.log(section1)
      section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })
  }
  
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
            id="header-color"
            title={
              <div>
                <Link style={{textDecoration: 'none', color: '#323232', fontSize: '1.5em', float: 'left' }} to="/#home">

                  josh luong

           </Link>
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
/*
change www... to githubs page
troubles with routing:
1.) added to netlify to host
2.) change https://github.com/facebook/create-react-app/issues/1765
  build script

to deploy to gh-pages, change the package.json back to include homepage,
then run npm run deploy

to make change to netlify, make change, then git add . , git commit -m "..", git push origin master
then deploy on netlify (auto deploys)

to change domain, need to change DSN on GoDaddy 
*/

