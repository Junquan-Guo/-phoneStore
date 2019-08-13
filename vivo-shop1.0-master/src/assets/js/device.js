(function device(window, document) {
  var docEl = document.documentElement
  // Determine whether the PC side or the mobile side
  function IsPC() {
    var userAgentInfo = navigator.userAgent
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]
    var devType = 'PC'
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        // Determine the system platform used by the mobile end of the user
        if (userAgentInfo.indexOf('Android') > -1 || userAgentInfo.indexOf('Linux') > -1) {
          //Android mobile phone
          devType = 'Android'
        } else if (userAgentInfo.indexOf('iPhone') > -1) {
          //Apple iPhone
          devType = 'iPhone'
        } else if (userAgentInfo.indexOf('Windows Phone') > -1) {
          //winphone
          devType = 'winphone'
        } else if (userAgentInfo.indexOf('iPad') > -1) {
          //Pad
          devType = 'iPad'
        }
        break;
      }
    }
    docEl.setAttribute('data-dev-type', devType)
  }

  IsPC()

  window.addEventListener('resize', IsPC)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      IsPC()
    }
  })


}(window, document))
