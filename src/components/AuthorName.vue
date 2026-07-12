<template>
  <section class="authorName">
    <div class="container">
      <div class="author">
        <div class="autText">
          <h1>Баграм Галина </h1>
          <h2>Писатель</h2>
          <p>Пишу книги в жанре фантастика, фэнтези</p>
        </div>
          <img src="@/assets/baner1.png" alt="picture1"/>
          <img src="@/assets/baner2.png" alt="picture2"/>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style scoped>
  .author {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 5rem; /*зазоры между всеми 3 колонками станут одинаковыми */
    padding: 0; /* Гарантированно убираем любые внутренние отступы самого контейнера */
    margin: 0;  /* Убираем внешние отступы */
  }

  /* Применяем правила строго к текстовому блоку и картинкам внутри .author */
  .autText,
  .author img {
    flex: 1 1 0;      /* Жестко делит контейнер на 3 абсолютно равные части */
    min-width: 0;     /* Защита от деформации флекс-сетки */
    max-width: 100%; 
    height: auto;
    object-fit: cover;/* Картинка красиво заполнит свою треть, не растягиваясь и не сжимаясь */
  }

  .autText {
    text-align: center;
    line-height: 1.5; 
    letter-spacing: 0.05em;
  }

  p {
    font-size: 18px;
  }

  @media (min-width: 769px) and (max-width: 900px) {
   
    .author {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 2rem;
    }

    .img-item {
      width: 100%;
      height: auto;
      max-width: 100%;
    }

    .autText,
    .img-item {
      flex: 1;           /* все три колонки равной ширины */
      min-width: 0;      /* предотвращает переполнение */
    }

    .autText {
      text-align: center;
      line-height: 1;
      letter-spacing: 0.05em;
      }
    }
  
    p {
      font-size: 15px;
      line-height: 1;
    }

  

  @media(max-width: 768px) {
    .author {
      flex-direction: column; /* Выстраиваем колонки друг под другом */
      width: 100%;
      align-items: center;
      gap: 2rem;          /* Расширяем контейнер на мобильном */
    }

    .autText {
        flex: 0 1 auto;
        width: 100%;
        max-width: 100%;
      }

    img {
      display: none;
    }
  }


</style>