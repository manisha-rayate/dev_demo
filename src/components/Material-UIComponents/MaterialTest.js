import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';

const MaterialTest = () => {
  const [state, setState] = useState({ checkedA: true });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      
      <Switch color = "Primary" inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
    </div>
  );
}

export default MaterialTest;