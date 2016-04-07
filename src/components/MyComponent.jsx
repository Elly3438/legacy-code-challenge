import _ from 'lodash';
import React from 'react';

import MyButton from './MyButton.jsx';

class MyComponent extends React.Component {
  constructor(props) {
    super();

    this.state = {
      showText: props.showText
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  /* Handlers */
  handleButtonClick(e) {
    e.preventDefault();
    const showText = !this.state.showText;
    
    this.setState({ showText });
  }
  /* Render */
  render() {
    const displayedText = (this.state.showText === true) ?
      (
        <span>{this.props.text}</span>
      ) : null;

    const buttonText = (this.state.showText === true) ?
      'Hide Text' : 'Show Text';

    return (
      <div className='legacy-button-container'>
        <div className='legacy-button-bar'>
          <MyButton
            className='legacy-show-text-btn'
            id='legacyShowHide'
            clickHandler={this.handleButtonClick}>
            {buttonText}
          </MyButton>
        </div>
        <div className='legacy-text-bar'>
          {displayedText}
        </div>
      </div>
    );
  }
}

MyComponent.defaultProps = {
  showText: true
};
MyComponent.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default MyComponent;