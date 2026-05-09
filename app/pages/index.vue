<template>
  <main class="page">
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

    <section class="hero hero-image">
      <div class="hero-body">
        <div class="container custom-container">
          <h1 class="title is-2 has-text-white hero-title">
            TWÓJ SZCZĘŚLIWY ADRES
          </h1>

          <p class="subtitle has-text-white hero-subtitle">
            Tu jest dom, którego szukasz
          </p>

          <div class="box search-box">
            <div class="columns is-gapless is-vcentered">
              <div class="column is-narrow">
                <button class="button search-option">Kupię ˅</button>
              </div>

              <div class="column is-narrow">
                <button class="button search-option">Mieszkanie ˅</button>
              </div>

              <div class="column location-column">
                <div class="field">
                  <p class="control has-icons-left">
                    <input
                      class="input location-input"
                      placeholder="np. miasto, dzielnica, ulica"
                    />
                    <span class="icon is-small is-left">
                      <img src="/icons/map-marker.CmYUVmsK.svg" />
                    </span>
                  </p>
                </div>
              </div>

              <div class="column is-narrow">
                <button class="button search-option">Filtry</button>
              </div>

              <div class="column is-narrow">
                <NuxtLink to="/listings" class="button search-button">
                  Szukaj
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section main-content">
      <div class="container custom-container">
        <h2 class="title is-5 section-heading">
          TWOJE OSTATNIE WYSZUKIWANIA
        </h2>

        <div class="columns">
          <div class="column" v-for="search in lastSearches" :key="search.title">
            <div class="box last-card">
              <div class="circles">
                <img v-for="image in search.images" :key="image" :src="image" />
              </div>

              <h3>{{ search.title }}</h3>
              <p>mieszkanie • na sprzedaż</p>

              <NuxtLink to="/listings" class="button is-small outline-button">
                Szukaj
              </NuxtLink>
            </div>
          </div>
        </div>

        <h2 class="title is-5 section-heading mt-6">
          ZOBACZ OGŁOSZENIA
        </h2>

        <div class="columns is-multiline is-variable is-3">
          <div
            v-for="item in categories"
            :key="item.title"
            class="column is-3-desktop is-6-tablet"
          >
            <div class="card category-card">
              <div class="bg-circle"></div>

              <div class="category-image">
                <img :src="item.icon" :alt="item.title" />
              </div>

              <div class="category-bottom">
                <div class="category-title">
                  {{ item.title }}
                  <span v-if="item.dropdown">⌄</span>
                </div>

                <div v-if="item.dropdown" class="category-dropdown">
                  <NuxtLink to="/listings">
                    <div>
                      <span>{{ item.titleLower }}</span>
                      <strong>na sprzedaż</strong>
                    </div>
                    <span>›</span>
                  </NuxtLink>

                  <NuxtLink to="/listings">
                    <div>
                      <span>{{ item.titleLower }}</span>
                      <strong>do wynajęcia</strong>
                    </div>
                    <span>›</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="title is-5 section-heading mt-6">
          NAJNOWSZE NA SPRZEDAŻ
        </h2>

        <div class="columns is-multiline is-variable is-3">
          <div
            v-for="offer in saleOffers"
            :key="offer.title"
            class="column is-4-desktop is-12-mobile"
          >
            <NuxtLink to="/details" class="card offer-card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="offer.image" :alt="offer.title" />
                </figure>
              </div>

              <div class="card-content offer-content">
                <p class="offer-location">{{ offer.location }}</p>
                <h3>{{ offer.title }}</h3>
                <strong>{{ offer.price }}</strong>
                <p>{{ offer.meta }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <h2 class="title is-5 section-heading mt-6">
          POPULARNE WYSZUKIWANIA
        </h2>

        <div class="columns is-mobile is-multiline is-variable is-2">
          <div
            v-for="city in cities"
            :key="city.name"
            class="column is-2-desktop is-4-tablet is-6-mobile"
          >
            <NuxtLink to="/listings" class="city-card">
              <img :src="city.image" :alt="city.name" />
              <span>{{ city.name }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section faq-section has-text-centered">
      <div class="container custom-container">
        <h2 class="title has-text-white faq-title">
          MASZ PYTANIA?
        </h2>

        <div class="faq-list">
          <details class="box faq-item">
            <summary>Jak edytować ogłoszenie?</summary>
            <p>Po zalogowaniu możesz przejść do panelu użytkownika i edytować swoje ogłoszenie.</p>
          </details>

          <details class="box faq-item">
            <summary>Nie pamiętam hasła do mojego konta, co teraz?</summary>
            <p>Skorzystaj z opcji przypomnienia hasła na stronie logowania.</p>
          </details>

          <details class="box faq-item">
            <summary>Jakie rodzaje ogłoszeń znajdę na gratka.pl?</summary>
            <p>Na stronie znajdziesz ogłoszenia nieruchomości, motoryzacyjne i lokalne.</p>
          </details>

          <details class="box faq-item">
            <summary>Jak korzystać z wyszukiwarki?</summary>
            <p>Wpisz lokalizację, wybierz typ ogłoszenia i kliknij przycisk Szukaj.</p>
          </details>
        </div>
      </div>
    </section>

    <section class="section app-section">
  <div class="container custom-container">
    <img
      src="/images/download.png"
      alt="Pobierz aplikację"
      class="app-image"
    />
  </div>
</section>

    <footer class="footer footer-section">
      <div class="container custom-container">
        <div class="has-text-centered mb-5">
          <img src="/icons/logotype.C_Jcd9lU.svg" class="footer-logo" />
        </div>

        <div class="columns">
          <div class="column">
            <h3>OGŁOSZENIA</h3>
            <p>Nieruchomości</p>
            <p>Domy</p>
            <p>Mieszkania</p>
            <p>Działki</p>
          </div>

          <div class="column">
            <h3>O GRATCE</h3>
            <p>O nas</p>
            <p>Regulamin</p>
            <p>Polityka prywatności</p>
            <p>Kontakt</p>
          </div>

          <div class="column">
            <h3>USŁUGI</h3>
            <p>Dodaj ogłoszenie</p>
            <p>Reklama</p>
            <p>Mapa ogłoszeń</p>
            <p>Centrum pomocy</p>
          </div>

          <div class="column">
            <h3>ARTYKUŁY I PORADY</h3>
            <p>Blog</p>
            <p>Porady</p>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup>
const lastSearches = [
  {
    title: 'Polska',
    images: [
      '/images/gdansk.DMACUqFH.jpg',
      '/images/krakow.CVQGxDhA.jpg',
      '/images/wroclaw.ZHgiTs_O.jpg'
    ]
  },
  {
    title: 'Warszawa',
    images: [
      '/images/warszawa.MXBL06Nb.jpg',
      '/images/poznan.BmnvHYi6.jpg',
      '/images/lodz.--DYMnrv.jpg'
    ]
  }
]

const categories = [
  {
    title: 'MIESZKANIA',
    titleLower: 'Mieszkania',
    icon: '/icons/room.CswtvHCF.svg',
    dropdown: true
  },
  {
    title: 'DOMY',
    titleLower: 'Domy',
    icon: '/icons/house.CiG51xvb.svg',
    dropdown: true
  },
  {
    title: 'OD DEWELOPERA',
    titleLower: 'Inwestycje',
    icon: '/icons/investment.Clx6Evb1.svg',
    dropdown: false
  },
  {
    title: 'DZIAŁKI',
    titleLower: 'Działki',
    icon: '/icons/plot.sHSv682_.svg',
    dropdown: true
  }
]

const saleOffers = [
  {
    title: 'Dom z ogrodem',
    location: 'Kraków',
    price: '973 000 zł',
    meta: '120 m² • 4 pokoje',
    image: '/images/krakow.CVQGxDhA.jpg'
  },
  {
    title: 'Mieszkanie z balkonem',
    location: 'Warszawa',
    price: '685 000 zł',
    meta: '56 m² • 3 pokoje',
    image: '/images/warszawa.MXBL06Nb.jpg'
  },
  {
    title: 'Dom wolnostojący',
    location: 'Wrocław',
    price: '1 199 999 zł',
    meta: '180 m² • 5 pokoi',
    image: '/images/wroclaw.ZHgiTs_O.jpg'
  }
]

const cities = [
  { name: 'WARSZAWA', image: '/images/warszawa.MXBL06Nb.jpg' },
  { name: 'KRAKÓW', image: '/images/krakow.CVQGxDhA.jpg' },
  { name: 'ŁÓDŹ', image: '/images/lodz.--DYMnrv.jpg' },
  { name: 'GDAŃSK', image: '/images/gdansk.DMACUqFH.jpg' },
  { name: 'POZNAŃ', image: '/images/poznan.BmnvHYi6.jpg' },
  { name: 'WROCŁAW', image: '/images/wroclaw.ZHgiTs_O.jpg' }
]
</script>

<style scoped>

.app-image {
  width: 100%;
  display: block;
  border-radius: 0;
}
.page {
  background: white;
  color: #001f78;
  font-family: Arial, sans-serif;
}
.phone-mockup {
  display: flex;
  justify-content: center;
}
.custom-container {
  max-width: 760px;
}

.topbar {
  min-height: 70px;
  border-bottom: 1px solid #eeeeee;
}

.logo {
  height: 38px;
  max-height: 38px;
}

.partner {
  height: 24px;
}

.nav-icon {
  width: 22px;
  height: 22px;
}

.add-link {
  background: #f3f7ff;
  color: #001f78;
  border: none;
  border-radius: 20px;
  font-weight: 800;
  gap: 7px;
}

.add-link img {
  width: 14px;
}

.hero-image {
  min-height: 360px;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url("/images/desktop-big.CjyAcoZG.webp");
  background-size: cover;
  background-position: center;
}

.hero-title {
  font-weight: 900;
  margin-bottom: 4px;
}

.hero-subtitle {
  font-size: 17px;
  font-weight: 800;
  margin-bottom: 28px;
}

.search-box {
  border-radius: 999px;
  padding: 6px;
}

.search-option {
  border: none;
  color: #001f78;
  font-weight: 800;
}

.location-column {
  border-left: 1px solid #edf0f7;
  border-right: 1px solid #edf0f7;
}

.location-input {
  border: none;
  box-shadow: none;
  color: #001f78;
  font-weight: 600;
}

.search-button {
  background: #ff2b00;
  color: white;
  border: none;
  border-radius: 999px;
  font-weight: 900;
}

.main-content {
  background: white;
}

.section-heading {
  color: #001f78;
  font-weight: 900;
}

.last-card {
  background: #eef8ff;
  min-height: 150px;
  border-radius: 12px;
}

.circles img {
  width: 31px;
  height: 31px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid white;
  margin-right: -10px;
}

.last-card h3 {
  color: #001f78;
  font-size: 15px;
  font-weight: 900;
  margin: 18px 0 2px;
}

.last-card p {
  color: #31508c;
  font-size: 12px;
  font-weight: 700;
}
.app-section {
  width: 100%;
  min-height: 520px;
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}
.outline-button {
  color: #001f78;
  border-color: #001f78;
  border-radius: 20px;
  font-weight: 900;
  margin-top: 10px;
}

.category-card {
  height: 172px;
  background: #eef8ff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.bg-circle {
  position: absolute;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.55);
  border-radius: 50%;
  top: -40px;
  right: -25px;
}

.category-image {
  display: flex;
  justify-content: center;
  z-index: 1;
}

.category-image img {
  width: 105px;
  height: 105px;
  object-fit: contain;
  margin-bottom: 12px;
}

.category-bottom {
  width: 100%;
  height: 46px;
  background: rgba(255, 255, 255, 0.35);
  z-index: 2;
  overflow: hidden;
  transition: height 0.2s ease;
}

.category-title {
  height: 46px;
  color: #001f78;
  font-size: 14px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-align: center;
}

.category-dropdown {
  display: none;
}

.category-card:hover .category-bottom {
  height: 92px;
}

.category-card:hover .category-title {
  display: none;
}

.category-card:hover .category-dropdown {
  display: block;
}

.category-dropdown a {
  height: 46px;
  padding: 7px 12px;
  color: #001f78;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.category-dropdown a + a {
  border-top: 1px solid rgba(0, 31, 120, 0.08);
}

.category-dropdown span {
  font-size: 12px;
}

.category-dropdown strong {
  display: block;
  font-size: 13px;
  font-weight: 900;
}

.offer-card {
  display: block;
  color: #001f78;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 31, 120, 0.08);
}

.offer-card img {
  object-fit: cover;
}

.offer-content {
  padding: 12px;
}

.offer-location {
  font-size: 11px;
  color: #31508c;
  font-weight: 700;
}

.offer-card h3 {
  font-size: 13px;
  color: #001f78;
  font-weight: 900;
  margin: 6px 0;
}

.offer-card strong {
  color: #001f78;
  font-size: 16px;
  font-weight: 900;
}

.offer-card p {
  font-size: 11px;
  margin-top: 6px;
}

.city-card {
  height: 82px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  display: block;
}

.city-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.65);
}

