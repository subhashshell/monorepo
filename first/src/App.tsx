import React from 'react';
import New from './New';
import Test from './Test';
import Latest from './Latest';

function App() {
  return (
    <div>
      <h1 data-testid="app-header">Workflow React First App</h1>
      <p>Test workflow for unit test coverage and cypress new test --adding new action code</p>
      <Test />
      <New />
      <Latest />
    </div>
  );
}

export default App;
