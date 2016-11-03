import React from 'react';
import IconButton from 'material-ui/IconButton';
// import Menu from 'components/Menu';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';

const App = React.createClass({
  getInitialState() {
    return {
      loginSnackbarOpen: false,
      userType: null
    };
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
      backgroundColor: '#e5f3e9',
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
      fontSize: '35px',
      color: '#ff7f66',
      fontFamily: 'Varela Round'
    };

    const styleTagline = {
      fontSize: '13px',
      fontWeight: '400',
      marginTop: '0px',
      marginLeft: '0px',
      color: 'black',
      fontFamily: 'Roboto'
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
            smokator

            <h1 style={styleTagline}>Connecting drunk smokers since 1776</h1>
          </div>

          <IconButton
            iconStyle={styleMenu.iconStyle}
            onTouchTap={this.handleToggle}
            style={styleMenu.style}
          >
            <NavigationMenu color={'#ff7f66'} />
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
        alerts: 0
      })}
    </div>;
  }
});

export default App;
