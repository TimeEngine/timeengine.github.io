'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*global React __ Immutable __Component*/

//this file need to bre transpiled to js
//npm test
(function () {
  'use strict';

  //var React = require('react');
  //var __ = require('timeengine');

  //***React state with life cycle is stateless sequence*****

  var __Component = function __Component(__seqEl) {
    var SeqComponent = function (_React$Component) {
      _inherits(SeqComponent, _React$Component);

      function SeqComponent() {
        _classCallCheck(this, SeqComponent);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SeqComponent).call(this));

        _this.state = {
          seqEl: __seqEl.t
        };
        var timeseq = __seqEl.__(function (val) {
          _this.setState({
            seqEl: val
          });
        });
        return _this;
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
    }(React.Component);

    return React.createElement(SeqComponent, null);
  };
  //------------------

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = __Component;
  } else {
    window.__Component = __Component;
  }
})();
