import React from "react";
import PropTypes from "prop-types";
import { Row } from "antd";

import MedalBox from "./MedalBox";

const NocDetails = ({ medals, country }) => {
  return (
    <div>
      <h3>{country} - Medals</h3>

      <Row>
        {Object.keys(medals).map((medal) => {
          return (
            <MedalBox key={Math.random()} type={medal} value={medals[medal]} />
          );
        })}
      </Row>
    </div>
  );
};
NocDetails.propTypes = {
  medals: PropTypes.object.isRequired,
  country: PropTypes.string.isRequired,
};
export default NocDetails;
