# [方案]jQuery-插件封装


# 插件思路

- javascript组件化 
  - <http://caibaojian.com/javascript-module-2.html>

- 思路

  - CSS前缀避免命名冲突
  - JS匿名空间隔开公有私有
  - require.js重写
  - 抽出widget抽象类
  - 生命周期

- 两种方案

  - 捆绑了到jquery
  - $.Widget.page.clientWidth();

```js
(function ($) {
	$.fn.myPlugins = function (options) {
	  //参数赋值
	  options = $.extend(defaults, options);//对象合并
	  this.each(function () {
	      //执行代码逻辑
	  });
	};
})(jQuery);

$(selector).myPlugins({参数});
```

# 模仿项目 

- mumuy
	- @code <https://github.com/mumuy/widget>
	- @doc <http://jquerywidget.com/>

```js
// jQuery Plugin Boilerplate
// A boilerplate for jumpstarting jQuery plugins development
// version 1.1, May 14th, 2011
// by Stefan Gabos

// remember to change every instance of "pluginName" to the name of your plugin!
(function($) {

    // here we go!
    $.pluginName = function(element, options) {

        // plugin's default options
        // this is private property and is  accessible only from inside the plugin
        var defaults = {

            foo: 'bar',

            // if your plugin is event-driven, you may provide callback capabilities
            // for its events. execute these functions before or after events of your
            // plugin, so that users may customize those particular events without
            // changing the plugin's code
            onFoo: function() {}

        }

        // to avoid confusions, use "plugin" to reference the
        // current instance of the object
        var plugin = this;

        // this will hold the merged default, and user-provided options
        // plugin's properties will be available through this object like:
        // plugin.settings.propertyName from inside the plugin or
        // element.data('pluginName').settings.propertyName from outside the plugin,
        // where "element" is the element the plugin is attached to;
        plugin.settings = {}

        var $element = $(element), // reference to the jQuery version of DOM element
             element = element;    // reference to the actual DOM element

        // the "constructor" method that gets called when the object is created
        plugin.init = function() {

            // the plugin's final properties are the merged default and
            // user-provided options (if any)
            plugin.settings = $.extend({}, defaults, options);

            // code goes here

        }

        // public methods
        // these methods can be called like:
        // plugin.methodName(arg1, arg2, ... argn) from inside the plugin or
        // element.data('pluginName').publicMethod(arg1, arg2, ... argn) from outside
        // the plugin, where "element" is the element the plugin is attached to;

        // a public method. for demonstration purposes only - remove it!
        plugin.foo_public_method = function() {

            // code goes here

        }

        // private methods
        // these methods can be called only from inside the plugin like:
        // methodName(arg1, arg2, ... argn)

        // a private method. for demonstration purposes only - remove it!
        var foo_private_method = function() {

            // code goes here

        }

        // fire up the plugin!
        // call the "constructor" method
        plugin.init();

    }

    // add the plugin to the jQuery.fn object
    $.fn.pluginName = function(options) {

        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function() {

            // if plugin has not already been attached to the element
            if (undefined == $(this).data('pluginName')) {

                // create a new instance of the plugin
                // pass the DOM element and the user-provided options as arguments
                var plugin = new $.pluginName(this, options);

                // in the jQuery version of the element
                // store a reference to the plugin object
                // you can later access the plugin and its methods and properties like
                // element.data('pluginName').publicMethod(arg1, arg2, ... argn) or
                // element.data('pluginName').settings.propertyName
                $(this).data('pluginName', plugin);

            }

        });

    }

})(jQuery);


(function( $ ){

  var methods = {
     init : function( options ) {

       return this.each(function(){
         $(window).bind('resize.tooltip', methods.reposition);
       });

     },
     destroy : function( ) {

       return this.each(function(){
         $(window).unbind('.tooltip');
       })

     },
     reposition : function( ) { 
       // ... 
     },
     show : function( ) { 
       // ... 
     },
     hide : function( ) {
       // ... 
     },
     update : function( content ) { 
       // ...
     }
  };

  $.fn.tooltip = function( method ) {
    
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }    
  
  };

})( jQuery );
```

# 简单实践

- 如何编写jQuery插件
  - 总是把插件包装在闭包中
  - 不在插件函数的立即作用域中额外包装 this 关键字
  - 总是让插件函数返回 this 关键字以保持 chainability ，除非插件有真正的返回值。
  - 不要传给插件大量参数，应该传一个可以覆盖插件默认选项的设置对象。
  - 在单个插件中，不要让一个以上的名称空间搞乱了 jQuery.fn 对象。
  - 总是为方法、事件和数据定义名称空间
  - <http://www.htmleaf.com/ziliaoku/qianduanjiaocheng/201603043182.html>
  - <https://gist.github.com/quexer/3619237>

# 参考

- jquery-patterns @old 
  - https://github.com/jquery-boilerplate/jquery-patterns