# timeengine-react

<img src="http://timeengine.github.io/images/timeengine-logo.svg" width="200">


TimeEngine([timeengine](https://www.npmjs.com/package/timeengine)) Extension for Stateless React programming without props and state

See
[http://timeengine.github.io](http://timeengine.github.io)


# Before

[https://facebook.github.io/react/](https://facebook.github.io/react/)

### A Stateful Component

```js

var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});
```

# After

### A Stateless functional Component (Single statement code!!)

```js
// `.intervalSeq` is to map Immutable-js infinite Sequence
//                       onto TimeEngine infinite Sequence
// map natural numbers sequence onto intervalSeq(1000)
const TimerComponent = () => {
  return __Component(__
    .intervalSeq(Immutable.Range(), 1000)
    .__((count) => (__.log.t = count)) //console.log
    .__((count) => (<div>Timer : {count}</div>)));
};
```

# Physics Equations
![](http://timeengine.github.io/images/formula.png)

```js
const PhysicsComponent = () => {
    //-------Physics-------------------------------
    //MKS system of units
    const V0 = 85.0; // m/s
    const DEG = 40; //degree
    const THETA = DEG / 180 * Math.PI; //radian
    const G = 9.8; //gravity const

    //t seconds elapsed 10msec time resolution
    const t = __
      .intervalSeq(Immutable.Range(), 10)
      .__((count) => (count * 10 / 1000));
    const x = t.__((t) => V0 * Math.cos(THETA) * t);
    const y = t.__((t) => V0 * Math.sin(THETA) * t - 1 / 2 * G * Math.pow(t, 2));
    //===================================================
    const Drawscale = 1; //1 dot = 1 meter
    const __seqEl = __([x, y]) //atomic update
      .__(([x, y]) => (<circle r="3" fill="red"
        cx = {50 + x * Drawscale} cy = {250 - y * Drawscale}/>));
    return (
      <div>
        <svg height = "250"  width = "100%">
          {__Component(__seqEl)}
        </svg>
      </div>);
  };
```

See the live DEMO @
[http://timeengine.github.io](http://timeengine.github.io)
