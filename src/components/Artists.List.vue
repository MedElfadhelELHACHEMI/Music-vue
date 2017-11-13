<template>
  <div>
    <b-table striped hover :items="artists"></b-table>
  </div>
</template>
<script>
  export default {
  props:{
    artists:{
      required:true,
      type:Array
    }
  }
  }
</script>
<style>

</style>
