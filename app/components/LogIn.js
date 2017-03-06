import React from 'react';
import Dialog from 'material-ui/Dialog';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 20,
    fontWeight: 400,
  },
  form: {
    width: '50%',
    margin: '0 auto',
  },
  input: {
    outline: 'none',
    display: 'block',
    width: '100%',
    padding: 7,
    border: 'none',
    borderBottom: '1px solid #ddd',
    background: 'transparent',
    marginBottom: 10,
    font: '16px Arial, Helvetica, sans-serif',
    height: 45
  }
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}



export default class Login extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Sign In/ Register" onTouchTap={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Tabs>
            <Tab label="Sign In">
              <div style={styles.form}>
                <h2 style={styles.headline}>Already Have An Account?</h2>
                <form action="">
                  
                  <input style={styles.input} type="text" placeholder="Email" />
                  <input style={styles.input} type="text" placeholder="Password" />
                </form>
                <RaisedButton
                  href=""
                  target="_blank"
                  secondary={true}
                  icon={<FontIcon className="muidocs-icon-custom-github" />}

                />
                <RaisedButton
                  href=""
                  target="_blank"
                  primary={true}
                  icon={<FontIcon className="muidocs-icon-custom-github" />}

                />
              </div>
            </Tab>
            <Tab label = "Register">
              <div style={styles.form}>
                <h2 style={styles.headline}>New to AlchemEtsy?</h2>
                <form action="">
                  <input style={styles.input} type="text" name="first" placeholder="First Name" />
                  <input style={styles.input} type="text" name="last" placeholder="Last Name" />
                  <input style={styles.input} type="email" name="field2" placeholder="Email" />
                  <input style={styles.input} type="password" name="psw" placeholder="Password" />
                  <input style={styles.input} type="password" name="psw" placeholder="Re-enter Password" />
                </form>
              </div>
            </Tab>
          </Tabs>
        </Dialog>
      </div>
    );
  }
}