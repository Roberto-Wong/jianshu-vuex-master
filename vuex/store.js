/**
 * Created by huanglibing on 2017/2/7.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  show: 'hot',
  loginway: 'login',
  articleFlag: false,
  articles: [],
  hotArticles: [{
    author:'萝卜头',
    title: '【热门】重新开始生活的勇气',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【热门】重新开始生活的勇气',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【热门】重新开始生活的勇气',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【热门】重新开始生活的勇气',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【热门】重新开始生活的勇气',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【热门】重新开始生活的勇气',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【热门】重新开始生活的勇气',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【热门】重新开始生活的勇气',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }],
  newArticles: [{
    author:'萝卜头',
    title: '【新上榜】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【新上榜】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }],
  dailyArticles: [{
    author:'萝卜头',
    title: '【日报】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【日报】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }],
  weekhotArticles: [{
    author:'萝卜头',
    title: '【七日热门】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【七日热门】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }],
  monthhotArticles: [{
    author:'萝卜头',
    title: '【三十日热门】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【三十日热门】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }],
  rewardArticles: [{
    author:'萝卜头',
    title: '【有奖活动】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【有奖活动】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }],
  publishArticles: [{
    author:'萝卜头',
    title: '【简书出版】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【简书出版】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }],
  hotnewsArticles: [{
    author:'萝卜头',
    title: '【实热新闻】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【实热新闻】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }],
  choiceArticles: [{
    author:'萝卜头',
    title: '【专题精选】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【专题精选】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }],
  recommendArticles: [{
    author:'萝卜头',
    title: '【推荐文章】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【推荐文章】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }],
  topicArticles: [{
    author:'萝卜头',
    title: '【主题文章】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }, {
    author:'萝卜头',
    title: '【主题文章】重新开始生活的方向',
    time: '2017-02-07',
    read: '3302',
    comment: '239',
    like: '535',
    pay: '3',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }],
  hotTopicArticles: [{
    img: '../../static/images/topic_1.jpg',
    title: '游戏',
    par: '玩转简书的第一步，从这个专题开始。' +
    '想上首页热门榜么？好内容想被更多人看到么？来投稿吧！' +
    '如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。' +
    '投稿必须原创。如果发现有非...',
    number: '97233',
    concern: '121.7',
    keys: '故事、连载',
    time: '20160620'
  }, {
    img: '../../static/images/topic_3.jpg',
    title: '诗',
    par: '诗，让你感受自己的心灵。' +
    '专题主编：苏锦年 投稿须知：' +
    '本专题收录古诗、词、现代诗以及诗词点评及指导。' +
    '2.内容必须为原创，切勿用其他诗人的诗句。' +
    '3.文章排版整洁，注意...',
    number: '35420',
    concern: '146.6',
    keys: '诗',
    time: '20160630'
  }],
  recommendTopicArticles: [{
    img: '../../static/images/topic_1.jpg',
    title: '足球',
    par: '享受青春，享受足球。' +
    '岁月里总需要热情去追求一些东西，比如足球！' +
    '如果或多或少错过一些东西，不要惆怅，请耐心静候下一场比赛。' +
    '青春不散场...',
    number: '34263',
    concern: '294.7',
    keys: '故事、连载',
    time: '20160620'
  }, {
    img: '../../static/images/topic_3.jpg',
    title: '音乐',
    par: '音乐，让你感受自己的心灵。' +
    '音乐主编：苏锦添 投稿须知：' +
    '1.本专题收录古典、流行、网络歌曲点评及指导。' +
    '2.内容必须为原创，切勿用其他歌手的歌曲。' +
    '3.文章排版整洁，注意...',
    number: '33445',
    concern: '122.6',
    keys: '音乐',
    time: '20160630'
  }],
  monthTexts: [
    {
      title: '给你90天，成为不一样的自己',
      content_1: '如果你应付不了现在的生活和工作',
      content_2: '无论你走到哪里，',
      content_3: '无论你换了什么工作，什么公司，',
      content_4: '都无济于事。',
      content_5: '因为你根本没想让自己成熟起来，',
      content_6: '想让变的更优秀也不过是一句口头禅。',
      author: '',
      bg: 'url(../static/images/bonus_1.jpg)'
    },
    {
      title: '使你更有思想的20本书',
      content_1: '真正伟大的当代文学，',
      content_2: '正如人们借由狄更斯来了解十九世纪的英国，',
      content_3: '后人也可以通过《自由》来了解',
      content_4: '二十一世纪初期的美国。',
      content_5: '',
      content_6: '',
      author: '',
      bg: 'url(../static/images/bonus_2.jpg)'
    },
    {
      title: '无感是最舒适的爱情',
      content_1: '爱情原本就是个很娇气的东西，',
      content_2: '它经不起太多的矫情，你死我活和无理取闹，',
      content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
      content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
      content_5: '才是爱情最原本的样子。',
      content_6: '当她不再刻意的感受他的存在，',
      author: '',
      bg: 'url(../static/images/bonus_3.jpg)'
    },
    {
      title: '无感是最舒适的爱情',
      content_1: '爱情原本就是个很娇气的东西，',
      content_2: '它经不起太多的矫情，你死我活和无理取闹，',
      content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
      content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
      content_5: '才是爱情最原本的样子。',
      content_6: '当她不再刻意的感受他的存在，',
      author: '',
      bg: 'url(../../static/images/bonus_4.jpg)'
    },
    {
      title: '无感是最舒适的爱情',
      content_1: '爱情原本就是个很娇气的东西，',
      content_2: '它经不起太多的矫情，你死我活和无理取闹，',
      content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
      content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
      content_5: '才是爱情最原本的样子。',
      content_6: '当她不再刻意的感受他的存在，',
      author: '',
      bg: 'url(../static/images/bonus_5.jpg)'
    },
    {
      title: '无感是最舒适的爱情',
      content_1: '爱情原本就是个很娇气的东西，',
      content_2: '它经不起太多的矫情，你死我活和无理取闹，',
      content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
      content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
      content_5: '才是爱情最原本的样子。',
      content_6: '当她不再刻意的感受他的存在，',
      author: '',
      bg: 'url(../static/images/bonus_6.jpg)'
    },
    {
      title: '无感是最舒适的爱情',
      content_1: '爱情原本就是个很娇气的东西，',
      content_2: '它经不起太多的矫情，你死我活和无理取闹，',
      content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
      content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
      content_5: '才是爱情最原本的样子。',
      content_6: '当她不再刻意的感受他的存在，',
      author: '',
      bg: 'url(../static/images/bonus_7.jpg)'
    },
    {
      title: '无感是最舒适的爱情',
      content_1: '爱情原本就是个很娇气的东西，',
      content_2: '它经不起太多的矫情，你死我活和无理取闹，',
      content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
      content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
      content_5: '才是爱情最原本的样子。',
      content_6: '当她不再刻意的感受他的存在，',
      author: '',
      bg: 'url(../static/images/bonus_8.jpg)'
    },
    {
      title: '无感是最舒适的爱情',
      content_1: '爱情原本就是个很娇气的东西，',
      content_2: '它经不起太多的矫情，你死我活和无理取闹，',
      content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
      content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
      content_5: '才是爱情最原本的样子。',
      content_6: '当她不再刻意的感受他的存在，',
      author: '',
      bg: 'url(../static/images/bonus_9.jpg)'
    },
    {
      title: '无感是最舒适的爱情',
      content_1: '爱情原本就是个很娇气的东西，',
      content_2: '它经不起太多的矫情，你死我活和无理取闹，',
      content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
      content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
      content_5: '才是爱情最原本的样子。',
      content_6: '当她不再刻意的感受他的存在，',
      author: '',
      bg: 'url(../static/images/bonus_10.jpg)'
    },
    {
      title: '无感是最舒适的爱情',
      content_1: '爱情原本就是个很娇气的东西，',
      content_2: '它经不起太多的矫情，你死我活和无理取闹，',
      content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
      content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
      content_5: '才是爱情最原本的样子。',
      content_6: '当她不再刻意的感受他的存在，',
      author: '',
      bg: 'url(../static/images/bonus_11.jpg)'
    },
    {
      title: '无感是最舒适的爱情',
      content_1: '爱情原本就是个很娇气的东西，',
      content_2: '它经不起太多的矫情，你死我活和无理取闹，',
      content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
      content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
      content_5: '才是爱情最原本的样子。',
      content_6: '当她不再刻意的感受他的存在，',
      author: '',
      bg: 'url(../static/images/bonus_12.jpg)'
    }
  ]
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})


