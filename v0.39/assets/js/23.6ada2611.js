(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{603:function(t,e,i){},633:function(t,e,i){"use strict";i(603)},652:function(t,e,i){"use strict";i.r(e);i(103);var o={props:["visible","width","max-width","side","background-color","box-shadow"],data:function(){return{visibleLocal:!0,touchStartX:null,touchMoveX:0,touchEndX:null}},watch:{visible:function(t,e){if(t){var i=document.querySelector("body").style,o=document.querySelector("html").style,s=(!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform),this.$refs.sidebar);i.height="100%",i.overflow="hidden",o.height="100%",o.overflow="hidden",i.overflowY="hidden",s&&s.addEventListener("transitionend",(function(){s.style.transition=""})),this.touchMoveX=null,this.touchStartX=null,this.visibleLocal=!0}else document.querySelector("body").style.overflowY="",document.querySelector("body").style.position=""}},computed:{style:function(){return{"box-shadow":this.boxShadow||"none",left:"right"===this.side?"initial":"0",right:"right"===this.side?"0":"initial",width:this.width||"300px","max-width":this.maxWidth||"75vw","--sidebar-transform-component-internal":"right"===this.side?"100%":"-100%","--translate-x-component-internal":"".concat("right"===this.side?"":"-").concat(this.touchMoveX,"%")}}},methods:{close:function(t){this.visibleLocal=null;var e=this.$refs.overlay;if(e){e.style["pointer-events"]="none";var i=document.elementFromPoint(t.clientX,t.clientY);i.click&&i.click()}},touchstart:function(t){this.touchStartX=t.changedTouches[0].clientX},touchend:function(t){this.$refs.sidebar&&(this.touchMoveX>25?(this.$refs.sidebar.style.transition="",this.visibleLocal=null):0==this.touchMoveX?this.$refs.sidebar.style.transition="":(this.$refs.sidebar.style.transition="transform .2s",this.touchMoveX=0))},touchmove:function(t){var e=t.changedTouches[0].clientX,i=window.screen.width,o=100*(this.touchStartX-e)/i;"right"===this.side?this.touchMoveX=o<0?-o:0:this.touchMoveX=o}}},s=(i(633),i(1)),n=Object(s.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",{attrs:{name:"overlay",appear:""}},[t.visible&&t.visibleLocal?i("div",{ref:"overlay",staticClass:"overlay",style:{"background-color":t.backgroundColor||"rgba(0, 0, 0, 0.35)"},on:{click:t.close,touchstart:t.touchstart,touchmove:t.touchmove,touchend:t.touchend}}):t._e()]),t._v(" "),i("transition",{attrs:{name:"sidebar",appear:""},on:{"after-leave":function(e){return t.$emit("visible",!1)}}},[t.visible&&t.visibleLocal?i("div",{ref:"sidebar",staticClass:"sidebar",style:t.style,on:{touchstart:t.touchstart,touchmove:t.touchmove,touchend:t.touchend}},[t._t("default")],2):t._e()])],1)}),[],!1,null,"ec82e5e0",null);e.default=n.exports}}]);