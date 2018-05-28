import React from 'react';
import ShowUser from './ShowUser';
import {Card} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {getProfiles} from '../actions/profiles';

class Users extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProfiles());
  }

  showUsers = () => {
    const {users} = this.props
    return (
      users.map(user => {
        return (
          <ShowUser key={user.id} user={user} />
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
    users: state.profiles
  }
}

export default connect(mapStateToProps)(Users)