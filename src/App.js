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
           <Link style={{  fontFamily: 'Roboto Mono',textDecoration: 'none', color: '#2F2B0E', fontSize:'2em', float:'left'}} to="/">

           josh luong

           </Link>
           <div style ={{display:'inline-block'}}>
           <Blink fontFamily= 'Roboto Mono' textDecoration= 'none' color= '#2F2B0E' fontSize='2em' text=' |'></Blink>
           </div>
           </div>

         }


        scroll>
            <Navigation>
                <Link  style = {{color: '#2F2B0E' , fontSize:'1.35em'}} to={process.env.PUBLIC_URL + "/resume"}>Home</Link>
                <Link style = {{color: '#2F2B0E' , fontSize:'1.35em'}} to={process.env.PUBLIC_URL + "/resume"}>Resume</Link>
                <Link  style = {{color: '#2F2B0E' , fontSize:'1.35em'}} to={process.env.PUBLIC_URL + "/aboutme"}>About</Link>
                <Link  style = {{color: '#2F2B0E' , fontSize:'1.35em'}} to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
            </Navigation>
        </Header>
        <Drawer style = {{fontFamily: 'Roboto Mono',color: '#2F2B0E'}} title={<Link onClick={() => this.style()} style={{  fontFamily: 'Roboto Mono', textDecoration: 'none', color: 'black'}} to="/">josh</Link>}>
            <Navigation style={{  fontFamily: 'Roboto Mono'}}>
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
