/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./templates/default/src/components/articles-slider/articles-slider.js":
/*!*****************************************************************************!*\
  !*** ./templates/default/src/components/articles-slider/articles-slider.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_lazyloadjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/lazyloadjs */ "./templates/default/src/js/lazyloadjs/index.js");

var slider = document.querySelector('.js-articles-slider');
var sliderContainer = document.querySelector('.js-articles-slider .swiper-container');

if (slider && sliderContainer) {
  (0,_js_lazyloadjs__WEBPACK_IMPORTED_MODULE_0__.lazyLoadJs)({
    targets: slider,
    options: {
      callback: function callback() {
        __webpack_require__.e(/*! import() | swiper */ "swiper").then(__webpack_require__.bind(__webpack_require__, /*! swiper/core */ "./node_modules/swiper/swiper.esm.js")).then(function (module) {
          var Swiper = module.default;
          Swiper.use([module.Navigation]);
          initSlider(Swiper);
        });
      }
    }
  });
}

function initSlider(Swiper) {
  new Swiper(sliderContainer, {
    slidesPerView: 'auto',
    navigation: {
      prevEl: slider.querySelector('.js-swiper-arrow-prev'),
      nextEl: slider.querySelector('.js-swiper-arrow-next')
    }
  });
}

/***/ }),

/***/ "./templates/default/src/components/hamburger/hamburger.js":
/*!*****************************************************************!*\
  !*** ./templates/default/src/components/hamburger/hamburger.js ***!
  \*****************************************************************/
/***/ (() => {

var hamburger = document.querySelector('.js-hamburger');

if (hamburger) {
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    EventEmiter.trigger('event:hamburgerClicked', null);
  });
}

/***/ }),

/***/ "./templates/default/src/components/header/header.js":
/*!***********************************************************!*\
  !*** ./templates/default/src/components/header/header.js ***!
  \***********************************************************/
/***/ (() => {

var header = document.querySelector(".js-header");
window.addEventListener('scroll', function () {
  if (window.scrollY > 10) {
    header.classList.add("fixed-mob");
  } else {
    header.classList.remove("fixed-mob");
  }
});

/***/ }),

/***/ "./templates/default/src/components/menu/menu.js":
/*!*******************************************************!*\
  !*** ./templates/default/src/components/menu/menu.js ***!
  \*******************************************************/
/***/ (() => {

var body = document.body;
var menu = document.querySelector('.js-menu');
var titles = document.querySelectorAll('.js-menu_title');

var getScrollbarWidth = function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
};

Array.from(titles).forEach(function (title) {
  title.addEventListener('click', function () {
    title.parentNode.classList.toggle('active');
  });
});
EventEmiter.on('event:hamburgerClicked', function () {
  if (body.classList.contains('menu-open')) {
    body.style.paddingRight = null;
    body.classList.remove('menu-open');
  } else {
    body.style.paddingRight = "".concat(getScrollbarWidth(), "px");
    body.classList.add('menu-open');
  }

  menu.classList.toggle('active');
});

/***/ }),

/***/ "./templates/default/src/components/page-title-dropdown/page-title-dropdown.js":
/*!*************************************************************************************!*\
  !*** ./templates/default/src/components/page-title-dropdown/page-title-dropdown.js ***!
  \*************************************************************************************/
/***/ (() => {

var title = document.querySelector('.js-page-title-dropdown__title');

if (title) {
  var parent = title.parentNode;
  title.addEventListener('click', function () {
    parent.classList.toggle('active');
  });
}

/***/ }),

/***/ "./templates/default/src/components/search-header/search-header.js":
/*!*************************************************************************!*\
  !*** ./templates/default/src/components/search-header/search-header.js ***!
  \*************************************************************************/
/***/ (() => {

var searchField = document.querySelector('.js-search-header');
var searchFieldInput = document.querySelector('.js-search-header__input');
var searchFieldBtn = document.querySelector('.js-search-header__btn');
searchFieldBtn.addEventListener('click', function (e) {
  searchField.classList.add('active');
});
document.body.addEventListener('click', function (e) {
  if (!e.target.closest('.js-search-header')) {
    searchField.classList.remove('active');
    searchFieldInput.value = '';
  }
});

/***/ }),

/***/ "./templates/default/src/components/video-block/video-block.js":
/*!*********************************************************************!*\
  !*** ./templates/default/src/components/video-block/video-block.js ***!
  \*********************************************************************/
