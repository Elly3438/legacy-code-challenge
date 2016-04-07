import _ from 'lodash';
import React from 'react';

function getId(id, appended) {
  let retVal = id;

  if (_.isString(id) && _.isString(appended)) {
    retVal = id + '_' + appended;
  }
  return retVal;
}

function getClasses(className, baseClasses) {
  let retVal = baseClasses || '';
  
  if (_.isString(className)) {
    retVal += ' ' + className;
  }
  return retVal;
}

class MyButton extends React.Component {
  /* Render */
  render() {
    return (
      <button
        className={getClasses(this.props.className, 'btn')}
        id={getId(this.props.id, 'button')}
        onClick={this.props.clickHandler}>
        {this.props.children}
      </button>
    );
  }
}

MyButton.propTypes = {
  clickHandler: React.PropTypes.func.isRequired
};

export default MyButton;