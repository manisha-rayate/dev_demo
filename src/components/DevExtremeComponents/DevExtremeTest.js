import React, { Component } from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
 
import Button from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';

class DevExtremeTest extends Component {
  
  sayHelloWorld() {
    notify('Hello world!')
  }

  render() { 
    return ( 
      <Button icon="check"
              text="Click me"
              onClick={this.sayHelloWorld}
      />
     );
  }
}
 
export default DevExtremeTest;