// Определяем переменную "preprocessor"
let preprocessor = 'sass'; // Выбор препроцессора в проекте - sass или less

var gulp = require('gulp');
// Определяем константы Gulp
const {
  src,
  dest,
  parallel,
  series,
  watch
} = require('gulp');

// Подключаем Browsersync
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');




// Определяем логику работы Browsersync
function browsersync() {
  browserSync.init({ // Инициализация Browsersync
    server: {
      baseDir: 'app/'
    }, // Указываем папку сервера
    notify: false, // Отключаем уведомления
    online: true // Режим работы: true или false
  })
}


// JS Работа со скриптами
function scripts() {
  return src([ // Берём файлы из источников
'node_modules/swiper/swiper-bundle.min.js',
      //'node_modules/@fortawesome/fontawesome-free/js/fontawesome.js',
      //'node_modules/jquery-custom/jquery.1/dist/jquery.min.js', // Пример подключения библиотеки
      'app/js/app.js', // Пользовательские скрипты, использующие библиотеку, должны быть подключены в конце
    ])
    .pipe(concat('app.min.js')) // Конкатенируем в один файл
    .pipe(uglify()) // Сжимаем JavaScript
    .pipe(dest('app/js/')) // Выгружаем готовый файл в папку назначения
    .pipe(browserSync.stream()) // Триггерим Browsersync для обновления страницы
}



//STYLES
function styles() {
  return src('app/' + preprocessor + '/styles.scss' + '',

    ) // Выбираем источник: "app/sass/styles.scss"
    .pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
    .pipe(concat('app.min.css')) // Конкатенируем в файл app.min.js
    .pipe(autoprefixer({ // Создадим префиксы с помощью Autoprefixer
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(cleancss({
      level: {
        1: {
          specialComments: 0
        }
      }
    })) // Минифицируем стили
    .pipe(dest('app/css/')) // Выгрузим результат в папку "app/css/"
    .pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}



// IMG
function images() {
  return src('app/images/src/**/*') // Берём все изображения из папки источника
    .pipe(newer('app/images/dest/')) // Проверяем, было ли изменено (сжато) изображение ранее
    .pipe(imagemin()) // Сжимаем и оптимизируем изображеня
    .pipe(dest('app/images/dest/')) // Выгружаем оптимизированные изображения в папку назначения
}


// CLEAN
function cleanimg() {
  return del('app/images/dest/**/*', {
    force: true
  }) // Удаляем всё содержимое папки "app/images/dest/"
}



// WATCH создадим новую функцию startWatch(), которая запустит наблюдение за изменениями файлов.
// Выбираем все файлы JS в проекте, а затем исключим с суффиксом .min.js
// Мониторим файлы препроцессора на изменения
// Мониторим файлы HTML на изменения
function startwatch() {
  watch(['app/**/*.js', '!app/**/app.min.js'], scripts);
  watch('app/**/' + preprocessor + '/**/*', styles);
  watch('app/**/*.html').on('change', browserSync.reload);
}

// Экспортируем функцию browsersync() как таск browsersync. Значение после знака = это имеющаяся функция.
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;

exports.default = parallel(styles, scripts, browsersync, startwatch);
