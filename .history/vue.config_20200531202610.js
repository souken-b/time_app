module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "my-application",
        appId: "com.sample.myapplication",
        mac: {
          icon: 'src/assets/app.ico',
          target: [
            {
              target: 'zip', // 'zip', 'nsis', 'portable'
              arch: ['x64'] // 'x64', 'ia32'
            }
          ]
        }
      }
    }
  }
}