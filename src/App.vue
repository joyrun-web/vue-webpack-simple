<template>
  <div id="app">{{#if_eq animateType "fade"}}
    <transition name="fade">{{/if_eq}}
      <router-view></router-view>{{#if_eq animateType "fade"}};
    </transition>{{/if_eq}}
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style{{#less}} lang="less"{{/less}}{{#if_eq cssPerprocessor "sass"}} lang="scss"{{/if_eq}}>
  /* --- reset style --- */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html, body {
    line-height: 1;
    width: 100%;
  }
  body, html {
    font-family: "PingFang SC", Verdana, "Helvetica Neue", "Microsoft Yahei", "Hiragino Sans GB", "Microsoft Sans Serif", "WenQuanYi Micro Hei", sans-serif;
  }
  body {
    color: #fff;
    background-color: rgba(0, 0, 0, .75);
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  input {
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* 清除select箭头 */
  select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: #FFFFFF;
    text-decoration: none;
  }
  *:focus {
    outline: none;
  }
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    /* 字体抗锯齿 */
    -webkit-font-smoothing: antialiased;
  }

  {{#if_eq animateType "fade"}}
  /* router fade */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  {{/if_eq}}
  #app {
    width: 100%;
    margin: 0 auto;
  }

  /* clear fix */
  .clearfix:after {
    content: "\200B";
    display: block;
    height: 0;
    clear: both;
  }
  .clearfix { *zoom: 1; }

  /*  ------------- overwrite minit ui default css ------------ */
  .mint-spinner-snake {
    border: 2px solid transparent !important;
    border-top-color: rgb(204, 204, 204) !important;
    border-left-color: rgb(204, 204, 204) !important;
    border-bottom-color: rgb(204, 204, 204) !important;
  }
  .mint-indicator-wrapper {
    z-index: 9999 !important;
  }

  /* -- media query -- */
  @media screen and (max-width: 321px) {
    body {
      font-size: 16px
    }
  }

  @media screen and (min-width: 321px) and (max-width: 400px) {
    body {
      font-size: 17px
    }
  }

  @media screen and (min-width: 400px) and (max-width: 840px) {
    body {
      font-size: 19px
    }
  }

  @media screen and (min-width: 840px) {
    body {
      font-size: 22px
    }
  }
</style>
