import React, { Component } from 'react';
import TrendingTopics from '../../components/TrendingTopics/TrendingTopics'
import photo from '../../images/fake_avatar.png';

class TrendingTopicsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hashtags: []
    }
  }

  componentDidMount() {
    this.setState({
      hashtags: [['#OneBitCode', '10k'], ['#RubyOnRails', '10k']]
    })
  }

  render() {
    return (
      <TrendingTopics hashtags={this.state.hashtags} />
    );
  }
}

export default TrendingTopicsContainer;
