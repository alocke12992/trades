import React from 'react';
import {getItems} from '../actions/items'
import {connect} from 'react-redux';
import {Button, List} from 'semantic-ui-react';
import TradeModal from './TradeModal';

class Items extends React.Component {
  state = {trading: false}
  componentDidMount() {
    this.props.dispatch(getItems(this.props.profile.id))
  }

  toggleTrade = (item) => {
    console.log(this.props.currentUser, item)

  }

  listItems = () => {
    const {items = {}, profile, currentUser} = this.props

    return (
      items.map(item => {
        return (
          <List.Item key={item.id}>
            <List.Content>
              <List.Header as='h3'>{item.name}</List.Header>
              <List.Description as='p'>{item.description}</List.Description>
              <TradeModal
                wantedItem={item}
                tradeRecipient={profile}
                tradeRequester={currentUser}
              />
            </List.Content>
          </List.Item>
        )
      })
    )
  }

  render() {
    return (
      <List ordered>
        {this.listItems()}
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  const {items, user} = state
  return {
    items,
    currentUser: user,
  }
}

export default connect(mapStateToProps)(Items)