import React, { Component } from 'react';
import UserInfo from '../../components/UserInfo/UserInfo';
import photo from '../../images/fake_avatar.png';

class UserInfoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.setState({
      user : {
        id: "x",
        name: "Lorem Ipsun",
        description: "lorem ipsun latinus arabicus matematicus, lorem ipsun latinus.",
        tweets: "10k",
        follow: "8k",
        followers: "12k",
        followed: true,
        photo: photo
      }
    })
  }

  render() {
    return (
      <UserInfo {...this.state.user} />
    );
  }
}

export default UserInfoContainer;
