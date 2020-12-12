import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const styles = () => ({
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  text: {
    backgroundColor: '#eee',
    color: '#aaa',
    fontSize: '2rem',
  },
});

class About extends Component {
  clicked = () => {
    const { history } = this.props;
    history.push('./');
  };

  render() {
    const { classes, count } = this.props;
    return (
      <div className={classes.container}>
        <span className={classes.text} onClick={this.clicked}>
          This is number you left {count} !!!
        </span>
      </div>
    );
  }
}

About.defaultProps = {
  classes: {},
  count: 0,
};

About.propTypes = {
  classes: PropTypes.object,
  count: PropTypes.number,
};

const mapStateToProps = (state) => ({
  count: state.firstReducer.count,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withRouter(About)));
