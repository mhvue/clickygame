(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),o=t.n(i),c=t(2),n=t.n(c),r=(t(12),t(3)),s=t(4),m=t(6),l=t(5);t(13);var d=function(e){return o.a.createElement("div",{className:"cardHolder container-fluid"},o.a.createElement("img",{className:" img-responsive",id:e.id,alt:e.name,src:e.image,onClick:function(){return e.clickedMethod(e.id)}}))},h=[{id:1,name:"chocolate1",image:"https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{id:2,name:"chocolateRasp",image:"https://images.unsplash.com/photo-1565071559227-20ab25b7685e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{id:3,name:"chocolateNut",image:"https://images.unsplash.com/photo-1542843137-8791a6904d14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{id:4,name:"boxOfChocolate",image:"https://images.unsplash.com/photo-1526081715791-7c538f86060e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{id:5,name:"lindor",image:"https://images.unsplash.com/photo-1583272468191-9e38292ebb58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{id:6,name:"assortedCandy",image:"https://images.unsplash.com/photo-1513593854556-94df5c54a8d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{id:7,name:"gummy bears",image:"https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{id:8,name:"gummy worms",image:"https://images.unsplash.com/photo-1516747773440-e114ee0d3c07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{id:9,name:"candyhearts",image:"https://images.unsplash.com/photo-1484979045040-0ab3854b6acb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{id:10,name:"jellybeans",image:"https://images.unsplash.com/photo-1547097465-617b04e11bb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{id:11,name:"starburst",image:"https://images.unsplash.com/photo-1519686997393-7bdb73d6c54d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},{id:12,name:"skittles",image:"https://images.unsplash.com/photo-1526140671827-b648ad864cb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}];t(14);var u=function(e){return o.a.createElement("div",{className:"container-header"},o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement("a",{className:"navbar-brand",href:"/"},o.a.createElement("h2",null,"Welcome!"))),o.a.createElement("div",{className:"jumbotron jumbotron-fluid"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4 text-center"},"Time For Some Candy!"),o.a.createElement("p",{className:"lead text-center"},"Click on an image of your fave candies. Don't click on it twice else you lose some points!"),o.a.createElement("br",null),o.a.createElement("h3",null,"Your Score: ",e.score),o.a.createElement("h3",null,"Top Score:",e.highscore))))},p=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={candyImg:h,clickedImgs:[],score:0,highscore:0},e.clickedImg=function(a){var t=e.state.clickedImgs;console.log(t),t.includes(a)?(console.log("clicked id: "+a),alert("same"),e.setState({score:0})):t.includes(a)?console.log(t):(alert("not same"),t.push(a),e.setState({score:e.state.score+1},(function(){return console.log(e.state.score)})),e.setState({highscore:e.state.score}))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(u,{score:this.state.score,highscore:this.state.highscore}),this.state.candyImg.map((function(a){return o.a.createElement(d,{key:a.id,id:a.id,name:a.name,image:a.image,clickedMethod:e.clickedImg})})).sort((function(){return Math.random()-.5})))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.1a5e9ea4.chunk.js.map