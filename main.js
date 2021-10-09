canvas = document.getElementById("my_canvas");
ctx = canvas.getContext ("2d");

ctx.beginPath ();
ctx.strokestyle = "grey";
ctx.linewidth = 4;
ctx.rect (150, 143, 430,200);
ctx.stroke();

ctx.beginPath ();
ctx.strokestyle = "blue";
ctx.linewidth = 5;
ctx.arc (200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath ();
ctx.strokestyle = "blue";
ctx.linewidth = 5;
ctx.arc (250, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath ();
ctx.strokestyle = "blue";
ctx.linewidth = 5;
ctx.arc (300, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath ();
ctx.strokestyle = "blue";
ctx.linewidth = 5;
ctx.arc (350, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath ();
ctx.strokestyle = "blue";
ctx.linewidth = 5;
ctx.arc (400, 200, 40, 0, 2 * Math.PI);
ctx.stroke();