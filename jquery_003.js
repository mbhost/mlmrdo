function MobileNav(options){this.options=$.extend({container:null,hideOnClickOutside:!1,menuActiveClass:"nav-active",menuOpener:".nav-opener",menuDrop:".nav-drop",toggleEvent:"click",outsideClickEvent:"click touchstart pointerdown MSPointerDown"},options),this.initStructure(),this.attachEvents()}MobileNav.prototype={initStructure:function(){this.page=$("html"),this.container=$(this.options.container),this.opener=this.container.find(this.options.menuOpener),this.drop=this.container.find(this.options.menuDrop),this.makeCallback("onInit",this)},makeCallback:function(name){if("function"==typeof this.options[name]){var args=Array.prototype.slice.call(arguments);args.shift(),this.options[name].apply(this,args)}},attachEvents:function(){var self=this;activateResizeHandler&&(activateResizeHandler(),activateResizeHandler=null),this.outsideClickHandler=function(e){if(self.isOpened()){var target=$(e.target);target.closest(self.opener).length||target.closest(self.drop).length||self.hide()}},this.openerClickHandler=function(e){e.preventDefault(),self.toggle()},this.opener.on(this.options.toggleEvent,this.openerClickHandler)},isOpened:function(){return this.container.hasClass(this.options.menuActiveClass)},show:function(){this.container.addClass(this.options.menuActiveClass),this.options.hideOnClickOutside&&this.page.on(this.options.outsideClickEvent,this.outsideClickHandler)},hide:function(){this.container.removeClass(this.options.menuActiveClass),this.options.hideOnClickOutside&&this.page.off(this.options.outsideClickEvent,this.outsideClickHandler)},toggle:function(){this.isOpened()?this.hide():this.show()},destroy:function(){this.container.removeClass(this.options.menuActiveClass),this.opener.off(this.options.toggleEvent,this.clickHandler),this.page.off(this.options.outsideClickEvent,this.outsideClickHandler)}};var activateResizeHandler=function(){var flag,timer,win=$(window),doc=$("html"),removeClassHandler=function(){flag=!1,doc.removeClass("resize-active")};win.on("resize orientationchange",function(){flag||(flag=!0,doc.addClass("resize-active")),clearTimeout(timer),timer=setTimeout(removeClassHandler,500)})};$.fn.mobileNav=function(opt){var args=Array.prototype.slice.call(arguments),method=args[0];return this.each(function(){var $container=jQuery(this),instance=$container.data("MobileNav");"object"==typeof opt||void 0===opt?$container.data("MobileNav",new MobileNav($.extend({container:this},opt))):"string"==typeof method&&instance&&"function"==typeof instance[method]&&(args.shift(),instance[method].apply(instance,args))})};
//# sourceMappingURL=jquery.mobilenav.min.js.map