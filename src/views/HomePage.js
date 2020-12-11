import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firstClickHandler } from '../actions/firstAction';
import { secondClickHandler } from '../actions/secondAction';
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

class HomePage extends Component {
  positiveClickHandler = () => {
    const c = this.props.count + 1;
    this.props.increaseCount(c);
  };

  negativeClickHandler = () => {
    const c = this.props.count - 1;
    this.props.decreaseCount(c);
  };
  render() {
    const { classes, count } = this.props;
    return (
      <div className={classes.container}>
        <button onClick={this.positiveClickHandler}>+</button>
        <span className={classes.text}>This is sample project{count} !!!</span>
        <button onClick={this.negativeClickHandler}>-</button>
      </div>
    );
  }
}

HomePage.defaultProps = {
  classes: {},
  count: 0,
};

HomePage.propTypes = {
  classes: PropTypes.object,
  count: PropTypes.number,
  increaseCount: PropTypes.func,
  decreaseCount: PropTypes.func,
};

const mapStateToProps = (state) => ({
  count: state.firstReducer.count,
});
const mapDispatchToProps = (dispatch) => ({
  increaseCount: (d) => dispatch(firstClickHandler(d)),
  decreaseCount: (d) => dispatch(secondClickHandler(d)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HomePage));
