var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var widget = widgets.Widget({
  id: "kpusher-link",
  label: "kpusher",
  contentURL: require("sdk/self").data.url("icon-16.png"),
  onClick: function() {
    url = tabs.activeTab.url;
    tabs.open("http://kpusher.xuanhao360.com/article?url="+url);
  }
});
