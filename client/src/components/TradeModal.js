import React from 'react';
import TradeForm from './TradeForm';
import {getItems} from '../actions/items';
import {connect} from 'react-redux';
import {Button, Header, Image, Modal, Grid, Form} from 'semantic-ui-react';

class TradeModal extends React.Component {
  state = {trading: false}
  componentDidMount() {
    this.props.dispatch(getItems(this.props.tradeRequester.id))
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

  render() {
    const {tradeRecipient, wantedItem} = this.props
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
                {/* <Button basic color="blue" onClick={this.toggleTrade}>Select Item to trade</Button> */}
                <TradeForm wantedItem={wantedItem} closeForm={this.toggleTrade} />
              </Modal.Description>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal>
    )
  }
}

export default connect()(TradeModal)