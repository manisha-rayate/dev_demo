import React, { Component } from 'react';
import RadioGroup from 'devextreme-react/radio-group';

const priorities = ['Low', 'Normal', 'Urgent', 'High'];

class RadioGroupTest extends Component {

  constructor() {
    super();
    this.state = {
      selectionPriority: priorities[0]
    };

    this.changeSelectionPriority = this.changeSelectionPriority.bind(this);
  }

  changeSelectionPriority(e) {
    this.setState({
      selectionPriority: e.value
    });
  }

  render() {
    return (
      <div className="form">
        <div className="dx-fieldset">
          <div className="dx-field">
            <div className="dx-field-label">Default mode</div>
            <div className="dx-field-value">
              <RadioGroup items={priorities} defaultValue={priorities[0]} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 
export default RadioGroupTest;