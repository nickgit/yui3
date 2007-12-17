(function(){var B=YAHOO.util;var A=function(E){this.superApply(E);};TabPanelViewProto={render:function(){var E=this;this.widget.forEach(function(F){F.render();if(F.get("active")===true){E.widget.set("activeTab",F);}B.Event.on(F.get("node").get("node"),"click",function(G){E.widget.set("activeTab",F);});});},activeChangeHandler:function(E){this.widget.set("activeTab",E.newValue);},add:function(G,E){var F=this.widget.get("node");F.insertBefore(G,this.widget.item(E));}};YAHOO.lang.extend(A,YAHOO.widget.WidgetView,TabPanelViewProto);var D=function(F,E){this.superApply(F,E);};TabPanelControllerProto={apply:function(){}};YAHOO.lang.extend(D,YAHOO.widget.WidgetController,TabPanelControllerProto);var C=function(F,E){this.constructor.superclass.constructor.apply(this,arguments);};C.NAME="TabPanel";C.CONFIG={"tabs":{get:function(){var E=this._configs.tabs?this._configs.tabs.value:[];return[].slice.call(E,0);},validator:YAHOO.lang.isArray},"length":{readOnly:true,get:function(){return this.get("tabs").length;}},"activeTab":{set:function(E){var F=this.get("activeTab");if(F===E){return ;}if(F){F.set("active",false);}E.set("active",true);}}};TabPanelProto={viewClass:A,controllerClass:D,initializer:function(E){this._configs.length.value=this._configs.tabs.value.length;},addTab:function(G,E){var F=this.get("tabs");F.push(G);this.set("tabs",F);this.fireEvent("addTab",{relatedTarget:G});},removeTab:function(F){var E=this.get("tabs");E.splice(this.indexOf(F,1));this.set("tabs",E);this.fireEvent("addTab",{relatedTarget:F});},apply:function(G,E,E){var F=this.get("tabs");returnVal=G.apply(F,[].slice.call(arguments,1));this.set("tabs",F);return returnVal;},shift:function(){[].unshift.call(arguments,[].shift);return this.apply.apply(this,arguments);},unshift:function(F,E,G){[].unshift.call(arguments,[].unshift);return this.apply.apply(this,arguments);},push:function(F,E,G){[].unshift.call(arguments,[].push);return this.apply.apply(this,arguments);},pop:function(){[].unshift.call(arguments,[].pop);return this.apply.apply(this,arguments);},splice:function(H,I,F,E,G){[].unshift.call(arguments,[].splice);return this.apply.apply(this,arguments);},slice:function(F,E){[].unshift.call(arguments,[].slice);return this.apply.apply(this,arguments);},forEach:function(){if([].forEach){return function(){[].unshift.call(arguments,[].forEach);return this.apply.apply(this,arguments);};}else{return function(I,H){var G=this.get("tabs");H=H||G;for(var F=G,E=G.length;F<E;++F){I.call(H,G[F],F,G);}};}}(),filter:function(){if([].filter){return function(){return this.apply([].filter,arguments);};}else{return function(H,G){var F=this.get("tabs");var E=[];G=G||F;this.forEach(function(){if(H.apply(G,arguments)===true){E[E.length]=F[i];}});return E;};}}(),indexOf:function(H){var G=this.get("tabs");for(var F=0,E=G.length;F<E;++F){if(G[F]===H){return F;}}return -1;},item:function(E){return this.get("tabs")[E];},namedItem:function(H){var G=this.get("tabs");for(var F=0,E=G.length;F<E;++F){if(G[F].get("id")===H){return G[F];}}}};YAHOO.lang.extend(C,YAHOO.widget.Widget,TabPanelProto);YAHOO.widget.TabPanel=C;YAHOO.widget.TabPanelView=A;YAHOO.widget.TabPanelController=D;})();(function(){var D=YAHOO.util;var C=function(E){this.superApply(E);};TabViewProto={render:function(){var E=this.widget.get("panel");E.set("visible",this.widget.get("active"));}};YAHOO.lang.extend(C,YAHOO.widget.WidgetView,TabViewProto);var A=function(F,E){this.superApply(F,E);};TabControllerProto={apply:function(){var F=this.widget.get("node");var E=this.widget.get("panel");D.Event.on(F.get("node"),"click",this.showPanel,this,true);this.widget.on("contentVisibleChange",function(G){this.widget.get("panel").set("visible",G.newValue);},this,true);this.widget.on("activeChange",function(G){var H=G.newValue;if(H){this.get("node").addClass("yui-active");}else{this.get("node").removeClass("yui-active");}this.get("panel").set("visible",H);},this.widget,true);},hidePanel:function(){this.widget.get("panel").set("visible",false);},showPanel:function(){this.widget.get("panel").set("visible",true);},togglePanel:function(){var E=this.widget.get("contentVisible");if(E){this.hidePanel();}else{this.showPanel();}}};YAHOO.lang.extend(A,YAHOO.widget.WidgetController,TabControllerProto);var B=function(F,E){this.constructor.superclass.constructor.apply(this,arguments);};B.NAME="Tab";B.CONFIG={label:{validator:YAHOO.lang.isString,value:""},content:{validator:YAHOO.lang.isString,value:""},panel:{set:function(E){if(E){return D.Element.get(D.Dom.get(E));}}},contentVisible:{validator:YAHOO.lang.isBoolean,value:false},active:{validator:YAHOO.lang.isBoolean,value:false}};TabProto={viewClass:C,controllerClass:A,initializer:function(E){},};YAHOO.lang.extend(B,YAHOO.widget.Widget,TabProto);YAHOO.widget.Tab=B;YAHOO.widget.TabView=C;YAHOO.widget.TabController=A;})();YAHOO.register("tabpanel",YAHOO.widget.TabPanel,{version:"@VERSION@",build:"@BUILD@"});