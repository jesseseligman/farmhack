import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const MainButtons = React.createClass({
  handleWorkerCheckIn() {
    this.props.workerCheckIn();
  },

  render() {
    const flexContainer = {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      height: '70vh'
    };

    const styleButton = {
      display: 'flex',
      width: '100px',
      marginBottom: '30px'
    };

    return <div style={flexContainer}>


        <RaisedButton
          label="Worker"
          primary={true} style={styleButton}
          onTouchTap={this.handleWorkerCheckIn}
        />

      <Link style={{ textDecoration: 'none' }} to="/register">
        <RaisedButton label="Leader" primary={true} style={styleButton} />
      </Link>
    </div>;
  }
});

export default MainButtons;
