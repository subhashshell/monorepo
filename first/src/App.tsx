import React from 'react';
import New from './New';
import Test from './Test';

function App() {
  return (
    <div>
      <h1 data-testid="app-header">Workflow React First App</h1>
      <p>Test workflow for unit test coverage and cypress</p>
      <Test />
      <New />
    </div>
  );
}

export default App;
