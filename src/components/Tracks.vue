<template>
  <div>
    {{tracks}}
  </div>
</template>
<script>
  import List from './Tracks.List.vue'
  export default {
    data(){
      return {
        tracks:[]
      }
    },
    components:{
      List
    },
    mounted(){
    this.$http.get('https://semanticwebtwin.herokuapp.com/track/Iks%20II%20(feat.%20Amelie)').then(d=>{
      this.tracks = d.data;
    }).catch(err=>console.log(err));
    }
  }
</script>
<style>

</style>
