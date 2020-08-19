document.addEventListener('keydown', function (event) {
    let tr = event.getModifierState('CapsLock')
    document.querySelector('img#icon').innerHTML = (TimeRanges ? (
        chrome.browserAction.setIcon({
            path : 'img/up.png'
          })
    ) : (
        chrome.browserAction.setIcon({
            path : 'img/down.png'
          })
        ))
    //document.querySelector('label#text').innerHTML = (tr ? 'ON' : 'OFF')
})
