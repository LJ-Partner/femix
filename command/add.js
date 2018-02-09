'use strict'
const co = require('co')
const prompt = require('co-prompt')
//const config = require('../templates')
const chalk = require('chalk')
const fs = require('fs')

module.exports = () => {
    co(function* () {

        // 分步接收用户输入的参数
        let tplName = yield prompt('项目类型[react|vue|mu]: ')
        let gitUrl = yield prompt('Git https link: ')
        let branch = yield prompt('Branch: ')
       
        if(tplName=="react") {
            console.log("react");
            process.exit()
        }
    })
}