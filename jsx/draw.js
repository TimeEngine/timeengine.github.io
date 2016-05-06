
setTimeout(() => {
  console.log('onload!!');
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const __mouseDown = __();
  const __drawFrom = __();
  const __drawTo = __()
    .__(
      (val) => {
        ctx.beginPath();
        ctx.moveTo(__drawFrom.t.x, __drawFrom.t.y);
        ctx.lineTo(val.x, val.y);
        ctx.closePath();
        ctx.stroke();
        return val;
      }
  );
  canvas.onmousedown = (e) => {
    __mouseDown.t = 1;
    __drawFrom.t = {
      x: e.clientX - 37,
      y: e.clientY - 205
    };
  };
  canvas.onmouseup = (e) => {
    __mouseDown.t = 0;
  };
  canvas.onmousemove = (e) => {
    if (__mouseDown.t === 1) {
      __drawTo.t = {
        x: e.clientX - 37,
        y: e.clientY - 205
      };
      __drawFrom.t = __drawTo.t;

      __.log.t = __drawFrom.t;
    }
  };
}, 1000);
