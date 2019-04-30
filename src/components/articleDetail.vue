<!--  -->
<template>
  <div id="content">
      <div class="article_title article_detail_title">Hello world</div>
      <div class="article_info">
        <span class="aritcle_info_date">发表于：2017-03-17</span>
        <span class="article_info_label">标签：
          <span class="tag_margin">未分类</span>
        </span>
      </div>
      <div class="article_detail_content"></div>
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
    .article_detail_title{
        cursor: default;
        margin: 40px 0 0;
    }
    .article_detail_content {
        text-align: left;
        padding: 60px 0;
        font-size: 18px;
    }
</style>
