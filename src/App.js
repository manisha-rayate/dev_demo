import React from 'react';
import Button from './components/Button';
import DevExtremeTest from './components/DevExtremeComponents/DevExtremeTest';
import RadioGroupTest from './components/DevExtremeComponents/RadioGroupTest';
import Header from './components/Header';
import MaterialTest from './components/Material-UIComponents/MaterialTest';
import StyledComponent from './components/Material-UIComponents/StyledComponet';

const App = () => {
  return ( 
    <>
      <h1>DevExtreme React Components</h1>
      <DevExtremeTest />
      <RadioGroupTest />
      <hr />

      <Header>Storybook Components</Header>
        <p>
          <Button>Hello, Storybook!</Button>
        </p>
      
      <hr />
      <h2>React Material & Styled-Components</h2>
      <MaterialTest />
      <StyledComponent />
      <hr />
    </>
   );
}
 
export default App;