/**
 * @type {import('@efox/emp-cli').EMPConfig}
 */
const mf = require('./emp_config/mf')

module.exports = {
  framework: [require('@efox/emp-vue2')],
  webpackChain(config) {
    config.plugin('html').tap(args => {
      args[0] = {
        ...args[0],
        ...{
          title: 'EMP Vue2 Base',
        },
      }
      return args
    })
  },
  webpack() {
    return {
      devServer: {
        port: 9002,
      },
    }
  },
  async moduleFederation({empEnv}) {
    console.log('empEnv', empEnv)
    return mf(empEnv)
  },
}
