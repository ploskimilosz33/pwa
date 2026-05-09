<template>
  <main class="listings-page">
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

    <section class="section listings-section">
      <div class="container listings-container">
        <div class="columns">
          <div class="column is-8">
            <h2 class="title is-4 results-title">
              Mieszkania na sprzedaż - {{ filteredOffers.length }} ogłoszeń
            </h2>

            <p class="subtitle is-6">
              Średnia cena: 750 950 zł
            </p>

            <NuxtLink
              v-for="offer in filteredOffers"
              :key="offer.id"
              :to="`/details/${offer.id}`"
              class="box listing-row"
            >
              <div class="columns is-gapless">
                <div class="column is-4">
                  <figure class="image listing-image">
                    <img :src="offer.image" :alt="offer.title" />
                  </figure>
                </div>

                <div class="column">
                  <div class="listing-content">
                    <div>
                      <h3 class="listing-title">
                        {{ offer.title }}
                      </h3>

                      <p class="listing-location">
                        📍 {{ offer.location || offer.city }}
                      </p>

                      <p class="listing-price">
                        {{ offer.price }}
                      </p>
                    </div>

                    <div class="listing-bottom">
                      <span>{{ offer.area }} m²</span>
                      <span>{{ offer.rooms }} pokoje</span>
                      <span class="details-link">Zobacz ofertę</span>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>

          <aside class="column is-4">
            <div class="box side-box">
              <div class="map-box">
                Zobacz na mapie
              </div>

              <h3>Województwa</h3>
              <p>mazowieckie</p>
              <p>małopolskie</p>
              <p>pomorskie</p>
              <p>dolnośląskie</p>
              <p>śląskie</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const searchText = ref('')
const cityText = ref('')

const { data } = await useFetch('/data/offers.json', {
  default: () => []
})

const offers = computed(() => {
  if (Array.isArray(data.value)) {
    return data.value
  }

  if (Array.isArray(data.value?.offers)) {
    return data.value.offers
  }

  if (Array.isArray(data.value?.data)) {
    return data.value.data
  }

  return []
})

const filteredOffers = computed(() => {
  return offers.value.filter((offer) => {
    const title = String(offer.title || '').toLowerCase()

    const location = String(
      offer.location || offer.city || ''
    ).toLowerCase()

    return (
      title.includes(searchText.value.toLowerCase()) &&
      location.includes(cityText.value.toLowerCase())
    )
  })
})
</script>

<style scoped>
.page-header {
  background: #eef8ff;
  padding-bottom: 1rem;
}

.listings-section {
  background: #eef8ff;
  min-height: 100vh;
}

.listings-container {
  max-width: 980px;
}

.page-title {
  color: #001f78;
  font-weight: 900;
}

.filter-box {
  background: white;
  border-radius: 18px;
  padding: 1.5rem;
  margin-top: 2rem;
}

.input {
  background: white !important;
  color: #001f78 !important;
  border: 1px solid #dbe4ff;
  box-shadow: none;
}

.search-button {
  background: #ff2b00 !important;
  color: white !important;
  border: none;
  font-weight: 900;
}

.results-title {
  color: #001f78;
  font-weight: 900;
  margin-bottom: 0.25rem;
}

.listing-row {
  border-radius: 14px;
  overflow: hidden;
  padding: 0;
  margin-bottom: 18px;
  background: white !important;
}

.listing-image {
  height: 210px;
}

.listing-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.listing-content {
  height: 210px;
  padding: 18px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.listing-title {
  color: #001f78;
  font-size: 18px;
  font-weight: 900;
  line-height: 1.2;
}

.listing-location {
  color: #31508c;
  font-size: 13px;
  margin-top: 8px;
}

.listing-price {
  color: #001f78;
  font-size: 22px;
  font-weight: 900;
  margin-top: 16px;
}

.listing-bottom {
  color: #001f78;
  display: flex;
  gap: 18px;
  align-items: center;
  font-weight: 700;
  font-size: 13px;
}

.details-link {
  margin-left: auto;
  color: #ff2b00;
  font-weight: 900;
}

.side-box {
  border-radius: 14px;
  position: sticky;
  top: 20px;
  background: white !important;
}

.map-box {
  height: 120px;
  background: #dff2ff;
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: #001f78;
  font-weight: 900;
  margin-bottom: 18px;
}

.side-box h3 {
  color: #001f78;
  font-weight: 900;
  margin-bottom: 12px;
}

.side-box p {
  padding: 10px 0;
  border-bottom: 1px solid #edf0f7;
  color: #001f78;
  font-weight: 700;
}

@media (max-width: 768px) {
  .listing-content {
    height: auto;
  }

  .listing-image {
    height: 220px;
  }

  .listing-bottom {
    flex-wrap: wrap;
  }

  .details-link {
    margin-left: 0;
  }
}
.listing-top {
  background: white;
  border-bottom: 1px solid #dbe4ff;
}

.listing-navbar {
  min-height: 50px;
  border-bottom: 1px solid #dbe4ff;
  padding: 0 14px;
}

.logo {
  height: 34px;
  max-height: 34px;
}

.partner {
  height: 22px;
}

.talk-button {
  background: #f3f7ff;
  color: #001f78;
  border: none;
  border-radius: 18px;
  font-weight: 800;
  padding: 7px 13px;
}

.add-button {
  background: #f3f7ff;
  color: #001f78;
  border: none;
  border-radius: 18px;
  font-weight: 900;
}

.nav-icon {
  width: 20px;
  height: 20px;
}

.filters-row {
  height: 54px;
  display: grid;
  grid-template-columns: 120px 140px 1fr 260px 150px 180px 190px 95px;
  border-top: 1px solid #edf0f7;
}

.filters-row button,
.location-filter {
  border: none;
  border-right: 1px solid #dbe4ff;
  background: white;
  color: #001f78;
  font-weight: 800;
  padding: 0 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.location-filter {
  gap: 10px;
}

.location-filter img {
  width: 18px;
}

.location-filter input {
  width: 100%;
  border: none;
  outline: none;
  color: #001f78;
  font-weight: 600;
}

.listing-search-button {
  background: #ff2b00 !important;
  color: white !important;
  border-radius: 24px;
  margin: 8px;
  justify-content: center !important;
  padding: 0 18px !important;
}

@media (max-width: 900px) {
  .filters-row {
    height: auto;
    grid-template-columns: 1fr;
  }

  .filters-row button,
  .location-filter {
    height: 48px;
  }
}
</style>