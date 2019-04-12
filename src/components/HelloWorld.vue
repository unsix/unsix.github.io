<template>
    <div class="news">
      <div class="container">
        <div class="header">
          <div class="left">
            <img alt="Vue logo" src="../assets/back.png">
            <h2>返回</h2>
          </div>
          <div class="center">
            <h1 @click="buttoncli">学习园地</h1>
          </div>
        </div>
      </div>
      <div class="content">
        <div>
          <a-tabs class="tabs" defaultActiveKey="1" tabPosition="left"  @change="callback" >
            <a-tab-pane tab="2019.02" key="1">
              <div class="news-list">
                <div>
                  <img src="../assets/news.png" alt="">
                </div>
                <div class="news-text">
                  <h5>习近平：用新时代中国特色社会主义思想铸魂育人</h5>
                  <h5>2019.02.03 <span>新华网</span></h5>
                </div>
              </div>
              <div class="news-list">
                <div>
                  <img src="../assets/news.png" alt="">
                </div>
                <div class="news-text">
                  <h5>习近平：用新时代中国特色社会主义思想铸魂育人</h5>
                  <h5>2019.02.03 <span>新华网</span></h5>
                </div>
              </div>
              <div class="news-list">
                <div>
                  <img src="../assets/news.png" alt="">
                </div>
                <div class="news-text">
                  <h5>习近平：用新时代中国特色社会主义思想铸魂育人</h5>
                  <h5>2019.02.03 <span>新华网</span></h5>
                </div>
              </div>
              <div class="news-list">
                <div>
                  <img src="../assets/news.png" alt="">
                </div>
                <div class="news-text">
                  <h5>习近平：用新时代中国特色社会主义思想铸魂育人</h5>
                  <h5>2019.02.03 <span>新华网</span></h5>
                </div>
              </div>
              <div class="news-list">
                <div>
                  <img src="../assets/news.png" alt="">
                </div>
                <div class="news-text">
                  <h5>习近平：用新时代中国特色社会主义思想铸魂育人</h5>
                  <h5>2019.02.03 <span>新华网</span></h5>
                </div>
              </div>
              <div class="news-list">
                <div>
                  <img src="../assets/news.png" alt="">
                </div>
                <div class="news-text">
                  <h5>习近平：用新时代中国特色社会主义思想铸魂育人</h5>
                  <h5>2019.02.03 <span>新华网</span></h5>
                </div>
              </div>
            </a-tab-pane>
            <a-tab-pane tab="2019.01" key="2" forceRender>
              <div class="news-list">
                <div>
                  <img src="../assets/news.png" alt="">
                </div>
                <div class="news-text">
                  <h5>习近平：用新时代中国特色社会主义思想铸魂育人</h5>
                  <h5>2019.02.03 <span>新华网</span></h5>
                </div>
              </div>
            </a-tab-pane>
            <a-tab-pane tab="2018.12" key="3">
              <div class="news-list">
                <div>
                  <img src="../assets/news.png" alt="">
                </div>
                <div class="news-text">
                  <h5>习近平：用新时代中国特色社会主义思想铸魂育人</h5>
                  <h5>2019.02.03 <span>新华网</span></h5>
                </div>
              </div>
              <div class="news-list">
                <div>
                  <img src="../assets/news.png" alt="">
                </div>
                <div class="news-text">
                  <h5>习近平：用新时代中国特色社会主义思想铸魂育人</h5>
                  <h5>2019.02.03 <span>新华网</span></h5>
                </div>
              </div>
            </a-tab-pane>
            <a-tab-pane tab="2018.11" key="4">
              <div class="news-list">
                <div>
                  <img src="../assets/news.png" alt="">
                </div>
                <div class="news-text">
                  <h5>习近平：用新时代中国特色社会主义思想铸魂育人</h5>
                  <h5>2019.02.03 <span>新华网</span></h5>
                </div>
              </div>
              <div class="news-list">
                <div>
                  <img src="../assets/news.png" alt="">
                </div>
                <div class="news-text">
                  <h5>习近平：用新时代中国特色社会主义思想铸魂育人</h5>
                  <h5>2019.02.03 <span>新华网</span></h5>
                </div>
              </div>
              <div class="news-list">
                <div>
                  <img src="../assets/news.png" alt="">
                </div>
                <div class="news-text">
                  <h5>习近平：用新时代中国特色社会主义思想铸魂育人</h5>
                  <h5>2019.02.03 <span>新华网</span></h5>
                </div>
              </div>
            </a-tab-pane>
            <a-tab-pane tab="2018.10" key="5" forceRender>
              <div class="news-list">
                <div>
                  <img src="../assets/news.png" alt="">
                </div>
                <div class="news-text">
                  <h5>习近平：用新时代中国特色社会主义思想铸魂育人</h5>
                  <h5>2019.02.03 <span>新华网</span></h5>
                </div>
              </div>
            </a-tab-pane>
            <a-tab-pane tab="2018.09" key="6">
              <div class="news-list">
                <div>
                  <img src="../assets/news.png" alt="">
                </div>
                <div class="news-text">
                  <h5>习近平：用新时代中国特色社会主义思想铸魂育人</h5>
                  <h5>2019.02.03 <span>新华网</span></h5>
                </div>
              </div>
            </a-tab-pane>
            <a-tab-pane tab="2018.08" key="7">
              <div class="news-list">
                <div>
                  <img src="../assets/news.png" alt="">
                </div>
                <div class="news-text">
                  <h5>习近平：用新时代中国特色社会主义思想铸魂育人</h5>
                  <h5>2019.02.03 <span>新华网</span></h5>
                </div>
              </div>
            </a-tab-pane>
            <a-tab-pane tab="2018.09" key="8" forceRender>
              <div class="news-list">
                <div>
                  <img src="../assets/news.png" alt="">
                </div>
                <div class="news-text">
                  <h5>习近平：用新时代中国特色社会主义思想铸魂育人</h5>
                  <h5>2019.02.03 <span>新华网</span></h5>
                </div>
              </div>
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </div>
</template>

