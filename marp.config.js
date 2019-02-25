// marp.config.js
const { Marp } = require('@marp-team/marp-core')
const container = require('markdown-it-container')

module.exports = {
  // Customize engine on configuration file directly
  engine: opts => new Marp(opts).use(container, 'custom'),
}
