function dubletab(tab) {
  chrome["tabs"]["duplicate"](tab.id);
}
chrome["browserAction"]["onClicked"].addListener(dubletab);