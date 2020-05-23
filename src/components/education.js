import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - Expected {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
          <p> <strong style={{color:'#968E50'}}>•	Current Cumulative GPA: 3.90</strong></p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
