(function(e){function t(t){for(var a,i,l=t[0],s=t[1],o=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,o||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],a=!0,l=1;l<c.length;l++){var s=c[l];0!==n[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=c[0]))}return e}var a={},n={app:0},r=[];function i(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=a,i.d=function(e,t,c){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(c,a,function(t){return e[t]}.bind(null,a));return c},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/roll-dice-project/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=s;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"146a":function(e,t,c){"use strict";c("2c50")},"2c50":function(e,t,c){},"3a7e":function(e,t,c){"use strict";c("67f7")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("7a23"),n={id:"app",class:"wrapper clearfix"};function r(e,t,c,r,i,l){var s=Object(a["j"])("PlayerPanelCompVue"),o=Object(a["j"])("ControlCompVue"),u=Object(a["j"])("DiceCompVue");return Object(a["h"])(),Object(a["c"])("div",n,[Object(a["f"])(s,{players:i.players,activePlayer:i.activePlayer,winnerPlayer:i.winnerPlayer},null,8,["players","activePlayer","winnerPlayer"]),Object(a["f"])(o,{onNewGame:l.handleNewGame,onRollDice:l.handleRollDice,onHold:l.handleHold},null,8,["onNewGame","onRollDice","onHold"]),Object(a["f"])(u,{dice:i.dice},null,8,["dice"])])}c("b0c0");var i={class:"player-name"},l={class:"player-score"},s={class:"player-current-box"},o=Object(a["d"])("div",{class:"player-current-label"},"Current",-1),u={class:"player-current-score"},d={class:"player-name"},p={class:"player-score"},b={class:"player-current-box"},h=Object(a["d"])("div",{class:"player-current-label"},"Current",-1),y={class:"player-current-score"};function f(e,t,c,n,r,f){return Object(a["h"])(),Object(a["c"])("div",null,[Object(a["d"])("div",{class:Object(a["g"])(["player-panel",f.addClass(0)])},[Object(a["d"])("div",i,Object(a["k"])(c.players[0].name),1),Object(a["d"])("div",l,Object(a["k"])(c.players[0].score),1),Object(a["d"])("div",s,[o,Object(a["d"])("div",u,Object(a["k"])(c.players[0].current),1)])],2),Object(a["d"])("div",{class:Object(a["g"])(["player-panel",f.addClass(1)])},[Object(a["d"])("div",d,Object(a["k"])(c.players[1].name),1),Object(a["d"])("div",p,Object(a["k"])(c.players[1].score),1),Object(a["d"])("div",b,[h,Object(a["d"])("div",y,Object(a["k"])(c.players[1].current),1)])],2)])}c("a9e3");var v={name:"player-panel-comp",props:{players:{type:Array},activePlayer:{type:Number,default:0},winnerPlayer:{type:Number,default:-1}},data:function(){return{}},methods:{addClass:function(e){return this.activePlayer===e?{active:!0}:this.winnerPlayer===e?{winner:!0}:void 0}}},j=(c("3a7e"),c("6b0d")),O=c.n(j);const m=O()(v,[["render",f]]);var P=m,g=Object(a["d"])("i",{class:"bx bx-plus-circle"},null,-1),w=Object(a["e"])("Game mới "),x=[g,w],C=Object(a["d"])("i",{class:"bx bx-dice-6"},null,-1),k=Object(a["e"])("Xoay xúc xắc "),N=[C,k],G=Object(a["d"])("i",{class:"bx bx-message-alt-add"},null,-1),S=Object(a["e"])("Giữ điểm "),D=[G,S],V=Object(a["d"])("input",{type:"number",placeholder:"Mục tiêu",class:"final-score"},null,-1);function M(e,t,c,n,r,i){return Object(a["h"])(),Object(a["c"])("div",null,[Object(a["d"])("button",{class:"control btn-new",onClick:t[0]||(t[0]=function(){return i.handleNewGame&&i.handleNewGame.apply(i,arguments)})},x),Object(a["d"])("button",{class:"control btn-roll",onClick:t[1]||(t[1]=function(){return i.handleRollDice&&i.handleRollDice.apply(i,arguments)})},N),Object(a["d"])("button",{class:"control btn-hold",onClick:t[2]||(t[2]=function(){return i.handleHold&&i.handleHold.apply(i,arguments)})},D),V])}var H={name:"control-comp",data:function(){return{}},methods:{handleNewGame:function(){this.$emit("newGame")},handleRollDice:function(){this.$emit("rollDice")},handleHold:function(){this.$emit("hold")}}};c("d9e9");const R=O()(H,[["render",M]]);var _=R,q={id:"dice-1",class:"dice"},$={id:"dice-2",class:"dice"};function A(e,t,c,n,r,i){return Object(a["h"])(),Object(a["c"])("div",null,[Object(a["d"])("div",q,[(Object(a["h"])(!0),Object(a["c"])(a["a"],null,Object(a["i"])(c.dice[0].class,(function(e,t){return Object(a["h"])(),Object(a["c"])("div",{key:t,class:Object(a["g"])(i.addClass(e,t+1,0))},Object(a["k"])(t+1),3)})),128))]),Object(a["d"])("div",$,[(Object(a["h"])(!0),Object(a["c"])(a["a"],null,Object(a["i"])(c.dice[1].class,(function(e,t){return Object(a["h"])(),Object(a["c"])("div",{key:t,class:Object(a["g"])(i.addClass(e,t+1,1))},Object(a["k"])(t+1),3)})),128))])])}var J=c("ade3"),T={name:"dice-comp",props:{dice:{type:Array}},data:function(){return{}},methods:{addClass:function(e,t,c){var a;return t===this.dice[c].active?(a={},Object(J["a"])(a,e,!0),Object(J["a"])(a,"active",!0),a):Object(J["a"])({},e,!0)}}};c("146a");const B=O()(T,[["render",A]]);var L=B,X={name:"app",components:{PlayerPanelCompVue:P,ControlCompVue:_,DiceCompVue:L},data:function(){return{players:[{name:"Người chơi 1",score:0,current:0},{name:"Người chơi 2",score:0,current:0}],activePlayer:0,winnerPlayer:-1,dice:[{class:["face1","face2","face3","face4","face5","face6"],active:1},{class:["face1","face2","face3","face4","face5","face6"],active:1}],finalScore:0,isPlaying:!1}},methods:{handleNewGame:function(){var e=document.querySelector("input");e.disabled=!1,e.value="",this.isPlaying=!0,this.players[0].score=0,this.players[1].score=0,this.players[0].current=0,this.players[1].current=0,this.dice[0].active=1,this.dice[1].active=1,this.activePlayer=0,this.winnerPlayer=-1,alert("Luật chơi: người thắng cuộc là người chơi đạt được điểm mục tiêu sớm nhất. Nếu xúc xắc xoay ra số 1, người chơi sẽ mất điểm hiện tại và chuyển lượt chơi")},handleRollDice:function(){if(this.finalScore=document.querySelector("input").value,!1===this.isPlaying)alert("Vui lòng nhấn New Game");else if(""===this.finalScore)alert("Vui lòng nhập mục tiêu");else if(document.querySelector("input").disabled=!0,this.dice[0].active=Math.floor(6*Math.random()+1),this.dice[1].active=Math.floor(6*Math.random()+1),this.players[this.activePlayer].current+=this.dice[0].active+this.dice[1].active,1===this.dice[0].active||1===this.dice[1].active){var e=this.players[this.activePlayer];alert("Bạn đã quay trúng số 1"),e.current=0,0===this.activePlayer?this.activePlayer=1:this.activePlayer=0}},handleHold:function(){var e=this.players[this.activePlayer];!1===this.isPlaying?alert("Vui lòng nhấn New Game"):0===e.current?alert("Vui lòng xoay xúc xắc"):(e.score+=e.current,e.current=0,e.score>=this.finalScore?(e.name="Chiến thắng",this.isPlaying=!1,this.winnerPlayer=this.activePlayer,this.activePlayer=-1):0===this.activePlayer?this.activePlayer=1:this.activePlayer=0)}}};c("be18");const z=O()(X,[["render",r]]);var E=z;Object(a["b"])(E).mount("#app")},"67f7":function(e,t,c){},"77d5":function(e,t,c){},be18:function(e,t,c){"use strict";c("e600")},d9e9:function(e,t,c){"use strict";c("77d5")},e600:function(e,t,c){}});
//# sourceMappingURL=app.d06f76d6.js.map