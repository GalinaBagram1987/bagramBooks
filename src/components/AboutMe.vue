<template>
  <section class="aboutMe">
    <div class="container">
      <div class="avtorBlock">
        <img src="@/assets/fotoAvtora.jpg" alt="avtor foto" />
        <div class="firstTextBlock">
          <h1>Обо мне</h1>
          <p>Люблю море и ветер, поэтому живу на полуострове. Люблю жизнь и все, что она нам дает. Читать, писать, гулять, закаты и рассветы, улыбки своих детей. Считаю, что каждая прочитанная и написанная книга делает нашу жизнь немного ярче. Приятного прочтения.</p>
        </div>
        <div class="secondTextBlock">
          <h1>Про сайт и книги</h1>
          <p>Сайт находится в разработке. Новые произведения будут добавляться по мере их написания и публикации на площадках. Спасибо, что не прошли мимо. Читайте больше, книги расширяют нашу реальность.</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style scoped>
  .avtorBlock {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 5rem;
  }

  p {
    font-size: 18px;
  }

  .firstTextBlock,
  .secondTextBlock {
    text-align: center;
    line-height: 1.5; /*междустрочны */
    letter-spacing: 0.05em; /* междубуквенный */
  }
  .firstTextBlock,
  .secondTextBlock,
  .avtorBlock img {
    flex: 1 1 0; /* Жестко делит контейнер на 3 абсолютно равные части */
    min-width: 0; /* Важно: позволяет блокам и картинке уменьшаться на мелких экранах */
  }

  .avtorBlock img {
    height: auto;     /* Пропорциональное изменение высоты при уменьшении */
    object-fit: contain; /* Картинка не будет обрезаться, когда её колонка начнет сжиматься */
  }

  @media(max-width: 950px) {
    .avtorBlock {
      flex-direction: column; /* Выстраиваем колонки друг под другом */
      width: 100%;
      align-items: center;
      gap: 2rem;          /* Расширяем контейнер на мобильном */
    }

    .firstTextBlock,
    .secondTextBlock {
      flex: 0 1 auto;
      width: 100%;
      max-width: 100%;
      text-align: center;
      line-height: 1; /*междустрочны */
      letter-spacing: 0.05em; /* междубуквенный */
    }
    .avtorBlock img {
      width: 100%;
    }
  }

  @media(max-width: 768px) {
    p {
      font-size: 16px;
    }
  }



  
</style>