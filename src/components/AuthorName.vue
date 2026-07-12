<template>
  <section class="authorName">
    <div class="container">
      <div class="gridBlock">
        <div class="grid-equal-col">
          <h1>Баграм Галина</h1>
          <h2>Писатель</h2>
          <p>Пишу книги в жанре фантастика, фэнтези</p>
        </div>
        <img src="@/assets/baner1.png" class="grid-equal-col" alt="picture1" />
        <img src="@/assets/baner2.png" class="grid-equal-col" alt="picture2" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style scoped>
@media (max-width: 950px) {
  img {
    display: none;
  }
}

@media (max-width: 768px) {
  img {
    display: none;
  }
}
</style>
