<script setup>
// Navbar uses router-link to navigate between pages
</script>

<template>
  <nav class="wraper">
    <div class="logo">
      <router-link to="/" class="hybe-logo">HYBE</router-link>
    </div>
    <div class="nav-center">
      <router-link to="/about" class="nav-link">Company info</router-link>
      <RouterLink to="/artist" class="nav-link">Artist</RouterLink>
      <RouterLink to="/service" class="nav-link">Business</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.wraper {
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: 56px;
  background: #d8d8d885;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
   font-family: 'Arial', 'Helvetica', sans-serif;
  text-transform: uppercase;
  font-variant: small-caps;
  box-shadow: 0 1px 6px rgba(0,0,0,0.08);
}

/* Logo on the left */
.logo {
  flex-shrink: 0;
  margin-right: 24px;
}

.hybe-logo {
  font-weight: 900;
  text-decoration: none;
  color: #000;
  font-size: 1.5rem;
  letter-spacing: 0.08em;
  display: inline-block;
  transition: all 0.3s ease;
}

.hybe-logo:hover {
  opacity: 0.7;
}

/* Nav links centered */
.nav-center {
  display: flex;
  gap: 24px;
  align-items: center;
  flex: 1;
  justify-content: center;
}

.nav-link {
  color: #000;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 75px;
  position: relative;
  display: inline-block;
  white-space: nowrap;
}

.nav-link.router-link-active {
  font-weight: 700;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 6px;
  height: 2px;
  background: #000;
}

.nav-link:hover {
  background: rgba(68, 63, 63, 0.178);
  border-radius: 4px;
}
</style>