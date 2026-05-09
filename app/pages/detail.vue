<template>
  <main>
    <AppNavbar />

    <section class="section">
      <div class="container">
        <NuxtLink to="/listings" class="back-link">← Wróć do ogłoszeń</NuxtLink>

        <div class="columns mt-5">
          <div class="column is-8">
            <img
              class="main-image"
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              alt="Mieszkanie"
            />

            <div class="box mt-5">
              <h1 class="title details-title">
                Mieszkanie na sprzedaż 86 m²
              </h1>

              <p class="subtitle">
                Oleśnica, ul. Ignacego Daszyńskiego
              </p>

              <div class="tags">
                <span class="tag is-light">86 m²</span>
                <span class="tag is-light">3 pokoje</span>
                <span class="tag is-light">parter</span>
              </div>

              <h2 class="title is-4 mt-5">Opis ogłoszenia</h2>

              <p>
                Przykładowe ogłoszenie nieruchomości przygotowane na potrzeby projektu.
                Strona pokazuje szczegóły oferty, cenę, parametry mieszkania oraz formularz kontaktowy.
              </p>
            </div>
          </div>

          <div class="column is-4">
            <div class="box side-box">
              <p class="price">649 000 zł</p>
              <p class="price-small">7 546 zł/m²</p>

              <NuxtLink to="/contact" class="button contact-button is-fullwidth mt-4">
                Skontaktuj się
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </main>
</template>

<style scoped>
.back-link {
  color: #001f78;
  font-weight: 800;
}

.main-image {
  width: 100%;
  border-radius: 22px;
  height: 430px;
  object-fit: cover;
}

.details-title {
  color: #001f78;
  font-weight: 900;
}

.side-box {
  border-radius: 20px;
  position: sticky;
  top: 20px;
}

.price {
  color: #001f78;
  font-size: 2rem;
  font-weight: 900;
}

.price-small {
  color: #31436f;
  font-weight: 700;
}

.contact-button {
  background: #ff2b00;
  color: white;
  border: none;
  font-weight: 800;
}
</style>