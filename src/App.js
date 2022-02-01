import React from 'react';
import { Row } from 'antd';
import './App.scss';
import Exchanges from './features/exchanges/Exchanges';

function App() {
  return (
    <Row>
      <Exchanges />
    </Row>
  );
}

export default App;
