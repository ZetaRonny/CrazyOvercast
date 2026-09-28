<template>
  <header class="site-header">
    <div class="logo-container">
      <RouterLink to="/">
        <img src="@/assets/co_icon.png" alt="Site Logo" class="logo" />
      </RouterLink>
    </div>
   <div class="title">
      <RouterLink to="/" class="nav-link"><span>CrazyOvercast</span></RouterLink>
      <!-- <RouterLink to="/about" class="nav-link">About</RouterLink>
      <RouterLink to="/services" class="nav-link">Services</RouterLink>
      <RouterLink to="/contact" class="nav-link">Contact</RouterLink> -->
    </div>
    <nav class="nav-menu">
      <RouterLink to="/log" class="nav-link">Log</RouterLink>
      <!--<RouterLink to="/services" class="nav-link">Services</RouterLink>
      <RouterLink to="/contact" class="nav-link">Contact</RouterLink> -->
    </nav>
  </header>
</template>

<style scoped>

.title{
  color: #1A1A1A;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 500;
  font-size: 30pt;
  text-align: center;
        
}
.site-header {
  display: grid;
  justify-content: space-between;
  grid-template-columns: 10% 1fr 10%;
  align-items: center;
  padding: 1rem;
  background-color: #e9e9e9;
  border-bottom: 1px solid rgb(146, 146, 146);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.logo-container {
  display: grid;
  margin-top:1vh;
  align-items: center;
}

.logo {
  height: 42px;
  width: auto;
}

.nav-menu {
  display: grid;
  gap: 1.5rem;
  list-style: none;
}

.nav-link {
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-decoration: none;
  color:#1A1A1A;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
     color:rgb(146, 146, 146);
  
}
</style>