document.addEventListener('keydown', function (event) {
    let flag = event.getModifierState && event.getModifierState('CapsLock')
    let text = document.getElementById("text")
    //let icon = document.getElementById("icon")
    document.getElementById("icon").innerHTML = (flag ? (
        chrome.browserAction.setIcon({
            path : "img/up.png"
          })
    ) : (
        chrome.browserAction.setIcon({
            path : "img/down.png"
          })
        ))
    document.getElementById("text").innerHTML = (flag ? "ON" : "OFF")
})