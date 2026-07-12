<template>
  <section class="footer">
    <div class="container">
      <div class="footer-content">
        <p>© Галина Баграм </p>
        <p>2026</p>
        <p>Все права защищены</p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style scoped>
  p {
    font-weight: bold;
    font-size: 22px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    text-align: center;
    line-height: 1.5; /*междустрочны */
    letter-spacing: 0.05em; /* междубуквенный */
  }
   .footer {
    background:  url('../assets/footer.png') no-repeat center center;
    background-size: cover; /*растянуть по ширине картинку*/
    width: 100%;
    }
    .footer-content {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    @media(max-width: 768px) {
      .footer-content {
        flex-direction: column;
        width: 100%;
        gap: 0.5rem;
      }

      p {
        font-size: 16px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        text-align: center;
        line-height: 1; /*междустрочны */
        letter-spacing: 0.05em; /* междубуквенный */
        margin-top: 0;
        margin-bottom: 0; 
      }
    }
</style>