(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getId(id, appended) {
  var retVal = id;

  if (_lodash2.default.isString(id) && _lodash2.default.isString(appended)) {
    retVal = id + '_' + appended;
  }
  return retVal;
}

function getClasses(className, baseClasses) {
  var retVal = baseClasses || '';

  if (_lodash2.default.isString(className)) {
    retVal += ' ' + className;
  }
  return retVal;
}

var MyButton = function (_React$Component) {
  _inherits(MyButton, _React$Component);

  function MyButton() {
    _classCallCheck(this, MyButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MyButton).apply(this, arguments));
  }

  _createClass(MyButton, [{
    key: 'render',

    /* Render */
    value: function render() {
      return _react2.default.createElement(
        'button',
        {
          className: getClasses(this.props.className, 'btn'),
          id: getId(this.props.id, 'button'),
          onClick: this.props.clickHandler },
        this.props.children
      );
    }
  }]);

  return MyButton;
}(_react2.default.Component);

MyButton.propTypes = {
  clickHandler: _react2.default.PropTypes.func.isRequired
};

exports.default = MyButton;

},{"lodash":"lodash","react":"react"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyButton = require('./MyButton.jsx');

var _MyButton2 = _interopRequireDefault(_MyButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyComponent = function (_React$Component) {
  _inherits(MyComponent, _React$Component);

  function MyComponent(props) {
    _classCallCheck(this, MyComponent);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyComponent).call(this));

    _this.state = {
      showText: props.showText
    };

    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    return _this;
  }
  /* Handlers */


  _createClass(MyComponent, [{
    key: 'handleButtonClick',
    value: function handleButtonClick(e) {
      e.preventDefault();
      var showText = !this.state.showText;
      this.setState({ showText: showText });
    }
    /* Render */

  }, {
    key: 'render',
    value: function render() {
      var displayedText = this.state.showText === true ? _react2.default.createElement(
        'span',
        null,
        this.props.text
      ) : null;

      var buttonText = this.state.showText === true ? 'Hide Text' : 'Show Text';

      return _react2.default.createElement(
        'div',
        { className: 'legacy-button-container' },
        _react2.default.createElement(
          'div',
          { className: 'legacy-button-bar' },
          _react2.default.createElement(
            _MyButton2.default,
            {
              className: 'legacy-show-text-btn',
              id: 'legacyShowHide',
              clickHandler: this.handleButtonClick },
            buttonText
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'legacy-text-bar' },
          displayedText
        )
      );
    }
  }]);

  return MyComponent;
}(_react2.default.Component);

MyComponent.defaultProps = {
  showText: true
};
MyComponent.propTypes = {
  text: _react2.default.PropTypes.string.isRequired
};

