import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node.isRequired
};

function CardContainer(props) {
  const { children } = props;
  return <ul className="card-container">{children}</ul>;
}

CardContainer.propTypes = propTypes;

export default CardContainer;
