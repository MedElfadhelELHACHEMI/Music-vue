import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Albums from '@/components/Albums.vue'
import Tracks from '@/components/Tracks.vue'
import Artists from '@/components/Artists.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },

    {
      path: '/artists',
      name: 'Artists',
      component: Artists
    }
    ,

    {
      path: '/albums',
      name: 'Albums',
      component: Albums
    },

    {
      path: '/tracks',
      name: 'Tracks',
      component: Tracks
    }
  ]
})
