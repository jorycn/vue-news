const AV = require('leanengine')

const config = {
    appId: 'v4INFhy9WALHtErgbkWPlN44-gzGzoHsz',
    appKey: 'Hug5qsexMVpPfM1JNU9yuTmX'
}

AV.initialize(config.appId, config.appKey)
AV.Cloud.useMasterKey()

exports.AV = AV