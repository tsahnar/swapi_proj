import React from 'react'
import PropTypes from 'prop-types';
require('./List.scss');

const List = ({ list , render }) => (
  <ul className="list">
  		{list.map(render)}
  </ul>
)

List.propTypes = {
  render: PropTypes.func.isRequired
}



export default List
