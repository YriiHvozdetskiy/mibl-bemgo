/* ============================ sliders.js START ================================================================= */
const slider = new Swiper('.swiper', {
	// Default parameters
	//к-сть слайдів яку показує
	slidesPerView: 1,
	//відключення ф-лу якщо слайдів менше чим потрібно
	watchOverflow: true,
	//відступи між слайдами
	spaceBetween: 10,
	//швидкість показу слайдів
	speed: 300,
	//к-сть прокручуюмих слайдів
	slidesPerGroup: 1,
	//безкінечний слайдер(по кругу)
	loop: true,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 4,
			spaceBetween: 40
		}
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar(полоска внизу)
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		dynamicBullets: true,
		//кастомні булети
		renderBullet: (index, className) => `
         <div class="${className}">
            <div class="slider-home__line">
               <div class="slider-home__progress-line"></div>
             </div>
         </div>`,
	},
	autoplay: {
		//швидкість перемикання
		delay: 5000,
		//закінчити на останьому слайді
		stopOnLastSlide: true,
		//відключити після ручного перемикання
		disableOnInteraction: false,
	},
	//затримка для певного слайду на n-сек
	<!-- hold this slide for 2 seconds -->
	// <div class="swiper-slide" data-swiper-autoplay="2000">
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	//доступність
	a11y: {
		//включити/виключити
		enabled: true,
		//повідомлення
		prevSlideMessage: 'Previous slide',
		nextSlideMessage: 'Next slide',
		firstSlideMessage: 'це перший слайдер',
		lastSlideMessage: 'це останій слайдер',
		paginationBulletMessage:'Go to slide {{index}}',
		notificationClass:'swiper-notification',

	},

})
/* ============================ sliders.js END ================================================================= */

