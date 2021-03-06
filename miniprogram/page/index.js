Page({
  data: {
    isPlayingMusic: false
  },
  bgm: null,
  music_url: 'cloud://yyw07180945-26662.7979-yyw07180945-26662-1301924076/Ali Edwards - Devil Trigger (Opening Remix).mp3',
  music_coverImgUrl: 'cloud://yyw07180945-26662.7979-yyw07180945-26662-1301924076/test.png',
  onLoad: function () {
    // 创建getBackgroundAudioManager实例对象
    this.bgm = wx.getBackgroundAudioManager()
    // 音频标题
    this.bgm.title = 'merry me'
    this.bgm.onPlay(res=>{
      this.setData({
        isPlayingMusic:true
      })
    })
    // 指定音频的数据源
    this.bgm.src = this.music_url
  },
  // 播放器的单击事件
  play: function () {
    if (this.data.isPlayingMusic) {
      this.bgm.pause()
    } else {
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
  },
  // 一键拨打电话
  // 新郎电话
  callGroom: function () {
    wx.makePhoneCall({
      phoneNumber: '13700000000'
    })
  },
  // 新娘电话
  callBride: function () {
    wx.makePhoneCall({
      phoneNumber: '15600000000'
    })
  }
})
