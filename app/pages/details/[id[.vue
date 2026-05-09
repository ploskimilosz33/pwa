<template>
  <main class="details-page">
    <AppNavbar />


    
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


    <section class="section">
      <div class="container details-container">
        <NuxtLink to="/listings" class="back-link">
          ← Powrót do ogłoszeń
        </NuxtLink>

        <div v-if="offer" class="columns mt-4">
          <div class="column is-8">
            <div class="gallery">
              <img class="main-image" :src="offer.image" :alt="offer.title" />

              <div class="mini-gallery">
                <img :src="offer.image" />
                <img :src="offer.image" />
                <div class="map-mini">Zobacz mapę</div>
              </div>
            </div>

            <div class="box title-box">
              <h1>{{ offer.title }}</h1>

              <p class="location">
                 {{ offer.location || offer.city }}
              </p>

              <p class="price">
                {{ offer.price }}
              </p>

              <div class="params-row">
                <div>
                  <strong>{{ offer.area }}</strong>
                  <span>m²</span>
                </div>

                <div>
                  <strong>{{ offer.rooms }}</strong>
                  <span>pokoje</span>
                </div>
              </div>
            </div>

            <div class="box">
              <h2>Opis nieruchomości</h2>

              <p class="description">
                {{ offer.description || 'Przykładowy opis ogłoszenia nieruchomości. Oferta przedstawia lokal mieszkalny wraz z podstawowymi parametrami, ceną oraz lokalizacją.' }}
              </p>
            </div>

            <div class="box">
              <h2>Parametry mieszkania</h2>

              <div class="details-table">
                <div>
                  <span>Powierzchnia</span>
                  <strong>{{ offer.area }} m²</strong>
                </div>

                <div>
                  <span>Liczba pokoi</span>
                  <strong>{{ offer.rooms }}</strong>
                </div>

                <div>
                  <span>Rynek</span>
                  <strong>wtórny</strong>
                </div>

                <div>
                  <span>Typ ogłoszenia</span>
                  <strong>sprzedaż</strong>
                </div>
              </div>
            </div>

            <div class="box map-section">
              <h2>Lokalizacja</h2>
              <div class="fake-map">📍 {{ offer.location || offer.city }}</div>
            </div>
          </div>

          <aside class="column is-4">
            <div class="box contact-box">
              <p class="side-price">{{ offer.price }}</p>

              <p class="side-location">
                {{ offer.location || offer.city }}
              </p>

              <input class="input" placeholder="Imię" />
              <input class="input mt-3" placeholder="Email lub telefon" />

              <textarea
                class="textarea mt-3"
                placeholder="Napisz wiadomość"
              ></textarea>

              <NuxtLink to="/contact" class="button contact-button is-fullwidth mt-4">
                Wyślij wiadomość
              </NuxtLink>
            </div>
          </aside>
        </div>

        <div v-else class="box mt-5">
          Nie znaleziono oferty.
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const route = useRoute()
const offer = ref(null)

onMounted(async () => {
  const response = await fetch('/data/offers.json')
  const json = await response.json()

  const offers = Array.isArray(json)
    ? json
    : json.offers || json.data || []

  offer.value = offers.find((item) => {
    return String(item.id) === String(route.params.id)
  })
})
</script>

<style scoped>

    .main {
  background: #f5f7fb;
  min-height: 100vh;
}

.box {
  background: white;
  border-radius: 18px;
  border: 1px solid #e8eef7;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}

.details-title,
.price,
h2,
h3,
strong {
  color: #001f78;
}

p,
span,
.subtitle {
  color: #4d5b7c;
}

.side-box {
  background: white;
}

input,
textarea {
  background: white !important;
  color: #001f78 !important;
  border: 1px solid #dbe4f0;
}

.contact-button {
  background: #ff2b00;
  color: white;
  border: none;
}

.tag {
  background: #eef5ff !important;
  color: #001f78 !important;
}

</style>