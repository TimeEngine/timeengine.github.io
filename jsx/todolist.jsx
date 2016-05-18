(() => {
  'use strict';
  const TodoElement = () => {
    const ClockElement = __Element(__
      .intervalSeq(Immutable.Range(), 100)
      .__(() => (<div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>)));
    const __items = __(true);
    const ListElement = __Element(__([__items])
      .__(() => ((__items).map((item) => (<li>{item}</li>)))));
    const InputElement = () => {
      const __value = __();
      const onChange = (e) => (__value.t = e.target.value);
      const onClick = () => (__.log.t = __items.t = __value.t);
      const __seqEl = __([__value])
        .__((value) => (<div>
        <input type="text" value={value} onChange={onChange}/>
        <button onClick = {onClick}>{'NewToDo#' + (__items.length + 1)}</button></div>));
      __.log.__(() => (__value.t = ""));
      __.log.t = "started!";
      return (<div>{__Element(__seqEl)}</div>);
    };
    return (<div><h2>ToDo</h2>
      {ClockElement}<p/>
      {ListElement}
      {InputElement()}</div>);
  };
  const mount = ReactDOM.render(TodoElement(), document.getElementById('container'));
})();
