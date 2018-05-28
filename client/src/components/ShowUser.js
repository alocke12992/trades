import React from 'react';
import {connect} from 'react-redux';
import {getProfiles} from '../actions/profiles';
import {Card, Image, Button} from 'semantic-ui-react';
import Items from './Items';
import {Link} from 'react-router-dom';

class ShowUser extends React.Component {
  state = {showItems: false}

  listItems = (userId) => {
    return (
      <div>
        <Button onClick={this.toggleItems}>Close</Button>
        <Items userId={userId} />
      </div>
    )
  }

  toggleItems = () => {
    this.setState(state => {
      return {showItems: !state.showItems}
    })
  }
  render() {
    const {user} = this.props
    return (
      <Card key={user.id}>
        <Image src={user.image} />
        <Card.Content>
          <Card.Header>
            {user.nickname}
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          {this.state.showItems ?
            this.listItems(user.id)
            :
            <div>
              <Button basic color='green' onClick={this.toggleItems}>See Items</Button>
            </div>
          }
        </Card.Content>
      </Card>
    )
  }
}

export default ShowUser