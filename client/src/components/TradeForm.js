import React from 'react';
import {Form, Button, Grid, Modal, Radio} from 'semantic-ui-react';

class TradeForm extends React.Component {
  state = {modalOpen: false, item: ""}

  handleOpen = () => this.setState({modalOpen: true})
  handleChange = (e, {value}) => {
    console.log(e, value)
    this.setState({item: value})
  }
  handleSubmit = () => {
    console.log("submit before closing")
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
              name='radioGroup'
              value={`${item.name}`}
              checked={this.state.item === `${item.name}`}
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
                <Form>
                  {this.showItems()}
                  <div>this is the form</div>
                  <Button onClick={this.handleSubmit}>Submit</Button>
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