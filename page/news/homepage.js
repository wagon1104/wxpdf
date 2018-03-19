

Page({
  data: {
    items: [
      {
        bu: "english",
        buName: "教育短文分享",
        des: "",
        url: "./index",
        animate: {}
      },
      {
        bu: "math",
        buName: "2019年导学练习",
        des: "",
        url: "./math",
        animate: {}

      },
      {
        bu: "meizhouyilian",
        buName: "2019年每周一练",
        des: "",
        url: "./meizhouyilian",
        animate: {}

      },
      {
        bu: "laoxushuxue",
        buName: "老徐讲数学",
        des: "",
        url: "./laoxushuxue",
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
  },
  meizhouyilianClick: function () {
    wx.navigateTo({
      url: './meizhouyilian'
    })
  },
  laoxushuxueClick: function () {
    wx.navigateTo({
      url: './laoxushuxue'
    })
  }
  
  
});
