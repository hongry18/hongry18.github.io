"use strict"
const { join } = require('path')
const fs = require('fs')
const stream = require('stream')
const readline = require('readline')
const extMdRegex = /\.md$/g
const getMdInfoRegex = [ /^(Title):(.*)/g, /^(Description):(.*)/g, /^(Slug):(.*)/g, /^(Image):(.*)/g, /^(Date):(.*)/g ]
const file = './test.md'

async function validMarkdown(filename, fileObj) {
    var name
/*
    var fileObj = {
        name: ''
        ,description: ''
        ,slug: ''
        ,image: ''
        ,date: ''
    }
*/
    if (extMdRegex.test(filename) === null) {
        fileObj['status'] = false;
        return fileObj;
    }

    try {
        var fileInfo = await parseMdFile(filename)

        if (fileInfo.hasOwnProperty('status') && !fileInfo['status']) {
            throw new Error();
        }

        fileObj = Object.assign(fileObj, fileInfo)
console.log(fileObj)
    } catch (e) {
        fileObj['status'] = false;
    }
}

function parseMdFile(filename) {
    var inStream = fs.createReadStream(filename, {encoding: 'utf8'})
    var outStream = new stream
    var rl = readline.createInterface(inStream, outStream)
    var fileObj = {}

    return new Promise( (resolve, reject) => {
        var lineCnt = 0

        rl.on('line', line => {
            if (line === '-->') {
                resolve(fileObj)
            }

            if (lineCnt > 9) {
                reject()
            }

            if (lineCnt === 0 && line !== '<!-- post') {
                fileObj['status'] = false
                reject(fileObj)
            }

            // filter
            for (var i=0, e=getMdInfoRegex.length; i<e; i++) {
                
                var match = getMdInfoRegex[i].exec(line);
                if (match === null) {
                    continue
                }

                try {
                    fileObj[match[1].toLowerCase()] = leftTrim(match[2])
                } catch (e) {
                    fileObj[match[1].toLowerCase()] = ''
                }
            }

            lineCnt = lineCnt + 1
        })
    })
}

function leftTrim(str) {
    return str.replace(/^\s+/g, '')
}

var fObj = {}

validMarkdown(file, fObj)
console.log(fObj)
