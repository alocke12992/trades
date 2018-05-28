import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import Users from './Users';
import ShowUser from './ShowUser';
import {getProfiles} from '../actions/profiles';
import {Loader, Segment, Dimmer} from 'semantic-ui-react';

class FetchProfiles extends React.Component {
  state = {loaded: false};

  componentDidMount() {
    this.props.dispatch(getProfiles(this.setLoaded));
  }

  setLoaded = () => {
    this.setState({loaded: true});
  };

  render() {
    const {loaded} = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/users" component={Users} />
          <Route
            exact
            path="/users/:id"
            component={ShowUser}
          />
        </div>
      );
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      );
    }
  }
}

export default connect()(FetchProfiles);
