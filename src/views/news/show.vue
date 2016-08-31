<template>
    <div class="g-show g-wrap">
        <div class="hd">
            <masker style="border-radius: 2px;">
              <div class="m-img" v-if="hasCoverImage" :style="{'backgroundImage': 'url('+ coverImage +')'}"></div>
              <div slot="content" class="m-title">
                {{news.title}}
              </div>
            </masker>
        </div>
        <div class="bd">
            <article class="weui_article">
                {{{news.body}}}
            </article>
        </div>
    </div>
</template>

<script>
  import { WAIT_IMG } from '../../util'
  import { Scroller, Masker } from 'vux-components'

  export default {
    components: {
      Scroller,
      Masker
    },
    data () {
      return {
        hasCoverImage: false,
        coverImage: WAIT_IMG,
        news: {}
      }
    },
    created () {
      this.fetchNews(this.$route.params.id)
    },
    methods: {
      loadImg () {
        let imgs = this.$el.getElementsByTagName('img')
        for (let img of imgs) {
          img.onerror = () => {
            this.$covImg(this, img.src, cloudSrc => {
              img.src = cloudSrc
            })
          }
        }
      },
      fetchNews (id) {
        this.$http.get(this.$Api(`http://news-at.zhihu.com/api/4/news/${id}`))
          .then(response => {
            this.news = response.data
            if (this.news.images && this.news.images.length) {
              this.$covImg(this, this.news.images[0], cloudSrc => {
                this.coverImage = cloudSrc
                this.hasCoverImage = true
              })
            }
            this.$nextTick(this.loadImg)
          })
          .catch(console.log)
      }
    }
  }
</script>

<style lang="less">
@import "../../assets/weui/widget/weui_page/weui_article.less";

.weui_article img{
  wdth:100%;
}
.g-show{
  .m-img {
    padding-bottom: 33%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
  }
  .m-title {
    color: #fff;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    position: absolute;
    left: 0;
    right: 0;
    width: 85%;
    text-align: center;
    top: 50%;
    margin: 0 auto;
    transform: translateY(-50%);
  }
  .view-more{
    text-align:right;
    font-size:12px;
    margin-right:1.2rem;
  }
}


</style>