exports.default = MyComponent;

},{"./MyButton.jsx":1,"lodash":"lodash","react":"react"}],3:[function(require,module,exports){
'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _MyComponent = require('./components/MyComponent.jsx');

var _MyComponent2 = _interopRequireDefault(_MyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = _react2.default.createElement(
  'div',
  { className: 'legacy-app-container' },
  _react2.default.createElement(_MyComponent2.default, { text: 'This is some text I want to show and hide' })
);

_reactDom2.default.render(App, document.getElementById('app'));

},{"./components/MyComponent.jsx":2,"lodash":"lodash","react":"react","react-dom":"react-dom"}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9NeUJ1dHRvbi5qc3giLCJzcmMvY29tcG9uZW50cy9NeUNvbXBvbmVudC5qc3giLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLFNBQVMsS0FBVCxDQUFlLEVBQWYsRUFBbUIsUUFBbkIsRUFBNkI7QUFDM0IsTUFBSSxTQUFTLEVBQVQsQ0FEdUI7O0FBRzNCLE1BQUksaUJBQUUsUUFBRixDQUFXLEVBQVgsS0FBa0IsaUJBQUUsUUFBRixDQUFXLFFBQVgsQ0FBbEIsRUFBd0M7QUFDMUMsYUFBUyxLQUFLLEdBQUwsR0FBVyxRQUFYLENBRGlDO0dBQTVDO0FBR0EsU0FBTyxNQUFQLENBTjJCO0NBQTdCOztBQVNBLFNBQVMsVUFBVCxDQUFvQixTQUFwQixFQUErQixXQUEvQixFQUE0QztBQUMxQyxNQUFJLFNBQVMsZUFBZSxFQUFmLENBRDZCOztBQUcxQyxNQUFJLGlCQUFFLFFBQUYsQ0FBVyxTQUFYLENBQUosRUFBMkI7QUFDekIsY0FBVSxNQUFNLFNBQU4sQ0FEZTtHQUEzQjtBQUdBLFNBQU8sTUFBUCxDQU4wQztDQUE1Qzs7SUFRTTs7Ozs7Ozs7Ozs7Ozs2QkFFSztBQUNQLGFBQ0U7OztBQUNFLHFCQUFXLFdBQVcsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUFzQixLQUFqQyxDQUFYO0FBQ0EsY0FBSSxNQUFNLEtBQUssS0FBTCxDQUFXLEVBQVgsRUFBZSxRQUFyQixDQUFKO0FBQ0EsbUJBQVMsS0FBSyxLQUFMLENBQVcsWUFBWCxFQUhYO1FBSUcsS0FBSyxLQUFMLENBQVcsUUFBWDtPQUxMLENBRE87Ozs7U0FGTDtFQUFpQixnQkFBTSxTQUFOOztBQWN2QixTQUFTLFNBQVQsR0FBcUI7QUFDbkIsZ0JBQWMsZ0JBQU0sU0FBTixDQUFnQixJQUFoQixDQUFxQixVQUFyQjtDQURoQjs7a0JBSWU7Ozs7Ozs7Ozs7O0FDdENmOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRU07OztBQUNKLFdBREksV0FDSixDQUFZLEtBQVosRUFBbUI7MEJBRGYsYUFDZTs7dUVBRGYseUJBQ2U7O0FBR2pCLFVBQUssS0FBTCxHQUFhO0FBQ1gsZ0JBQVUsTUFBTSxRQUFOO0tBRFosQ0FIaUI7O0FBT2pCLFVBQUssaUJBQUwsR0FBeUIsTUFBSyxpQkFBTCxDQUF1QixJQUF2QixPQUF6QixDQVBpQjs7R0FBbkI7Ozs7ZUFESTs7c0NBV2MsR0FBRztBQUNuQixRQUFFLGNBQUYsR0FEbUI7QUFFbkIsVUFBTSxXQUFXLENBQUMsS0FBSyxLQUFMLENBQVcsUUFBWCxDQUZDO0FBR25CLFdBQUssUUFBTCxDQUFjLEVBQUUsa0JBQUYsRUFBZCxFQUhtQjs7Ozs7OzZCQU1aO0FBQ1AsVUFBTSxnQkFBZ0IsSUFBQyxDQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLElBQXhCLEdBRW5COzs7UUFBTyxLQUFLLEtBQUwsQ0FBVyxJQUFYO09BRlcsR0FHaEIsSUFIZ0IsQ0FEZjs7QUFNUCxVQUFNLGFBQWEsSUFBQyxDQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLElBQXhCLEdBQ2xCLFdBRGlCLEdBQ0gsV0FERyxDQU5aOztBQVNQLGFBQ0U7O1VBQUssV0FBVSx5QkFBVixFQUFMO1FBQ0U7O1lBQUssV0FBVSxtQkFBVixFQUFMO1VBQ0U7OztBQUNFLHlCQUFVLHNCQUFWO0FBQ0Esa0JBQUcsZ0JBQUg7QUFDQSw0QkFBYyxLQUFLLGlCQUFMLEVBSGhCO1lBSUcsVUFKSDtXQURGO1NBREY7UUFTRTs7WUFBSyxXQUFVLGlCQUFWLEVBQUw7VUFDRyxhQURIO1NBVEY7T0FERixDQVRPOzs7O1NBakJMO0VBQW9CLGdCQUFNLFNBQU47O0FBNEMxQixZQUFZLFlBQVosR0FBMkI7QUFDekIsWUFBVSxJQUFWO0NBREY7QUFHQSxZQUFZLFNBQVosR0FBd0I7QUFDdEIsUUFBTSxnQkFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBQXZCO0NBRFI7O2tCQUllOzs7OztBQ3hEZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTSxNQUNKOztJQUFLLFdBQVUsc0JBQVYsRUFBTDtFQUNFLHVEQUFhLE1BQUssMkNBQUwsRUFBYixDQURGO0NBREk7O0FBTU4sbUJBQVMsTUFBVCxDQUFnQixHQUFoQixFQUFxQixTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBckIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIGdldElkKGlkLCBhcHBlbmRlZCkge1xuICBsZXQgcmV0VmFsID0gaWQ7XG5cbiAgaWYgKF8uaXNTdHJpbmcoaWQpICYmIF8uaXNTdHJpbmcoYXBwZW5kZWQpKSB7XG4gICAgcmV0VmFsID0gaWQgKyAnXycgKyBhcHBlbmRlZDtcbiAgfVxuICByZXR1cm4gcmV0VmFsO1xufVxuXG5mdW5jdGlvbiBnZXRDbGFzc2VzKGNsYXNzTmFtZSwgYmFzZUNsYXNzZXMpIHtcbiAgbGV0IHJldFZhbCA9IGJhc2VDbGFzc2VzIHx8ICcnO1xuICBcbiAgaWYgKF8uaXNTdHJpbmcoY2xhc3NOYW1lKSkge1xuICAgIHJldFZhbCArPSAnICcgKyBjbGFzc05hbWU7XG4gIH1cbiAgcmV0dXJuIHJldFZhbDtcbn1cbmNsYXNzIE15QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLyogUmVuZGVyICovXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2dldENsYXNzZXModGhpcy5wcm9wcy5jbGFzc05hbWUsICdidG4nKX1cbiAgICAgICAgaWQ9e2dldElkKHRoaXMucHJvcHMuaWQsICdidXR0b24nKX1cbiAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5jbGlja0hhbmRsZXJ9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cblxuTXlCdXR0b24ucHJvcFR5cGVzID0ge1xuICBjbGlja0hhbmRsZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QnV0dG9uOyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTXlCdXR0b24gZnJvbSAnLi9NeUJ1dHRvbi5qc3gnO1xuXG5jbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93VGV4dDogcHJvcHMuc2hvd1RleHRcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVCdXR0b25DbGljayA9IHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuICAvKiBIYW5kbGVycyAqL1xuICBoYW5kbGVCdXR0b25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNob3dUZXh0ID0gIXRoaXMuc3RhdGUuc2hvd1RleHQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUZXh0IH0pO1xuICB9XG4gIC8qIFJlbmRlciAqL1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkVGV4dCA9ICh0aGlzLnN0YXRlLnNob3dUZXh0ID09PSB0cnVlKSA/XG4gICAgICAoXG4gICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLnRleHR9PC9zcGFuPlxuICAgICAgKSA6IG51bGw7XG5cbiAgICBjb25zdCBidXR0b25UZXh0ID0gKHRoaXMuc3RhdGUuc2hvd1RleHQgPT09IHRydWUpID9cbiAgICAgICdIaWRlIFRleHQnIDogJ1Nob3cgVGV4dCc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xlZ2FjeS1idXR0b24tY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xlZ2FjeS1idXR0b24tYmFyJz5cbiAgICAgICAgICA8TXlCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbGVnYWN5LXNob3ctdGV4dC1idG4nXG4gICAgICAgICAgICBpZD0nbGVnYWN5U2hvd0hpZGUnXG4gICAgICAgICAgICBjbGlja0hhbmRsZXI9e3RoaXMuaGFuZGxlQnV0dG9uQ2xpY2t9PlxuICAgICAgICAgICAge2J1dHRvblRleHR9XG4gICAgICAgICAgPC9NeUJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWdhY3ktdGV4dC1iYXInPlxuICAgICAgICAgIHtkaXNwbGF5ZWRUZXh0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTXlDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICBzaG93VGV4dDogdHJ1ZVxufTtcbk15Q29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgdGV4dDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUNvbXBvbmVudDsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgTXlDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL015Q29tcG9uZW50LmpzeCc7XG5cbmNvbnN0IEFwcCA9IChcbiAgPGRpdiBjbGFzc05hbWU9J2xlZ2FjeS1hcHAtY29udGFpbmVyJz5cbiAgICA8TXlDb21wb25lbnQgdGV4dD0nVGhpcyBpcyBzb21lIHRleHQgSSB3YW50IHRvIHNob3cgYW5kIGhpZGUnIC8+XG4gIDwvZGl2PlxuKTtcblxuUmVhY3RET00ucmVuZGVyKEFwcCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=
