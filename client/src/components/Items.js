import React from 'react';
import {getItems} from '../actions/items'
import {connect} from 'react-redux';
import {Loader, Segment, Dimmer} from 'semantic-ui-react';

class Items extends React.Component {

  componentDidMount() {
    this.props.dispatch(getItems(this.props.userId))
  }

  listItems = () => {
    const {items = {}} = this.props
    return (
      items.map(item => {
        return (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        )
      })
    )
  }

  render() {
    return (
      <ul>
        {this.listItems()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  const {items} = state
  return {
    items,
  }
}

export default connect(mapStateToProps)(Items)