<template>
  <section class="secondBook">
    <div class="container">
      <div class="gridBlock">
        
        <!-- Колонка 1: Обложка -->
        <div class="grid-equal-col">
          <img src="@/assets/zapovednik.png" alt="обложка книги Заповедник" />
          <p>Прочитать книгу БЕСПЛАТНО вы можете на этих площадках или скачать файл</p>
        </div>

        <!-- Колонка 2: Описание книги -->
        <div class="grid-equal-col">
          <h1>Заповедник</h1>
          <p>Дик — принц русалок. Агнесса — лесничая. Их любовь казалась невозможной, но оба были настолько сильными и яркими личностями, что превратили её в прекрасный брак длиною в двадцать лет. Внезапно Агнесса уходит из жизни. Дик остаётся один — и полон вопросов. Была ли её смерть случайностью? Чтобы понять, что случилось с любимой, он должен разобраться в её тайной работе. И то, что он найдёт, изменит не только его жизнь, но и весь мир.</p>
          
          <div class="btn-group">
            <button class="btn">
              <a href="https://author.today/work/379378" target="_blank">Author.today</a>
            </button>
            <button class="btn">
              <a href="https://litnet.com/ru/book/zapovednik-b493539" target="_blank">Litnet</a>
            </button>
          </div>
        </div> <!-- ИСПРАВЛЕНО: Здесь остался только один закрывающий тег для второй колонки -->

        <!-- Колонка 3: От автора (ИСПРАВЛЕНО: теперь она находится внутри gridBlock) -->
        <div class="grid-equal-col">
          <h1>От автора</h1>
          <p>На написание книги меня вдохновили мемы из интернета про отношения между мужем и женой. Популярные шутки про то, что супруги не слышат друг друга и вместе только едят. Захотелось добавить немного фантастики и подумать насколько они правдивы.</p>
          <p>Заповедник - это своего рода коктейль из трех составляющих. Отношения между мужем и женой, фантастка и защита природы.</p>
          
          <div class="btn-group">
            <button class="btn">
              <a href="https://www.litres.ru/book/galina-bagram-33142753/zapovednik-71217772/" target="_blank">Litres</a>
            </button>
            <button class="btn">
              <a href="https://disk.yandex.ru/client/disk/%D0%97%D0%B0%D0%BF%D0%BE%D0%B2%D0%B5%D0%B4%D0%BD%D0%B8%D0%BA" target="_blank">Скачать книгу</a>
            </button>
          </div>
        </div>

      </div> <!-- Закрываем gridBlock -->
    </div> <!-- Закрываем container -->
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
  
  </style>