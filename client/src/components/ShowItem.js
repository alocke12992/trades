import React from 'react';
import axios from 'axios';

class ShowItem extends React.Component {
  addItem = (item) => {
    console.log(item)
  }

  render() {
    const {item} = this.props
    return (
      <div key={item.id}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <button onClick={() => this.addItem(item)}></button>
      </div>
    )
  }
}
export default ShowItem;