//Raven.config('https://55d103f204fe4cea9dafa879b44dcc53@sentry.io/234408',{release: 'THEONE'}).install()
Raven.config('https://286150eb924940e19840ec357d4e82ae@sentry.io/234842', {release: '6.1.2'}).install();

jsLights.after('CA.core.user',()=>{
  CA.core.user.on('login', () => {
    Raven.setUserContext({
      email: CA.core.user.email,
      id: CA.core.user.user_id
})
  });
});



jsLights.after('CA.core.user',()=>{
  x = cordova.InAppBrowser.open('http://port-3000.dashboard-template-luka.codeanyapp.com/html/template/test.html','_blank', 'location=no,hardwareback=no');
  function executeScriptCallBack(params) {
    console.log(params);
  }
  x.executeScript({ code: "document.cookie = 'xtest=666';" }, executeScriptCallBack);
});









/*
const dsn = 'https://55d103f204fe4cea9dafa879b44dcc53@sentry.io/234408';
Raven.config(dsn, {
  dataCallback(data) {
    const normalize = filename => filename.split('/www/', 2)[1]

    data.exception.values[0].stacktrace.frames.forEach(frame => {
      frame.filename = normalize(frame.filename)
    })

    data.culprit = data.exception.values[0].stacktrace.frames[0].filename

    return data
  }
})
*/