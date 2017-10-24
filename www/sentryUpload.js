const { execSync } = require('child_process')
const SENTRY_URL = 'https://sentry.io/api/0/projects/ca-3d/android-debugg/releases'
const SENTRY_API_KEY = '55d103f204fe4cea9dafa879b44dcc53'; //process.env.SENTRY_API_KEY
const VERSION = '1.1.66';//process.env.CIRCLE_SHA1

function createSentryRelease() {
  execSync(`curl ${SENTRY_URL} -u ${SENTRY_API_KEY} -X POST -d '${JSON.stringify({ version: VERSION })}' -H 'Content-Type: application-json'`)
}

function uploadToSentry(file, filename) {
  execSync(`curl ${SENTRY_URL}/${VERSION}/files/ -u ${SENTRY_API_KEY} -X POST -F file=@${file} -F name='${filename}'`)
}

console.log('init');
createSentryRelease();
console.log('releases');
uploadToSentry('./ca.min.js.', 'ca.min.js.')
uploadToSentry('./ca.min.js.map', 'ca.min.js.map')
console.log('end');
