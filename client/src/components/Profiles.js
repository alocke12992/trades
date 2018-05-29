import React from 'react';
import ShowUser from './ShowUser';
import {Card} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {getProfiles} from '../actions/profiles';

class Profiles extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProfiles());
  }

  showUsers = () => {
    const {profiles} = this.props
    return (
      profiles.map(profile => {
        return (
          <ShowUser key={profile.id} profile={profile} />
        )
      })
    )
  }

  render() {
    return (
      <div>
        <Card.Group>
          {this.showUsers()}
        </Card.Group>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    profiles: state.profiles
  }
}

export default connect(mapStateToProps)(Profiles)