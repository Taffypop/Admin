import React from 'react';
import { connect } from 'react-redux';
import { toggleNavigation } from '../actions';

import AppBar from 'material-ui/AppBar';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
  handleToggle: (index) => dispatch(toggleNavigation())
});

const Component = ({ handleToggle }) => {
  return (
    <AppBar
      title={'Taffy'}
      onLeftIconButtonTouchTap={()=>{handleToggle()}}
      />);
};

export default connect(mapStateToProps,mapDispatchToProps)(Component);