/***/ (() => {

var videoBlockPopup = new Popup();
var videoBlocks = document.querySelectorAll('.js-video-block');
Array.from(videoBlocks).forEach(function (videoBlock) {
  videoBlock.addEventListener('click', function () {
    var videoSrc = videoBlock.dataset.videoSrc;
    videoBlockPopup.options({
      addClassNamePopup: 'popup_video'
    }).html("<iframe width=\"0\" height=\"0\" frameborder=\"0\" src=\"".concat(videoSrc, "\" allowfullscreen></iframe>")).show();
  });
});

/***/ }),

/***/ "./templates/default/src/js/layout/layout.js":
/*!***************************************************!*\
  !*** ./templates/default/src/js/layout/layout.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

document.body.style.setProperty("--scrollbar-width", "".concat(window.innerWidth - document.body.clientWidth, "px"));
window.EventEmiter = __webpack_require__(/*! ../pubsub */ "./templates/default/src/js/pubsub/index.js").PubSub; // scripts of for all page

__webpack_require__(/*! ../plugins/lazysizes */ "./templates/default/src/js/plugins/lazysizes/index.js");

__webpack_require__(/*! ../users/phone-mask */ "./templates/default/src/js/users/phone-mask.js"); // custom scrtipts used for all pages


__webpack_require__(/*! ../../components/header/header */ "./templates/default/src/components/header/header.js");

__webpack_require__(/*! ../../components/hamburger/hamburger */ "./templates/default/src/components/hamburger/hamburger.js");

__webpack_require__(/*! ../../components/search-header/search-header */ "./templates/default/src/components/search-header/search-header.js");

__webpack_require__(/*! ../../components/menu/menu */ "./templates/default/src/components/menu/menu.js");

/***/ }),

/***/ "./templates/default/src/js/lazyloadjs/index.js":
/*!******************************************************!*\
  !*** ./templates/default/src/js/lazyloadjs/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lazyLoadJs": () => (/* binding */ lazyLoadJs)
/* harmony export */ });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultOptions = {
  root: null,
  rootMargin: "20% 0px 20% 0px",
  threshold: 0,
  triggerOnce: true
};

var extend = function extend(options) {
  return _objectSpread({}, defaultOptions, options);
};

var isNodeList = function isNodeList(nodes) {
  return NodeList.prototype.isPrototypeOf(nodes);
};

var convertTargetsToArray = function convertTargetsToArray(nodes) {
  if (isNodeList(nodes)) {
    return Array.from(nodes); // if used for example document.querySelectorAll('el')
  } else {
    return [nodes]; // if used for example document.querySelector('el')
  }
};

function lazyLoadJs(config) {
  var options = extend(config.options);
  var targets = convertTargetsToArray(config.targets);
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.some(function (entry) {
      if (entry.isIntersecting) {
        // console.log('execute');
        options.callback();

        if (options.triggerOnce) {
          observer.disconnect();
          return true; // break loop
        }
      }
    });
  }, options);
  targets.forEach(function (target) {
    observer.observe(target);
  });
}

/***/ }),

/***/ "./templates/default/src/js/plugins/lazysizes/index.js":
/*!*************************************************************!*\
  !*** ./templates/default/src/js/plugins/lazysizes/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./lazysizes-config */ "./templates/default/src/js/plugins/lazysizes/lazysizes-config.js");

__webpack_require__(/*! ./lazysizes-bg */ "./templates/default/src/js/plugins/lazysizes/lazysizes-bg.js");

__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");

/***/ }),

/***/ "./templates/default/src/js/plugins/lazysizes/lazysizes-bg.js":
/*!********************************************************************!*\
  !*** ./templates/default/src/js/plugins/lazysizes/lazysizes-bg.js ***!
  \********************************************************************/
