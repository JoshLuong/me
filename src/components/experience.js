import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    if (this.props.startYear == null)
      return (
        <Grid>
          <Cell col={2} tablet={0} cell={0}>

          </Cell>
          <Cell col={8} tablet={12} cell={12}>
            <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
            <p style={{ color: '#d2dbe5' }}>{this.props.startEndYear}</p>
            <p>{this.props.jobDescription}</p>
          </Cell>
          <Cell col={2} tablet={0} cell={0}>

          </Cell>
        </Grid>
      )
    return (
      <Grid>
        <Cell col={2} tablet={0} cell={0}>

        </Cell>
        <Cell col={8} tablet={12} cell={12}>
          <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
          <p style={{ color: '#d2dbe5' }}>{this.props.startYear} - {this.props.endYear}</p>
          <p>{this.props.jobDescription}</p>
        </Cell>
        <Cell col={2} tablet={0} cell={0}>

        </Cell>
      </Grid>
    )
  }
}

export default Experience;
