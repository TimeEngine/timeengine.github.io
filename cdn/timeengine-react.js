"use strict";

var _slicedToArray = function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var _createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/*global React timeengine __ Immutable __Element*/
//this file need to be transpiled to js
//npm test
(function() {
  "use strict";

  var mode = typeof module !== "undefined" && module.exports;
  var React = mode ? require("react") : window.React;
  var ReactDOM = mode ? require("react-dom") : window.ReactDOM;
  var __ = mode ? require("timeengine") : window.__;

  //***React state with life cycle is stateless sequence*****
  var __Element = function __Element(__seqEl) {
    var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function() {
      return 0;
    };

    var SeqComponent = function(_React$Component) {
      _inherits(SeqComponent, _React$Component);

      function SeqComponent() {
        _classCallCheck(this, SeqComponent);

        var _this = _possibleConstructorReturn(this, (SeqComponent.__proto__ || Object.getPrototypeOf(SeqComponent)).call(this));

        _this.state = {
          seqEl: __seqEl.t
        };
        var __timeseq = __([__seqEl]).__(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 1),
            val = _ref2[0];

          _this.setState({
            seqEl: val
          });
          f(ReactDOM.findDOMNode(_this).children[0]);
          return true;
        });
        return _this;
      }

      _createClass(SeqComponent, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          __seqEl.done = 1;
        }
      }, {
        key: "render",
        value: function render() {
          return React.createElement(
            "span",
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
  var binder = mode ? function() {
    module.exports = __Element;
  }() : function() {
    window.__Element = __Element;
  }();
})();
