import React from 'react';
import {Form, Button, Grid, Modal} from 'semantic-ui-react';

class TradeForm extends React.Component {
  state = {modalOpen: false}

  handleOpen = () => this.setState({modalOpen: true})

  handleSubmit = () => {
    console.log("submit before closing")
    this.setState({modalOpen: false})
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