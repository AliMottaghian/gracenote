import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Button } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

const SportListItem = ({ history, name, id }) => {
  const showDetails = () => {
    history.push(`/detail/${id}`);
  };
  return (
    <Row>
      <Col xs={18} md={20}>
        <strong style={{ lineHeight: 2 }}>{name}</strong>
      </Col>
      <Col xs={6} md={4}>
        <Button
          type="default"
          icon={<UnorderedListOutlined />}
          onClick={showDetails}
        >
          Details
        </Button>
      </Col>
    </Row>
  );
};
SportListItem.propTypes = {
  history: PropTypes.object.isRequired,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default SportListItem;
