<!--  -->
<template>
  <div id="left_menu">
      <div class="menu_name">
          <h1>LilyChenlin's Blog</h1>
          <h5>天天都要笑xixi~</h5>
      </div>
      <nav>
          <ul>
            <router-link to="/article">
              <li class="nav">
                  <span>首页</span>
              </li>
            </router-link>
            <router-link to="/about">
              <li class="nav">
                  <span>关于</span>
              </li>
            </router-link>
            <router-link to="/signIn">
              <li class="nav">
                  <span>登录</span>
              </li>
            </router-link>
            <router-link to="/admin/manage">
              <li class="nav">
                  <span>管理</span>
              </li>
            </router-link>
            <router-link to="/admin/articleEdit">
              <li class="nav">
                  <span>写文章</span>
              </li>
            </router-link>   
          </ul>

      </nav>
      <div class="info">
          <img src="../../favicon.png" alt="head">
          <div class="info_name">LilyChenlin</div>
          <div class="archive">
            <ul>
              <router-link to="/article"> 
                <li>
                  <span class="archive_count">14</span>
                  <span class="archive_name">日志</span>
                </li>
              </router-link>
            </ul>
          </div>
          <ul class="communication">
            <li class="communication_item">
              <a href="#">
                <span>GitHub</span>
              </a>
            </li>
            <li class="communication_item">
              <a href="#">
                <span>GitHub</span>
              </a>
            </li>
            <li class="communication_item">
              <a href="#">
                <span>GitHub</span>
              </a>
            </li>
            <li class="communication_item">
              <a href="#">
                <span>GitHub</span>
              </a>
            </li>
          </ul>
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
  #left_menu {
    float: left;
    width: 240px;
    margin-right: 20px;
  }
  @media (max-width: 767px) {
    #left_menu {
      display: none;
    }
  }

  #left_menu a:hover {
    color: #222;
    background: #FFFFCC;
  }
  .menu_name {
    background: rgb(38, 42, 48);
    color: white;
    padding: 10px 0;
  }

  nav {
    background: white;
    padding: 20px 0;
  }

  .nav {
    padding: 8px 20px;
    text-align: left;
  }

  .info {
    margin-top: 10px;
    padding: 20px;
    background: white;
  }

  .info_name {
    font-weight: 600;
    padding: 5px;
  }

  .info img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .archive {
    padding-top: 20px;
  }

  .archive .archive_count {
    display: block;
    color: #222;
    font-weight: 600;
    font-size: 16px;
  }

  .archive .archive_name {
    display: block;
    color: #999;
    font-size: 14px;
  }

  .communication {
    padding-top: 20px;
  }

  .communication_item {
    display: inline-block;
    width: 40%;
    font-size: 14px;
    font-weight: 600;
    padding: 5px;
  }
</style>
