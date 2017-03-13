<template>
  <div class="outer-container">
    <div class="note-editor">
      <div class="wrapper-head">
        <div class="note-head">
          <input type="text" class="top-title"  placeholder="请输入文章标题" data-type="title">
        </div>
      </div>
      <div class="wrapper-body">
        <div class="note-detail">
          <textarea class="detail-text" name="detail-text" cols="30" rows="10" placeholder="请输入文章内容..."></textarea>
          <a class="btn btn-send" href="#;"><i class="fa fa-send"></i>发送</a>
        </div>
      </div>

    </div>
  </div>


</template>

<script>
  export default {
    mounted () {
      this.$store.dispatch('changeArticleFlag', false)
    }
  }
</script>

<style>
  .outer-container {
    height: calc(100% - 4px);
    width:  100%;
    background-color: #fff;
  }

  .note-editor {
    margin: 0 auto;
    width: 80%;
    height: 100%;
    border-left: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
  }

  .note-editor textarea {
    border: 0;
    border-radius: 0;
  }

  .wrapper-head {
    padding: 0 20px;
    border-bottom: 1px solid #e0e1e5;
    display: -webkit-flex;
  }

  .note-head {
    width: 100%;
  }

  input.top-title {
    padding: 24px 0;
  }

  .top-title {
    width: 100%;
    display: inline-block;
    background-color: transparent;
    border: 0 none;
    font-size: 18px;
    color: #393939;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
  }

  input, textarea {
    border: 1px solid #e0e1e5;
    border-radius: 2px;
    line-height: 22px;
    padding: 5px 10px;
  }

  input, textarea {
    webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;
    -moz-transition: border linear 0.2s, box-shadow linear 0.2s;
    -ms-transition: border linear 0.2s, box-shadow linear 0.2s;
    -o-transition: border linear 0.2s, box-shadow linear 0.2s;
    transition: border linear 0.2s, box-shadow linear 0.2s;
  }

  input, textarea {
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
  }

  .wrapper-body {
    height: 90%;
    padding: 20px;
  }

  .note-detail {
    height: 100%;
  }
  .note-editor .detail-text{
    width: 100%;
    max-height: 300px;padding: 5px;
    border: 1px solid #cdcdcd;
    -webkit-border-radius:5px;
    -moz-border-radius:5px;
    border-radius:5px;
    font-size: 16px;
    line-height: 25px;
    overflow: auto;
    resize: none;
  }
  .note-editor .detail-text:focus{
    border-color: #4094c7;
    -webkit-box-shadow: 0 0 6px 0 #4094c7;
    -moz-box-shadow: 0 0 6px 0 #4094c7;
    box-shadow: 0 0 6px 0 #4094c7;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  .btn-send{
    float: right;
    background-color: #e78170;
    color:#fff;
  }
  .btn-send:hover{
    background-color: #e77170;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  .btn-send i{
    color:#fff;
    margin-right: 3px;
  }

</style>

