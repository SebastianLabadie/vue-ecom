<template>
  <div class="footer_container">
    <footer class="footer">
      <div class="menu-socials">
        <div class="menu">
          <div class="containers">
            <h4>Conocenos</h4>
            <p>Data</p>
            <p>Redes</p>
            <p>App</p>
          </div>
          <div class="containers">
            <h4>SD PREMIUM</h4>
            <p>Envios en 24hs</p>
            <p>Descuentos</p>
            <p>Posiciona mejor tu marca</p>
          </div>
          <div class="containers">
            <h4>Soporte</h4>
            <p>Comercial</p>
            <p>Envios</p>
            <p>Politica de envios</p>
            <p>Facturacion</p>
          </div>
          <div class="containers">
            <h4>RSE</h4>
          </div>
        </div>
        <div class="socials-container">
          <div class="socials">
            <small>Siguenos en nuestras redes</small>
            <div class="socials-logos">
              <a
                href="https://www.facebook.com/SoyDelivery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="@/assets/icons/facebook.svg" alt="facebook logo"
              /></a>
              <a
                href="https://www.instagram.com/soydelivery.uy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="@/assets/icons/instagram.svg" alt="instagram logo"
              /></a>
              <a
                href="https://twitter.com/Soy_Delivery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="@/assets/icons/twitter.svg" alt="twitter logo"
              /></a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/icons/youtube.svg" alt="youtube logo"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="payments-develop">
        <div class="payments">
          <img src="@/assets/icons/visa.svg" alt="visa logo" />
          <img src="@/assets/icons/mastercard.svg" alt="visa logo" />
          <img src="@/assets/icons/paypal.svg" alt="visa logo" />
        </div>
        <div class="develop">
          Desarrollado por:<img src="@/assets/icons/screen.svg" alt="screen" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
.footer_container {
  background: #f2f2f2;
}
.footer {
  padding: 20px 48px;
}
.menu-socials {
  display: flex;
  justify-content: space-between;
}
.socials-container {
  position: relative;
  flex: 0.25;
  .socials {
    position: absolute;
    bottom: 0;
    .socials-logos {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
      img {
        width: 32px;
      }
    }
  }
}
.menu {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  .containers {
    h4 {
      font-size: 18px;
      margin-bottom: 12px;
    }
  }
}

.payments-develop {
  display: flex;
  .payments {
    flex: 0.5;
    img {
      width: 48px;
      margin-right: 8px;
    }
  }
  .develop {
    flex: 0.5;
    img {
      width: 38px;
      margin-left: 8px;
    }
  }
}
</style>
