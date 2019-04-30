<!--  -->
<template>
  <div id="content">
    <div class="article_wrap">
      <div class="article_title">Hello world</div>
      <div class="article_info">
        <span class="aritcle_info_date">发表于：2017-03-17</span>
        <span class="article_info_label">标签：
          <span class="tag_margin">未分类</span>
        </span>
      </div>
      <!-- 文章关键字 -->
      <div class="article_gist">hello world</div>
      <div class="article_button article_all">阅读全文 ></div>
      <div class="article_underline"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

}

</script>
<style>
  .article_wrap {
    padding: 40px;
    background: #fff;
    /* 清除浮动 */
    /* overflow: hidden; */
  }

  .article_title {
    display: inline-block;
    color: #222;
    font-size: 34px;
    font-weight: 600;
    border-bottom: 1px solid white;
    cursor: pointer;
  }

  .article_title:hover {
    border-bottom: 1px solid #222;
  }

  .article_info {
    color: #999;
    font-size: 14px;
    padding-top: 8px;
  }

  .tag_margin {
    margin: 3px;
  }

  .article_gist {
    text-align: left;
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: 16px;
  }

  .article_button {
    display: inline-block;
    padding: 3px 12px;
    border: 2px solid #222;
    color: #222;
    font-size: 14px;
    cursor: pointer;
  }

  .article_all:hover {
    color: white;
    background: #000;
    font-weight: 600;
  }

  .article_underline {
    height: 1px;
    width: 40px;
    background: #545455;
    margin: 80px auto 0;
  }
</style>
