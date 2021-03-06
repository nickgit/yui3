if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["parallel"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "parallel",
    code: []
};
_yuitest_coverage["parallel"].code=["YUI.add('parallel', function (Y, NAME) {","","","/**","* A concurrent parallel processor to help in running several async functions.","* @module parallel","* @main parallel","*/","","/**","A concurrent parallel processor to help in running several async functions.","","    var stack = new Y.Parallel();","","    for (var i = 0; i < 15; i++) {","        Y.io('./api/json/' + i, {","            on: {","                success: stack.add(function() {","                })","            }","        });","    }","","    stack.done(function() {","    });","","@class Parallel","@param {Object} o A config object","@param {Object} [o.context=Y] The execution context of the callback to done","","","*/","","Y.Parallel = function(o) {","    this.config = o || {};","    this.results = [];","    this.context = this.config.context || Y;","    this.total = 0;","    this.finished = 0;","};","","Y.Parallel.prototype = {","    /**","    * An Array of results from all the callbacks in the stack","    * @property results","    * @type Array","    */","","    results: null,","    /**","    * The total items in the stack","    * @property total","    * @type Number","    */","    total: null,","    /**","    * The number of stacked callbacks executed","    * @property finished","    * @type Number","    */","    finished: null,","    /**","    * Add a callback to the stack","    * @method add","    * @param {Function} fn The function callback we are waiting for","    */","    add: function (fn) {","        var self = this;","        self.total += 1;","        return function () {","            self.finished++;","            self.results.push(","                (fn && fn.apply(self.context, arguments)) ||","                (arguments.length === 1 ? arguments[0] : Y.Array(arguments)));","            self.test();","        };","    },","    /**","    * Test to see if all registered items in the stack have completed, if so call the callback to `done`","    * @method test","    */","    test: function () {","        var self = this;","        if (self.finished >= self.total && self.callback) {","            self.callback.call(self.context, self.results, self.data);","        }","    },","    /**","    * The method to call when all the items in the stack are complete.","    * @method done","    * @param {Function} callback The callback to execute on complete","    * @param {Mixed} callback.results The results of all the callbacks in the stack","    * @param {Mixed} [callback.data] The data given to the `done` method","    * @param {Mixed} data Mixed data to pass to the success callback","    */","    done: function (callback, data) {","        this.callback = callback;","        this.data = data;","        this.test();","    }","};","","","}, '@VERSION@', {\"requires\": [\"yui-base\"]});"];
_yuitest_coverage["parallel"].lines = {"1":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"42":0,"68":0,"69":0,"70":0,"71":0,"72":0,"75":0,"83":0,"84":0,"85":0,"97":0,"98":0,"99":0};
_yuitest_coverage["parallel"].functions = {"Parallel:34":0,"(anonymous 2):70":0,"add:67":0,"test:82":0,"done:96":0,"(anonymous 1):1":0};
_yuitest_coverage["parallel"].coveredLines = 20;
_yuitest_coverage["parallel"].coveredFunctions = 6;
_yuitest_coverline("parallel", 1);
YUI.add('parallel', function (Y, NAME) {


/**
* A concurrent parallel processor to help in running several async functions.
* @module parallel
* @main parallel
*/

/**
A concurrent parallel processor to help in running several async functions.

    var stack = new Y.Parallel();

    for (var i = 0; i < 15; i++) {
        Y.io('./api/json/' + i, {
            on: {
                success: stack.add(function() {
                })
            }
        });
    }

    stack.done(function() {
    });

@class Parallel
@param {Object} o A config object
@param {Object} [o.context=Y] The execution context of the callback to done


*/

_yuitest_coverfunc("parallel", "(anonymous 1)", 1);
_yuitest_coverline("parallel", 34);
Y.Parallel = function(o) {
    _yuitest_coverfunc("parallel", "Parallel", 34);
_yuitest_coverline("parallel", 35);
this.config = o || {};
    _yuitest_coverline("parallel", 36);
this.results = [];
    _yuitest_coverline("parallel", 37);
this.context = this.config.context || Y;
    _yuitest_coverline("parallel", 38);
this.total = 0;
    _yuitest_coverline("parallel", 39);
this.finished = 0;
};

_yuitest_coverline("parallel", 42);
Y.Parallel.prototype = {
    /**
    * An Array of results from all the callbacks in the stack
    * @property results
    * @type Array
    */

    results: null,
    /**
    * The total items in the stack
    * @property total
    * @type Number
    */
    total: null,
    /**
    * The number of stacked callbacks executed
    * @property finished
    * @type Number
    */
    finished: null,
    /**
    * Add a callback to the stack
    * @method add
    * @param {Function} fn The function callback we are waiting for
    */
    add: function (fn) {
        _yuitest_coverfunc("parallel", "add", 67);
_yuitest_coverline("parallel", 68);
var self = this;
        _yuitest_coverline("parallel", 69);
self.total += 1;
        _yuitest_coverline("parallel", 70);
return function () {
            _yuitest_coverfunc("parallel", "(anonymous 2)", 70);
_yuitest_coverline("parallel", 71);
self.finished++;
            _yuitest_coverline("parallel", 72);
self.results.push(
                (fn && fn.apply(self.context, arguments)) ||
                (arguments.length === 1 ? arguments[0] : Y.Array(arguments)));
            _yuitest_coverline("parallel", 75);
self.test();
        };
    },
    /**
    * Test to see if all registered items in the stack have completed, if so call the callback to `done`
    * @method test
    */
    test: function () {
        _yuitest_coverfunc("parallel", "test", 82);
_yuitest_coverline("parallel", 83);
var self = this;
        _yuitest_coverline("parallel", 84);
if (self.finished >= self.total && self.callback) {
            _yuitest_coverline("parallel", 85);
self.callback.call(self.context, self.results, self.data);
        }
    },
    /**
    * The method to call when all the items in the stack are complete.
    * @method done
    * @param {Function} callback The callback to execute on complete
    * @param {Mixed} callback.results The results of all the callbacks in the stack
    * @param {Mixed} [callback.data] The data given to the `done` method
    * @param {Mixed} data Mixed data to pass to the success callback
    */
    done: function (callback, data) {
        _yuitest_coverfunc("parallel", "done", 96);
_yuitest_coverline("parallel", 97);
this.callback = callback;
        _yuitest_coverline("parallel", 98);
this.data = data;
        _yuitest_coverline("parallel", 99);
this.test();
    }
};


}, '@VERSION@', {"requires": ["yui-base"]});
