<template>
  <div id="app">
    <AppHeader />
    <UsersList />
    <AppFooter />
  </div>
</template>

<script>
import UsersList from "./components/UsersList.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "app",
  components: {
    UsersList,
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Consolas", Courier, monospace;
  background: black;
  color: white;
}
</style>
