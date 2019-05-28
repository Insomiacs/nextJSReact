import React from 'react'
import { connect } from 'react-redux'
import { Reset } from 'styled-reset'

import Header from "../components/Header";
import MoviesContent from "../components/MoviesContent";

class Index extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Reset/>
        <Header />
        <MoviesContent/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(Index)
