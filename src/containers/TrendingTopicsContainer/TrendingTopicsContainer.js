import React, { Component } from 'react';
import TrendingTopics from '../../components/TrendingTopics/TrendingTopics';
import { connect } from 'react-redux';

class TrendingTopicsContainer extends Component {
  render() {
    return (
      <TrendingTopics hashtags={this.props.hashtags} />
    );
  }
}

function mapStateToProps(state) {
  return {
    hashtags: state.trendings.hashtags
  }
};

export default connect(mapStateToProps)(TrendingTopicsContainer);