/***/ (() => {

var checkSupportWebp = function checkSupportWebp(fn) {
  var WebP = new Image();

  WebP.onload = WebP.onerror = function () {
    isSupported = WebP.height === 2;
    fn(isSupported);
  };

  WebP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
};

checkSupportWebp(function (isSupportedWebp) {
  if (isSupportedWebp) {
    document.addEventListener('lazybeforeunveil', function (e) {
      var bg = e.target.getAttribute('data-bg');
      var bgWebp = e.target.getAttribute('data-bg-webp');

      if (bgWebp) {
        e.target.style.backgroundImage = 'url(' + bgWebp + ')';
      } else if (bg) {
        // если есть подержка webp но нет атрибута data-webp
        e.target.style.backgroundImage = 'url(' + bg + ')';
      }
    });
  } else {
    document.addEventListener('lazybeforeunveil', function (e) {
      var bg = e.target.getAttribute('data-bg');

      if (bg) {
        e.target.style.backgroundImage = 'url(' + bg + ')';
      }
    }, false);
  }

  var timerId;
  timerId = setTimeout(function () {
    if (window.lazySizes) {
      clearTimeout(timerId);
      window.lazySizes.init(); // include init lazysizes
    }
  });
});

/***/ }),

/***/ "./templates/default/src/js/plugins/lazysizes/lazysizes-config.js":
/*!************************************************************************!*\
  !*** ./templates/default/src/js/plugins/lazysizes/lazysizes-config.js ***!
  \************************************************************************/
/***/ (() => {

window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.init = false; // prevent auto init lazysizes

lazySizesConfig.expand = 1000;

/***/ }),

/***/ "./templates/default/src/js/plugins/popup/popup.js":
/*!*********************************************************!*\
  !*** ./templates/default/src/js/plugins/popup/popup.js ***!
  \*********************************************************/
