!function(t,n,o){"function"==typeof define&&define.amd?define(["jquery"],function(e){return o(e,t,n),e.mobile}):o(t.jQuery,t,n)}(this,document,function(e,t,o,n){var i,s;!function(h,e,t,v){var c,n,i="virtualMouseBindings",u="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),d="clientX clientY pageX pageY screenX screenY".split(" "),s=h.event.mouseHooks?h.event.mouseHooks.props:[],f=h.event.props.concat(s),a={},r=0,l=0,p=0,m=!1,g=[],w=!1,b=!1,T="addEventListener"in t,D=h(t),y=1,E=0;function P(e){for(;e&&"undefined"!=typeof e.originalEvent;)e=e.originalEvent;return e}function X(e){for(var t,n,o={};e;){for(n in t=h.data(e,i))t[n]&&(o[n]=o.hasVirtualBinding=!0);e=e.parentNode}return o}function Y(){b=!0}function k(){b=!1}function M(){I(),r=setTimeout(function(){E=r=0,g.length=0,w=!1,Y()},h.vmouse.resetTimerDuration)}function I(){r&&(clearTimeout(r),r=0)}function x(e,t,n){var o;return(n&&n[e]||!n&&function(e,t){for(var n;e;){if((n=h.data(e,i))&&(!t||n[t]))return e;e=e.parentNode}return null}(t.target,e))&&(o=function(e,t){var n,o,i,s,a,r,c,u,l,p=e.type;if((e=h.Event(e)).type=t,n=e.originalEvent,o=h.event.props,-1<p.search(/^(mouse|click)/)&&(o=f),n)for(c=o.length;c;)e[s=o[--c]]=n[s];if(-1<p.search(/mouse(down|up)|click/)&&!e.which&&(e.which=1),-1!==p.search(/^touch/)&&(p=(i=P(n)).touches,a=i.changedTouches,r=p&&p.length?p[0]:a&&a.length?a[0]:v))for(u=0,l=d.length;u<l;u++)e[s=d[u]]=r[s];return e}(t,e),h(t.target).trigger(o)),o}function S(e){var t,n=h.data(e.target,u);w||E&&E===n||(t=x("v"+e.type,e))&&(t.isDefaultPrevented()&&e.preventDefault(),t.isPropagationStopped()&&e.stopPropagation(),t.isImmediatePropagationStopped()&&e.stopImmediatePropagation())}function L(e){var t,n,o,i=P(e).touches;i&&1===i.length&&(n=X(t=e.target)).hasVirtualBinding&&(E=y++,h.data(t,u,E),I(),k(),m=!1,o=P(e).touches[0],l=o.pageX,p=o.pageY,x("vmouseover",e,n),x("vmousedown",e,n))}function O(e){b||(m||x("vmousecancel",e,X(e.target)),m=!0,M())}function B(e){if(!b){var t=P(e).touches[0],n=m,o=h.vmouse.moveDistanceThreshold,i=X(e.target);(m=m||Math.abs(t.pageX-l)>o||Math.abs(t.pageY-p)>o)&&!n&&x("vmousecancel",e,i),x("vmousemove",e,i),M()}}function N(e){if(!b){Y();var t,n,o=X(e.target);x("vmouseup",e,o),m||(t=x("vclick",e,o))&&t.isDefaultPrevented()&&(n=P(e).changedTouches[0],g.push({touchID:E,x:n.clientX,y:n.clientY}),w=!0),x("vmouseout",e,o),m=!1,M()}}function j(e){var t,n=h.data(e,i);if(n)for(t in n)if(n[t])return!0;return!1}function z(){}function F(n){var o=n.substr(1);return{setup:function(){j(this)||h.data(this,i,{}),h.data(this,i)[n]=!0,a[n]=(a[n]||0)+1,1===a[n]&&D.bind(o,S),h(this).bind(o,z),T&&(a.touchstart=(a.touchstart||0)+1,1===a.touchstart&&D.bind("touchstart",L).bind("touchend",N).bind("touchmove",B).bind("scroll",O))},teardown:function(){--a[n],a[n]||D.unbind(o,S),T&&(--a.touchstart,a.touchstart||D.unbind("touchstart",L).unbind("touchmove",B).unbind("touchend",N).unbind("scroll",O));var e=h(this),t=h.data(this,i);t&&(t[n]=!1),e.unbind(o,z),j(this)||e.removeData(i)}}}for(h.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500},n=0;n<o.length;n++)h.event.special[o[n]]=F(o[n]);T&&t.addEventListener("click",function(e){var t,n,o,i,s,a=g.length,r=e.target;if(a)for(t=e.clientX,n=e.clientY,c=h.vmouse.clickDistanceThreshold,o=r;o;){for(i=0;i<a;i++)if(s=g[i],0,o===r&&Math.abs(s.x-t)<c&&Math.abs(s.y-n)<c||h.data(o,u)===s.touchID)return e.preventDefault(),void e.stopPropagation();o=o.parentNode}},!0)}(e,0,o),e.mobile={},s={touch:"ontouchend"in o},(i=e).mobile.support=i.mobile.support||{},i.extend(i.support,s),i.extend(i.mobile.support,s),function(u,s,a){var l=u(o),e=u.mobile.support.touch,r="touchmove scroll",n=e?"touchstart":"mousedown",c=e?"touchend":"mouseup",p=e?"touchmove":"mousemove";function h(e,t,n,o){var i=n.type;n.type=t,o?u.event.trigger(n,a,e):u.event.dispatch.call(e,n),n.type=i}u.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(e,t){u.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)},u.attrFn&&(u.attrFn[t]=!0)}),u.event.special.scrollstart={enabled:!0,setup:function(){var n,t,o=this;function i(e,t){h(o,(n=t)?"scrollstart":"scrollstop",e)}u(o).bind(r,function(e){u.event.special.scrollstart.enabled&&(n||i(e,!0),clearTimeout(t),t=setTimeout(function(){i(e,!1)},50))})},teardown:function(){u(this).unbind(r)}},u.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var a=this,r=u(a),c=!1;r.bind("vmousedown",function(e){if(c=!1,e.which&&1!==e.which)return!1;var t,n=e.target;function o(){clearTimeout(t)}function i(){o(),r.unbind("vclick",s).unbind("vmouseup",o),l.unbind("vmousecancel",i)}function s(e){i(),c||n!==e.target?c&&e.preventDefault():h(a,"tap",e)}r.bind("vmouseup",o).bind("vclick",s),l.bind("vmousecancel",i),t=setTimeout(function(){u.event.special.tap.emitTapOnTaphold||(c=!0),h(a,"taphold",u.Event("taphold",{target:n}))},u.event.special.tap.tapholdThreshold)})},teardown:function(){u(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),l.unbind("vmousecancel")}},u.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var t=s.pageXOffset,n=s.pageYOffset,o=e.clientX,i=e.clientY;return 0===e.pageY&&Math.floor(i)>Math.floor(e.pageY)||0===e.pageX&&Math.floor(o)>Math.floor(e.pageX)?(o-=t,i-=n):(i<e.pageY-n||o<e.pageX-t)&&(o=e.pageX-t,i=e.pageY-n),{x:o,y:i}},start:function(e){var t=e.originalEvent.touches?e.originalEvent.touches[0]:e,n=u.event.special.swipe.getLocation(t);return{time:(new Date).getTime(),coords:[n.x,n.y],origin:u(e.target)}},stop:function(e){var t=e.originalEvent.touches?e.originalEvent.touches[0]:e,n=u.event.special.swipe.getLocation(t);return{time:(new Date).getTime(),coords:[n.x,n.y]}},handleSwipe:function(e,t,n,o){if(t.time-e.time<u.event.special.swipe.durationThreshold&&Math.abs(e.coords[0]-t.coords[0])>u.event.special.swipe.horizontalDistanceThreshold&&Math.abs(e.coords[1]-t.coords[1])<u.event.special.swipe.verticalDistanceThreshold){var i=e.coords[0]>t.coords[0]?"swipeleft":"swiperight";return h(n,"swipe",u.Event("swipe",{target:o,swipestart:e,swipestop:t}),!0),h(n,i,u.Event(i,{target:o,swipestart:e,swipestop:t}),!0),!0}return!1},eventInProgress:!1,setup:function(){var e,s=this,t=u(s),a={};(e=u.data(this,"mobile-events"))||(e={length:0},u.data(this,"mobile-events",e)),e.length++,(e.swipe=a).start=function(e){if(!u.event.special.swipe.eventInProgress){u.event.special.swipe.eventInProgress=!0;var t,n=u.event.special.swipe.start(e),o=e.target,i=!1;a.move=function(e){n&&!e.isDefaultPrevented()&&(t=u.event.special.swipe.stop(e),i||(i=u.event.special.swipe.handleSwipe(n,t,s,o))&&(u.event.special.swipe.eventInProgress=!1),Math.abs(n.coords[0]-t.coords[0])>u.event.special.swipe.scrollSupressionThreshold&&e.preventDefault())},a.stop=function(){i=!0,u.event.special.swipe.eventInProgress=!1,l.off(p,a.move),a.move=null},l.on(p,a.move).one(c,a.stop)}},t.on(n,a.start)},teardown:function(){var e,t;(e=u.data(this,"mobile-events"))&&(t=e.swipe,delete e.swipe,e.length--,0===e.length&&u.removeData(this,"mobile-events")),t&&(t.start&&u(this).off(n,t.start),t.move&&l.off(p,t.move),t.stop&&l.off(c,t.stop))}},u.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(e,t){u.event.special[e]={setup:function(){u(this).bind(t,u.noop)},teardown:function(){u(this).unbind(t)}}})}(e,this)});