<template>
  <div>
    <b-table striped hover :items="tracks"></b-table>
  </div>
</template>
<script>
  export default {
  props:{
    tracks:{
      required:true,
      type:Array
    }
  }
  }
</script>
<style>

</style>