/***/ (() => {

;

(function (global) {
  var bugIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  var ie10 = navigator.appVersion.indexOf("MSIE 10") !== -1 ? true : false;
  var ie9 = navigator.appVersion.indexOf("MSIE 9") !== -1 ? true : false;

  var createElement = function createElement(cls, parent) {
    var obj = document.createElement('div');
    obj.className = cls;

    if (parent) {
      parent.appendChild(obj);
    }

    return obj;
  };

  function Popup() {
    this.tags = {};
    this.tags.popup = createElement('popup' + (ie10 ? ' popup_ie10' : '') + (ie9 ? ' popup_ie9' : ''), document.body);
    this.tags.popup__overlay = createElement('popup__overlay', this.tags.popup);
    this.tags.popup__table = createElement('popup__table', this.tags.popup);
    this.tags.popup__cell = createElement('popup__cell', this.tags.popup__table);
    this.tags.popup__block = createElement('popup__block', this.tags.popup__cell);
    this.tags.popup__close = createElement('popup__close', this.tags.popup__block);
    this.tags.popup__change = createElement('popup__change', this.tags.popup__block);
    this.eventsTrigger = 'click';
    this.events();
    this.scrollWidth = this.scrollWidthElement();
    this.defaults = {
      clearClose: true,
      bodyHidden: true,
      addClassNamePopup: '',
      closeOverlay: true,
      closeShow: true,
      background: '',
      closeButtons: '',
      offsetY: 0,
      offsetX: 0,
      coordElement: ''
    };
  }

  Popup.prototype = {
    isOpen: false,
    options: function options(opts) {
      this.defaults = this.extend({
        clearClose: true,
        bodyHidden: true,
        addClassNamePopup: '',
        closeOverlay: true,
        closeShow: true,
        background: '',
        closeButtons: '',
        offsetY: 0,
        offsetX: 0,
        coordElement: ''
      }, opts);

      if (this.defaults.background) {
        this.tags.popup.style.background = this.defaults.background;
      }

      return this;
    },
    extend: function extend(defaults, source) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          defaults[key] = source[key];
        }
      }

      return defaults;
    },
    addCloseButtons: function addCloseButtons() {
      var obj = this;
      var buttons = this.defaults.closeButtons.split(',');
      buttons.forEach(function (item, index) {
        var selectors = document.querySelectorAll(item.replace(/\s+/g, ''));
        Array.prototype.forEach.call(selectors, function (element, i) {
          element.addEventListener(obj.eventsTrigger, function (e) {
            e.preventDefault();
            obj.close(obj.defaults.clearClose ? 'clear' : null);
            return false;
          }, false);
        });
      });
    },
    coordSet: function coordSet() {
      var obj = this;
      var button = document.querySelector(this.defaults.coordElement);

      if (button) {
        this.coords = button.getBoundingClientRect();
        this.tags.popup__block.style.left = (this.defaults.bodyHidden ? 0 : window.pageXOffset) + this.coords.left + this.defaults.offsetX + 'px';
        this.tags.popup__block.style.top = (this.defaults.bodyHidden ? 0 : window.pageYOffset) + this.coords.top + this.defaults.offsetY + 'px';
        this.tags.popup__block.style.position = 'absolute';
      }

      return this;
    },
    coordReset: function coordReset() {
      var obj = this;
      this.defaults = {
        clearClose: true,
        bodyHidden: true,
        addClassNamePopup: '',
        closeOverlay: true,
        closeShow: true,
        background: '',
        closeButtons: '',
        offsetY: 0,
        offsetX: 0,
        coordElement: ''
      };
      setTimeout(function () {
        obj.tags.popup.style.background = '';
      }, 500); // указан в файле стилей transition

      this.tags.popup__block.style.left = '';
      this.tags.popup__block.style.top = '';
      this.tags.popup__block.style.position = '';
      return this;
    },
    setBodyStyle: function setBodyStyle() {
      var trigger = window.innerHeight < document.body.scrollHeight;

      if (this.defaults.bodyHidden) {
        document.body.classList.add('popup__body_hidden');

        if (trigger) {
          document.body.style.paddingRight = this.scrollWidth + 'px';
        }
      }

      return this;
    },
    clearBodyStyle: function clearBodyStyle() {
      document.body.classList.remove('popup__body_hidden');
      document.body.style.paddingRight = '';
      return this;
    },
    html: function html(response, callback) {
      this.tags.popup__change.innerHTML = response;

      if (callback) {
        callback.call(this.tags.popup, this.defaults, this.eventsTrigger);
      }

      return this;
    },
    append: function append(response, callback) {
      this.tags.popup__change.innerHTML = response;

      if (callback) {
        callback.call(this.tags.popup, this.defaults, this.eventsTrigger);
      }

      if (this.defaults.closeButtons) {
        this.addCloseButtons();
      }

      return this;
    },
    clear: function clear(_clear) {
      if (this.defaults.clearClose || _clear) {
        this.tags.popup__change.innerHTML = '';
      }

      return this;
    },
    show: function show(callback) {
      this.isOpen = true;
      this.offsetTop = window.pageYOffset;
      document.body.style.top = this.offsetTop * -1 + 'px';
      this.tags.popup.className = 'popup';

      if (bugIOS) {
        document.documentElement.classList.add('popup_iphone');
      }

      if (this.defaults.closeShow) {
        this.tags.popup__close.style.display = '';
      } else {
        this.tags.popup__close.style.display = 'none';
      }

      this.setBodyStyle();

      if (this.defaults.coordElement) {
        this.coordSet();
      }

      if (this.defaults.closeButtons) {
        this.addCloseButtons();
      }

      if (this.defaults.addClassNamePopup) {
        this.tags.popup.classList.add(this.defaults.addClassNamePopup);
      }

      this.tags.popup.classList.add('popup_active');

      if (callback) {
        callback.call(this.tags.popup, this.defaults, this.eventsTrigger);
      }

      return this;
    },
    close: function close(clear, callback) {
      var obj = this;
      setTimeout(function () {
        obj.tags.popup.classList.remove('popup_active');

        if (bugIOS) {
          document.documentElement.classList.remove('popup_iphone');
        }

        if (obj.defaults.addClassNamePopup) {
          obj.tags.popup.classList.remove(obj.defaults.addClassNamePopup);
        }

        if (clear == 'clear') {
          obj.tags.popup__change.innerHTML = '';
        }

        obj.coordReset();

        if (callback) {
          callback.call(obj.tags.popup, obj.defaults, obj.eventsTrigger);
        }

        obj.clearBodyStyle();
        obj.isOpen = false;
        document.body.style.top = '';
        window.scrollTo(0, obj.offsetTop);
      }, 50);
      return this;
    },
    events: function events() {
      var obj = this;
      this.tags.popup__close.addEventListener(this.eventsTrigger, function (e) {
        obj.close(obj.defaults.clearClose ? 'clear' : null);
        return false;
      }, false);
      this.tags.popup__overlay.addEventListener(this.eventsTrigger, function (e) {
        if (obj.defaults.closeOverlay) {
          obj.close(obj.defaults.clearClose ? 'clear' : null);
        }

        return false;
      }, false);
      document.addEventListener('keydown', function (e) {
        if (e.which == 27) {
          obj.close(obj.defaults.clearClose ? 'clear' : null);
        }
      }, false);
    },
    scrollWidthElement: function scrollWidthElement() {
      var div = document.createElement("div");
      div.style.overflowY = "scroll";
      div.style.width = "50px";
      div.style.height = "50px";
      div.style.visibility = "hidden";
      document.body.appendChild(div);
      var scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      return scrollWidth;
    }
  };
  window.Popup = Popup;
})(window);

