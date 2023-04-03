======= создати папку з струкрутою =======
==================================================
npm run add header[symbols,assets,.scss,.html]
==================================================
#npm run add "назва папки"[.scss,.html]
npm run add header[.scss,.html]
*создасть папку "назва папки", в середині будуть файли з такоюж назвою і розширенням яке вказано в "[]"

Также можно создавать папки внутри блока:
#npm run add "назва папки"[img/sprite,assets,symbols,scss,.js]
npm run add header[img/sprite,assets]

======= создати сторінку =======

#npm run add page "назва сторіки"
[npm run add page header]

======= структура папки  =======
======= [Js]()=======
Пишем в app/app.js і цей код підкл до всіх сторінок

======= [img]() =======
app/
├── blocks/
│   └── develop/         # Уровень develop
│       ├── about
│       	├── assets/about-poster.jpg
│
[картинки мають бути в папці assets]
вказуєм що тут є картинка
<img src="@about/about-poster.jpg" alt="">
===========================================
всі картинки можна зберігати в [ОДНОМУ] місці [develop/app/assets/img]
шлях тоді до них буде такий  [img src="/static/app/img/faq-info.jpg" alt=""]
===========================================
[картинки через background-image мають бути в папці img/sprite] -- якщо будем прописувати [npm run do] картинки через background НЕ ПІДКЛЮЧАТЬСЯ
!!!!! background-image -- підключаються ТІЛЬКИ з папки  develop\zz\img\sprite\item_2.jpg -- З ПАПКИ СТОРІНКИ
в .scss файлах в папках [section, components] background: url -- НЕ ПІДКЛЮЧАЄТЬСЯ!!!! при [npm run do]
==== можна прописати стилі з "папки сторінки"  див zz.scss => .dropdown ====
app/
├── blocks/
│   └── develop/         # Уровень develop
│       ├── zz
│       	  ├── [assets]/about-poster.jpg
│			  ├── [img]/[sprite]/about-poster.jpg
background-image: url("img/sprite/about-poster.jpg");
[можуть бути і svg]
background-image: url("img/sprite/about-poster.jpg");
===========================================
======= [img для components]() =======
[картинки які потрібні для компонентів(components) зберігаєм так:]
app/
├── blocks/
│   └── develop/         # Уровень develop
│       ├── index
│       	├── assets/about-poster.jpg
│       ├── components
│       	├── assets/popup-success-bg.png
│
======= [svg]() =======
app/
├── blocks/
│   └── develop/         # Уровень develop
│       ├── zz
│       	  ├── [symbols]/call.svg
в HTML вказуєм
<svg class="">
<use xlink:href="#(назва блоку,zz)"__call"></use>		
</svg>
1.[видаляєм] весь fill з svg
2.колір задаєм через: [fill: green;]
3.<svg [width="9" height="7" viewBox="0 0 9 7"]  - розміри для svg іконок залишаєм/видаляєм щою при зменшені html font-size  пропорції залишались [деколи допомагає]
4. змінити fill буває чомусь можливо тільки через id svg (#index__favorite path {fill: $accent;})
=========================================
всі svg можна зберігати в [ОДНОМУ] місці [develop/app/symbols]
шлях тоді до них буде такий  [<use xlink:href="#app__time"></use>]

====== [@@include]() =======
   ==index.html
   @@include( 'develop/header/header.html', {
   "slogan": "Фільтр"
   })
   ==header.html
<h1>@@slogan</h1>

===========================================
=== [цикл в HTML]() ===
=== [@for (var i = 0; i < global.jsons.назва блоку.назва масива в json.length; i++)]() ===

шукати приклад по класу:[gallery__list]
--буде стільки li, скільки в масиві galleryItem обєктів
--підставиться значення яке в json під [img] `+global.jsons.index.galleryItem[i].img+`

<ul class="gallery__list">
    @@for (var i = 0; i < global.jsons.index.galleryItem.length; i++) {
        <li class="gallery__item">
            <picture class="gallery__list-img">
                <img src="@index/   `суда підставиться значення яке в  json`  .jpg" alt="">
            </picture>
        </li>
    }
</ul>

===========================================
=== [autoprefixer]() ===
// відключаєм при розробці (tasks/styles.js)
[plugins.push(
require( 'autoprefixer' )({ remove: false, browsers: this.config.build.autoprefixer }),
)]
===========================================

=== [placeholder.scss [@extend]]() ===
1.задаєм загальні стилі (шаблон)

%text {
	font-family: $font-family;
	font-weight: 700;
	font-size: 26px;
	line-height: 1.19;
	color: red;
}

2. в  потрібному файлі приміняєм ці стилі

.header {
	&__text {
	[ @extend %text; ]
	}
}

3. якщо потрібно щось змінити в шаблоні стилів пишеи потрібне свойство нище	
.header {
   &__text {
      [ @extend %text; ]
      color:red; -- це перебє color з шаблона
   }
}

===========================================
=== [підключення файлів]() ===
1. <!DOCTYPE html>
ці файли підключаються з папки app/blocks/develop/app/assets окремо якщо потрібно щоб були НАД [link rel="stylesheet" href="./styles/app.css"]
<head>
	<link rel="stylesheet" href="./styles/normalize.css">
	<link rel="stylesheet" href="./styles/swiper.min.css">
	<link rel="stylesheet" href="./styles/fancybox.css">
	<link rel="stylesheet" href="./styles/jquery-ui.min.css">
</head>
2. deps.js 
в deps.js якщо розкоментувати такий спосіб підключення файли в <head></head> підключаться ПІД  [link rel="stylesheet" href="./styles/app.css"]
	{
		from: 'app/blocks/develop/app/plugins/fancybox',
		inject: ['fancybox.css'],
	},
===========================================

=== [dynamic_adapt динамічний адаптив]() ===

[якщо одночасно перекидувати пару елементів в один і той же блок може виникнути плутанина]

<div data-da=".block,1024,2"

div -- блок який переміщаєм
.block -- куда переміщаєм
1024 -- коли переміщаєм(@media)
2 -- позиція на яку переміщаєм в середину вказаного блока, якщо не вказувати переміститься в КІНЕЦЬ (елемент буде 3-тій)

===========================================

# ====== В jQuery НА ПОДІЯХ І В МЕТОДАХ jQuery ПИШЕМ ТІЛЬКИ [   function () {}  ] ==========





1. розмітка і стилі на сторінці можна розбити по [section] див. zz/service-hero,zz/service-quantum
2. картинки до цієї секції мають бути в корневій папці [zz/assets/img.jpg, symbols]
3. в папці [symbols] зберігаються svg які визиваються через <use xlink:href="#zz__call"></use>
3. якщо потрібні стилі з якоїсь папки[button,input] -- @import "service-quantum/service-quantum.scss";
4. шрифти дублюємо в app/blocks/develop/app/[static/fonts] -- щоб працювало в [npm run do]
5. з конопки можна робити силку, вибитати type="button"
6. картинки оптимізуються в режимі продакшн [npm run do],оптимізуються ті картинки які вставлені в HTML(png,jpg,svg)
7. через [npm run do] -- картинки в форматі [.jpg] -- видає помилку
8.коміти в scss не удаляються
9.в файлі svg картинкам/іконки видаляти fill/stroke які задають колір і задавати колір через css
10. назву обєктів в data.json пишем камелКейсом(careersInfoItem)
11. в jquery вішаєм обробник подій так:$(document).on('click', '.dropdown__list', (e) =>{}, через refs.dropDownList -- не працює
12. $(e.target) -- e.target для jquery
13. список можна робити через цикл [@for]
14. data.json - може бути для кожної сторінки окремо(не обовязково так робити)
15. [import] в deps.js - імпортуємо файли в один (н-д app.js)
16. [inject] в deps.js - підключаємо на сторінку файли 
17. [function filter в deps.js] -  можем підключати файли тільки на ту сторінку яка нам потрібна
<div class="app app_no_js [zz]"></div>
    <!-- BEMGO:symbols -->
18. svg icon - можна щоб були н-д в паці index а застосовувати на іншій сторінці
19. bemgo-yarn/app/blocks/develop/app/assets -- всі файли з розширенням [.js,.css] можна підключити окремим файлом
(создати окремий файл для окремої сторінки і підключити його) н-д:
див pages/zz.html [npm run do] - не працює
<link rel="stylesheet" href="./styles/fancybox.css">
<script src="./scripts/validate_script.js"></script>
20.js файли в папці сторінки - підключаються окремо до кожної сторінки [npm run do] (в файлі dist/scripts/zz.js буде весь код з app.js + app/blocks/develop/zz/zz.js)
21.// .hero__title - ці коміти (ECSSTractor) не дод в dist/app.css
22. background-image -- підключаються ТІЛЬКИ з папки  develop\zz\img\sprite\item_2.jpg -- З ПАПКИ СТОРІНКИ тому що при [npm run do] не підключаться
==== можна прописати стилі з "папки сторінки"  див zz.scss => .dropdown ====
23. якщо потрібно підключити js бібліотеки асинхроно то тільки через CDN



