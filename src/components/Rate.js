import React from "react";
import Ratings from "./Ratings";
import Rating from "../icons/Rating";
import PropTypes from "prop-types";

export default function Rate({ value }) {
  return (
    <Ratings>
      <Rating />
      &nbsp; {value}
    </Ratings>
  );
}

Rate.propTypes = {
  value: PropTypes.number.isRequired
};
