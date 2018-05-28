import React from 'react';
import {connect} from 'react-redux'
import Posts from './Posts'
import Bio from './Bio';
import Items from './Items'
import {Grid, Segment, Image, Header} from 'semantic-ui-react';

class Profile extends React.Component {

  showMore = () => {
    return (
      <div>

      </div>
    )
  }

  render() {
    // { isAdmin ? this.showMore() : null) }
    const {user} = this.props
    return (
      <div>
        <Grid centered>
          <Segment.Group>
            {/* main info section  */}
            <Image src={user.image} />
            <Segment>
              <h3>{user.nickname}</h3>
            </Segment>
          </Segment.Group>
        </Grid>
        <Grid columns={2} relaxed>
          <Grid.Column>
            <Segment.Group>
              {/* Details section */}
              Details section
              <Segment>
                <Bio />
              </Segment>
              <Segment>
                Pending Trades
              </Segment>
              <Segment>Activity Stream</Segment>
            </Segment.Group>
            <Segment.Group>
              {/* Friends */}
              <Segment>My Friends</Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column>
            <Segment.Group>
              {/* Status and Mood */}
              <Segment>
                <Header as="h2">My Items</Header>
                <Items userId={user.id} />
              </Segment>
              <Segment>
                <Posts />
              </Segment>
            </Segment.Group>
            <Segment.Group>
              {/* Activity stream */}
            </Segment.Group>
            {/* Comments */}
            <Segment>Comments</Segment>
            <Segment.Group>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)