.city-card span {
  position: absolute;
  left: 8px;
  bottom: 8px;
  color: white;
  font-size: 11px;
  font-weight: 900;
}

.faq-section {
  background: #0626a8;
  padding-top: 42px;
  padding-bottom: 42px;
}

.faq-title {
  font-size: 30px;
  font-weight: 900;
}

.faq-list {
  max-width: 430px;
  margin: 0 auto;
}

.faq-item {
  text-align: left;
  color: #001f78;
  font-weight: 800;
  font-size: 13px;
  padding: 10px 14px;
  margin-bottom: 9px;
}

.faq-item p {
  margin-top: 8px;
  font-weight: 500;
  font-size: 12px;
}

.app-section {
  background: white;
}

.app-title {
  color: #001f78;
  font-size: 30px;
  line-height: 0.95;
  font-weight: 900;
}

.app-text {
  color: #001f78;
  font-size: 13px;
  font-weight: 700;
}

.store-buttons .button {
  font-size: 10px;
  font-weight: 800;
}



.footer-section {
  background: #eaf8ff;
  color: #001f78;
}

.footer-logo {
  height: 34px;
}

.footer-section h3 {
  font-size: 12px;
  font-weight: 900;
  margin-bottom: 12px;
}

.footer-section p {
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 7px;
}
:global(html),
:global(body) {
  background: white;
  color-scheme: light;
}

.search-box,
.search-box button,
.search-box input,
.location-input {
  background: white !important;
  color: #001f78 !important;
}

.search-box {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
@media (max-width: 768px) {
  .search-box {
    border-radius: 20px;
  }

  .location-column {
    border: none;
  }

  .navbar-menu.is-active {
    display: flex;
    justify-content: flex-end;
  }
}

.button,
.input,
.box,
.card,
.faq-item,
.search-option,
.outline-button {
  background-color: white !important;
  color: #001f78 !important;
}

.search-button {
  background-color: #ff2b00 !important;
  color: white !important;
}

.offer-card,
.offer-card .card-content,
.offer-content {
  background-color: white !important;
  color: #001f78 !important;
}

.faq-section {
  background-color: #0626a8 !important;
}

.faq-section .faq-item {
  background-color: white !important;
  color: #001f78 !important;
}

:global(html),
:global(body) {
  background-color: white !important;
  color-scheme: light !important;
}
</style>