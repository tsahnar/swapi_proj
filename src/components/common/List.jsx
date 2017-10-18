import React from 'react'
require('./List.scss');

const List = ({ list , render }) => (
  <ul className="list">
  		{list.map(render)}
  </ul>
)

List.propTypes = {
  render: React.PropTypes.func.isRequired
}



export default List
