const cloud = require('wx-server-sdk')
cloud.init({
  env: 'yyw07180945-26662'
})

let db = cloud.database()
let wedding = db.collection('wedding')
let res = ''
  exports.main = async (event,context) => {
    const { OPENID } = cloud.getWXContext();
    event.OPENID = OPENID
    // console.log(event)
    res = await wedding.add({
      data:event
    })
    // console.log(res)
    return res
  }