/***/ }),

/***/ "./templates/default/src/js/pubsub/index.js":
/*!**************************************************!*\
  !*** ./templates/default/src/js/pubsub/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PubSub": () => (/* binding */ PubSub)
/* harmony export */ });
/**********
 *
 * pubsub.on() subscribe() add() listen()
 * pubsub.off() unsubscribe() remove() unlisten()
 * pubsub.trigger() publish() emit() announce()
 *
 * */
var PubSub = {
  events: {},
  on: function on(evName, fn) {
    // console.log(`PUBSUB: someone just subscribed to know about ${evName}`);
    //add an event with a name as new or to existing list
    this.events[evName] = this.events[evName] || [];
    this.events[evName].push(fn);
  },
  off: function off(evName, fn) {
    // console.log(`PUBSUB: someone just UNsubscribed from ${evName}`);
    //remove an event function by name
    if (this.events[evName]) {
      this.events[evName] = this.events[evName].filter(function (f) {
        return f !== fn;
      });
    }
  },
  trigger: function trigger(evName, data) {
    // console.log(`PUBSUB: Making an broadcast about ${evName} with ${data}`);
    //emit|publish|announce the event to anyone who is subscribed
    if (this.events[evName]) {
      this.events[evName].forEach(function (f) {
        f(data);
      });
    }
  }
};

/***/ }),

/***/ "./templates/default/src/js/users/phone-mask.js":
/*!******************************************************!*\
  !*** ./templates/default/src/js/users/phone-mask.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lazyloadjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lazyloadjs */ "./templates/default/src/js/lazyloadjs/index.js");

var elements = document.querySelectorAll('.js-phone-mask');

if (elements.length) {
  (0,_lazyloadjs__WEBPACK_IMPORTED_MODULE_0__.lazyLoadJs)({
    targets: elements,
    options: {
      callback: function callback() {
        __webpack_require__.e(/*! import() | inputmask */ "inputmask").then(__webpack_require__.bind(__webpack_require__, /*! inputmask/lib/inputmask */ "./node_modules/inputmask/lib/inputmask.js")).then(function (module) {
          var inputmask = module.default;
          initInputMask(inputmask);
        });
      }
    }
  });
}

function initInputMask(Inputmask) {
  var im = new Inputmask('+7 999 999-99-99', {
    "clearIncomplete": true
  });
  im.mask(elements);
}

/***/ }),

/***/ "./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/***/ ((module) => {

