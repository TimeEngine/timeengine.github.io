/*global React __ Immutable __Component*/
(() => {
  'use strict';

  //var React = require('react');
  //var __ = require('timeengine');

  //***React state with life cycle is stateless sequence*****
  const __Component = (__seqEl) => {

    class SeqComponent extends React.Component {
      constructor() {
        super();
        this.state = {
          seqEl: __seqEl.t
        };
        var timeseq = __seqEl.__((val) => {
          this.setState({
            seqEl: val
          });
        });
      }
      componentWillUnmount() {
        delete this.__seqEl;
      }
      render() {
        return (<span>{this.state.seqEl}</span>);
      };
    }

    return (<SeqComponent/>);
  };
  //------------------

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = __Component;
  } else {
    window.__Component = __Component;
  }

})();
