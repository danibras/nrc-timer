(this["webpackJsonpnrc-timer"]=this["webpackJsonpnrc-timer"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var i=n(2),s=n.n(i),a=n(9),r=n.n(a),c=(n(17),n(4)),l=n(5),o=n(7),u=n(6),h=n.p+"static/media/nikeLogo.bcc7aa38.png",d=(n(18),n(3)),v=n(0);function p(e){return Object(v.jsx)("div",{className:"flex justify-items-center",children:Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-20 w-20 flex-1",viewBox:"0 0 20 20",fill:"currentColor",onClick:e.onClick,children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",clipRule:"evenodd"})})})}function b(e){return Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-20 w-20 flex-1",viewBox:"0 0 20 20",fill:"currentColor",onClick:e.onClick,children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})}function j(e){return Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-20 w-20 flex-1",viewBox:"0 0 20 20",fill:"currentColor",onClick:e.onClick,children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",clipRule:"evenodd"})})}var m=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).handleStartClick=i.handleStart.bind(Object(d.a)(i)),i.handlePauseClick=i.handlePause.bind(Object(d.a)(i)),i.handleStopClick=i.handleStop.bind(Object(d.a)(i)),i.state={isRunning:e.isRunning},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"handleStart",value:function(){this.setState({isRunning:!0}),this.props.setRunning(!0)}},{key:"handlePause",value:function(){this.setState({isRunning:!1}),this.props.setRunning(!1)}},{key:"handleStop",value:function(){this.setState({isRunning:!1}),this.props.setRunning(!1)}},{key:"render",value:function(){var e;return e=this.state.isRunning?Object(v.jsxs)("div",{className:"flex justify-items-center",children:[" ",Object(v.jsx)(b,{onClick:this.handlePauseClick})," ",Object(v.jsx)(j,{onClick:this.handleStopClick})]}):Object(v.jsx)(p,{onClick:this.handleStartClick}),Object(v.jsx)("div",{className:"fixed bottom-0 inset-x-0 p-5",children:e})}}]),n}(s.a.Component),x=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).handleSave=i.handleSave.bind(Object(d.a)(i)),i.handleMinutesChange=i.handleMinutesChange.bind(Object(d.a)(i)),i.handleSecondsChange=i.handleSecondsChange.bind(Object(d.a)(i)),i.handleDescriptionChange=i.handleDescriptionChange.bind(Object(d.a)(i)),i.state={minutes:0,seconds:0,description:""},i}return Object(l.a)(n,[{key:"handleMinutesChange",value:function(e){this.setState({minutes:parseInt(e.target.value)})}},{key:"handleSecondsChange",value:function(e){this.setState({seconds:parseInt(e.target.value)})}},{key:"handleDescriptionChange",value:function(e){this.setState({description:e.target.value})}},{key:"handleSave",value:function(){this.props.handleSave(this.state)}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"flex justify-center items-center",children:Object(v.jsxs)("div",{className:"py-12 px-12 bg-white rounded-2xl shadow-xl z-20",children:[Object(v.jsxs)("div",{className:"space-y-4",children:[Object(v.jsx)("input",{type:"number",min:"0",max:"60",onChange:this.handleMinutesChange,defaultValue:this.props.minutes,placeholder:"MM",className:"text-sm py-3 px-4 mr-2.5 rounded-lg w-5/12 border outline-none"}),":",Object(v.jsx)("input",{type:"number",min:"0",max:"60",onChange:this.handleSecondsChange,defaultValue:this.props.seconds,placeholder:"SS",className:"text-sm py-3 px-4 ml-2.5 rounded-lg w-5/12 border outline-none"}),Object(v.jsx)("input",{type:"text",onChange:this.handleDescriptionChange,placeholder:this.props.description,className:"text-sm py-3 px-4 rounded-lg w-11/12 border outline-none"})]}),Object(v.jsx)("div",{className:"text-center mt-6",children:Object(v.jsx)("button",{className:"py-3 w-64 text-xl text-white bg-black rounded-2xl",onClick:this.handleSave,children:"Save"})})]})})}}]),n}(i.Component);function g(e){return Object(v.jsxs)("button",{className:"bg-black text-white w-4/5 my-4 py-3 px-4 rounded-lg shadow-sm disabled:opacity-40",disabled:e.disabled,onClick:e.onClick,children:[console.log("interval",!e.disabled),"New Interval"]})}var f=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).showPopUp=i.showPopUp.bind(Object(d.a)(i)),i.hidePopUp=i.hidePopUp.bind(Object(d.a)(i)),i.handleSave=i.handleSave.bind(Object(d.a)(i)),console.log("ffffff"),i.state={intervals:e.intervals,viewPopUp:!1,isRunning:e.isRunning},i}return Object(l.a)(n,[{key:"showPopUp",value:function(){this.setState({viewPopUp:!0})}},{key:"hidePopUp",value:function(){this.setState({viewPopUp:!1})}},{key:"handleSave",value:function(e){this.hidePopUp();var t=this.state.intervals;t.push({key:this.state.intervals.length+1,goalTime:e.minutes+":"+e.seconds,currentTime:60*e.minutes+e.seconds,description:e.description}),this.setState({intervals:t}),this.props.updateIntervals(this.state.intervals)}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(g,{onClick:this.showPopUp,disabled:this.props.isRunning}),this.state.viewPopUp?Object(v.jsx)(x,{minutes:"00",seconds:"00",description:"Description",handleSave:this.handleSave}):""]})}}]),n}(s.a.Component),O=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).timeFormater=i.timeFormater.bind(Object(d.a)(i)),i.state={originalTime:e.currentTime.valueOf(),currentTime:e.currentTime,description:e.description,speech:null,isRunning:!1},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onRef(this);var e=new SpeechSynthesisUtterance;e.lang="pt-PT",e.volume=1,this.setState({speech:e}),this.runTimer()}},{key:"runTimer",value:function(){var e=this;window.setInterval((function(){var t=e.state.currentTime;e.state.isRunning&&(t>0?e.setState({currentTime:t-1}):e.props.incrementCurrentInterval())}),1e3)}},{key:"startTimer",value:function(){if(this.setState({isRunning:!0}),this.state.originalTime===this.state.currentTime){var e=this.state.speech;e.text=this.state.description,window.speechSynthesis.speak(e)}}},{key:"pauseTimer",value:function(){this.setState({isRunning:!1})}},{key:"timeFormater",value:function(){var e=this.state.currentTime,t=~~e%60,n="";return n+=~~(e%3600/60)+":"+(t<10?"0":""),n+=""+t}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"flex items-center bg-white border-b-2 border-gray-200 dark:bg-black",children:[Object(v.jsx)("div",{className:"py-3 px-8 border-r w-1/3",children:Object(v.jsx)("p",{className:"mb-2 text-sm font-medium text-black",children:this.timeFormater()})}),Object(v.jsx)("div",{className:"w-2/3",children:Object(v.jsx)("p",{className:"mb-2 text-sm text-center font-medium text-black",children:this.state.description})}),Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(v.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(v.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})]})}}]),n}(i.Component),k=n(10),w=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={isRunning:!1,intervals:[],currentInterval:0},i}return Object(l.a)(n,[{key:"updateRunning",value:function(e){this.setState({isRunning:e}),e?this["interval".concat(this.state.currentInterval)].startTimer():this["interval".concat(this.state.currentInterval)].pauseTimer()}},{key:"updateIntervals",value:function(e){this.setState({intervals:e})}},{key:"incrementCurrentInterval",value:function(){this.updateRunning(!1),navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,this.state.intervals.length-this.state.currentInterval>1?(this.setState({currentInterval:this.state.currentInterval+1}),this.updateRunning(!0),navigator.vibrate(500)):(this.startNstop.handleStop(),navigator.vibrate([500,500,500,500,600]))}},{key:"render",value:function(){var e=this,t=this.state.intervals,n=[];return t&&t.map((function(t,i){n.push(Object(v.jsx)(O,{onRef:function(t){return e["interval".concat(i)]=t},currentTime:t.currentTime,description:t.description,incrementCurrentInterval:e.incrementCurrentInterval.bind(e)},i))})),Object(v.jsxs)("div",{className:"App h-full",children:[Object(v.jsx)(k.a,{children:Object(v.jsx)("title",{children:"NRC Timer"})}),Object(v.jsx)("header",{children:Object(v.jsx)("div",{className:"flex-1 flex flex-col",children:Object(v.jsxs)("nav",{className:"px-4 flex justify-center bg-black h-16 border-b-2",children:[Object(v.jsx)("ul",{className:"flex items-center",children:Object(v.jsx)("li",{className:"h-4 w-8",children:Object(v.jsx)("img",{className:"h-full w-full mx-auto",src:h,alt:"svelte logo"})})}),Object(v.jsx)("ul",{className:"flex items-center",children:Object(v.jsx)("li",{children:Object(v.jsx)("h1",{className:"pl-6 lg:pl-0 text-white",children:"Intervals Timer"})})})]})})}),console.log("app",this.state.isRunning),Object(v.jsx)(f,{intervals:this.state.intervals,isRunning:this.state.isRunning,updateIntervals:this.updateIntervals.bind(this)}),Object(v.jsx)("div",{className:"overflow-auto max-h-36rem",children:n}),Object(v.jsx)(m,{isRunning:this.state.isRunning,setRunning:this.updateRunning.bind(this),onRef:function(t){return e.startNstop=t}})]})}}]),n}(i.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),s(e),a(e),r(e)}))};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(w,{state:"false"})}),document.getElementById("root")),C()}},[[23,1,2]]]);
//# sourceMappingURL=main.7986c217.chunk.js.map