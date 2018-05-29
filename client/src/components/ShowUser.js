import React from 'react';
import {Card, Image, Button} from 'semantic-ui-react';
import Items from './Items';

class ShowUser extends React.Component {
  state = {showItems: false}

  listItems = (profile) => {
    return (
      <div>
        <Button onClick={this.toggleItems}>Close</Button>
        <Items profile={profile} />
      </div>
    )
  }

  toggleItems = () => {
    this.setState(state => {
      return {showItems: !state.showItems}
    })
  }
  render() {
    const {profile} = this.props
    return (
      <Card key={profile.id}>
        <Image src={profile.image} />
        <Card.Content>
          <Card.Header>
            {profile.nickname}
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          {this.state.showItems ?
            this.listItems(profile)
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