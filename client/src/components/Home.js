import React, {Component} from 'react';
import {Header} from 'semantic-ui-react';
import axios from 'axios';
import ShowItem from './ShowItem';

class Home extends Component {
  state = {items: []}
  componentDidMount() {
    axios.get('/api/items')
      .then(res => {
        this.setState({items: [...res.data]})
      })
  }

  showItems = () => {
    const {items} = this.state
    return (
      items.map(item => {
        return (
          <ShowItem item={item} />
        )
      })
    )
  }
  render() {
    const {items} = this.state
    return (
      <div>
        <Header as='h1' textAlign='center'>Home Component</Header>
        {this.showItems()}
      </div>
    );
  }
}

export default Home;
