<template>
  <div>
    <b-table striped hover :items="albums"></b-table>
  </div>
</template>
<script>
  export default {
  props:{
    albums:{
      required:true,
      type:Array
    }
  }
  }
</script>
<style>

</style>
