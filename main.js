document.addEventListener('keydown', function (event) {
    var flag = event.getModifierState && event.getModifierState('CapsLock');
    var text = document.getElementById("text");
    var icon = document.getElementById("icon");
    document.getElementById("icon").innerHTML = (flag ? (
        chrome.browserAction.setIcon({
            path : "img/up.png"
          })
    ) : (
        chrome.browserAction.setIcon({
            path : "img/down.png"
          })
        ));
    document.getElementById("text").innerHTML = (flag ? "ON" : "OFF");
});