import React from 'react';
import TradeForm from './TradeForm';
import {getMyItems} from '../actions/myItems';
import {connect} from 'react-redux';
import {Button, Header, Image, Modal, Grid, Form} from 'semantic-ui-react';

class TradeModal extends React.Component {
  state = {trading: false, userItem: ""}
  componentDidMount() {
    this.props.dispatch(getMyItems(this.props.tradeRequester.id))
  }

  toggleTrade = () => {
    this.setState(state => {
      return {
        trading: !state.trading
      }
    })
  }

  showForm = () => {
    const {wantedItem} = this.props
    return (
      <TradeForm wantedItem={wantedItem} closeForm={this.toggleTrade} />
    )
  }

  addItem = (item) => {
    this.setState({userItem: item})
  }

  render() {
    const {tradeRecipient, wantedItem, requesterItems} = this.props

    return (
      <Modal trigger={<Button basic color='blue'>Request Item</Button>}>
        <Grid centered>
          <Grid.Row centered verticalAlign="middle" columns={2}>
            <Grid.Column width={6}>
              <Modal.Header as='h3'>Requesting Trade from {tradeRecipient.nickname}</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='medium' src={tradeRecipient.image} />
              </Modal.Content>
            </Grid.Column>
            <Grid.Column width={4}>
              <Modal.Header as="h3">
                Requested Item:
                </Modal.Header>
              <Modal.Description>
                <Header>{wantedItem.name}</Header>
                <p>Description:<br />{wantedItem.description}</p>
                {
                  this.state.userItem === "" ?
                    <TradeForm
                      wantedItem={wantedItem}
                      requesterItems={[...requesterItems]}
                      addItem={this.addItem}
                    />
                    :
                    this.state.userItem
                }
              </Modal.Description>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    requesterItems: state.myItems
  }
}

export default connect(mapStateToProps)(TradeModal)