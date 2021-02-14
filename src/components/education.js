import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={2} tablet={0} cell={0}>
        </Cell>
        <Cell col={8} tablet={12} cell={12}>
          <h4 style={{ marginTop: '0px' }}>{this.props.schoolName}</h4>
          <p style={{ color: '#d2dbe5' }}>{this.props.startYear} - Expected {this.props.endYear}</p>
          <p>{this.props.schoolDescription}</p>
          <p> <strong>•	Current Cumulative GPA: 4.00 | 86%</strong></p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
