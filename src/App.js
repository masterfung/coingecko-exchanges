import React from 'react';
import { Route, Routes } from 'react-router';
import Exchanges from './features/exchanges/Exchanges';
import Exchange from './features/exchange/Exchange';
import './App.scss';
import NoMatch from './features/noMatch/NoMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Exchanges />} />
      <Route path="exchange/:exchange" element={<Exchange />} />
      <Route path="*" element={<NoMatch />}
      />
    </Routes>
  );
}

export default App;
