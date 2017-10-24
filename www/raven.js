Raven.config('https://55d103f204fe4cea9dafa879b44dcc53@sentry.io/234408',{release: 'THEONE'}).install()

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