
setTimeout(() => {

  var TodoElement = function TodoElement() {
    var ClockElement = __Element(__.intervalSeq(Immutable.Range(), 100).__(function() {
      return React.createElement(
        'div',
        null,
        moment().format('MMMM Do YYYY, h:mm:ss a')
      );
    }));
    var __fdList = __().__(function(val) {
      return __.log.t = val;
    });
    var __lists = __(true).__(function(__list) {
      return __fdList.t = __lists.length;
    });
    var ListofListElement = __Element(__([__lists]).__(function() {
      return __lists.map(function(list, i) {
        return React.createElement(
          'button',
          {
            onClick: function onClick() {
              return __.log.t = __fdList.t = i;
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
        return __.log.t = __lists[__fdList.t].t = __value.t;
      };
      var onClickNL = function onClickNL() {
        return __.log.t = __lists.t = __(true);
      };
      var __seqEl = __([__value]).__(function(value) {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h4',
            null,
            'List#' + (__fdList.t + 1),
            React.createElement(
              'button',
              {
                onClick: onClickNL
              },
              'NewList'
            )
          ),
          __lists[__fdList.t].map(function(item) {
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
            'NewToDo#' + (__lists[__fdList.t].length + 1)
          )
        );
      });
      __.log.__(function() {
        return __value.t = "";
      });
      return __Element(__seqEl);
    };
    __lists.t = __(true); //new items-list
    var __delay = __.intervalSeq(Immutable.Seq.of("started!"), 1000).__(function() {
      return __.log.t = "showInput";
    });
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
  var mount = ReactDOM.render(TodoElement(), document.getElementById('todo'));
  //---------

}, 1000);
