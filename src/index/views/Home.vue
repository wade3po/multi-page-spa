<template>
  <div class="home">
    <p>this is home page</p>
    <p><router-link to="/homeone">page one</router-link></p>
    <p><router-link to="/hometwo">page two</router-link></p>
    <p><a href="/order">order</a></p>
    <p><a href="/user">user</a></p>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return {

    }
  },
  components: {},
}
</script>
