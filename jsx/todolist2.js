
setTimeout(() => {



  (function() {
    'use strict';

    var TodoElement = function TodoElement() {
      var ClockElement = function ClockElement() {
        return __Element(__.intervalSeq(Immutable.Range(), 100).__(function() {
          return React.createElement(
            'div',
            null,
            moment().format('MMMM Do YYYY, h:mm:ss a')
          );
        }));
      };
      var __items = __(true);
      var ListElement = __Element(__([__items]).__(function() {
        return __items.map(function(item) {
          return React.createElement(
            'li',
            null,
            item
          );
        });
      }));
      var InputElement = function InputElement() {
        var __value = __();
        var onChange = function onChange(e) {
          return __value.t = e.target.value;
        };
        var onClick = function onClick() {
          return __.log.t = __items.t = __value.t;
        };
        var __seqEl = __([__value]).__(function(value) {
          return React.createElement(
            'div',
            null,
            React.createElement('input', {
              type: 'text',
              value: value,
              onChange: onChange
            }),
            React.createElement(
              'button',
              {
                onClick: onClick
              },
              'NewToDo#' + (__items.length + 1)
            )
          );
        });
        __.log.__(function() {
          return __value.t = "";
        });
        __.log.t = "started!";
        return React.createElement(
          'div',
          null,
          __Element(__seqEl)
        );
      };
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'ToDo'
        ),
        ClockElement(),
        React.createElement('p', null),
        ListElement,
        InputElement()
      );
    };
    var mount = ReactDOM.render(TodoElement(), document.getElementById('todo2'));
  })();

  //---------

}, 1000);
