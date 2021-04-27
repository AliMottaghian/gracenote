import React from "react";
import PropTypes from "prop-types";
import { Col } from "antd";
import "./ModalBox.css";

const MedalBox = ({ type, value }) => {
  return (
    <Col xs={12} md={6} className="textCenter">
      <div className={`modalBox`}>
        <h3>
          <span className={`medalIndicator ${type}`}></span>
          {type.split("_")[1]}
        </h3>
        <b>{value}</b>
      </div>
    </Col>
  );
};

MedalBox.propTypes = {
  type: PropTypes.string.isRequired,
  value:PropTypes.number
};
export default MedalBox;
