import React, {Component} from 'react';
import {Header} from 'semantic-ui-react';
import ShowItem from './ShowItem';

class Home extends Component {
  state = {users: []}
  // componentDidMount() {
  //   axios.get('/api/items')
  //     .then(res => {
  //       this.setState({items: [...res.data]})
  //     })
  // }

  // showItems = () => {
  //   const {items} = this.state
  //   return (
  //     items.map(item => {
  //       return (
  //         <ShowItem item={item} />
  //       )
  //     })
  //   )
  // }
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Home Component</Header>
      </div>
    );
  }
}

export default Home;
