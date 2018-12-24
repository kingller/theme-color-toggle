(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,r){},279:function(e,t,r){"use strict";r.r(t);var o=r(0),a=r.n(o),n=r(96),c=r.n(n),l=r(14),i=r(15),s=r(17),p=r(16),m=r(18),d=(r(103),r(54)),h=function(){},u={chrome:d.ChromePicker,sketch:d.SketchPicker},v=function(e){function t(e){var r;return Object(l.a)(this,t),(r=Object(s.a)(this,Object(p.a)(t).call(this))).handleClick=function(){r.setState({displayColorPicker:!r.state.displayColorPicker})},r.handleClose=function(){r.setState({displayColorPicker:!1})},r.handleChange=function(e){r.setState({color:e.hex}),r.props.onChange(e.hex,e)},r.handleChangeComplete=function(e){r.setState({color:e.hex}),r.props.onChangeComplete(e.hex)},r.state={displayColorPicker:!1,color:e.color},r}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({color:e.color})}},{key:"render",value:function(){var e=this.props,t=e.small,r=e.type,o=e.position,n=u[r],c={color:{width:t?"16px":"120px",height:t?"16px":"24px",borderRadius:"2px",background:this.state.color},swatch:{padding:"4px",background:"#fff",borderRadius:"2px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"},wrapper:{position:"inherit",zIndex:"100"}};"top"===o&&(c.wrapper.transform="translateY(-100%)",c.wrapper.paddingBottom=8);var l=a.a.createElement("div",{style:c.swatch,onClick:this.handleClick},a.a.createElement("div",{style:c.color})),i=this.state.displayColorPicker?a.a.createElement("div",{style:c.popover},a.a.createElement("div",{style:c.cover,onClick:this.handleClose}),a.a.createElement("div",{style:c.wrapper},a.a.createElement(n,Object.assign({},this.props,{color:this.state.color,onChange:this.handleChange,onChangeComplete:this.handleChangeComplete})))):null;return"top"===o?a.a.createElement("div",null,i,l):a.a.createElement("div",null,l,i)}}]),t}(o.Component);v.defaultProps={onChange:h,onChangeComplete:h,position:"bottom"};var y=r(97),b=r.n(y);var C=function(e){function t(e){var o;return Object(l.a)(this,t),(o=Object(s.a)(this,Object(p.a)(t).call(this,e))).changeColor=function(e){r(269).render(b.a,{modifyVars:e},function(e,t){e&&console.error("Failed to update theme"),t&&t.css&&function(t){function r(r){if(r.styleSheet){var o=function(){try{r.styleSheet.cssText=t}catch(e){}};r.styleSheet.disabled?setTimeout(o,10):o()}else r.innerHTML=t}var o="less:theme:color",a=document.getElementById(o);if(document.getElementById(o))r(a);else{a=document.createElement("style");var n=document.head||document.getElementsByTagName("head")[0];a.type="text/css",a.setAttribute("id",o),r(a),n.appendChild(a)}}(t.css)})},o.changeColor(e.vars),o.state={prevPropsVars:Object.assign({},e.vars)},o}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props.vars;JSON.stringify(e)!==JSON.stringify(this.state.prevPropsVars)&&(this.changeColor(e),this.setState({prevPropsVars:Object.assign({},e)}))}},{key:"render",value:function(){return this.props.children||null}}]),t}(o.Component),g=function(e){function t(e){var r;Object(l.a)(this,t),(r=Object(s.a)(this,Object(p.a)(t).call(this,e))).onChangeComplete=function(e,t){var o=r.state.vars;o[e]=t,r.setState({vars:o}),localStorage.setItem("app-theme",JSON.stringify(o))},r.getColorPicker=function(e){return a.a.createElement("div",{key:e,className:"item"},a.a.createElement("div",null,e),a.a.createElement("div",null,a.a.createElement(v,{type:"sketch",small:!0,color:r.state.vars[e],position:"bottom",presetColors:["#F5222D","#FA541C","#FA8C16","#FAAD14","#FADB14","#A0D911","#52C41A","#13C2C2","#1890FF","#2F54EB","#722ED1","#EB2F96"],onChangeComplete:function(t){return r.onChangeComplete(e,t)}}),a.a.createElement(C,{vars:r.state.vars})))},r.resetTheme=function(){localStorage.setItem("app-theme","{}"),r.setState({vars:r.state.initialValue})};var o={"@primary-color":"#1987a7","@secondary-color":"#0000ff"},n={};try{n=Object.assign({},o,JSON.parse(localStorage.getItem("app-theme")))}finally{r.state={vars:n,initialValue:o}}return r}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.state.vars).map(function(t){return e.getColorPicker(t)});return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"color-wrapper"},a.a.createElement("div",{className:"title primary"},"Theme"),a.a.createElement("div",{className:"wrapper-body"},t)),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"btn-group"},a.a.createElement("button",{type:"button",className:"btn btn-default"},"Cancel"),a.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")),a.a.createElement("div",{className:"secondary-color"},"color : @secondary-color;")))}}]),t}(o.Component);c.a.render(a.a.createElement(g,null),document.getElementById("root"))},97:function(e,t){e.exports="@primary-color: #1987a7;\n@primary-hover-color: shade(@primary-color, 15%);\n@secondary-color: #0000ff;\n.btn-primary{background-color:@primary-color;border-color:@primary-color}\n.btn-primary:hover{background-color:@primary-hover-color;border-color:@primary-hover-color}\n.btn-primary:active{background-color:@primary-color;border-color:@primary-color}\n.primary{color:@primary-color}\n.secondary{color:@secondary-color}\n.secondary-color{color:@secondary-color}"},98:function(e,t,r){e.exports=r(279)}},[[98,2,1]]]);
//# sourceMappingURL=main.6bcb1904.chunk.js.map