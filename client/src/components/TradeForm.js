import React from 'react';
import {Form, Button, Grid, Modal, Radio} from 'semantic-ui-react';

class TradeForm extends React.Component {
  state = {modalOpen: false, item: {}}

  handleOpen = () => this.setState({modalOpen: true})
  handleChange = (e, {value}) => {
    const {requesterItems} = this.props
    const selectedItem = requesterItems.find(i => i.id == value);
    this.setState({item: selectedItem})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.item)
    this.setState({modalOpen: false})
  }

  showItems = () => {
    const {requesterItems} = this.props
    return (
      requesterItems.map(item => {
        return (
          <Form.Field key={item.id}>
            <Radio
              label={`${item.name}`}
              name={`${item.name}`}
              value={`${item.id}`}
              checked={this.state.item.id == `${item.id}`}
              onChange={this.handleChange}
            />
          </Form.Field>
        )
      })
    )
  }

  render() {
    return (
      <Modal
        trigger={<Button basic color='blue' onClick={this.handleOpen}>Select Item to trade</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Grid centered>
          <Grid.Row centered verticalAlign="middle" columns={1}>
            <Grid.Column width={6}>
              <Modal.Content>
                <Form onSubmit={this.handleSubmit}>
                  {this.showItems()}
                  <div>this is the form</div>
                  <Form.Button>Submit</Form.Button>
                </Form>
              </Modal.Content>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal>
    )
  }
}

export default TradeForm