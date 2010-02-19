YAHOO.env.classMap = {"Console": "console", "DOMEventFacade": "event", "plugin.NodeFocusManager": "node-focusmanager", "YUI": "yui", "DataSource.Local": "datasource", "NodeList": "node", "Widget": "widget", "Slider": "slider", "Plugin.Drag": "dd", "Object": "yui", "YUI~array~extras": "collection", "Base": "base", "History.Module": "history", "Plugin.Base": "plugin", "Do.AlterArgs": "event-custom", "Pollable": "datasource", "ImgLoadImgObj": "imageloader", "ClassNameManager": "classnamemanager", "Plugin.DDWindowScroll": "dd", "Assert.ComparisonFailure": "test", "DataSchema.XML": "dataschema", "YUI~dump": "dump", "ArrayList": "collection", "Loader": "loader", "Coverage.Format.ObjectAssert": "test", "Intl": "yui", "Do.Prevent": "event-custom", "State": "attribute", "Plugin.Shim": "shim-plugin", "CustomEvent": "event-custom", "Coverage.Format.DateAssert": "test", "Plugin.Drop": "dd", "DataSource.Get": "datasource", "Selector": "dom", "DataSourceXMLSchema": "datasource", "Plugin.Align": "align-plugin", "DD.Drop": "dd", "DataType.Number": "datatype", "DataSourceArraySchema": "datasource", "Profiler": "profiler", "Queue": "yui", "DataSource.IO": "datasource", "WidgetChild": "widget-child", "ImgLoadGroup": "imageloader", "Test.Wait": "test", "Do.Method": "event-custom", "SliderValueRange": "slider", "DataSourceCache": "datasource", "Get": "yui", "Do.AlterReturn": "event-custom", "Event": "event", "Plugin.NodeFX": "anim", "UA": "yui", "DataSourceJSONSchema": "datasource", "WidgetParent": "widget-parent", "Test.TestNode": "test", "DOM": "dom", "YUI~array~invoke": "collection", "Cache": "cache", "DD.Delegate": "dd", "plugin.NodeMenuNav": "node-menunav", "DataSchema.Base": "dataschema", "Do.Halt": "event-custom", "SyntheticEvent": "event", "Node": "node", "Test.Runner": "test", "Assert.ShouldError": "test", "Plugin.DDConstrained": "dd", "ArrayList~add": "collection", "JSON": "json", "Test.Manager": "test", "Cookie": "cookie", "DataType.Date": "datatype", "DataSchema.Array": "dataschema", "WidgetPositionConstrain": "widget-position-constrain", "Lang": "yui", "DD.Drag": "dd", "CustomEvent~extras": "event", "AsyncQueue": "async-queue", "Easing": "anim", "DataSource.Function": "datasource", "History": "history", "Plugin.Host": "pluginhost", "Plugin.DDNodeScroll": "dd", "Y~Event": "event", "Attribute": "attribute", "StyleSheet": "stylesheet", "YUI~oop": "oop", "Assert.Error": "test", "ArrayList~filter": "collection", "DD.Scroll": "dd", "SliderBase": "slider", "Overlay": "overlay", "Subscriber": "event-custom", "YUI~substitute": "substitute", "io": "io", "Test.Suite": "test", "Assert.UnexpectedError": "test", "Do": "event-custom", "Anim": "anim", "Plugin.DDProxy": "dd", "DD.DDM": "dd", "WidgetStack": "widget-stack", "Test.Case": "test", "Assert": "test", "DataSchema.JSON": "dataschema", "Assert.UnexpectedValue": "test", "Coverage.Format.Mock": "test", "config": "yui", "Sortable": "sortable", "Assert.ShouldFail": "test", "DataSchema.Text": "dataschema", "EventTarget": "event-custom", "DataType.XML": "datatype", "Test.Reporter": "test", "WidgetStdMod": "widget-stdmod", "ArrayAssert": "test", "DataType.Date.Locale": "datatype", "EventHandle": "event-custom", "Do.Error": "event-custom", "Plugin.ConsoleFilters": "console-filters", "WidgetPositionAlign": "widget-position-align", "ClickableRail": "clickable-rail", "Array": "yui", "EventFacade": "event-custom", "DataSourceTextSchema": "datasource"};

YAHOO.env.resolveClass = function(className) {
    var a=className.split('.'), ns=YAHOO.env.classMap;

    for (var i=0; i<a.length; i=i+1) {
        if (ns[a[i]]) {
            ns = ns[a[i]];
        } else {
            return null;
        }
    }

    return ns;
};
