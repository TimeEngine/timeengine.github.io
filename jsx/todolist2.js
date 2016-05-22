
setTimeout(() => {


  /*global React ReactDOM __ Immutable __Element*/
  (function() {
    'use strict';

    var TodoElement = function TodoElement() {
      var ClockElement = __Element(__.intervalSeq(Immutable.Range(), 100).__(function() {
        return React.createElement(
          'div',
          null,
          moment().format('MMMM Do YYYY, h:mm:ss a')
        );
      }));
      var __focusedList = __().__(function(val) {
        return __.log.t = val;
      });
      var __lists = __(true).__(function(__list) {
        __focusedList.t = __lists.length;
        return __list;
      });
      var ListofListElement = __Element(__([__lists]).__(function() {
        return __lists.map(function(list, i) {
          return React.createElement(
            'button',
            {
              onClick: function onClick() {
                return __.log.t = __focusedList.t = i;
              }
            },
            'List#' + (i + 1)
          );
        });
      }));
      var InputElement = function InputElement() {
        var __value = __();
        var onChange = function onChange(e) {
          return __value.t = e.target.value;
        };
        var onClick = function onClick() {
          __.log.t = __lists[__focusedList.t].t = __value.t;
        };
        var onClickNL = function onClickNL() {
          __lists.t = __(true); //new items-list
          __.log.t = 'newList';
        };
        var __seqEl = __([__value]).__(function(value) {
          return React.createElement(
            'div',
            null,
            React.createElement(
              'h4',
              null,
              'List#' + (__focusedList.t + 1),
              React.createElement(
                'button',
                {
                  onClick: onClickNL
                },
                'NewList'
              )
            ),
            __lists[__focusedList.t].map(function(item) {
              return React.createElement(
                'li',
                null,
                item
              );
            }),
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
              'NewToDo#' + (__lists[__focusedList.t].length + 1)
            )
          );
        });
        __.log.__(function() {
          return __value.t = "";
        });
        return __Element(__seqEl);
      };
      __lists.t = __(true); //new items-list
      (function() {
        var __delay = __.intervalSeq(Immutable.Seq.of("started!"), 1000).log().__(function() {
          return __.log.t = "showInput";
        });
      })();
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'ToDo'
        ),
        ClockElement,
        React.createElement('p', null),
        ListofListElement,
        React.createElement('p', null),
        InputElement()
      );
    };
    var mount = ReactDOM.render(TodoElement(), document.getElementById('todo2'));
  })();
  //---------

}, 1000);
