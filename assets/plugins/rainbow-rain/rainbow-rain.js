/* ==============================================
 * Rainbow Rain
 * Copyright (c) 2017 by Matei Copot (http://codepen.io/towc/pen/VYbYvQ)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * =============================================*/
var w = c.width = window.innerWidth,
	h = c.height = window.innerHeight,
	ctx = c.getContext('2d'),
	total = w,
	accelleration = .05,
	size = w/total,
	occupation = w/total,
	repaintColor = 'rgba(0, 0, 0, .04)'
	colors = [],
	dots = [],
	dotsVel = [];
var portion = 360/total;
for(var i = 0; i < total; ++i){
  colors[i] = portion * i;
  
  dots[i] = h;
  dotsVel[i] = 10;
}

function anim(){
  window.requestAnimationFrame(anim);
  
  ctx.fillStyle = repaintColor;
  ctx.fillRect(0, 0, w, h);
  
  for(var i = 0; i < total; ++i){
	var currentY = dots[i] - 1;
	dots[i] += dotsVel[i] += accelleration;
	
	ctx.fillStyle = 'hsl('+ colors[i] + ', 80%, 50%)';
	ctx.fillRect(occupation * i, currentY, size, dotsVel[i] + 1);
	
	if(dots[i] > h && Math.random() < .01){
	  dots[i] = dotsVel[i] = 0;
	}
  }
}

anim();