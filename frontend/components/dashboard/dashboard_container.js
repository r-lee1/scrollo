import React from 'react';
import { connect } from 'react-redux';

import Dashboard from './dashboard';

const mapStateToProps = (state) => ({
  entities: state.entities
});

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, null)(Dashboard);
