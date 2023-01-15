<template>
  <header>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/brazil">Brazil</router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </header>
</template>
<style>
header {
  position: fixed;
}
</style>
