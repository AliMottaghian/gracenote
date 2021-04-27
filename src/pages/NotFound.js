import React from "react";
import PropTypes from "prop-types";

import { Result, Button } from "antd";
import Card from "../components/Ui/Card/Card";

const NotFound = ({ history }) => {
  const backToHome = () => {
    history.push("/");
  };
  return (
    <Card>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={backToHome}>
            Back Home
          </Button>
        }
      />
    </Card>
  );
};
NotFound.propTypes = {
  history: PropTypes.object,
};
export default NotFound;
