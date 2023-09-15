import { memo } from "react";

const DemoOutput = (props) => {
  console.log("DemoOutPut RUNNING");
  return <p>{props.show ? "This is new!" : ""}</p>;
};
export default memo(DemoOutput);
