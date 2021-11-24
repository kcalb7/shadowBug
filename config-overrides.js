const path = require('path')

module.exports = {
  paths: function (paths) {
    paths.appIndexJs = path.resolve(__dirname, 'client/index.tsx')
    paths.appSrc = path.resolve(__dirname, 'client')
    paths.testsSetup = path.resolve(__dirname, 'client/setupTests.js')
    paths.proxySetup = path.resolve(__dirname, 'client/setupProxy.js')
    paths.swSrc = path.resolve(__dirname, 'client/service-worker.js')
    paths.appTypeDeclarations = path.resolve(__dirname, 'client/react-app-env.d.ts')

    return paths
  }
}
