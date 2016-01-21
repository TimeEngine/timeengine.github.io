/*global React ReactDOM __ Immutable __Element*/

//const __Element = require("timeengine-react");
//this code is required to transpile babel site

(() => {
  'use strict';

  // `.intervalSeq` is to map Immutable-js infinite Sequence
  //                       on TimeEngine infinite Sequence
  // map natural numbers sequence on intervalSeq(1000)
  const TimerElement = () => {
    return __Element(__
      .intervalSeq(Immutable.Range(), 1000)
      .__((count) => (__.log.t = count)) //console.log
      .__((count) => (<div>Timer : {count}</div>)));
  };


  const CounterElementStateHistory = () => {
    const __updn = __(true); //1 or -1 or initially 0
    const __seqEl = __([__updn])
      .__(([updn]) => (__updn
          .reduce((a, b) => (a + b)))) //js Array.reduce
      .__((count) => (<span>{count}</span>));
    const init = () => (__updn.t = 0); //just trigger to view the init
    const __runNow = __
      .intervalSeq(Immutable.Seq.of(true), 0)
      .__(init);
    return (<span>
               <button
      onClick={() => (__updn.t = 1)}>{"Up"}</button>
               <button
      onClick={() => (__updn.t = -1)}>{"Down"}</button>
               &nbsp;&nbsp;{__Element(__seqEl)}&nbsp;&nbsp;
              </span>);
  };

  const CounterReloadElement = () => {
    const __clicked = __();
    const onClick = () => {
      __clicked.t = true;
    };
    const __runNow = __
      .intervalSeq(Immutable.Seq.of(true), 0)
      .__(onClick);
    const __seqEl = __([__clicked])
      .__(() => (<span>{CounterElementStateHistory()}</span>));
    return (<div>
              {__Element(__seqEl)}
             <button onClick={onClick}>{"Reload"}</button>
            </div>);
  };

  const CounterElement = () => {
    const __updn = __();
    const __count = __([__updn])
      .__(([updn]) => ((updn === 0) ? (0) : (__count.t + updn)));
    const init = () => (__updn.t = 0); //initial value of count
    const __runNow = __
      .intervalSeq(Immutable.Seq.of(true), 0)
      .__(init);
    const __seqEl = __([__count])
      .__(([count]) => (<span>{count}</span>));
    return (<div>
             <button
      onClick={() => (__updn.t = 1)}>{"Up"}</button>
             <button
      onClick={() => (__updn.t = -1)}>{"Down"}</button>
             &nbsp;&nbsp;{__Element(__seqEl)}&nbsp;&nbsp;
             <button
      onClick={init}>{"Reset"}</button>
            </div>);
  };


  const PhysicsElement = () => {
    //MKS system of units
    const V0 = 90.0; // m/s
    const DEG = 45; //degree
    const THETA = DEG / 180 * Math.PI; //radian
    const G = 9.8; //gravity const
    //t seconds elapsed 0msec time resolution
    const t = __
      .intervalSeq(Immutable.Range(), 10)
      .__((count) => (count * 10 / 1000));
    const x = __([t]).__(([t]) => V0 * Math.cos(THETA) * t);
    const y = __([t]).__(([t]) => V0 * Math.sin(THETA) * t - 1 / 2 * G * Math.pow(t, 2));
    //==================================
    const Drawscale = 1; //1 dot = 1 meter
    const __seqEl = __([x, y]) //atomic update
      .__(([x, y]) => (
      <div>
        <svg height = "250"  width = "100%">
            <circle r="2" fill="red"
        cx = {50 + x * Drawscale} cy = {250 - y * Drawscale}/>
        </svg>
      </div>));
    return __Element(__seqEl);
  };

  const WorldElement = () => {
    const __clicked = __();
    const onClick = () => {
      __clicked.t = true;
    };
    const __seqEl = __([__clicked])
      .__(() => (<div>{PhysicsElement()}</div>));

    return (<div>
      <div><button onClick={onClick}>{"Physics Start"}</button></div>
      {__Element(__seqEl)}
           </div>
      );
  };

  const mount0 = ReactDOM.render(<h3>{TimerElement()}</h3>, document.getElementById('div0'));

  const mount1 = ReactDOM.render(<div>{CounterElement()}</div>, document.getElementById('div1'));

  const mount2 = ReactDOM.render(<div>{WorldElement()}</div>, document.getElementById('div2'));

})();
