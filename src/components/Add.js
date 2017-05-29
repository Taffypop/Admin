import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

import AppBar from 'material-ui/AppBar';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
  handleAddItem: (index) => dispatch(addItem())
});

const Component = ({ handleAddItem }) => {
  return (
    <AppBar
      title={'Taffy'}
      onLeftIconButtonTouchTap={()=>{handleAddItem()}}
      />);
};

export default connect(mapStateToProps,mapDispatchToProps)(Component);
