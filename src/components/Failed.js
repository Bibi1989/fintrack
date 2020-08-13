import React from "react";
import { Result, Button } from "antd";

const Failed = (props) => {
  return (
    <div>
      <Result
        status="warning"
        title="Signup failed"
        extra={
          <Button type="primary" key="console">
            Back
          </Button>
        }
      />
    </div>
  );
};

export default Failed;
