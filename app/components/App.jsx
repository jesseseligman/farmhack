import React from 'react';
import IconButton from 'material-ui/IconButton';
// import Menu from 'components/Menu';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
import geolib from 'geolib';

const App = React.createClass({
  getInitialState() {
    return {
      loginSnackbarOpen: false,
      checkedIn: false,
      userType: null,
      timeoutId: null,
      coords: null
    };
  },

  workerCheckIn() {

    if (!this.state.checkedIn) {
      this.state.timeoutID = window.setInterval(this.updateLocation, 10000);
      this.setState({ checkedIn: true });
    }
    else {
      this.setState({ checkedIn: false });
      window.clearInterval(this.state.timeoutID);
    }

  },


  updateLocation() {
    if (!navigator.geolocation) {
      return console.log('Geolocation is not supported by your browser.');
    }

    const success = (position) => {
      const { latitude, longitude } = position.coords;
      const nextCoords = Object.assign({}, { latitude, longitude });

      const distance = geolib.getDistance(this.state.coords || nextCoords, nextCoords);
      this.setState({ coords: nextCoords });
      console.log('change in distance is ', distance);
    };

    const failure = () => {
      console.log('Could not obtain your location.');
    };

    navigator.geolocation.getCurrentPosition(success, failure);
  },

  render() {
    const styleMenu = {
      iconStyle: {
        width: 48,
        height: 48,
        paddingBottom: 0
      },
      style: {
        width: 64,
        height: 64,
        padding: 0
      }
    };

    const stylePaper = {
      backgroundColor: '#62c559',
      marginBottom: '10px'
    };

    const styleContainer = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignContent: 'space-around',
      alignItems: 'center',
      marginTop: '0px',
      marginLeft: '10px',
      justifyContent: 'space-between'
    };

    const styleTitle = {
      fontSize: '25px',
      color: '#c55962',
      fontFamily: 'Varela Round'
    };

    const styleImage = {
      display: 'inlineBlock',
      width: '30%',
      marginBottom: '-35px',
      marginLeft: '10px',
      marginTop: '-30px'
    };

    const styleSnackBar = {
      backgroundColor: '#ff7f66',
      textAlign: 'center',
      height: '65px'
    };

    return <div >
      <Paper style={stylePaper}>
        <div style={styleContainer}>

          <div style={styleTitle}>
            Agricultural <br/> Resource <br/> Manager
          </div>

          <IconButton
            iconStyle={styleMenu.iconStyle}
            onTouchTap={this.handleToggle}
            style={styleMenu.style}
          >
            <NavigationMenu color={'#c55962'} />
          </IconButton>

          {/* <Menu
            logout={this.logout}
            handleClose={this.handleClose}
            open={this.state.open}
            requestChange={this.requestChange}
          /> */}

        </div>
      </Paper>

      <Snackbar
        bodyStyle={styleSnackBar}
        message="Invalid login credentials."
        open={this.state.loginSnackbarOpen}
      />

      {React.cloneElement(this.props.children, {
        alerts: 0,
        workerCheckIn: this.workerCheckIn
      })}
    </div>;
  }
});

export default App;
