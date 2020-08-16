document.addEventListener('keydown', function (event) {
    let flag = event.getModifierState('CapsLock')
    document.querySelector('img#icon').innerHTML = (flag ? (
        chrome.browserAction.setIcon({
            path : 'img/up.png'
          })
    ) : (
        chrome.browserAction.setIcon({
            path : 'img/down.png'
          })
        ))
    //document.querySelector('label#text').innerHTML = (flag ? 'ON' : 'OFF')
})