<script>
  import screenfull from 'screenfull'
export default {
  data () {
    return {
      isFullscreen: false
    }
  },
  methods: {
    callback (key) {
      console.log(key)
    },
    buttoncli () {
      if (!screenfull.enabled) { // 如果不允许进入全屏，发出不允许提示
        this.$message({
          message: '不支持全屏',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
      this.$message({
        message: '全屏啦',
        type: 'success'
      })
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .news{
    width: 100%;
    min-width: 1000px;
    height: 100vh;
    background: #2c3264;
    .container{
      width: 100%;
      border-bottom: 3px solid #313d79;
      .header{
        width: 70%;
        height: 100px;
        margin: 0 auto;
        display: flex;
        .left{
          width: 20%;
          display: flex;
          img{
            height: 29px;
            margin-top: 36px;
          }
          h2{
            margin-left: 10px;
            line-height: 100px;
            color: #a8b0d7;
            font-weight: normal;
            font-size: 23px;
          }
        }
        .center{
          width: 80%;
          margin: 0 auto;
          h1{
            line-height: 100px;
            text-align: center;
            color: #a8b0d7;
            font-weight: normal;
            padding-right: 25%;

          }
        }
      }
    }
    .content{
      width: 70%;
      min-width: 1000px;
      height: 78vh;
      background: #2e429b;
      margin: 50px auto 0 auto;
      padding: 60px;
      .ant-tabs .ant-tabs-left-bar{
        border: none;
        color: #93a4fe;
      }
      .ant-tabs .ant-tabs-left-content {
        border: none;
      }
      .ant-tabs-nav{
        margin-top: 20px;
        .ant-tabs-tab-active{
          background: #1a2a78;
          color: #93a4fe;
        }
      }
      .ant-tabs .ant-tabs-left-bar .ant-tabs-ink-bar, .ant-tabs .ant-tabs-right-bar .ant-tabs-ink-bar {
        background: url("../assets/arrow.png") no-repeat  0 23px;
        background-size:10px 10px;
        width: 20px;
      }
      .ant-tabs .ant-tabs-left-bar .ant-tabs-tab, .ant-tabs .ant-tabs-right-bar .ant-tabs-tab{
        font-size: 20px;
        padding: 10px 37px;
        border-radius: 8px;
        line-height: 38px
      }
      .ant-tabs-tabpane{
        margin-left: 50px;
        overflow: scroll;
        height: 600px;
        scrollbar-base-color:#000
      }
      .news-list{
        display: flex;
        height: 140px;
        border-bottom: 1px #5d87e9 solid;
        margin-top: 20px;
        .news-text{
          font-size: 20px;
          margin-left: 35px;
          h5{
            color: #d9dff5!important;
            letter-spacing: 1px;
            padding-top: 10px;
            span{
              padding-left: 45px;
            }
          }
        }
        .news-text h5:nth-child(2){
          margin-top: 25px;
        }
      }
    }
  }
</style>
