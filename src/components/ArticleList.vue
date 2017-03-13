<template>
  <div>
    <ul>
      <li class="list" v-for="article in articles">
        <p class="list-top">
          <a href="#" class="author">
            <span>小黄人</span>
          </a>
          <span class="time">2017-02-09</span>
        </p>
        <h2 class="title">
          <router-link to="/article/123211">{{article.title}}</router-link>
        </h2>
        <span class="small-text">阅读 {{article.read}}</span>
        <span class="small-text">评论 {{article.comment}}</span>
        <span class="small-text">喜欢 {{article.like}}</span>
        <span class="small-text">打赏 {{article.pay}}</span>
        <span class="image"
          :style="{ background: article.src, backgroundSize: '100%', backgroundRepeat: 'no-repeat',}"></span>
      </li>
    </ul>
    <div v-if="articles.length > 5" class="pagination-container">
      <Pagination :page-no="pageNo" :current.sync="currentPage"></Pagination>
      <!--<el-button type="primary" icon="search">普通按钮</el-button>-->
      <!--elementUI分页-->
      <!--<div class="pagination-box" >
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[5, 10, 20, 50, 100]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="articles.length">
        </el-pagination>
      </div>-->
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Pagination from './Pagination.vue'

  export default {
    data () {
      return {
        /* currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4 */
        pageNo: 13,
        currentPage: 1
      }
    },
    watch: {
      currentPage: 'requestData'
    },
    ready () {
      this.requestData()
    },
    computed: mapGetters({
      articles: 'getArticles'
    }),
    methods: {
      requestData () {
        // 在这里使用ajax或将对应页码传过去获取数据即可
      }
    },
    mounted () {
      console.log(this.articles.length)
      // console.log(this.articles.length())
      this.$store.dispatch('changeArticleFlag', true)
    },
    components: {
      Pagination
    }
  }
</script>

<style>
  .list{
    margin: 17px 10px 17px 30px;
    padding-bottom: 17px;
    border-bottom: 1px dashed #d9d9d9;
  }
  .list-top{
    padding-top: 10px;
  }
  .list .title{
    margin: 10px 0;
    display: inherit;
    font-weight:bold;
    line-height: 1.5;
  }
  .list .title a{
    font-size: 18px;
  }
  .list .title a:hover {
    color: #000000;
  }
</style>

