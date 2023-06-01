/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={718:(t,e,n)=>{var o,i=function(t,e){"use strict";var n,o={};function i(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}return(n=function(){var t=this;t.defaults={responsive:null,selector:null,maxParticles:100,sizeVariations:3,showParticles:!0,speed:.5,color:"#000000",minDistance:120,connectParticles:!1},t.element=null,t.context=null,t.ratio=null,t.breakpoints=[],t.activeBreakpoint=null,t.breakpointSettings=[],t.originalSettings=null,t.storage=[],t.usingPolyfill=!1}).prototype.init=function(t){var e=this;return e.options=e._extend(e.defaults,t),e.originalSettings=JSON.parse(JSON.stringify(e.options)),e._animate=e._animate.bind(e),e._initializeCanvas(),e._initializeEvents(),e._registerBreakpoints(),e._checkResponsive(),e._initializeStorage(),e._animate(),e},n.prototype.destroy=function(){var e=this;e.storage=[],e.element.remove(),t.removeEventListener("resize",e.listener,!1),t.clearTimeout(e._animation),cancelAnimationFrame(e._animation)},n.prototype._initializeCanvas=function(){var n,o,i=this;if(!i.options.selector)return console.warn("particles.js: No selector specified! Check https://github.com/marcbruederlin/particles.js#options"),!1;i.element=e.querySelector(i.options.selector),i.context=i.element.getContext("2d"),n=t.devicePixelRatio||1,o=i.context.webkitBackingStorePixelRatio||i.context.mozBackingStorePixelRatio||i.context.msBackingStorePixelRatio||i.context.oBackingStorePixelRatio||i.context.backingStorePixelRatio||1,i.ratio=n/o,i.element.width=i.element.offsetParent?i.element.offsetParent.clientWidth*i.ratio:i.element.clientWidth*i.ratio,i.element.offsetParent&&"BODY"===i.element.offsetParent.nodeName?i.element.height=t.innerHeight*i.ratio:i.element.height=i.element.offsetParent?i.element.offsetParent.clientHeight*i.ratio:i.element.clientHeight*i.ratio,i.element.style.width="100%",i.element.style.height="100%",i.context.scale(i.ratio,i.ratio)},n.prototype._initializeEvents=function(){var e=this;e.listener=function(){e._resize()}.bind(this),t.addEventListener("resize",e.listener,!1)},n.prototype._initializeStorage=function(){var t=this;t.storage=[];for(var e=t.options.maxParticles;e--;)t.storage.push(new o(t.context,t.options))},n.prototype._registerBreakpoints=function(){var t,e,n,o=this,i=o.options.responsive||null;if("object"==typeof i&&null!==i&&i.length){for(t in i)if(n=o.breakpoints.length-1,e=i[t].breakpoint,i.hasOwnProperty(t)){for(;n>=0;)o.breakpoints[n]&&o.breakpoints[n]===e&&o.breakpoints.splice(n,1),n--;o.breakpoints.push(e),o.breakpointSettings[e]=i[t].options}o.breakpoints.sort((function(t,e){return e-t}))}},n.prototype._checkResponsive=function(){var e,n=this,o=!1,i=t.innerWidth;if(n.options.responsive&&n.options.responsive.length&&null!==n.options.responsive){for(e in o=null,n.breakpoints)n.breakpoints.hasOwnProperty(e)&&i<=n.breakpoints[e]&&(o=n.breakpoints[e]);null!==o?(n.activeBreakpoint=o,n.options=n._extend(n.options,n.breakpointSettings[o])):null!==n.activeBreakpoint&&(n.activeBreakpoint=null,o=null,n.options=n._extend(n.options,n.originalSettings))}},n.prototype._refresh=function(){this._initializeStorage(),this._draw()},n.prototype._resize=function(){var e=this;e.element.width=e.element.offsetParent?e.element.offsetParent.clientWidth*e.ratio:e.element.clientWidth*e.ratio,e.element.offsetParent&&"BODY"===e.element.offsetParent.nodeName?e.element.height=t.innerHeight*e.ratio:e.element.height=e.element.offsetParent?e.element.offsetParent.clientHeight*e.ratio:e.element.clientHeight*e.ratio,e.context.scale(e.ratio,e.ratio),clearTimeout(e.windowDelay),e.windowDelay=t.setTimeout((function(){e._checkResponsive(),e._refresh()}),50)},n.prototype._animate=function(){var e=this;e._draw(),e._animation=t.requestAnimFrame(e._animate)},n.prototype.resumeAnimation=function(){this._animation||this._animate()},n.prototype.pauseAnimation=function(){var e=this;e._animation&&(e.usingPolyfill?t.clearTimeout(e._animation):(t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame)(e._animation),e._animation=null)},n.prototype._draw=function(){var e=this,n=e.element,o=n.offsetParent?n.offsetParent.clientWidth:n.clientWidth,r=n.offsetParent?n.offsetParent.clientHeight:n.clientHeight,a=e.options.showParticles,s=e.storage;n.offsetParent&&"BODY"===n.offsetParent.nodeName&&(r=t.innerHeight),e.context.clearRect(0,0,n.width,n.height),e.context.beginPath();for(var l=s.length;l--;){var c=s[l];a&&c._draw(),c._updateCoordinates(o,r)}e.options.connectParticles&&(s.sort(i),e._updateEdges())},n.prototype._updateEdges=function(){for(var t=this,e=t.options.minDistance,n=Math.sqrt,o=Math.abs,i=t.storage,r=i.length,a=0;a<r;a++)for(var s=i[a],l=a+1;l<r;l++){var c,p=i[l],u=s.x-p.x,d=s.y-p.y;if(c=n(u*u+d*d),o(u)>e)break;c<=e&&t._drawEdge(s,p,1.2-c/e)}},n.prototype._drawEdge=function(t,e,n){var o=this,i=o.context.createLinearGradient(t.x,t.y,e.x,e.y),r=this._hex2rgb(t.color),a=this._hex2rgb(e.color);i.addColorStop(0,"rgba("+r.r+","+r.g+","+r.b+","+n+")"),i.addColorStop(1,"rgba("+a.r+","+a.g+","+a.b+","+n+")"),o.context.beginPath(),o.context.strokeStyle=i,o.context.moveTo(t.x,t.y),o.context.lineTo(e.x,e.y),o.context.stroke(),o.context.fill(),o.context.closePath()},n.prototype._extend=function(t,e){return Object.keys(e).forEach((function(n){t[n]=e[n]})),t},n.prototype._hex2rgb=function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null},(o=function(n,o){var i=this,r=Math.random,a=o.speed,s=o.color instanceof Array?o.color[Math.floor(Math.random()*o.color.length)]:o.color;i.context=n,i.options=o;var l=e.querySelector(o.selector);i.x=l.offsetParent?r()*l.offsetParent.clientWidth:r()*l.clientWidth,l.offsetParent&&"BODY"===l.offsetParent.nodeName?i.y=r()*t.innerHeight:i.y=l.offsetParent?r()*l.offsetParent.clientHeight:r()*l.clientHeight,i.vx=r()*a*2-a,i.vy=r()*a*2-a,i.radius=r()*r()*o.sizeVariations,i.color=s,i._draw()}).prototype._draw=function(){var t=this;t.context.save(),t.context.translate(t.x,t.y),t.context.moveTo(0,0),t.context.beginPath(),t.context.arc(0,0,t.radius,0,2*Math.PI,!1),t.context.fillStyle=t.color,t.context.fill(),t.context.restore()},o.prototype._updateCoordinates=function(t,e){var n=this,o=n.x+this.vx,i=n.y+this.vy,r=n.radius;o+r>t?o=r:o-r<0&&(o=t-r),i+r>e?i=r:i-r<0&&(i=e-r),n.x=o,n.y=i},t.requestAnimFrame=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||(this._usingPolyfill=!0,function(e){return t.setTimeout(e,1e3/60)})}(),new n}(window,document);!function(){"use strict";void 0===(o=function(){return i}.call(e,n,e,t))||(t.exports=o)}()}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}(()=>{const t=n(718);let e="london";window.onload=()=>{t.init({selector:".background",color:"#8f8f8f"})},console.log(document.querySelector("background"));const o=t=>{console.log(t),document.body.style.backgroundColor=1==t?"darkblue":"#111"},i=()=>{fetch("https://api.weatherapi.com/v1/current.json?key=36f4a3d137f24937afe84601230106&q="+e).then((function(t){return t.json()})).then((function(t){let n=t.location.name,a=t.current.condition.text,s=t.current.condition.icon,l=t.current.temp_c,c=t.current.temp_f,p=t.location.region,u=t.current.is_day;console.log(t),r(n,a,s,l,c,p),o(u),(()=>{const t=document.getElementById("input");document.getElementById("submit").addEventListener("click",(n=>{n.preventDefault(),t.value&&(e=t.value.toLowerCase(),console.log(e),deleteData(),i(),o())}))})()})).catch((function(t){console.log("Error")}))},r=(t,e,n,o,i,r)=>{let a=`\n                        <div class="container-fluid">\n                           <div class="row">\n                           <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">\n                           <h1>${t}</h1>\n                           <p>${r}</p>\n                           <div class="input-group">\n                           <input  id="input" type="search" class="form-control rounded" placeholder="Search for a city ..." aria-label="Search" aria-describedby="search-addon" />\n                           <button id="submit" type="button" class="btn btn-outline-primary">Submit</button>\n                            </div>\n                            </div>\n                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">\n                            <h4><img src="https:${n}" alt="icon">${e}</h4>\n                            </div>\n                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">\n                            <h1>${o}°C</h1>\n                            <hr>\n                            <h1>${i}°F</h1>\n                            </div>\n                           </div>\n                         </div>\n\n\n                        \n                        `;const s=document.querySelector("body"),l=document.createElement("div");l.classList.add("wrapper"),s.appendChild(l),l.innerHTML=a};deleteData=()=>{document.querySelector("body").innerHTML=""},i()})()})();