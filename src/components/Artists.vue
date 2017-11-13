<template>
  <div>
    artist
    <List :artists="artists"></List>
  </div>
</template>
<script>
  import List from './Artists.List.vue'
  export default {
    data(){
      return {
        artists:[]
      }
    },
  components:{
    List
  },
    mounted(){
      this.$http.get('http://semanticwebtwin.herokuapp.com/artist/Yves%20Malan').then(d=>{
        console.log(d);
      }).catch(err=>console.log(err));
    }
  }
</script>
<style>

</style>
