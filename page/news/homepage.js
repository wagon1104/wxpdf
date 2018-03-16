

Page({
  data: {
    items: [
      {
        bu: "english",
        buName: "英语",
        des: "英语每日短文分享",
        url: "./index",
        animate: {}
      },
      {
        bu: "math",
        buName: "数学",
        des: "数学每日练习",
        url: "./math",
        animate: {}

      }
    ],
  },
  englishClick:function(){
    wx.navigateTo({
      url: './index'
    })
  },
  mathClick: function () {
    wx.navigateTo({
      url: './math'
    })
  }
});
