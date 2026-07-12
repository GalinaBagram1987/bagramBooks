<template>
  <section class="header">
    <div class="container">
      <div class="quotes">
        <div class="quotes-left">
          <p>
            "Фантастическое составляет сущность действительности" <br />
            <span>Ф.М. Достоевский</span>
          </p>
          <p>
            "Я всегда читал много научной фантастики и я очарован потусторонними
            мирами, другой окружающей средой"<br />
            <span>Джеймс Кэмерон</span>
          </p>
        </div>
        <div class="quotes-rigth">
          <p>
            "Фантастика - это наша реальность, доведенная до абсурда"<br />
            <span>Рей Бредбери</span>
          </p>
          <p>
            "Иногда фантастическая книга захватывает настолько, что кажется,
            будто из неё торчит когтистая лапа или свисает чешуйчатый хвост"<br />
            <span>Надея Ясминска</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  background: url("../assets/header.png") no-repeat center center;
  background-size: cover; /*растянуть по ширине картинку*/
  width: 100%;
}

.quotes {
  display: flex;
  width: 90%;
  justify-content: space-between;
  gap: 2rem;
}

p {
  font-weight: bold;
  font-size: 22px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 1.5; /*междустрочны */
  letter-spacing: 0.05em; /* междубуквенный */
}

@media (max-width: 768px) {
  .quotes {
    flex-direction: column; /* Выстраиваем колонки друг под другом */
    width: 100%; /* Расширяем контейнер на мобильном */
  }

  p {
    line-height: 1.3;
    font-size: 16px;
  }
}
</style>
