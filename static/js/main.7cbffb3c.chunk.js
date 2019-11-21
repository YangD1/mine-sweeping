(this["webpackJsonpmine-sweeping"]=this["webpackJsonpmine-sweeping"]||[]).push([[0],[,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),i=a.n(r),o=(a(15),a(6)),c=a(1),l=a(2),u=a(4),h=a(3),d=a(5),m=(a(8),a(16),function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"board",style:{gridTemplateColumns:"repeat("+(this.props.columns||9)+", 25px)",gridTemplateRows:"repeat("+(this.props.rows||9)+", 25px)"}},this.props.children)}}]),t}(s.a.Component)),p=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,a=this.props.index,n=this.props.gridsData,r=this.props.gridsData[a],i="";if(Array.isArray(n)&&n.length>0)if(r.flag&&!1===r.isOpen)e=s.a.createElement("i",{className:"iconfont iconhighest"});else{switch(r.type){case"mine":e=r.isOpen&&s.a.createElement("div",{className:"grid-item-box",style:r.flag?{background:"green"}:{background:"red"}},s.a.createElement("i",{className:"iconfont iconzhadan"}));break;case"default":if(r.value)switch(r.value){case 1:t="blue";break;case 2:t="green";break;case 3:t="red";break;case 4:t="purple";break;case 5:t="orange";break;default:t="black"}i="grid-item-box",i+=r.value?" number-hover":"",e=r.isOpen&&s.a.createElement("div",{className:i,style:{color:t},onMouseUp:this.props.computeGrid,onMouseDown:this.props.aroundSink},r.value||"")}!e&&r.isSink&&(e=s.a.createElement("div",{className:"grid-sink"}))}return e=e||s.a.createElement("div",null)}}]),t}(s.a.Component),f=(a(17),function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"info-box"},s.a.createElement("span",null,"Current Grid Index\uff1a"),this.props.index)}}]),t}(s.a.Component)),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={value:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{id:"customize-board-form"},s.a.createElement("h4",null,"Click and input your challenge:"),s.a.createElement("label",null,"Cols:"),s.a.createElement("input",{type:"text",value:this.props.columns,onChange:this.props.columnsChange}),s.a.createElement("br",null),s.a.createElement("label",null,"Rows:"),s.a.createElement("input",{type:"text",value:this.props.rows,onChange:this.props.rowsChange}),s.a.createElement("br",null),s.a.createElement("label",null,"Mines:"),s.a.createElement("input",{type:"text",value:this.props.mines,onChange:this.props.minesChange}),s.a.createElement("br",null),s.a.createElement("button",{onClick:this.props.onSubmit},"Setting & Start!"))}}]),t}(s.a.Component),v=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"getAroundGridIndex",value:function(e,t,a,n){e=parseInt(e),t=parseInt(t),a=parseInt(a);var s=(n=parseInt(n))||t*a,r=e-t,i=e+t,o=e-1,c=e+1,l=[];return o>=0&&e%t>0&&(l.push(o),r>0&&l.push(r-1),i<s&&l.push(i-1)),c>0&&c%t>0&&(l.push(c),r>=0&&l.push(r+1),i<s&&l.push(i+1)),r>=0&&l.push(r),i<s&&l.push(i),l}}]),e}(),b=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.gameInformation;return s.a.createElement("div",{style:this.props.scoreShow?{display:"flex"}:{display:"none"},className:"score-show "+(e.isWin?"game-win":"game-over")},s.a.createElement("div",{className:"title"},e.isWin?"You WIN!":"Game Over!"),s.a.createElement("div",null,"Game Info:",s.a.createElement("div",null,"none")),s.a.createElement("div",{className:"button"},s.a.createElement("button",{onClick:this.props.gameAgain,className:"gameButton"},"Continue ?")))}}]),t}(s.a.Component),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={currentIndex:0,gridsElement:[],gridsData:[],columns:10,rows:10,mines:20,gridsBoard:{},maxErr:!1,calculation:new v,scoreShow:!1,gameInformation:{isWin:!1,time:""}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e,t){var a=this,n=this.state.gridsData,s=this.state.gridsBoard;Array.isArray(n)&&0===n.length&&(n=this.createGridsData(e,t));var r=s.columns,i=s.rows,o=r*i,c=n[t]||"";if(c){if(e.button&&2===e.button){if(c.isOpen)return;n[t].flag=!c.flag}else{if(c.flag)return;switch(c.type){case"mine":this.state.gridsData.map((function(e){"mine"===e.type&&(e.isOpen=!0)})),this.setState({scoreShow:!0});break;case"default":if(0===c.value){var l=this.findLinkBlankGrid(t,n);Array.isArray(l)&&0===l.length?this.state.calculation.getAroundGridIndex(t,r,i,o).forEach((function(e){n[e].isOpen=!0})):l.forEach((function(e){n[e].isOpen=!0,a.state.calculation.getAroundGridIndex(e,r,i,o).forEach((function(e){n[e].isOpen=!0}))}))}}n[t].isOpen=!0}var u={dangers:[],unprocessed:[],mines:this.state.gridsBoard.mines,flags:[]};n.forEach((function(e){"mine"===e.type&&!1===e.flag&&u.dangers.push(e),!1===e.isOpen&&!1===e.flag&&u.unprocessed.push(e),e.flag&&u.flags.push(e)})),0===u.dangers.length&&0===u.unprocessed.length&&u.flags.length==u.mines&&this.setState({gameInformation:{isWin:!0},scoreShow:!0}),this.setState({gridsData:n,currentIndex:t})}}},{key:"findLinkBlankGrid",value:function(e,t){var a=this;t||(t=this.state.gridsData);var n=this.state.gridsBoard.columns,s=this.state.gridsBoard.rows,r=n*s,i=[],o=function(e){return a.state.calculation.getAroundGridIndex(e,n,s,r)};return function e(a){return a.forEach((function(a){0!==t[a].value||t[a].isOpen||(t[a].isOpen=!0,i.push(a),e(o(a)))}))}(o(e)),i.forEach((function(e){o(e)})),i}},{key:"columnsChange",value:function(e){this.setState({columns:e.target.value})}},{key:"rowsChange",value:function(e){this.setState({rows:e.target.value})}},{key:"minesChange",value:function(e){this.setState({mines:e.target.value})}},{key:"aroundSink",value:function(e){var t=this.state.gridsData,a=this.state.gridsBoard.columns,n=this.state.gridsBoard.rows;this.state.calculation.getAroundGridIndex(e,a,n).forEach((function(e){t[e].isSink=!0})),this.setState({gridsData:t})}},{key:"computeGrid",value:function(e){var t=this,a=this.state.gridsData,n=a[e],s=[],r=[];if(n.isOpen&&n.value>0){var i=this.state.calculation.getAroundGridIndex(e,this.state.gridsBoard.columns,this.state.gridsBoard.rows);s=i.filter((function(e){return"mine"===a[e].type&&!1===a[e].flag})),r=i.filter((function(e){return!0===a[e].flag})),console.log("\u627e\u51fa\u8fd9\u4e9b\u4e0b\u6807\uff1f"),console.log(s),i.forEach((function(e){a[e].isSink=!1,r.length==n.value&&!1===a[e].flag&&(a[e].isOpen=!0,t.handleClick({button:1},e,a))})),this.setState({gridsData:a})}}},{key:"createGridsData",value:function(e,t){var a;if(this.state.columns>80||this.state.rows>80)this.state.maxErr=!0;else{a=Array.apply(null,Array(this.state.gridsBoard.columns*this.state.gridsBoard.rows)).map((function(e,t){return{type:"default",value:0,flag:!1,isOpen:!1,isSink:!1,key:t}}));var n=Object(o.a)(Array(a.length).keys()),s=this.state.gridsBoard.columns,r=this.state.gridsBoard.rows,i=s*r;n.splice(t,1);for(var c=0;c<this.state.mines;c++){var l=n.splice(Math.floor(Math.random()*n.length),1),u=this.state.calculation.getAroundGridIndex(l,s,r,i);a[l].type="mine",u.forEach((function(e){return a[e].value++}))}}return this.setState({gridsData:a}),e&&e.preventDefault(),a}},{key:"handleSubmit",value:function(e){var t=this.state.columns*this.state.rows;this.setState({gridsBoard:{columns:this.state.columns,rows:this.state.rows,mines:this.state.mines},grids:Array(t).fill(s.a.createElement("div",{className:"full-squares"})),gridsData:[],scoreShow:!1}),e&&e.preventDefault()}},{key:"componentDidMount",value:function(){this.handleSubmit(),document.getElementById("board").oncontextmenu=function(e){e.preventDefault()}}},{key:"render",value:function(){var e=this,t=this.state.gridsData,a=this.state.gridsBoard.columns*this.state.gridsBoard.rows,n=this.state.gridsBoard;return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"app-body"},s.a.createElement("div",{className:"app-body-form"},s.a.createElement(g,{columns:this.state.columns,rows:this.state.rows,mines:this.state.mines,columnsChange:function(t){return e.columnsChange(t)},rowsChange:function(t){return e.rowsChange(t)},minesChange:function(t){return e.minesChange(t)},onSubmit:function(t){return e.handleSubmit(t)}}),s.a.createElement("br",null),s.a.createElement("span",{className:"err-span"},"Cols / Rows MAX 80")),s.a.createElement(m,{columns:this.state.gridsBoard.columns,rows:this.state.gridsBoard.rows},s.a.createElement(b,{scoreShow:this.state.scoreShow,gameAgain:function(){return e.handleSubmit()},gameInformation:this.state.gameInformation}),Object(o.a)(Array(!isNaN(a)&&a).keys()).map((function(a){return s.a.createElement("div",{key:"item-"+a,className:"item",onMouseDown:function(t){return e.handleClick(t,a)}},s.a.createElement("div",{className:"full-squares"},s.a.createElement(p,{gridsData:t,gridsBoard:n,computeGrid:function(){return e.computeGrid(a)},aroundSink:function(){return e.aroundSink(a)},index:a,key:a})))}))),s.a.createElement(f,{index:this.state.currentIndex})))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.7cbffb3c.chunk.js.map