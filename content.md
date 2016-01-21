
<div class="head">
   <div class="item"><img src="http://timeengine.github.io/images/timeengine-logo.svg" width="200"></div>
   <div class="item"><h1>TimeEngine</h1></div>
 </div>

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url][![Dependency status][david-dm-image]][david-dm-url][![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url][![npm](https://img.shields.io/npm/l/express.svg)]()

[npm-url]: https://npmjs.org/package/timeengine
[downloads-image]: http://img.shields.io/npm/dm/timeengine.svg
[npm-image]: http://img.shields.io/npm/v/timeengine.svg
[david-dm-url]:https://david-dm.org/kenokabe/timeengine
[david-dm-image]:https://david-dm.org/kenokabe/timeengine.svg
[david-dm-dev-url]:https://david-dm.org/kenokabe/timeengine#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/kenokabe/timeengine/dev-status.svg

[david-dm-dev-image]:https://david-dm.org/kenokabe/timeengine/dev-status.svg

[https://www.npmjs.com/package/timeengine](https://www.npmjs.com/package/timeengine)

[https://github.com/TimeEngine/timeengine](https://github.com/TimeEngine/timeengine)

##### TimeEngine is a tiny, simple yet versatile library that provides first class reactive components with smart dependency resolving capability in JavaScript. Built for a new programming paradigm: Dependency driven Functional Reactive Programming (DFRP).

### Install

- #### node

```bash
$ npm install timeengine
```

For Reat Programming, with [timeengine-react](https://www.npmjs.com/package/timeengine-react)

```bash
$ npm install timeengine-react
```

- #### WebBrowser CDN

[http://timeengine.github.io/cdn/timeengine.js](http://timeengine.github.io/cdn/timeengine.js)

For Reat Prograamming, with [timeengine-react](https://www.npmjs.com/package/timeengine-react)

[http://timeengine.github.io/cdn/timeengine-react.js](http://timeengine.github.io/cdn/timeengine-react.js)

 [immutable.js](https://www.npmjs.com/package/immutable) is required for timeengine.



 ### TimeEngine is Tiny

Less than 200 lines of [the source-code](https://github.com/TimeEngine/timeengine/blob/master/timeengine.es).

 ### TimeEngine is Simple

Unlike other FRP libraries, TimeEngine has only a few APis.
Therefore, very easy to learn, hack, and debug.

 ### TimeEngine is yet Versatile

So, what is TimeEngine capable of?

For instance:

- Refactor a complicated stateful [React](https://facebook.github.io/react/) code to a Damn simple statelss
code.  `Demo #1`

- Replace other complicated FRP libraries to easy TimeEngine. `Demo #2`

- Write a clean Declarative code to animate physics equations with time-sequence. `Demo #3`

- Forget to use complicated [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), and the libraries, instead, use FRP, and take advantage of simple TimeEngine API. `Demo #4`

-----

#### `Demo #1`

Timer

##### A Stateful Component (Sample Code from [the official React Site](https://facebook.github.io/react/))

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

is refactored to   with `timeengine` + `timeengine-react`:

##### A Stateless functional Element (Single statement code!!)

```js
const TimerElement = () => {
  return __Element(__
    .intervalSeq(Immutable.Range(), 1000)
    .__((count) => (__.log.t = count)) //console.log
    .__((count) => (<div>{"Timer : "}{count}</div>)));
};
```

 `.intervalSeq` is a special bridge API to map [Immutable-js](https://facebook.github.io/immutable-js/) infinite Sequence on TimeEngine infinite Sequence.

 In fact, you can create any time-sequences with rich API provided by [Immutable-js](https://facebook.github.io/immutable-js/) that is the only npm library TimeEngine depends on. With "Outsourcing" API, TimeEngine can stay simple, and programmers do not have to learn the library specific APIs from scratch, instead take advantage of accustomed, well-provided APIs by Immutable to obtain flexible power.

 In this code, [Natural number](https://en.wikipedia.org/wiki/Natural_number) is mapped with 1 second interval.

 <div id ="div0" class = "demo"/>

-----

#### `Demo #2`

Simple counter

##### [Bacon.js](https://baconjs.github.io/) + jQuery

```html
<h3> Simple counter </h3>
<div class="example">
  <div class="example-html">
    <p> <i> Behold!</i> It counts up and down as you click the buttons </p>
    <button id="up"> Up </button>
    <button id="down"> Down </button>
    <span id="counter"> 0 </span>
</div>
<button class="run">Reload</button>
```


```js
var up   = $('#up').asEventStream('click');
var down = $('#down').asEventStream('click');

var counter =
  // map up to 1, down to -1
  up.map(1).merge(down.map(-1))
  // accumulate sum
    .scan(0, function(x,y) { return x + y });

// assign observable value to jQuery property text
counter.assign($('#counter'), 'text');
// and some Reload implement Code
//..........................

```

#####  TimeEngine + React


 ```js
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
 const mount1 = ReactDOM.render(<div>{CounterElement()}</div>, document.getElementById('div1'));
 ```

<div id ="div1" class = "demo"/>

-----

#### `Demo #3`

 Physics Equations

![](http://timeengine.github.io/images/formula.png)

```js
  const PhysicsElement = () => {
    //MKS system of units
    const V0 = 90.0; // m/s
    const DEG = 45; //degree
    const THETA = DEG / 180 * Math.PI; //radian
    const G = 9.8; //gravity const
    //t seconds elapsed 10msec time resolution
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
   const mount2 = ReactDOM.render(<div>{WorldElement()}</div>, document.getElementById('div2'));
//..........................

```


<div id ="div2" class = "demo"/>

-----

#### `Demo #4`

 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

`Promise.then`

#####  Promise.then

```js
      const p = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(99);
        }, 0);
      });

      p
        .then((value) => {
          console.log(value); // 99
          return value + 1;
        })
        .then((value) => {
          console.log(value); // 100
        });
```

#####  TimeEngine code

```js
      const __p = __();
      const __p2 = __p
        .__((value) => {
          __.log.t = value; //99
          return value + 1;
        })
        .__((value) => {
          __.log.t = value; //100
          return value + 1;
        });

      const __log = __p2.log("__p2");
      __p.t = 99;
      __p.t = 999;
```


-----


`Promise.all`

#####  Promise.all

```js
      const PromiseCreateFunc = (value, time) => {
        const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(value);
          }, time);
        });
        return promise;
      };

      var promise0 = PromiseCreateFunc("aaaaa", 300);
      var promise1 = PromiseCreateFunc("bbbbb", 100);
      var promise2 = PromiseCreateFunc("ccccc", 200);
      var promiseAll = Promise.all([promise0, promise1, promise2]);

      promiseAll.then((value) => {
        console.log(value);
      });

```

#####  TimeEngine code

```js
      const __a = __
        .intervalSeq(Immutable
          .Seq.of("aaaaa"), 300);
      const __b = __
        .intervalSeq(Immutable
          .Seq.of("bbbbb"), 100);
      const __c = __
        .intervalSeq(Immutable
          .Seq.of("ccccc"), 200);

      const promiseAll = __([__a, __b, __c]);
      const __log1 = promiseAll.log();

```

-----


<script src ="./jsx/div-react.js"></script>


### TimeEngine provides first class reactive components with smart dependency resolving capability in JavaScript.


## `b = a + 1`

### Reactive Programming

What is Reactive?

### Spreadsheet

![](./images/spreadsheet.png)

### Dependency

<div id="node1" class = cyte/>
<script>
(()=>{
				 cytoscape({
					container: document.getElementById('node1'),
          boxSelectionEnabled: false,
          autounselectify: true,

          userZoomingEnabled: false,
          userPanningEnabled: false,
					layout: {
						name: 'dagre'
					},
					style: [
						{
							selector: 'node',
							style: {
								'content': 'data(id)',
								'text-opacity': 0.5,
								'text-valign': 'center',
								'text-halign': 'right',
								'background-color': '#11479e'
							}
						},
						{
							selector: 'edge',
							style: {
								'width': 4,
								'target-arrow-shape': 'triangle',
								'line-color': '#9dbaea',
								'target-arrow-color': '#9dbaea'
							}
						}
					],
					elements: {
						nodes: [
							{ data: { id: 'a' } },
							{ data: { id: 'b' } },
						],
						edges: [
							{ data: { source: 'b', target: 'a' } },
						]
					},
				});
})()
</script>


`a`'s dependency is nothing.

`b`'s dependency is `a`.


```js
const __a = __();
const __b = __([__a]).__(([a]) => (a + 1));

a.t = 1;
```

#### output
```
__a: 1
__b: 2
```

## `c = a + b`


<div id="node2" class = cyte/>
<script>
(()=>{
				 cytoscape({
					container: document.getElementById('node2'),
          boxSelectionEnabled: false,
          autounselectify: true,

          userZoomingEnabled: false,
          userPanningEnabled: false,
					layout: {
						name: 'dagre'
					},
					style: [
						{
							selector: 'node',
							style: {
								'content': 'data(id)',
								'text-opacity': 0.5,
								'text-valign': 'center',
								'text-halign': 'right',
								'background-color': '#11479e'
							}
						},
						{
							selector: 'edge',
							style: {
								'width': 4,
								'target-arrow-shape': 'triangle',
								'line-color': '#9dbaea',
								'target-arrow-color': '#9dbaea'
							}
						}
					],
					elements: {
						nodes: [
							{ data: { id: 'a' } },
							{ data: { id: 'b' } },
              { data: { id: 'c' } },
						],
						edges: [
							{ data: { source: 'c', target: 'a' } },
            	{ data: { source: 'c', target: 'b' } },
						]
					},
				});
})()
</script>

`a`'s dependency is nothing.

`b`'s dependency is nothing.

`c`'s dependency is `a` and `b`.


```js
const __a = __();
const __b = __();
const __c = __([__a, __b]).__(([a, b]) => (a + b));

const __log1 = __a.log("__a");
const __log2 = __b.log("__b");
const __log3 = __c.log("__c");

__a.t = 2;
__b.t = 3;
```

#### output

```
__a: 2
__b: 3
__c: 5
```

##  Physics Equations

![](http://timeengine.github.io/images/formula.png)


<div id="node3" class = cyte2/>
<script>
(()=>{
				 cytoscape({
					container: document.getElementById('node3'),
          boxSelectionEnabled: false,
          autounselectify: true,

          userZoomingEnabled: false,
          userPanningEnabled: false,
					layout: {
						name: 'dagre'
					},
					style: [
						{
							selector: 'node',
							style: {
								'content': 'data(id)',
								'text-opacity': 0.5,
								'text-valign': 'center',
								'text-halign': 'right',
								'background-color': '#11479e'
							}
						},
						{
							selector: 'edge',
							style: {
								'width': 4,
								'target-arrow-shape': 'triangle',
								'line-color': '#9dbaea',
								'target-arrow-color': '#9dbaea'
							}
						}
					],
					elements: {
						nodes: [
							{ data: { id: 't' } },
							{ data: { id: 'x' } },
              { data: { id: 'y' } },
              { data: { id: '[x, y]' } },
						],
						edges: [
							{ data: { source: 'x', target: 't' } },
            	{ data: { source: 'y', target: 't' } },
              { data: { source: '[x, y]', target: 'x' } },
            	{ data: { source: '[x, y]', target: 'y' } },
						]
					},
				});
})()
</script>

#### Define the "time-flow" as a sequence, as a reactive value

A time-sequence, `t` that has 10mil seconds interval = resolution of the time.

`t` depends on **time of our real world**.

```js
const t = __
      .intervalSeq(Immutable.Range(), 10)
      .__((count) => (count * 10 / 1000));
```

#### Equations for `x` and `y` depend on `t`

```js
const x = __([t]).__(([t]) => V0 * Math.cos(THETA) * t);
const y = __([t]).__(([t]) => V0 * Math.sin(THETA) * t - 1 / 2 * G * Math.pow(t, 2));
```

#### Cordinate `[x, y]` is to be updated synchronously (atomic update)

```js
 __([x, y]) //atomic update
```

The code:

```js
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
```

### Sequence has update cycle

Dependencies are resolved on every `t` update cycle.

### Dependencies are updated in non-interference way


<div id="node4" class = cyte2/>
<script>
(()=>{
				 cytoscape({
					container: document.getElementById('node4'),
          boxSelectionEnabled: false,
          autounselectify: true,

          userZoomingEnabled: false,
          userPanningEnabled: false,
					layout: {
						name: 'dagre'
					},
					style: [
						{
							selector: 'node',
							style: {
								'content': 'data(id)',
								'text-opacity': 0.5,
								'text-valign': 'center',
								'text-halign': 'right',
								'background-color': '#11479e'
							}
						},
						{
							selector: 'edge',
							style: {
								'width': 4,
								'target-arrow-shape': 'triangle',
								'line-color': '#9dbaea',
								'target-arrow-color': '#9dbaea'
							}
						}
					],
					elements: {
						nodes: [
							{ data: { id: 'a' } },
							{ data: { id: 'b' } },
              { data: { id: 'c' } },
              { data: { id: 'ab' } },
              { data: { id: 'bc' } },
						],
						edges: [
							{ data: { source: 'ab', target: 'a' } },
            	{ data: { source: 'ab', target: 'b' } },
              { data: { source: 'bc', target: 'b' } },
            	{ data: { source: 'bc', target: 'c' } },
						]
					},
				});
})()
</script>

```js
const __a = __();
const __b = __();
const __c = __();

const __ab = __([__a, __b]).__(([a, b]) => (a * b));
const __bc = __([__b, __c]).__(([b, c]) => (b * c));

const __log1 = __a.log("__a");
const __log2 = __b.log("__b");
const __log3 = __c.log("__c");
const __log4 = __ab.log("__ab");
const __log5 = __bc.log("__bc");

__a.t = 2;
__b.t = 3; //__b update is managed in non-interference way
__c.t = 5;

```

#### output

```
__a: 2
__b: 3
__ab: 6
__c: 5
__bc: 15

```


### Complicated Dependencies resolution capability


<div id="node5" class = cyte3/>
<script>
(()=>{
				 cytoscape({
					container: document.getElementById('node5'),
          boxSelectionEnabled: false,
          autounselectify: true,

          userZoomingEnabled: false,
          userPanningEnabled: false,
					layout: {
						name: 'dagre'
					},
					style: [
						{
							selector: 'node',
							style: {
								'content': 'data(id)',
								'text-opacity': 0.5,
								'text-valign': 'center',
								'text-halign': 'right',
								'background-color': '#11479e'
							}
						},
						{
							selector: 'edge',
							style: {
								'width': 4,
								'target-arrow-shape': 'triangle',
								'line-color': '#9dbaea',
								'target-arrow-color': '#9dbaea'
							}
						}
					],
					elements: {
						nodes: [
							{ data: { id: 'a' } },
							{ data: { id: 'b' } },
              { data: { id: 'c' } },
              { data: { id: 'd' } },
              { data: { id: 'e' } },
              { data: { id: 'atomic' } },
						],
						edges: [
							{ data: { source: 'b', target: 'a' } },
            	{ data: { source: 'c', target: 'a' } },
              { data: { source: 'c', target: 'b' } },
            	{ data: { source: 'd', target: 'b' } },
              { data: { source: 'e', target: 'a' } },
              { data: { source: 'e', target: 'b' } },
              { data: { source: 'e', target: 'c' } },
              { data: { source: 'e', target: 'd' } },

              { data: { source: 'atomic', target: 'a' } },
              { data: { source: 'atomic', target: 'b' } },
              { data: { source: 'atomic', target: 'c' } },
              { data: { source: 'atomic', target: 'd' } },
              { data: { source: 'atomic', target: 'e' } },
						]
					},
				});
})()
</script>

```js
const __a = __();
const __b = __([__a]).__(([a]) => a * 2);
const __c = __([__a, __b]).__(([a, b]) => a + b * 3);
const __d = __([__b]).__(([b]) => b * 100);
const __e = __([__a, __b, __c, __d])
  .__(([a, b, c, d]) => a + b + c + d);
const __atomic = __([__a, __b, __c, __d, __e]);

const __log1 = __a.log('__a');
const __log2 = __b.log('__b'); // b.t = 1 * 2 = 2
const __log3 = __c.log('__c'); // c.t = 1 + 2 * 3 = 7
const __log4 = __d.log('__d'); // d.t = 2 * 100 = 200
const __log5 = __e.log('__e'); //210
const __log6 = __atomic.log('__atomic');

__a.t = 1; // the whole val will be updated
__a.t = 2;
```

#### output

```
__a: 1
__b: 2
__c: 7
__d: 200
__e: 210
__atomic: [ 1, 2, 7, 200, 210 ]
__a: 2
__b: 4
__c: 14
__d: 400
__e: 420
__atomic: [ 2, 4, 14, 400, 420 ]
```

### Sanity check to prevent to set a value on Sequence that depends on other sequences

```js
__b.t = 99;
```

#### output

```
ERROR! cannot set a value on sequence that depends on other sequences
```

-----

## API

TimeEngine has only a few api, so easy to learn.

### Top level API

#### `__([dependentSeqs][, store])`

Constructor of TimeEngine `Seq`

- `dependentSeqs` Array
- `store` Boolean

#### `__.intervalSeq(Immutable.Seq, interval)`

Constructor of TimeEngine `Seq` that depends on time of real world with an interval of `interval`.

- `Immutable.Seq` [Immutable Seq](https://facebook.github.io/immutable-js/docs/#/Seq)  
- `interval` Number

#### `__.log.t = val`

Show log `val`

- `val` Object


### Sequence level API

#### `Seq.__(function)`

Attach function that is evaluated when the sequence dependencies are fulfilled.

- `function` Function

seq.eqs = [f1, f2, f3];

seq.t => f1 => f2=> f3=> seq.valOnT


```
seq.evalEqs = (val) => {
      seq.eqs.map((eq) => (val = eq(val)));
      return val;
    };

seq.valOnT = seq.evalEqs(tval);
```

#### `Seq.log([val])`

Show log `val` and TimeEngine `Seq`.

- `val` Object
