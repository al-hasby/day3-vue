<script setup>
// Navbar uses router-link to navigate between pages
</script>

<template>
  <nav class="wraper">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/about" class="nav-link">About</router-link>
    <RouterLink to="/service" class="nav-link">service</RouterLink>
  </nav>
</template>

<style scoped>
.wraper{
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  padding: 8px 16px;
  height: 56px; /* fixed height so navbar doesn't resize */
  background: #d8d8d885; /* solid background so it sits above content */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 6px rgba(0,0,0,0.08);
}
.nav-link{
  color: #000;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 12px;
  display: inline-block;
  position: relative;
}
.nav-link.router-link-active{
  font-weight: 700;
}
.nav-link.router-link-active::after{
  /* underline without affecting layout */
  content: '';
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 6px;
  height: 2px;
  background: #000;
}
</style>