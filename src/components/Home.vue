<template>
  <div>
    <div class="showbar">
      <div class="cover-image"></div>
      <div class="text">
        <h1>简书</h1>
        <h3>交流故事</h3>
        <p>一个基于内容分享的社区</p>
        <router-link to="/write">
          <i class="fa fa-home"></i>
          <span>提笔写文章</span>
        </router-link>
      </div>
    </div>
    <div class="article-page">
      <nav>
        <span class="nav-text fir">
          <a href="#">发现</a>
        </span>
        <span class="nev-text">
          <router-link to="/bonus">2017年精选</router-link>
        </span>
        <span class="search clearfloat">
          <span class="input">
            <input type="search" placeholder="搜索">
            <span class="search-icon">
              <i class="fa fa-search"></i>
            </span>
          </span>
        </span>
      </nav>
      <div class="article-list">
        <ul class="btn-group">
          <li :class="{active: show === 'hot'}" @click="displayArticle('hot')">
            <router-link to="/home/article/hot">热门</router-link>
          </li>
          <li :class="{active: show === 'new'}" @click="displayArticle('new')">
            <router-link to="/home/article/new">新上榜</router-link>
          </li>
          <li :class="{active: show === 'daily'}" @click="displayArticle('daily')">
            <router-link to="/home/article/daily">日报</router-link>
          </li>
          <li :class="{active: show === 'weekhot'}" @click="displayArticle('weekhot')">
            <router-link to="/home/article/weekhot">七日热门</router-link>
          </li>
          <li :class="{active: show === 'monthhot'}" @click="displayArticle('monthhot')">
            <router-link to="/home/article/monthhot">三十日热门</router-link>
          </li>
          <li :class="{active: show === 'reward'}" @click="displayArticle('reward')">
            <router-link to="/home/article/reward">有奖活动</router-link>
          </li>
          <li :class="{active: show === 'publish'}" @click="displayArticle('publish')">
            <router-link to="/home/article/publish">简书出版</router-link>
          </li>
          <li :class="{active: show === 'hotnews'}" @click="displayArticle('hotnews')">
            <router-link to="/home/article/hotnews">实热新闻</router-link>
          </li>
          <li :class="{active: show === 'choice'}" @click="displayArticle('choice')">
            <router-link to="/home/article/choice">专题精选</router-link>
          </li>
          <li :class="{active: show === 'recommend'}" @click="displayArticle('recommend')">
            <router-link to="/home/article/recommend">推荐文章</router-link>
          </li>
          <li :class="{active: show === 'topic'}" @click="displayArticle('topic')">
            <router-link to="/home/article/topic">主题文章</router-link>
          </li>
        </ul>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      show: 'getShow'
    }),
    methods: {
      displayArticle (type) {
        this.$store.dispatch('displayArticle', type)
      }
    },
    mounted () {
      this.$store.dispatch('displayArticle', 'hot')
      this.$store.dispatch('changeArticleFlag', true)
    }
  }
</script>

<style>
  .btn-group{
    margin-left: 15px;
    margin-top: 20px;
  }
  .btn-group .active{
    background-color: #de533a;
  }
  .btn-group .active a{
    color: #fff;
  }
  .btn-group li{
    margin: 5px;
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
  }
  @media screen and (max-width: 1100px) {
    .showbar{
      display: none;
    }
  }
  @media screen and (max-width: 768px){
    .article-page{
      width: 100%;
      right: 0;
    }
  }
</style>

