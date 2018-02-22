'use strict'
const co = require('co')
const prompt = require('co-prompt')
//const config = require('../templates')
const execa = require('execa')
const chalk = require('chalk')
const fs = require('fs')

module.exports = () => {
    co(function* () {

        // 分步接收用户输入的参数
        let tplName = yield prompt('项目类型(react|vue|mu): ')
        let gitUrl = yield prompt('Git 仓库地址: ')
        //let branch = yield prompt('分支名: ')
       
        if(tplName!="") {
          

            const fileStream = fs.createWriteStream(`${tplName}.json`);
            //process.exit()
            
        }
        //console.log('aa:', gitUrl)
        if(gitUrl!="") {
            execa('git',['clone',gitUrl]).then(result => {
                //console.log(gitUrl)
                console.log(result.stdout);
                process.exit()

            })
            .catch(err=>{
                console.log(err);
                process.exit()
            })
            // console.log('aa:',gitUrl)
            // process.exit()
        } else {
            process.exit();
        }
    })
}