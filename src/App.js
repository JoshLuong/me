import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Blink from 'react-blink-text';


class App extends Component {
  render() {
    function style () {
      return {
        display:'none'
      }
    }
    return (
      <div className="demo-big-content">
    <Layout>
                <Header 
         className="header-color"
         title={
           <div>
           <Link style={{  fontFamily: 'Roboto',textDecoration: 'none', color: 'black', fontSize:'2.5em', float:'left'}} to="/">

           josh luong

           </Link>
           <div style ={{display:'inline-block'}}>
                     <Blink fontFamily='Roboto' textDecoration='none' color= 'black' fontSize='2.3em' text=' |'></Blink>
           </div>
           </div>

         }


        scroll>
                 <Navigation style={{ fontFamily: 'Roboto' }}>
                        <Link style={{ color: 'black' , fontSize:'1.6em'}} to={process.env.PUBLIC_URL + "/"}>Home</Link>
                        <Link style={{ color: 'black' , fontSize:'1.6em'}} to={process.env.PUBLIC_URL + "/resume"}>Resume</Link>
                        <Link style={{ color: 'black' , fontSize:'1.6em'}} to={process.env.PUBLIC_URL + "/aboutme"}>About</Link>
                        <Link style={{ color: 'black' , fontSize:'1.6em'}} to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
            </Navigation>
        </Header>
                <Drawer style={{ fontFamily: 'Roboto', color: '#c1cff5'}} title={<Link onClick={() => this.style()} style={{  fontFamily: 'Roboto', textDecoration: 'none', color: 'black'}} to="/">josh</Link>}>
            <Navigation style={{  fontFamily: 'Roboto'}}>
              <Link to={process.env.PUBLIC_URL + "/"} onClick={() => this.style()}>Home</Link>
              <Link to={process.env.PUBLIC_URL + "/resume"} onClick={() => this.style()}>Resume</Link>
              <Link to={process.env.PUBLIC_URL + "/aboutme"}  onClick={() => this.style()}>About</Link>
              <Link to={process.env.PUBLIC_URL + "/contact"} onClick={() => this.style()}>Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;


//<Link to="/projects">Projects</Link>