(function(window, factory) {
	var lazySizes = factory(window, window.document, Date);
	window.lazySizes = lazySizes;
	if( true && module.exports){
		module.exports = lazySizes;
	}
}(typeof window != 'undefined' ?
      window : {}, function l(window, document, Date) { // Pass in the windoe Date function also for SSR because the Date class can be lost
	'use strict';
	/*jshint eqnull:true */

	var lazysizes, lazySizesCfg;

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125,
		};

		lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesCfg)){
				lazySizesCfg[prop] = lazySizesDefaults[prop];
			}
		}
	})();

	if (!document || !document.getElementsByClassName) {
		return {
			init: function () {},
			cfg: lazySizesCfg,
			noSupport: true,
		};
	}

	var docElem = document.documentElement;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	/**
	 * Update to bind to window because 'this' becomes null during SSR
	 * builds.
	 */
	var addEventListener = window[_addEventListener].bind(window);

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('Event');

		if(!detail){
			detail = {};
		}

		detail.instance = lazysizes;

		event.initEvent(name, !noBubbles, !noCancelable);

		event.detail = detail;

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){
			if(full && full.src && !el[_getAttribute]('srcset')){
				el.setAttribute('srcset', full.src);
			}
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function(){
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = lazySizesCfg.throttleDelay;
		var rICTimeout = lazySizesCfg.ricTimeout;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});

				if(rICTimeout !== lazySizesCfg.ricTimeout){
					rICTimeout = lazySizesCfg.ricTimeout;
				}
			} :
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;

			if((isPriority = isPriority === true)){
				rICTimeout = 33;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || delay < 9){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	var loader = (function(){
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isVisible = function (elem) {
			if (isBodyHidden == null) {
				isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
			}

			return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = isVisible(elem);

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,
				beforeExpandVal, defaultExpand, preloadExpand, hFac;
			var lazyloadElems = lazysizes.elements;

			if((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if (!defaultExpand) {
						defaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?
							docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :
							lazySizesCfg.expand;

						lazysizes._defEx = defaultExpand;

						preloadExpand = defaultExpand * lazySizesCfg.expFactor;
						hFac = lazySizesCfg.hFac;
						isBodyHidden = null;

						if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
							currentExpand = preloadExpand;
							lowRuns = 0;
						} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
							currentExpand = defaultExpand;
						} else {
							currentExpand = shrinkExpand;
						}
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			var elem = e.target;

			if (elem._lazyCache) {
				delete elem._lazyCache;
				return;
			}

			resetPreloading(e);
			addClass(elem, lazySizesCfg.loadedClass);
			removeClass(elem, lazySizesCfg.loadingClass);
			addRemoveLoadEvents(elem, rafSwitchLoadingClass);
			triggerEvent(elem, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			try {
				elem.contentWindow.location.replace(src);
			} catch(e){
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

			if( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesCfg.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
				src = elem[_getAttribute](lazySizesCfg.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				addClass(elem, lazySizesCfg.loadingClass);

				if(firesLoad){
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(isImg && (srcset || isPicture)){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesCfg.lazyClass);

			rAF(function(){
				// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
				var isLoaded = elem.complete && elem.naturalWidth > 1;

				if( !firesLoad || isLoaded){
					if (isLoaded) {
						addClass(elem, 'ls-is-cached');
					}
					switchLoadingClass(event);
					elem._lazyCache = true;
					setTimeout(function(){
						if ('_lazyCache' in elem) {
							delete elem._lazyCache;
						}
					}, 9);
				}
				if (elem.loading == 'lazy') {
					isLoading--;
				}
			}, true);
		});

		var unveilElement = function (elem){
			if (elem._lazyRace) {return;}
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var afterScroll = debounce(function(){
			lazySizesCfg.loadMode = 3;
			throttledCheckElements();
		});

		var altLoadmodeScrollListner = function(){
			if(lazySizesCfg.loadMode == 3){
				lazySizesCfg.loadMode = 2;
			}
			afterScroll();
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}


			isCompleted = true;

			lazySizesCfg.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', altLoadmodeScrollListner, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				addEventListener('pageshow', function (e) {
					if (e.persisted) {
						var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

						if (loadingElements.length && loadingElements.forEach) {
							requestAnimationFrame(function () {
								loadingElements.forEach( function (img) {
									if (img.complete) {
										unveilElement(img);
									}
								});
							});
						}
					}
				});

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazysizes.elements.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement,
			_aLSL: altLoadmodeScrollListner,
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i && document.getElementsByClassName){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	setTimeout(function(){
		if(lazySizesCfg.init){
			init();
		}
	});

	lazysizes = {
		cfg: lazySizesCfg,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};

	return lazysizes;
}
));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + "." + {"inputmask":"fd14ae122d9b0fe227b0","swiper":"5a2ce1ce29f99c7b5515"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "mockup-test:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"article": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmockup_test"] = self["webpackChunkmockup_test"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************************!*\
  !*** ./templates/default/src/js/pages/article.js ***!
  \***************************************************/
// scripts used on all page
__webpack_require__(/*! ../layout/layout */ "./templates/default/src/js/layout/layout.js"); // custom scripts without components


__webpack_require__(/*! ../plugins/popup/popup */ "./templates/default/src/js/plugins/popup/popup.js"); // custom components scrtipts used for page


__webpack_require__(/*! ../../components/page-title-dropdown/page-title-dropdown */ "./templates/default/src/components/page-title-dropdown/page-title-dropdown.js");

__webpack_require__(/*! ../../components/video-block/video-block */ "./templates/default/src/components/video-block/video-block.js");

__webpack_require__(/*! ../../components/articles-slider/articles-slider */ "./templates/default/src/components/articles-slider/articles-slider.js");
})();

/******/ })()
;
//# sourceMappingURL=article.bundle.js.map