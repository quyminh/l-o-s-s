var canvas = document.getElementById('myCanvas');
if (canvas.getContext) 
 {
  var ctx = canvas.getContext("2d");
     for (i = 2; i < 800; i += 398) 
	     {
		   ctx.moveTo(0, i);
		   ctx.lineTo(canvas.width, i);
		   ctx.stroke();
		  }
     for (i = 2; i <800; i += 398) 
	     {
		   ctx.moveTo(i, 0);
		   ctx.lineTo(i,canvas.height);
		   ctx.stroke();
		  }
  } 
  ctx.lineWidth=10;
  ctx.moveTo(150, 100);
  ctx.lineTo(150, 300);
  ctx.stroke();

  ctx.moveTo(500, 100);
  ctx.lineTo(500, 300);
  ctx.stroke();
  ctx.moveTo(700, 100);
  ctx.lineTo(700, 300);
  ctx.stroke();

  ctx.moveTo(150, 500);
  ctx.lineTo(150, 700);
  ctx.stroke();
  ctx.moveTo(350, 500);
  ctx.lineTo(350, 750);
  ctx.stroke();


  ctx.moveTo(500, 500);
  ctx.lineTo(500, 700);
  ctx.stroke();
  ctx.moveTo(550, 700);
  ctx.lineTo(750, 700);
  ctx.stroke();