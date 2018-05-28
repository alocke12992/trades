import React from 'react';
import {Card, Image, Button} from 'semantic-ui-react';
import Items from './Items';

class ShowUser extends React.Component {
  state = {showItems: false}

  listItems = (user) => {
    return (
      <div>
        <Button onClick={this.toggleItems}>Close</Button>
        <Items user={user} />
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
            this.listItems(user)
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