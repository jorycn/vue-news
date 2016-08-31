
<template>
  <div>
    <div class="g-wrap g-news">
        <div class="list-container">
            <cov-articles :articles="value"  v-for="(key, value) of items"></cov-articles>
        </div>
    </div>
    <dialog :show.sync="showDialog" class="dialog-article" :scroll="true">
      <span class="vux-close" @click="showDialog=false"></span>
      <div class="img-box" v-bind:style="{ height:dialogHeight + 'px'}">
        <iframe :src="dialogurl" frameborder="0" v-bind:style="{ height:dialogHeight + 'px'}" width="100%"></iframe>
      </div>
    </dialog>
  </div>
</template>

<script>
import covArticles from './articles.vue'
import { nSetItems } from '../../vuex/action'
import { Scroller, Spinner, Dialog } from 'vux-components'

import newsApi from '../../api/news.js'

export default {
  vuex: {
    getters: {
      items: ({ News }) => News.items
    },
    actions: {
      nSetItems
    }
  },
  data () {
    return {
      dialogurl: '',
      showDialog: false
    }
  },
  components: {
    covArticles,
    Scroller,
    Spinner,
    Dialog
  },
  created () {
    this.loadData()
    this.dialogHeight = 600
  },
  methods: {
    loadData () {
      newsApi.get('top', response => {
        let data = response.result.data
        let arr = []
        for (let a of data) {
          arr.push({
            title: a.title,
            type: a.type,
            img: a.thumbnail_pic_s,
            url: a.url,
            date: a.date.split(' ')[1]
          })
        }
        this.nSetItems(arr)
      })
    }
  },
  events: {
    'open-dialog': function (url) {
      this.dialogurl = url
      this.showDialog = true
    }
  }
}
</script>

<style lang="less">
.vux-flexbox{
  width:98%;
}
.g-news{
  font-size: 12px;
}
.dialog-article .weui_dialog{
  width:98%
}
.vux-close {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  overflow: hidden;
  color: #ccc;
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    top: 50%;
    left: 0;
    background: #98979d;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
}
</style>
