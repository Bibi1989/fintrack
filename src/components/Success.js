import React from "react";
import { Result } from "antd";

const Success = (props) => {
  return (
    <div>
      <Result
        status="success"
        title="Success"
        subTitle="Registration completed"
        // extra={[
        //   <Button type="primary" key="console">
        //     Go Console
        //   </Button>,
        //   <Button key="buy">Buy Again</Button>,
        // ]}
      />
    </div>
  );
};

export default Success;
