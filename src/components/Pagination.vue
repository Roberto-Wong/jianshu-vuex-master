<template>
  <!--
    params:
      pageNo: 总页数
      current: 当前的页数
  -->
  <div class="pager">
    <button class="btn btn-pager" :disabled="this.current == 1" @click="prePage">上一页</button>
    <!--<span v-if="pageNo !== 1" :class="[page-index, { 1 == current ? 'active' : '']}" @click="goPage(1)">1</span>-->
    <span v-if="pageNo !== 1" class="page-index" :class="{ active : current === 1 }" @click="goPage(1)">1</span>
    <span v-if="preClipped" class="page-index">...</span>
    <!--<span v-for="index in pages" :class="[page-index { index == current ? 'active' : ''}]" @click="goPage(index)">{{index}}</span>-->
    <span v-for="index in pages" class="page-index" :class="{ active : current === index }" @click="goPage(index)">{{index}}</span>
    <span v-if="backClipped" class="page-index">...</span>
    <!--<span :class="[page-index { pageNo == current ? 'active' : ''}]" @click="goPage(pageNo)">{{pageNo}}</span>-->
    <span  class="page-index" :class="{ active : current === pageNo }" @click="goPage(pageNo)">{{pageNo}}</span>
    <button class="btn btn-pager" :disabled="this.current == pageNo" @click="nextPage">下一页</button>
  </div>
</template>

<script>
  export default {
    props: {
      pageNo: {
        type: Number,
        default: 8
      },
      current: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        // 用于判断省略号是否显示
        backClipped: true,
        preClipped: false
      }
    },
    methods: {
      prePage () {
        // 上一页
        this.current --
      },
      nextPage () {
        // 下一页
        this.current ++
      },
      goPage (index) {
        // 跳转到相应的页面
        if (index !== this.current) {
          this.current = index
          console.log(index)
        }
      }
    },
    computed: {
      // 使用计算来得到每次应该显示的页码
      pages () {
        let ret = []
        if (this.current > 3) {
          // 当前页码大于3时，显示当前页码的前两个
          ret.push(this.current - 2)
          ret.push(this.current - 1)
          if (this.current > 4) {
            this.preClipped = true
          }
        } else {
          this.preClipped = false
          for (let i = 2; i < this.current; i++) {
            ret.push(i)
          }
        }
        if (this.current !== this.pageNo && this.current !== 1) {
          ret.push(this.current)
        }
        if (this.current < (this.pageNo - 2)) {
          // 显示当前页码的后2个
          ret.push(this.current + 1)
          ret.push(this.current + 2)
          if (this.current < (this.pageNo - 3)) {
            // 当前页码与最后差距3以上时显示省略号
            this.backClipped = true
          }
        } else {
          this.backClipped = false
          for (let i = (this.current + 1); i < this.pageNo; i++) {
            ret.push(i)
          }
        }
        // 返回整个页码组
        return ret
      }
    }
  }
</script>

<style>
  .pager{
    padding: 20px 0 40px 0;
    text-align: center;
  }
  .btn-pager{
    margin-left: 10px;
    padding: 0;
    width: 60px;
    height: 30px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #e3e3e3;
    color: #000;
    border-radius: 0;
  }
  .btn-pager:hover{
    background-color: #f2f2f2;
  }
  .page-index{
    display: inline-block;
    margin-left:10px;
    width: 35px;
    height: 30px;
    line-height: 30px;
    background-color: #fff;
    cursor: pointer;
    color: #000;
  }
  .pager .active{
    color: #fff;
    background-color: #0bbe06;
  }
</style>

