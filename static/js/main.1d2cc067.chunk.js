(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),s=n.n(r),i=(n(12),n(13),n(14),n(3)),c=n(4),u=n(6),l=n(5),m=[{id:1,question:"Which animal have the biggest eyes of any living creature ?",options:["Unicorn","Horse","Earwigs","Owl"],correctAnswer:"Horse"},{id:2,question:"What big cat is also known as the panther ?",options:["Turttle","Cat","Leopard","Lion"],correctAnswer:"Leopard"},{id:3,question:"What food makes up nearly all of a Giant Panda\u2019s diet ?",options:["Bamboo","Peanuts","Rose","Grass"],correctAnswer:"Bamboo"},{id:4,question:"What animal does not drink water ?",options:["A goat rat","A kangaroo rat","A owl rat","A dragon rat"],correctAnswer:"A kangaroo rat"},{id:5,question:" What kind of animal is a komodo dragon ?",options:["Lizard","Bat","Liger","Sheep"],correctAnswer:"Lizard"},{id:6,question:"Which bird has the largest wingspan of any living bird ?",options:["The flying albatross","The wandering albatross","The small albatross","The big albatross"],correctAnswer:"The wandering albatross"},{id:7,question:"What is a male swan called ?",options:["cob","kangaroo","proboscis","butterfly"],correctAnswer:"cob"},{id:8,question:"What type of animal is a basenji ?",options:["Sheep","The hippopotamus","Hunting dog","The ostrich"],correctAnswer:"Hunting dog"},{id:9,question:"What do you call a group of Kangeroos ?",options:["Pack","Troop","Army","Group"],correctAnswer:"Troop"},{id:10,question:"What Animal Is A Skua ?",options:["Cat","Bird","Mouse","Dog"],correctAnswer:"Bird"}];function d(e){var t=e.questions;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("h5",{className:"question text-center"},t))))}function h(e){var t=e.options,n=e.answer;return o.a.createElement("div",{className:"container"},t.map((function(e,t){return o.a.createElement("div",{className:"row",key:t},o.a.createElement("div",{className:"col-sm-12 my-2"},o.a.createElement("button",{onClick:function(){return n(e)},className:"button"},e)))})))}function p(e){var t=e.currentQuestion,n=e.score,a=e.animals;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col my-3"},o.a.createElement("p",null,"Questions: ",t+1," / ",a)),o.a.createElement("div",{className:"col my-3"},o.a.createElement("p",null,"Score: ",n))))}var w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={userAnswer:null,currentQuestion:0,options:[],score:0,time:10,quizEnd:!1},e.loadQuiz=function(){var t=e.state.currentQuestion;e.setState({questions:m[t].question,options:m[t].options,correctAnswer:m[t].correctAnswer})},e.answer=function(t){var n=e.state.score;e.state.correctAnswer===t?e.setState({currentQuestion:e.state.currentQuestion+1,score:n+10}):e.setState({currentQuestion:e.state.currentQuestion+1,score:n+0}),e.state.currentQuestion===m.length-1&&e.setState({currentQuestion:e.state.currentQuestion-1,quizEnd:!0})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.loadQuiz()}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.currentQuestion;this.state.currentQuestion!==t.currentQuestion&&this.setState((function(){return{questions:m[n].question,options:m[n].options,correctAnswer:m[n].correctAnswer}}))}},{key:"render",value:function(){var e=this.state,t=e.questions,n=e.options,a=e.score,r=e.currentQuestion;return e.quizEnd?o.a.createElement("div",{className:"container box"},o.a.createElement("div",{className:"row "},o.a.createElement("div",{className:"col text-center"},o.a.createElement("h1",null,"Quiz is Finish"),o.a.createElement("p",null,"Your score is 100 / ",a)))):o.a.createElement("div",{className:"container text-center"},o.a.createElement(p,{score:a,currentQuestion:r,animals:m.length}),o.a.createElement(d,{questions:t}),o.a.createElement(h,{answer:this.answer,options:n}))}}]),n}(a.Component);var v=function(){return o.a.createElement("div",{className:"homePage"},o.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.1d2cc067.chunk.js.map