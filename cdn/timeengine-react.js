/*global React timeengine __ Immutable __Element*/

//this file need to be transpiled to js
//npm test
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  'use strict';

  var React = undefined;
  var ReactDOM = undefined;
  var __ = undefined;
  if (typeof module !== 'undefined' && module.exports) {
    React = require("react");
    ReactDOM = require("react-dom");
    __ = require("timeengine");
  } else {
    React = window.React;
    ReactDOM = window.ReactDOM;
    __ = window.__;
  }
  //***React state with life cycle is stateless sequence*****
  var __Element = function __Element(__seqEl) {
    var f = arguments.length <= 1 || arguments[1] === undefined ? function () {
      return 0;
    } : arguments[1];

    var SeqComponent = (function (_React$Component) {
      _inherits(SeqComponent, _React$Component);

      function SeqComponent() {
        var _this = this;

        _classCallCheck(this, SeqComponent);

        _get(Object.getPrototypeOf(SeqComponent.prototype), 'constructor', this).call(this);
        this.state = {
          seqEl: __seqEl.t
        };
        var timeseq = __seqEl.__(function (val) {
          _this.setState({
            seqEl: val
          });
          f(ReactDOM.findDOMNode(_this).children[0]);
        });
      }

      _createClass(SeqComponent, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          __seqEl.done = 1;
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(
            'span',
            null,
            this.state.seqEl
          );
        }
      }]);

      return SeqComponent;
    })(React.Component);

    return React.createElement(SeqComponent, null);
  };
  //------------------

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = __Element;
  } else {
    window.__Element = __Element;
  }
})();
