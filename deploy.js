var path, node_ssh, ssh, fs

fs = require('fs')
path = require('path')
node_ssh = require('node-ssh')
var Glob = require('glob')
ssh = new node_ssh()

ssh.connect({
        host: '162.243.168.238',
        username: 'ugen',
        privateKey: './node_modules/ssh-key/id_rsa'
    })
    .then(function () {
        // Putting entire directories
        const failed = []
        const successful = []
        var pattern = "./docs/build/!(tmp)/**/*"
        // console.log(pattern)
        // var mg = new Glob(pattern, {
        //     mark: true
        // }, function (er, matches) {
        //     console.log("matches", matches)
        // })
        // console.log("after")

        ssh.putDirectory('./docs/build', '/var/www/sbx/html', {
            recursive: true,
            concurrency: 10,
            validate: function (itemPath) {
                const baseName = path.basename(itemPath)
                return baseName.substr(0, 1) !== '.' &&
                    baseName !== 'node_modules' &&
                    baseName !== 'tmp'
                
            },
            tick: function (localPath, remotePath, error) {
                if (error) {
                    failed.push(localPath)
                } else {
                    successful.push(localPath)
                }
            }
        }).then(function (status) {
            console.log('the directory transfer was', status ? 'successful' : 'unsuccessful')
            console.log('failed transfers', failed.join(', '))
            console.log('successful transfers', successful.join(', '))
        })
    })