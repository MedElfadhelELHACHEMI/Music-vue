<template>

  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">Music Semantic</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#" :to="{path:'/artists'}">Artist</b-nav-item>
        <b-nav-item href="#" :to="{path:'/albums'}">Albums</b-nav-item>
        <b-nav-item href="#" :to="{path:'/tracks'}">Tracks</b-nav-item>
        <!--<b-nav-item href="#" :to="{path:'/tracks'}">Countries</b-nav-item>-->
      </b-navbar-nav>


    </b-collapse>
  </b-navbar>

</template>

<script>
  export default {

  }

</script>


<style scoped>


</style>
