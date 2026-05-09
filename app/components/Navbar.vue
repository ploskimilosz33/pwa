<template>
  <nav class="navbar px-5">
    <div class="navbar-brand">
      <NuxtLink to="/" class="navbar-item logo">
        gratka<span>.clone</span>
      </NuxtLink>
    </div>

    <div class="navbar-menu is-active">
      <div class="navbar-end">
        <NuxtLink to="/" class="navbar-item">Start</NuxtLink>
        <NuxtLink to="/listings" class="navbar-item">Ogłoszenia</NuxtLink>
        <NuxtLink to="/contact" class="navbar-item">Kontakt</NuxtLink>
        <NuxtLink to="/contact" class="button add-button">Dodaj ogłoszenie</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  min-height: 70px;
  border-bottom: 1px solid #edf0f7;
}

.logo {
  color: #001f78;
  font-size: 1.8rem;
  font-weight: 900;
}

.logo span {
  color: #ff2b00;
}

.navbar-item {
  color: #001f78;
  font-weight: 700;
}

.add-button {
  margin: auto 0 auto 1rem;
  background: #ff2b00;
  color: white;
  border: none;
  font-weight: 800;
}
</style>