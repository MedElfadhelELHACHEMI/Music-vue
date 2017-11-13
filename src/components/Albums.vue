<template>
  <div>
    albums
    <List :albums="albums"></List>
  </div>
</template>
<script>
  import List from './Albums.List.vue'
  export default {
    data(){
      return {
        albums:[]
      }
    },
    components:{
      List
    },
    mounted(){
      this.$http.get('http://semanticwebtwin.herokuapp.com/albums').then(d=>{
        console.log(d);
      }).catch(err=>console.log(err));
    }
  }
</script>
<style>

</style>
