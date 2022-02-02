import { Spin } from "antd";
import Title from "antd/lib/typography/Title";

import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading-container">
      <Spin className="spinner" />
      <Title>Loading...</Title>
    </div>
  )
}

export default Loading;