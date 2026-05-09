<template>
  <main class="login-page">

    <nav class="navbar is-white topbar px-5">
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item">
          <img src="/icons/logotype.C_Jcd9lU.svg" class="logo" />
        </NuxtLink>

        <div class="navbar-item">
          <img src="/icons/onet-partner_v2.Ht9LWEqL.svg" class="partner" />
        </div>
      </div>

      <div class="navbar-menu is-active">
        <div class="navbar-end is-align-items-center">
          <NuxtLink to="/contact" class="button add-link">
            <img src="/icons/plus.BzqZYUaA.svg" />
            <span>Dodaj ogłoszenie</span>
          </NuxtLink>

          <span class="navbar-item">
            <img src="/icons/heart.CrmAwkbi.svg" class="nav-icon" />
          </span>

          <span class="navbar-item">
            <img src="/icons/user.BKvJ6cXn.svg" class="nav-icon" />
          </span>

          <span class="navbar-item">
            <img src="/icons/menu.D68BldeA.svg" class="nav-icon" />
          </span>
        </div>
      </div>
    </nav>
    <div class="login-wrapper">

     

      <h1 class="login-title">
        WEJDŹ DO GRATKI
      </h1>

      <div class="login-card">


        <p class="continue-text">
          KONTYNUUJ Z
        </p>

        <div class="social-grid">

          <button class="social-button">
            <span>G</span>
            <p>Google</p>
          </button>

          <button class="social-button">
            <span>f</span>
            <p>Facebook</p>
          </button>

          <button class="social-button">
            <span></span>
            <p>Apple</p>
          </button>

          <button class="social-button">
            <span>●</span>
            <p>Onet Poczta</p>
          </button>

        </div>

        <div class="divider">
          <span>LUB PODAJ DANE</span>
        </div>

        <input
          class="login-input"
          type="email"
          placeholder="E-mail"
        />

        <input
          class="login-input"
          type="password"
          placeholder="Hasło"
        />

        <div class="forgot-password">
          Nie pamiętasz hasła?
        </div>

        <button class="login-button">
          Zaloguj się
        </button>

      </div>

      <div class="info-card">
        <h3>Nie masz konta?</h3>

        <p>
          Załóż bezpłatnie, korzystaj ze wszystkich możliwości serwisu.
        </p>

        <strong>Zarejestruj się</strong>
      </div>

      <div class="info-card">
        <h3>Szukasz oferty dla firm?</h3>

        <p>
          Zapewniamy atrakcyjne pakiety ogłoszeń.
        </p>

        <strong>Poznaj naszą ofertę</strong>
      </div>

    </div>
  </main>
</template>
<style scoped>

.login-page {
  min-height: 100vh;
  background: #eef6fc;
  padding: 40px 20px;
}

.login-wrapper {
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
}

.login-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.login-logo img {
  height: 42px;
}

.login-title {
  text-align: center;
  color: #001f78;
  font-size: 42px;
  font-weight: 900;
  margin-bottom: 30px;
}

.login-card {
  background: white;
  border-radius: 20px;
  padding: 32px;
}

.user-icon {
  text-align: center;
  font-size: 42px;
  margin-bottom: 10px;
}

.continue-text {
  text-align: center;
  color: #001f78;
  font-weight: 700;
  margin-bottom: 20px;
}

.social-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 24px;
}

.social-button {
  height: 110px;
  border: 1px solid #dfe6f3;
  border-radius: 16px;
  background: white;
  cursor: pointer;
}

.social-button span {
  display: block;
  font-size: 32px;
  margin-bottom: 10px;
}

.social-button p {
  color: #001f78;
  font-weight: 700;
}

.divider {
  display: flex;
  align-items: center;
  margin: 25px 0;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #dfe6f3;
}

.divider span {
  padding: 0 12px;
  color: #001f78;
  font-size: 12px;
  font-weight: 700;
}

.login-input {
  width: 100%;
  height: 52px;
  border: 1px solid #dfe6f3;
  border-radius: 12px;
  padding: 0 16px;
  margin-bottom: 14px;
  font-size: 15px;
}

.forgot-password {
  text-align: right;
  font-size: 13px;
  color: #001f78;
  margin-bottom: 20px;
}

.login-button {
  width: 100%;
  height: 54px;
  border: none;
  border-radius: 999px;
  background: #001f78;
  color: white;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
}

.info-card {
  background: white;
  border-radius: 18px;
  padding: 24px;
  margin-top: 20px;
}

.info-card h3 {
  color: #001f78;
  font-weight: 800;
  margin-bottom: 10px;
}

.info-card p {
  color: #4a5b7d;
  margin-bottom: 12px;
}

.info-card strong {
  color: #001f78;
}

</style>