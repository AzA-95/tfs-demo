(self["webpackChunkmockup_test"] = self["webpackChunkmockup_test"] || []).push([["inputmask"],{

/***/ "./node_modules/inputmask/lib/canUseDOM.js":
/*!*************************************************!*\
  !*** ./node_modules/inputmask/lib/canUseDOM.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (canUseDOM);


/***/ }),

/***/ "./node_modules/inputmask/lib/defaults.js":
/*!************************************************!*\
  !*** ./node_modules/inputmask/lib/defaults.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _keycode_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keycode.json */ "./node_modules/inputmask/lib/keycode.json");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	_maxTestPos: 500,
	placeholder: "_",
	optionalmarker: ["[", "]"],
	quantifiermarker: ["{", "}"],
	groupmarker: ["(", ")"],
	alternatormarker: "|",
	escapeChar: "\\",
	mask: null, //needs tobe null instead of undefined as the extend method does not consider props with the undefined value
	regex: null, //regular expression as a mask
	oncomplete: () => {
	}, //executes when the mask is complete
	onincomplete: () => {
	}, //executes when the mask is incomplete and focus is lost
	oncleared: () => {
	}, //executes when the mask is cleared
	repeat: 0, //repetitions of the mask: * ~ forever, otherwise specify an integer
	greedy: false, //true: allocated buffer for the mask and repetitions - false: allocate only if needed
	autoUnmask: false, //automatically unmask when retrieving the value with $.fn.val or value if the browser supports __lookupGetter__ or getOwnPropertyDescriptor
	removeMaskOnSubmit: false, //remove the mask before submitting the form.
	clearMaskOnLostFocus: true,
	insertMode: true, //insert the input or overwrite the input
	insertModeVisual: true, //show selected caret when insertmode = false
	clearIncomplete: false, //clear the incomplete input on blur
	alias: null,
	onKeyDown: () => {
	}, //callback to implement autocomplete on certain keys for example. args => event, buffer, caretPos, opts
	onBeforeMask: null, //executes before masking the initial value to allow preprocessing of the initial value.	args => initialValue, opts => return processedValue
	onBeforePaste: function (pastedValue, opts) {
		return typeof opts.onBeforeMask === "function" ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
	}, //executes before masking the pasted value to allow preprocessing of the pasted value.	args => pastedValue, opts => return processedValue
	onBeforeWrite: null, //executes before writing to the masked element. args => event, opts
	onUnMask: null, //executes after unmasking to allow postprocessing of the unmaskedvalue.	args => maskedValue, unmaskedValue, opts
	showMaskOnFocus: true, //show the mask-placeholder when the input has focus
	showMaskOnHover: true, //show the mask-placeholder when hovering the empty input
	onKeyValidation: () => {
	}, //executes on every key-press with the result of isValid. Params: key, result, opts
	skipOptionalPartCharacter: " ", //a character which can be used to skip an optional part of a mask
	numericInput: false, //numericInput input direction style (input shifts to the left while holding the caret position)
	rightAlign: false, //align to the right
	undoOnEscape: true, //pressing escape reverts the value to the value before focus
	//numeric basic properties
	radixPoint: "", //".", // | ","
	_radixDance: false, //dance around the radixPoint
	groupSeparator: "", //",", // | "."
	//numeric basic properties
	keepStatic: null, //try to keep the mask static while typing. Decisions to alter the mask will be posponed if possible
	positionCaretOnTab: true, //when enabled the caret position is set after the latest valid position on TAB
	tabThrough: false, //allows for tabbing through the different parts of the masked field
	supportsInputType: ["text", "tel", "url", "password", "search"], //list with the supported input types
	//specify keyCodes which should not be considered in the keypress event, otherwise the preventDefault will stop their default behavior especially in FF
	ignorables: [
		_keycode_json__WEBPACK_IMPORTED_MODULE_0__.BACKSPACE,
		_keycode_json__WEBPACK_IMPORTED_MODULE_0__.TAB,
		_keycode_json__WEBPACK_IMPORTED_MODULE_0__["PAUSE/BREAK"],
		_keycode_json__WEBPACK_IMPORTED_MODULE_0__.ESCAPE,
		_keycode_json__WEBPACK_IMPORTED_MODULE_0__.PAGE_UP,
		_keycode_json__WEBPACK_IMPORTED_MODULE_0__.PAGE_DOWN,
		_keycode_json__WEBPACK_IMPORTED_MODULE_0__.END,
		_keycode_json__WEBPACK_IMPORTED_MODULE_0__.HOME,
		_keycode_json__WEBPACK_IMPORTED_MODULE_0__.LEFT,
		_keycode_json__WEBPACK_IMPORTED_MODULE_0__.UP,
		_keycode_json__WEBPACK_IMPORTED_MODULE_0__.RIGHT,
		_keycode_json__WEBPACK_IMPORTED_MODULE_0__.DOWN,
		_keycode_json__WEBPACK_IMPORTED_MODULE_0__.INSERT,
		_keycode_json__WEBPACK_IMPORTED_MODULE_0__.DELETE,
		93,
		112,
		113,
		114,
		115,
		116,
		117,
		118,
		119,
		120,
		121,
		122,
		123,
		0,
		229
	],
	isComplete: null, //override for isComplete - args => buffer, opts - return true || false
	preValidation: null, //hook to preValidate the input.  Usefull for validating regardless the definition.	args => buffer, pos, char, isSelection, opts, maskset, caretPos, strict => return true/false/command object
	postValidation: null, //hook to postValidate the result from isValid.	Usefull for validating the entry as a whole.	args => buffer, pos, c, currentResult, opts, maskset, strict, fromCheckval => return true/false/json
	staticDefinitionSymbol: undefined, //specify a definitionSymbol for static content, used to make matches for alternators
	jitMasking: false, //just in time masking ~ only mask while typing, can n (number), true or false
	nullable: true, //return nothing instead of the buffertemplate when the user hasn't entered anything.
	inputEventOnly: false, //dev option - testing inputfallback behavior
	noValuePatching: false, //disable value property patching
	positionCaretOnClick: "lvp", //none, lvp (based on the last valid position (default), radixFocus (position caret to radixpoint on initial click), select (select the whole input), ignore (ignore the click and continue the mask)
	casing: null, //mask-level casing. Options: null, "upper", "lower" or "title" or callback args => elem, test, pos, validPositions return charValue
	inputmode: "text", //specify the inputmode
	importDataAttributes: true, //import data-inputmask attributes
	shiftPositions: true, //shift position of the mask entries on entry and deletion.
	usePrototypeDefinitions: true, //use the default defined definitions from the prototype
	validationEventTimeOut: 3000 //Time to show validation error on form submit
});

/***/ }),

/***/ "./node_modules/inputmask/lib/definitions.js":
/*!***************************************************!*\
  !*** ./node_modules/inputmask/lib/definitions.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	"9": { //\uFF11-\uFF19 #1606
		validator: "[0-9\uFF10-\uFF19]",
		definitionSymbol: "*"
	},
	"a": { //\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5 #76
		validator: "[A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]",
		definitionSymbol: "*"
	},
	"*": {
		validator: "[0-9\uFF10-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]"
	}
});

/***/ }),

/***/ "./node_modules/inputmask/lib/dependencyLibs/data.js":
/*!***********************************************************!*\
  !*** ./node_modules/inputmask/lib/dependencyLibs/data.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(owner, key, value) {
	if (value === undefined) {
		return owner.__data ? owner.__data[key] : null;
	} else {
		owner.__data = owner.__data || {};
		owner.__data[key] = value;
	}
}

/***/ }),

/***/ "./node_modules/inputmask/lib/dependencyLibs/events.js":
/*!*************************************************************!*\
  !*** ./node_modules/inputmask/lib/dependencyLibs/events.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "trigger": () => (/* binding */ trigger),
/* harmony export */   "Event": () => (/* binding */ Event)
/* harmony export */ });
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend */ "./node_modules/inputmask/lib/dependencyLibs/extend.js");
/* harmony import */ var _global_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/window */ "./node_modules/inputmask/lib/global/window.js");
/* harmony import */ var _inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputmask.dependencyLib */ "./node_modules/inputmask/lib/dependencyLibs/inputmask.dependencyLib.js");
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../canUseDOM */ "./node_modules/inputmask/lib/canUseDOM.js");







function isValidElement(elem) {
	return elem instanceof Element;
}

let Event;
if (typeof _global_window__WEBPACK_IMPORTED_MODULE_1__.default.CustomEvent === "function") {
	Event = _global_window__WEBPACK_IMPORTED_MODULE_1__.default.CustomEvent;
} else {
	if (_canUseDOM__WEBPACK_IMPORTED_MODULE_3__.default) {
		Event = function (event, params) {
			params = params || {bubbles: false, cancelable: false, detail: undefined};
			var evt = document.createEvent("CustomEvent");
			evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
			return evt;
		};
		Event.prototype = _global_window__WEBPACK_IMPORTED_MODULE_1__.default.Event.prototype;
	}
}


function on(events, handler) {
	function addEvent(ev, namespace) {
		//register domevent
		if (elem.addEventListener) { // all browsers except IE before version 9
			elem.addEventListener(ev, handler, false);
		} else if (elem.attachEvent) { // IE before version 9
			elem.attachEvent("on" + ev, handler);
		}
		eventRegistry[ev] = eventRegistry[ev] || {};
		eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [];
		eventRegistry[ev][namespace].push(handler);
	}

	if (isValidElement(this[0])) {
		var eventRegistry = this[0].eventRegistry,
			elem = this[0];


		var _events = events.split(" ");
		for (var endx = 0; endx < _events.length; endx++) {
			var nsEvent = _events[endx].split("."),
				ev = nsEvent[0],
				namespace = nsEvent[1] || "global";
			addEvent(ev, namespace);
		}
	}
	return this;
}

function off(events, handler) {
	var eventRegistry, elem;

	function removeEvent(ev, namespace, handler) {
		if (ev in eventRegistry === true) {
			//unbind to dom events
			if (elem.removeEventListener) { // all browsers except IE before version 9
				elem.removeEventListener(ev, handler, false);
			} else if (elem.detachEvent) { // IE before version 9
				elem.detachEvent("on" + ev, handler);
			}
			if (namespace === "global") {
				for (var nmsp in eventRegistry[ev]) {
					eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1);
				}
			} else {
				eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);
			}
		}
	}

	function resolveNamespace(ev, namespace) {
		var evts = [],
			hndx, hndL;
		if (ev.length > 0) {
			if (handler === undefined) {
				for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) {
					evts.push({
						ev: ev,
						namespace: namespace && namespace.length > 0 ? namespace : "global",
						handler: eventRegistry[ev][namespace][hndx]
					});
				}
			} else {
				evts.push({
					ev: ev,
					namespace: namespace && namespace.length > 0 ? namespace : "global",
					handler: handler
				});
			}
		} else if (namespace.length > 0) {
			for (var evNdx in eventRegistry) {
				for (var nmsp in eventRegistry[evNdx]) {
					if (nmsp === namespace) {
						if (handler === undefined) {
							for (hndx = 0, hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) {
								evts.push({
									ev: evNdx,
									namespace: nmsp,
									handler: eventRegistry[evNdx][nmsp][hndx]
								});
							}
						} else {
							evts.push({
								ev: evNdx,
								namespace: nmsp,
								handler: handler
							});
						}
					}
				}
			}
		}

		return evts;
	}

	if (isValidElement(this[0]) && events) {
		eventRegistry = this[0].eventRegistry;
		elem = this[0];


		var _events = events.split(" ");
		for (var endx = 0; endx < _events.length; endx++) {
			var nsEvent = _events[endx].split("."),
				offEvents = resolveNamespace(nsEvent[0], nsEvent[1]);
			for (var i = 0, offEventsL = offEvents.length; i < offEventsL; i++) {
				removeEvent(offEvents[i].ev, offEvents[i].namespace, offEvents[i].handler);
			}
		}
	}
	return this;
}

function trigger(events /* , args... */) {
	if (isValidElement(this[0])) {
		var eventRegistry = this[0].eventRegistry,
			elem = this[0];
		var _events = typeof events === "string" ? events.split(" ") : [events.type];
		for (var endx = 0; endx < _events.length; endx++) {
			var nsEvent = _events[endx].split("."),
				ev = nsEvent[0],
				namespace = nsEvent[1] || "global";
			if (document !== undefined && namespace === "global") {
				//trigger domevent
				var evnt, i, params = {
					bubbles: true,
					cancelable: true,
					detail: arguments[1]
				};
				// The custom event that will be created
				if (document.createEvent) {
					try {
						switch (ev) {
							case "input":
								params.inputType = "insertText";
								evnt = new InputEvent(ev, params);
								break;
							default:
								evnt = new CustomEvent(ev, params);
						}
					} catch (e) {
						evnt = document.createEvent("CustomEvent");
						evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
					}
					if (events.type) (0,_extend__WEBPACK_IMPORTED_MODULE_0__.default)(evnt, events);
					elem.dispatchEvent(evnt);
				} else {
					evnt = document.createEventObject();
					evnt.eventType = ev;
					evnt.detail = arguments[1];
					if (events.type) (0,_extend__WEBPACK_IMPORTED_MODULE_0__.default)(evnt, events);
					elem.fireEvent("on" + evnt.eventType, evnt);
				}
			} else if (eventRegistry[ev] !== undefined) {
				arguments[0] = arguments[0].type ? arguments[0] : _inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_2__.default.Event(arguments[0]);
				arguments[0].detail = arguments.slice(1);
				if (namespace === "global") {
					for (var nmsp in eventRegistry[ev]) {
						for (i = 0; i < eventRegistry[ev][nmsp].length; i++) {
							eventRegistry[ev][nmsp][i].apply(elem, arguments);
						}
					}
				} else {
					for (i = 0; i < eventRegistry[ev][namespace].length; i++) {
						eventRegistry[ev][namespace][i].apply(elem, arguments);
					}
				}
			}
		}
	}
	return this;
}

/***/ }),

/***/ "./node_modules/inputmask/lib/dependencyLibs/extend.js":
/*!*************************************************************!*\
  !*** ./node_modules/inputmask/lib/dependencyLibs/extend.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extend)
/* harmony export */ });
function extend() {
	let options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if (typeof target === "boolean") {
		deep = target;

		// Skip the boolean and the target
		target = arguments[i] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if (typeof target !== "object" && typeof target !== "function") {
		target = {};
	}

	for (; i < length; i++) {
		// Only deal with non-null/undefined values
		if ((options = arguments[i]) != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target === copy) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if (deep && copy && (Object.prototype.toString.call(copy) === "[object Object]" || (copyIsArray = Array.isArray(copy)))) {
					if (copyIsArray) {
						copyIsArray = false;
						clone = src && Array.isArray(src) ? src : [];

					} else {
						clone = src && Object.prototype.toString.call(src) === "[object Object]" ? src : {};
					}

					// Never move original objects, clone them
					target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
				} else if (copy !== undefined) {
					target[name] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
}

/***/ }),

/***/ "./node_modules/inputmask/lib/dependencyLibs/inputmask.dependencyLib.js":
/*!******************************************************************************!*\
  !*** ./node_modules/inputmask/lib/dependencyLibs/inputmask.dependencyLib.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend */ "./node_modules/inputmask/lib/dependencyLibs/extend.js");
/* harmony import */ var _global_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/window */ "./node_modules/inputmask/lib/global/window.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./node_modules/inputmask/lib/dependencyLibs/data.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./node_modules/inputmask/lib/dependencyLibs/events.js");
/*
 Input Mask plugin dependencyLib
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) Robin Herbots
 Licensed under the MIT license
 */






const document = _global_window__WEBPACK_IMPORTED_MODULE_1__.default.document;

function DependencyLib(elem) {
	if (elem instanceof DependencyLib) {
		return elem;
	}
	if (!(this instanceof DependencyLib)) {
		return new DependencyLib(elem);
	}
	if (elem !== undefined && elem !== null && elem !== _global_window__WEBPACK_IMPORTED_MODULE_1__.default) {
		this[0] = elem.nodeName ? elem : (elem[0] !== undefined && elem[0].nodeName ? elem[0] : document.querySelector(elem));
		if (this[0] !== undefined && this[0] !== null) {
			this[0].eventRegistry = this[0].eventRegistry || {};
		}
	}
}

DependencyLib.prototype = {
	on: _events__WEBPACK_IMPORTED_MODULE_3__.on,
	off: _events__WEBPACK_IMPORTED_MODULE_3__.off,
	trigger: _events__WEBPACK_IMPORTED_MODULE_3__.trigger
};

//static
DependencyLib.extend = _extend__WEBPACK_IMPORTED_MODULE_0__.default;
DependencyLib.data = _data__WEBPACK_IMPORTED_MODULE_2__.default;
DependencyLib.Event = _events__WEBPACK_IMPORTED_MODULE_3__.Event;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DependencyLib);


/***/ }),

/***/ "./node_modules/inputmask/lib/environment.js":
/*!***************************************************!*\
  !*** ./node_modules/inputmask/lib/environment.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ie": () => (/* binding */ ie),
/* harmony export */   "mobile": () => (/* binding */ mobile),
/* harmony export */   "iemobile": () => (/* binding */ iemobile),
/* harmony export */   "iphone": () => (/* binding */ iphone)
/* harmony export */ });
/* unused harmony export ua */
/* harmony import */ var _global_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global/window */ "./node_modules/inputmask/lib/global/window.js");


const ua = (_global_window__WEBPACK_IMPORTED_MODULE_0__.default.navigator && _global_window__WEBPACK_IMPORTED_MODULE_0__.default.navigator.userAgent) || "",
	ie = (ua.indexOf("MSIE ") > 0) || (ua.indexOf("Trident/") > 0),
	mobile = "ontouchstart" in _global_window__WEBPACK_IMPORTED_MODULE_0__.default, //not entirely correct but will currently do
	iemobile = /iemobile/i.test(ua),
	iphone = /iphone/i.test(ua) && !iemobile;



/***/ }),

/***/ "./node_modules/inputmask/lib/eventhandlers.js":
/*!*****************************************************!*\
  !*** ./node_modules/inputmask/lib/eventhandlers.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventHandlers": () => (/* binding */ EventHandlers)
/* harmony export */ });
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positioning */ "./node_modules/inputmask/lib/positioning.js");
/* harmony import */ var _keycode_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keycode.json */ "./node_modules/inputmask/lib/keycode.json");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment */ "./node_modules/inputmask/lib/environment.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ "./node_modules/inputmask/lib/validation.js");
/* harmony import */ var _inputHandling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputHandling */ "./node_modules/inputmask/lib/inputHandling.js");
/* harmony import */ var _validation_tests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation-tests */ "./node_modules/inputmask/lib/validation-tests.js");









var EventHandlers = {
	keydownEvent: function (e) {
		const inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib,
			maskset = inputmask.maskset;

		var input = this,
			$input = $(input),
			k = e.keyCode,
			pos = _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input);

		var kdResult = opts.onKeyDown.call(this, e, _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask), pos, opts);
		if (kdResult !== undefined) return kdResult;

		//backspace, delete, and escape get special treatment
		if (k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.BACKSPACE || k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.DELETE || (_environment__WEBPACK_IMPORTED_MODULE_2__.iphone && k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.BACKSPACE_SAFARI) || (e.ctrlKey && k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.X && !("oncut" in input))) { //backspace/delete
			e.preventDefault(); //stop default action but allow propagation
			_validation__WEBPACK_IMPORTED_MODULE_3__.handleRemove.call(inputmask, input, k, pos);
			(0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.writeBuffer)(input, _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask, true), maskset.p, e, input.inputmask._valueGet() !== _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask).join(""));
		} else if (k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.END || k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.PAGE_DOWN) { //when END or PAGE_DOWN pressed set position at lastmatch
			e.preventDefault();
			var caretPos = _positioning__WEBPACK_IMPORTED_MODULE_0__.seekNext.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_0__.getLastValidPosition.call(inputmask));
			_positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, e.shiftKey ? pos.begin : caretPos, caretPos, true);
		} else if ((k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.HOME && !e.shiftKey) || k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.PAGE_UP) { //Home or page_up
			e.preventDefault();
			_positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, 0, e.shiftKey ? pos.begin : 0, true);
		} else if (((opts.undoOnEscape && k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.ESCAPE) || ( false && 0)) && e.altKey !== true) { //escape && undo && #762
			(0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.checkVal)(input, true, false, inputmask.undoValue.split(""));
			$input.trigger("click");
			// } else if (k === keyCode.INSERT && !(e.shiftKey || e.ctrlKey) && inputmask.userOptions.insertMode === undefined) { //insert
			// 	opts.insertMode = !opts.insertMode;
			// 	caret(input, pos.begin, pos.end);
		} else if (opts.tabThrough === true && k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.TAB) {
			if (e.shiftKey === true) {
				pos.end = _positioning__WEBPACK_IMPORTED_MODULE_0__.seekPrevious.call(inputmask, pos.end, true);
				if (_validation_tests__WEBPACK_IMPORTED_MODULE_5__.getTest.call(inputmask, pos.end - 1).match.static === true) {
					pos.end--;
				}
				pos.begin = _positioning__WEBPACK_IMPORTED_MODULE_0__.seekPrevious.call(inputmask, pos.end, true);
				if (pos.begin >= 0 && pos.end > 0) {
					e.preventDefault();
					_positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, pos.begin, pos.end);
				}
			} else {
				pos.begin = _positioning__WEBPACK_IMPORTED_MODULE_0__.seekNext.call(inputmask, pos.begin, true);
				pos.end = _positioning__WEBPACK_IMPORTED_MODULE_0__.seekNext.call(inputmask, pos.begin, true);
				if (pos.end < maskset.maskLength) pos.end--;
				if (pos.begin <= maskset.maskLength) {
					e.preventDefault();
					_positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, pos.begin, pos.end);
				}
			}
		} else if (!e.shiftKey) {
			if (opts.insertModeVisual && opts.insertMode === false) {
				if (k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.RIGHT) {
					setTimeout(function () {
						var caretPos = _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input);
						_positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, caretPos.begin);
					}, 0);
				} else if (k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.LEFT) {
					setTimeout(function () {
						var caretPos = {
							begin: _positioning__WEBPACK_IMPORTED_MODULE_0__.translatePosition.call(inputmask, input.inputmask.caretPos.begin),
							end: _positioning__WEBPACK_IMPORTED_MODULE_0__.translatePosition.call(inputmask, input.inputmask.caretPos.end)
						};
						if (inputmask.isRTL) {
							_positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, caretPos.begin + (caretPos.begin === maskset.maskLength ? 0 : 1));
						} else {
							_positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, caretPos.begin - (caretPos.begin === 0 ? 0 : 1));
						}
					}, 0);
				}
			}
		}

		inputmask.ignorable = opts.ignorables.includes(k);
	},
	keypressEvent: function (e, checkval, writeOut, strict, ndx) {
		const inputmask = this.inputmask || this, opts = inputmask.opts, $ = inputmask.dependencyLib,
			maskset = inputmask.maskset;

		var input = inputmask.el,
			$input = $(input),
			k = e.which || e.charCode || e.keyCode;

		if (checkval !== true && (!(e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || inputmask.ignorable))) {
			if (k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.ENTER && inputmask.undoValue !== inputmask._valueGet(true)) {
				inputmask.undoValue = inputmask._valueGet(true);
				// e.preventDefault();
				setTimeout(function () {
					$input.trigger("change");
				}, 0);
			}
			inputmask.skipInputEvent = true; //skip the input as otherwise the skipped char could be picked up for validation by the inputfallback
			return true;
		} else if (k) {
			//special treat the decimal separator
			if ((k === 44 || k === 46) && e.location === 3 && opts.radixPoint !== "") k = opts.radixPoint.charCodeAt(0);
			var pos = checkval ? {
					begin: ndx,
					end: ndx
				} : _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input),
				forwardPosition, c = String.fromCharCode(k);

			maskset.writeOutBuffer = true;
			var valResult = _validation__WEBPACK_IMPORTED_MODULE_3__.isValid.call(inputmask, pos, c, strict, undefined, undefined, undefined, checkval);
			if (valResult !== false) {
				_positioning__WEBPACK_IMPORTED_MODULE_0__.resetMaskSet.call(inputmask, true);
				forwardPosition = valResult.caret !== undefined ? valResult.caret : _positioning__WEBPACK_IMPORTED_MODULE_0__.seekNext.call(inputmask, valResult.pos.begin ? valResult.pos.begin : valResult.pos);
				maskset.p = forwardPosition; //needed for checkval
			}

			forwardPosition = ((opts.numericInput && valResult.caret === undefined) ? _positioning__WEBPACK_IMPORTED_MODULE_0__.seekPrevious.call(inputmask, forwardPosition) : forwardPosition);
			if (writeOut !== false) {

				setTimeout(function () {
					opts.onKeyValidation.call(input, k, valResult);
				}, 0);
				if (maskset.writeOutBuffer && valResult !== false) {
					var buffer = _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask);
					(0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.writeBuffer)(input, buffer, forwardPosition, e, checkval !== true);
				}
			}

			e.preventDefault();

			if (checkval) {
				if (valResult !== false) valResult.forwardPosition = forwardPosition;
				return valResult;
			}
		}
	},
	keyupEvent: function (e) {
		const inputmask = this.inputmask;

		if (inputmask.isComposing && (e.keyCode === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.KEY_229 || e.keyCode === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.ENTER)) {
			inputmask.$el.trigger("input");
		}
	},
	pasteEvent: function (e) {
		const inputmask = this.inputmask, opts = inputmask.opts;

		var input = this,
			inputValue = inputmask._valueGet(true),
			caretPos = _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input),
			tempValue;

		if (inputmask.isRTL) {
			tempValue = caretPos.end;
			caretPos.end = caretPos.begin;
			caretPos.begin = tempValue;
		}

		var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
			valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);

		if (valueBeforeCaret == (inputmask.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask).slice().reverse() : _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask)).slice(0, caretPos.begin).join("")) valueBeforeCaret = "";
		if (valueAfterCaret == (inputmask.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask).slice().reverse() : _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask)).slice(caretPos.end).join("")) valueAfterCaret = "";

		if (window.clipboardData && window.clipboardData.getData) { // IE
			inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;
		} else if (e.clipboardData && e.clipboardData.getData) {
			inputValue = valueBeforeCaret + e.clipboardData.getData("text/plain") + valueAfterCaret;
		} else {
			return true;
		} //allow native paste event as fallback ~ masking will continue by inputfallback

		var pasteValue = inputValue;
		if (typeof opts.onBeforePaste === "function") {
			pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts);
			if (pasteValue === false) {
				return e.preventDefault();
			}
			if (!pasteValue) {
				pasteValue = inputValue;
			}
		}
		(0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.checkVal)(input, true, false, pasteValue.toString().split(""), e);

		return e.preventDefault();
	},
	inputFallBackEvent: function (e) { //fallback when keypress is not triggered
		const inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib;

		function ieMobileHandler(input, inputValue, caretPos) {
			if (_environment__WEBPACK_IMPORTED_MODULE_2__.iemobile) { //iemobile just sets the character at the end althought the caret position is correctly set
				var inputChar = inputValue.replace(_positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask).join(""), "");
				if (inputChar.length === 1) {
					var iv = inputValue.split("");
					iv.splice(caretPos.begin, 0, inputChar);
					inputValue = iv.join("");
				}
			}
			return inputValue;
		}

		function analyseChanges(inputValue, buffer, caretPos) {
			var frontPart = inputValue.substr(0, caretPos.begin).split(""),
				backPart = inputValue.substr(caretPos.begin).split(""),
				frontBufferPart = buffer.substr(0, caretPos.begin).split(""),
				backBufferPart = buffer.substr(caretPos.begin).split("");

			var fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length,
				bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length,
				bl, i, action = "", data = [], marker = "~", placeholder;

			//align buffers
			while (frontPart.length < fpl) frontPart.push(marker);
			while (frontBufferPart.length < fpl) frontBufferPart.push(marker);
			while (backPart.length < bpl) backPart.unshift(marker);
			while (backBufferPart.length < bpl) backBufferPart.unshift(marker);

			var newBuffer = frontPart.concat(backPart);
			var oldBuffer = frontBufferPart.concat(backBufferPart);

			// console.log("N " + newBuffer);
			// console.log("O " + oldBuffer);

			for (i = 0, bl = newBuffer.length; i < bl; i++) {
				placeholder = _validation_tests__WEBPACK_IMPORTED_MODULE_5__.getPlaceholder.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_0__.translatePosition.call(inputmask, i));
				switch (action) {
					case "insertText":
						if (oldBuffer[i - 1] === newBuffer[i] && caretPos.begin == newBuffer.length - 1) {
							data.push(newBuffer[i]);
						}
						i = bl;
						break;
					case "insertReplacementText":
						if (newBuffer[i] === marker) { //extend selection
							caretPos.end++;
						} else {
							// breakout loop
							i = bl;
						}
						break;
					case "deleteContentBackward":
						if (newBuffer[i] === marker) {
							caretPos.end++;
						} else {
							//breakout loop
							i = bl;
						}
						break;
					default:
						if (newBuffer[i] !== oldBuffer[i]) {
							if ((newBuffer[i + 1] === marker || newBuffer[i + 1] === placeholder || newBuffer[i + 1] === undefined) && ((oldBuffer[i] === placeholder && oldBuffer[i + 1] === marker) || oldBuffer[i] === marker)) {  //basic insert
								action = "insertText";
								data.push(newBuffer[i]);
								caretPos.begin--;
								caretPos.end--;
							} else if (oldBuffer[i + 1] === marker && oldBuffer[i] === newBuffer[i + 1]) { //insert between
								action = "insertText";
								data.push(newBuffer[i]);
								caretPos.begin--;
								caretPos.end--;
							} else if (newBuffer[i] !== placeholder && newBuffer[i] !== marker &&
								(newBuffer[i + 1] === marker || (oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1] /*single char replacement*/))) { //replace selection
								action = "insertReplacementText";
								data.push(newBuffer[i]);
								caretPos.begin--;
							} else if (newBuffer[i] === marker) {  //delete~backspace
								action = "deleteContentBackward";
								if (_positioning__WEBPACK_IMPORTED_MODULE_0__.isMask.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_0__.translatePosition.call(inputmask, i), true) || oldBuffer[i] === opts.radixPoint) caretPos.end++;
							} else {
								i = bl;
							}
						}
						break;
				}
			}

			return {
				action: action,
				data: data,
				caret: caretPos
			};
		}

		var input = this,
			inputValue = input.inputmask._valueGet(true),
			buffer = (inputmask.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask).slice().reverse() : _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask)).join(""),
			caretPos = _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, undefined, undefined, true);

		if (buffer !== inputValue) {
			// inputValue = radixPointHandler(input, inputValue, caretPos);
			inputValue = ieMobileHandler(input, inputValue, caretPos);

			var changes = analyseChanges(inputValue, buffer, caretPos);

			// console.log(JSON.stringify(changes));
			if ((input.inputmask.shadowRoot || input.ownerDocument).activeElement !== input) {
				input.focus();
			}
			(0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.writeBuffer)(input, _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask));
			_positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, caretPos.begin, caretPos.end, true);
			switch (changes.action) {
				case "insertText":
				case "insertReplacementText":
					changes.data.forEach(function (entry, ndx) {
						var keypress = new $.Event("keypress");
						keypress.which = entry.charCodeAt(0);
						inputmask.ignorable = false; //make sure ignorable is ignored ;-)
						EventHandlers.keypressEvent.call(input, keypress);
					});
					setTimeout(function () {  //#2195 trigger keyup to help some other plugins to track changes
						inputmask.$el.trigger("keyup");
					}, 0);
					break;
				case "deleteContentBackward":
					var keydown = new $.Event("keydown");
					keydown.keyCode = _keycode_json__WEBPACK_IMPORTED_MODULE_1__.BACKSPACE;
					EventHandlers.keydownEvent.call(input, keydown);
					break;
				default:
					(0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.applyInputValue)(input, inputValue);
					break;
			}

			e.preventDefault();
		}
	},
	compositionendEvent: function (e) {
		const inputmask = this.inputmask;

		inputmask.isComposing = false;
		inputmask.$el.trigger("input");
	},
	setValueEvent: function (e) {
		const inputmask = this.inputmask;
		var input = this,
			value = (e && e.detail) ? e.detail[0] : arguments[1];

		if (value === undefined) {
			value = input.inputmask._valueGet(true);
		}

		(0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.applyInputValue)(input, value);

		if ((e.detail && e.detail[1] !== undefined) || arguments[2] !== undefined) {
			_positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, e.detail ? e.detail[1] : arguments[2]);
		}
	}
	,
	focusEvent: function (e) {
		const inputmask = this.inputmask, opts = inputmask.opts;
		var input = this,
			nptValue = input.inputmask._valueGet();

		if (opts.showMaskOnFocus) {
			if (nptValue !== _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask).join("")) {
				(0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.writeBuffer)(input, _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask), _positioning__WEBPACK_IMPORTED_MODULE_0__.seekNext.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_0__.getLastValidPosition.call(inputmask)));
			} /*else if (mouseEnter === false) { //only executed on focus without mouseenter
					caret(input, seekNext(getLastValidPosition()));
				}*/
		}
		if (opts.positionCaretOnTab === true && inputmask.mouseEnter === false && (!_validation__WEBPACK_IMPORTED_MODULE_3__.isComplete.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask)) || _positioning__WEBPACK_IMPORTED_MODULE_0__.getLastValidPosition.call(inputmask) === -1)) {
			EventHandlers.clickEvent.apply(input, [e, true]);
		}
		inputmask.undoValue = inputmask._valueGet(true);
	},
	invalidEvent: function (e) {
		this.inputmask.validationEvent = true;
	},
	mouseleaveEvent: function () {
		const inputmask = this.inputmask, opts = inputmask.opts;

		var input = this;
		inputmask.mouseEnter = false;
		if (opts.clearMaskOnLostFocus && (input.inputmask.shadowRoot || input.ownerDocument).activeElement !== input) {
			(0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.HandleNativePlaceholder)(input, inputmask.originalPlaceholder);
		}
	},
	clickEvent: function (e, tabbed) {
		const inputmask = this.inputmask;

		var input = this;
		if ((input.inputmask.shadowRoot || input.ownerDocument).activeElement === input) {
			var newCaretPosition = _positioning__WEBPACK_IMPORTED_MODULE_0__.determineNewCaretPosition.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input), tabbed);
			if (newCaretPosition !== undefined) {
				_positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, newCaretPosition);
			}
		}
	},
	cutEvent: function (e) {
		const inputmask = this.inputmask, maskset = inputmask.maskset;

		var input = this,
			pos = _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input);

		//correct clipboardData
		var clipboardData = window.clipboardData || e.clipboardData,
			clipData = inputmask.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask).slice(pos.end, pos.begin) : _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask).slice(pos.begin, pos.end);
		clipboardData.setData("text", inputmask.isRTL ? clipData.reverse().join("") : clipData.join(""));
		if (document.execCommand) document.execCommand("copy"); // copy selected content to system clipbaord

		_validation__WEBPACK_IMPORTED_MODULE_3__.handleRemove.call(inputmask, input, _keycode_json__WEBPACK_IMPORTED_MODULE_1__.DELETE, pos);
		(0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.writeBuffer)(input, _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask), maskset.p, e, inputmask.undoValue !== inputmask._valueGet(true));
	}
	,
	blurEvent: function (e) {
		const inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib;

		var $input = $(this),
			input = this;
		if (input.inputmask) {
			(0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.HandleNativePlaceholder)(input, inputmask.originalPlaceholder);
			var nptValue = input.inputmask._valueGet(),
				buffer = _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask).slice();

			if (nptValue !== "") {
				if (opts.clearMaskOnLostFocus) {
					if (_positioning__WEBPACK_IMPORTED_MODULE_0__.getLastValidPosition.call(inputmask) === -1 && nptValue === _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask).join("")) {
						buffer = [];
					} else { //clearout optional tail of the mask
						_inputHandling__WEBPACK_IMPORTED_MODULE_4__.clearOptionalTail.call(inputmask, buffer);
					}
				}
				if (_validation__WEBPACK_IMPORTED_MODULE_3__.isComplete.call(inputmask, buffer) === false) {
					setTimeout(function () {
						$input.trigger("incomplete");
					}, 0);
					if (opts.clearIncomplete) {
						_positioning__WEBPACK_IMPORTED_MODULE_0__.resetMaskSet.call(inputmask);
						if (opts.clearMaskOnLostFocus) {
							buffer = [];
						} else {
							buffer = _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask).slice();
						}

					}
				}

				(0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.writeBuffer)(input, buffer, undefined, e);
			}

			if (inputmask.undoValue !== inputmask._valueGet(true)) {
				inputmask.undoValue = inputmask._valueGet(true);
				$input.trigger("change");
			}
		}
	}
	,
	mouseenterEvent: function () {
		const inputmask = this.inputmask, opts = inputmask.opts;

		var input = this;
		inputmask.mouseEnter = true;
		if ((input.inputmask.shadowRoot || input.ownerDocument).activeElement !== input) {
			var bufferTemplate = (inputmask.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask).slice().reverse() : _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask)).join("");
			if (inputmask.placeholder !== bufferTemplate && input.placeholder !== inputmask.originalPlaceholder) {
				inputmask.originalPlaceholder = input.placeholder;
			}
			if (opts.showMaskOnHover) {
				(0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.HandleNativePlaceholder)(input, bufferTemplate);
			}
		}
	}
	,
	submitEvent: function () { //trigger change on submit if any
		const inputmask = this.inputmask, opts = inputmask.opts;

		if (inputmask.undoValue !== inputmask._valueGet(true)) {
			inputmask.$el.trigger("change");
		}
		if (opts.clearMaskOnLostFocus && _positioning__WEBPACK_IMPORTED_MODULE_0__.getLastValidPosition.call(inputmask) === -1 && inputmask._valueGet && inputmask._valueGet() === _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask).join("")) {
			inputmask._valueSet(""); //clear masktemplete on submit and still has focus
		}
		if (opts.clearIncomplete && _validation__WEBPACK_IMPORTED_MODULE_3__.isComplete.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask)) === false) {
			inputmask._valueSet("");
		}
		if (opts.removeMaskOnSubmit) {
			inputmask._valueSet(inputmask.unmaskedvalue(), true);
			setTimeout(function () {
				(0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.writeBuffer)(inputmask.el, _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask));
			}, 0);
		}
	},
	resetEvent: function () {
		const inputmask = this.inputmask;

		inputmask.refreshValue = true; //indicate a forced refresh when there is a call to the value before leaving the triggering event fn
		setTimeout(function () {
			(0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.applyInputValue)(inputmask.el, inputmask._valueGet(true));
		}, 0);
	}
};


/***/ }),

/***/ "./node_modules/inputmask/lib/eventruler.js":
/*!**************************************************!*\
  !*** ./node_modules/inputmask/lib/eventruler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventRuler": () => (/* binding */ EventRuler)
/* harmony export */ });
/* harmony import */ var _inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputmask */ "./node_modules/inputmask/lib/inputmask.js");
/* harmony import */ var _keycode_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keycode.json */ "./node_modules/inputmask/lib/keycode.json");
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positioning */ "./node_modules/inputmask/lib/positioning.js");
/* harmony import */ var _inputHandling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputHandling */ "./node_modules/inputmask/lib/inputHandling.js");







var EventRuler = {
	on: function (input, eventName, eventHandler) {
		const $ = input.inputmask.dependencyLib;

		var ev = function (e) {
			if (e.originalEvent) {
				e = e.originalEvent || e; //get original event from jquery evenbt
				arguments[0] = e;
			}
			// console.log(e.type);
			var that = this, args, inputmask = that.inputmask, opts = inputmask ? inputmask.opts : undefined;
			if (inputmask === undefined && this.nodeName !== "FORM") { //happens when cloning an object with jquery.clone
				var imOpts = $.data(that, "_inputmask_opts");
				$(that).off(); //unbind all events
				if (imOpts) {
					(new _inputmask__WEBPACK_IMPORTED_MODULE_0__.default(imOpts)).mask(that);
				}
			} else if (!["submit", "reset", "setvalue"].includes(e.type) && this.nodeName !== "FORM" && (that.disabled || (that.readOnly && !(e.type === "keydown" && (e.ctrlKey && e.keyCode === 67) || (opts.tabThrough === false && e.keyCode === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.TAB))))) {
				e.preventDefault();
			} else {
				switch (e.type) {
					case "input":
						if (inputmask.skipInputEvent === true || (e.inputType && e.inputType === "insertCompositionText")) {
							inputmask.skipInputEvent = false;
							return e.preventDefault();
						}

						// if (mobile) { //this causes problem see #2220
						// 	args = arguments;
						// 	setTimeout(function () { //needed for caret selection when entering a char on Android 8 - #1818
						// 		eventHandler.apply(that, args);
						// 		caret(that, that.inputmask.caretPos, undefined, true);
						// 	}, 0);
						// 	return false;
						// }
						break;
					case "keydown":
						//Safari 5.1.x - modal dialog fires keypress twice workaround
						inputmask.skipKeyPressEvent = false;
						inputmask.skipInputEvent = inputmask.isComposing = e.keyCode === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.KEY_229;
						break;
					case "keyup":
					case "compositionend":
						if (inputmask.isComposing) {
							inputmask.skipInputEvent = false;
						}
						break;
					case "keypress":
						if (inputmask.skipKeyPressEvent === true) {
							return e.preventDefault();
						}
						inputmask.skipKeyPressEvent = true;
						break;
					case "click":
					case "focus":
						if (inputmask.validationEvent) { // #841
							inputmask.validationEvent = false;
							input.blur();
							(0,_inputHandling__WEBPACK_IMPORTED_MODULE_3__.HandleNativePlaceholder)(input, (inputmask.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_2__.getBufferTemplate.call(inputmask).slice().reverse() : _positioning__WEBPACK_IMPORTED_MODULE_2__.getBufferTemplate.call(inputmask)).join(""));
							setTimeout(function () {
								input.focus();
							}, opts.validationEventTimeOut);
							return false;
						}
						args = arguments;
						setTimeout(function () { //needed for Chrome ~ initial selection clears after the clickevent
							if (!input.inputmask) {
								// `inputmask.remove()` was called before this callback
								return;
							}
							eventHandler.apply(that, args);
						}, 0);
						return false;
				}
				var returnVal = eventHandler.apply(that, arguments);
				if (returnVal === false) {
					e.preventDefault();
					e.stopPropagation();
				}
				return returnVal;
			}
		};
		if (["submit", "reset"].includes(eventName)) {
			ev = ev.bind(input); //bind creates a new eventhandler (wrap)
			if (input.form !== null) $(input.form).on(eventName, ev);
		} else {
			$(input).on(eventName, ev);
		}

		//keep instance of the event
		input.inputmask.events[eventName] = input.inputmask.events[eventName] || [];
		input.inputmask.events[eventName].push(ev);

	},
	off: function (input, event) {
		if (input.inputmask && input.inputmask.events) {
			const $ = input.inputmask.dependencyLib;
			let events = input.inputmask.events;
			if (event) {
				events = [];
				events[event] = input.inputmask.events[event];
			}
			for (let eventName in events) {
				let evArr = events[eventName];
				while (evArr.length > 0) {
					let ev = evArr.pop();
					if (["submit", "reset",].includes(eventName)) {
						if (input.form !== null) $(input.form).off(eventName, ev);
					} else {
						$(input).off(eventName, ev);
					}
				}
				delete input.inputmask.events[eventName];
			}
		}
	}
};

/***/ }),

/***/ "./node_modules/inputmask/lib/global/window.js":
/*!*****************************************************!*\
  !*** ./node_modules/inputmask/lib/global/window.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canUseDOM */ "./node_modules/inputmask/lib/canUseDOM.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_canUseDOM__WEBPACK_IMPORTED_MODULE_0__.default ? window : {});


/***/ }),

/***/ "./node_modules/inputmask/lib/inputHandling.js":
/*!*****************************************************!*\
  !*** ./node_modules/inputmask/lib/inputHandling.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyInputValue": () => (/* binding */ applyInputValue),
/* harmony export */   "clearOptionalTail": () => (/* binding */ clearOptionalTail),
/* harmony export */   "checkVal": () => (/* binding */ checkVal),
/* harmony export */   "HandleNativePlaceholder": () => (/* binding */ HandleNativePlaceholder),
/* harmony export */   "unmaskedvalue": () => (/* binding */ unmaskedvalue),
/* harmony export */   "writeBuffer": () => (/* binding */ writeBuffer)
/* harmony export */ });
/* harmony import */ var _keycode_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keycode.json */ "./node_modules/inputmask/lib/keycode.json");
/* harmony import */ var _validation_tests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation-tests */ "./node_modules/inputmask/lib/validation-tests.js");
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positioning */ "./node_modules/inputmask/lib/positioning.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ "./node_modules/inputmask/lib/validation.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environment */ "./node_modules/inputmask/lib/environment.js");
/* harmony import */ var _eventhandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventhandlers */ "./node_modules/inputmask/lib/eventhandlers.js");










function applyInputValue(input, value) {
	const inputmask = input ? input.inputmask : this, opts = inputmask.opts;

	input.inputmask.refreshValue = false;
	if (typeof opts.onBeforeMask === "function") value = opts.onBeforeMask.call(inputmask, value, opts) || value;
	value = value.toString().split("");
	checkVal(input, true, false, value);
	inputmask.undoValue = inputmask._valueGet(true);
	if ((opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === _positioning__WEBPACK_IMPORTED_MODULE_2__.getBufferTemplate.call(inputmask).join("") && _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask) === -1) {
		input.inputmask._valueSet("");
	}
}

//todo put on prototype?
function clearOptionalTail(buffer) {
	const inputmask = this;

	buffer.length = 0;
	var template = _validation_tests__WEBPACK_IMPORTED_MODULE_1__.getMaskTemplate.call(inputmask, true, 0, true, undefined, true), lmnt;
	while ((lmnt = template.shift()) !== undefined) buffer.push(lmnt);
	return buffer;
}

function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
	const inputmask = input ? input.inputmask : this,
		maskset = inputmask.maskset,
		opts = inputmask.opts, $ = inputmask.dependencyLib;

	var inputValue = nptvl.slice(),
		charCodes = "",
		initialNdx = -1,
		result = undefined, skipOptionalPartCharacter = opts.skipOptionalPartCharacter;
	opts.skipOptionalPartCharacter = ""; //see issue #2311

	function isTemplateMatch(ndx, charCodes) {
		var targetTemplate = _validation_tests__WEBPACK_IMPORTED_MODULE_1__.getMaskTemplate.call(inputmask, true, 0).slice(ndx, _positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, ndx, false, false)).join("").replace(/'/g, ""),
			charCodeNdx = targetTemplate.indexOf(charCodes);
		//strip spaces from targetTemplate
		while (charCodeNdx > 0 && targetTemplate[charCodeNdx - 1] === " ") charCodeNdx--;

		var match = charCodeNdx === 0 && !_positioning__WEBPACK_IMPORTED_MODULE_2__.isMask.call(inputmask, ndx)
			&& (_validation_tests__WEBPACK_IMPORTED_MODULE_1__.getTest.call(inputmask, ndx).match.nativeDef === charCodes.charAt(0)
				|| (_validation_tests__WEBPACK_IMPORTED_MODULE_1__.getTest.call(inputmask, ndx).match.static === true && _validation_tests__WEBPACK_IMPORTED_MODULE_1__.getTest.call(inputmask, ndx).match.nativeDef === ("'" + charCodes.charAt(0)))
				|| (_validation_tests__WEBPACK_IMPORTED_MODULE_1__.getTest.call(inputmask, ndx).match.nativeDef === " " && (_validation_tests__WEBPACK_IMPORTED_MODULE_1__.getTest.call(inputmask, ndx + 1).match.nativeDef === charCodes.charAt(0)
					|| (_validation_tests__WEBPACK_IMPORTED_MODULE_1__.getTest.call(inputmask, ndx + 1).match.static === true && _validation_tests__WEBPACK_IMPORTED_MODULE_1__.getTest.call(inputmask, ndx + 1).match.nativeDef === ("'" + charCodes.charAt(0))))));

		if (!match && charCodeNdx > 0 && !_positioning__WEBPACK_IMPORTED_MODULE_2__.isMask.call(inputmask, ndx, false, true)) {
			var nextPos = _positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, ndx);
			if (inputmask.caretPos.begin < nextPos) {
				inputmask.caretPos = {begin: nextPos};
			}
		}
		return match;
	}

	_positioning__WEBPACK_IMPORTED_MODULE_2__.resetMaskSet.call(inputmask);
	maskset.tests = {}; //reset tests ~ possible after alternating
	initialNdx = opts.radixPoint ? _positioning__WEBPACK_IMPORTED_MODULE_2__.determineNewCaretPosition.call(inputmask, {
		begin: 0,
		end: 0
	}, false, opts.__financeInput === false ? "radixFocus" : undefined).begin : 0;
	maskset.p = initialNdx;
	inputmask.caretPos = {begin: initialNdx};

	var staticMatches = [], prevCaretPos = inputmask.caretPos;
	inputValue.forEach(function (charCode, ndx) {
		if (charCode !== undefined) { //inputfallback strips some elements out of the inputarray.  $.each logically presents them as undefined
			/*if (maskset.validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder.call(inputmask, ndx) && isMask.call(inputmask, ndx, true) &&
				isValid.call(inputmask, ndx, inputValue[ndx], true, undefined, true, true) === false) {
				inputmask.caretPos.begin++;
			} else*/
			{
				var keypress = new $.Event("_checkval");
				keypress.which = charCode.toString().charCodeAt(0);
				charCodes += charCode;
				var lvp = _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask, undefined, true);
				if (!isTemplateMatch(initialNdx, charCodes)) {
					result = _eventhandlers__WEBPACK_IMPORTED_MODULE_5__.EventHandlers.keypressEvent.call(inputmask, keypress, true, false, strict, inputmask.caretPos.begin);

					if (result) {
						initialNdx = inputmask.caretPos.begin + 1;
						charCodes = "";
					}
				} else {
					result = _eventhandlers__WEBPACK_IMPORTED_MODULE_5__.EventHandlers.keypressEvent.call(inputmask, keypress, true, false, strict, lvp + 1);
				}
				if (result) {
					if (result.pos !== undefined && maskset.validPositions[result.pos] && maskset.validPositions[result.pos].match.static === true && maskset.validPositions[result.pos].alternation === undefined) {
						staticMatches.push(result.pos);
						if (!inputmask.isRTL) {
							result.forwardPosition = result.pos + 1;
						}
					}
					writeBuffer.call(inputmask, undefined, _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask), result.forwardPosition, keypress, false);
					inputmask.caretPos = {begin: result.forwardPosition, end: result.forwardPosition};
					prevCaretPos = inputmask.caretPos;
				} else {
					if (maskset.validPositions[ndx] === undefined && inputValue[ndx] === _validation_tests__WEBPACK_IMPORTED_MODULE_1__.getPlaceholder.call(inputmask, ndx) && _positioning__WEBPACK_IMPORTED_MODULE_2__.isMask.call(inputmask, ndx, true)) {
						inputmask.caretPos.begin++;
					} else inputmask.caretPos = prevCaretPos; //restore the caret position from before the failed validation
				}
			}
		}
	});
	if (staticMatches.length > 0) {
		var sndx, validPos, nextValid = _positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, -1, undefined, false);
		if ((!_validation__WEBPACK_IMPORTED_MODULE_3__.isComplete.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask)) && staticMatches.length <= nextValid)
			|| (_validation__WEBPACK_IMPORTED_MODULE_3__.isComplete.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask)) && staticMatches.length > 0 && (staticMatches.length !== nextValid && staticMatches[0] === 0))) { //should check if is sequence starting from 0
			var nextSndx = nextValid;
			while ((sndx = staticMatches.shift()) !== undefined) {
				var keypress = new $.Event("_checkval");
				validPos = maskset.validPositions[sndx];
				validPos.generatedInput = true;
				keypress.which = validPos.input.charCodeAt(0);
				result = _eventhandlers__WEBPACK_IMPORTED_MODULE_5__.EventHandlers.keypressEvent.call(inputmask, keypress, true, false, strict, nextSndx);
				if (result && result.pos !== undefined && result.pos !== sndx && maskset.validPositions[result.pos] && maskset.validPositions[result.pos].match.static === true) {
					staticMatches.push(result.pos);
				} else if (!result) break;
				nextSndx++;
			}
		} else { //mark al statics as generated
			// while ((sndx = staticMatches.pop())) {
			// 	validPos = maskset.validPositions[sndx];
			// 	if (validPos) {
			// 		validPos.generatedInput = true;
			// 	}
			// }
		}
	}
	if (writeOut) {
		writeBuffer.call(inputmask, input, _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask), result ? result.forwardPosition : inputmask.caretPos.begin, initiatingEvent || new $.Event("checkval"), initiatingEvent && initiatingEvent.type === "input" && inputmask.undoValue !== inputmask._valueGet(true));
		// for (var vndx in maskset.validPositions) {
		// 	if (maskset.validPositions[vndx].match.generated !== true) { //only remove non forced generated
		// 		delete maskset.validPositions[vndx].generatedInput; //clear generated markings ~ consider initializing with a  value as fully typed
		// 	}
		// }
	}
	opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
}

function HandleNativePlaceholder(npt, value) {
	const inputmask = npt ? npt.inputmask : this;

	if (_environment__WEBPACK_IMPORTED_MODULE_4__.ie) {
		if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || npt.placeholder === "")) {
			var buffer = _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask).slice(),
				nptValue = npt.inputmask._valueGet();
			if (nptValue !== value) {
				var lvp = _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask);
				if (lvp === -1 && nptValue === _positioning__WEBPACK_IMPORTED_MODULE_2__.getBufferTemplate.call(inputmask).join("")) {
					buffer = [];
				} else if (lvp !== -1) { //clearout optional tail of the mask
					clearOptionalTail.call(inputmask, buffer);
				}
				writeBuffer(npt, buffer);
			}
		}
	} else if (npt.placeholder !== value) {
		npt.placeholder = value;
		if (npt.placeholder === "") npt.removeAttribute("placeholder");
	}
}

function unmaskedvalue(input) {
	const inputmask = input ? input.inputmask : this,
		opts = inputmask.opts,
		maskset = inputmask.maskset;

	if (input) {
		if (input.inputmask === undefined) {
			return input.value;
		}
		if (input.inputmask && input.inputmask.refreshValue) { //forced refresh from the value form.reset
			applyInputValue(input, input.inputmask._valueGet(true));
		}
	}
	var umValue = [],
		vps = maskset.validPositions;
	for (var pndx in vps) {
		if (vps[pndx] && vps[pndx].match && (vps[pndx].match.static != true || (Array.isArray(maskset.metadata) && vps[pndx].generatedInput !== true))) {
			//only include generated input with multiple masks (check on metadata)
			umValue.push(vps[pndx].input);
		}
	}
	var unmaskedValue = umValue.length === 0 ? "" : (inputmask.isRTL ? umValue.reverse() : umValue).join("");
	if (typeof opts.onUnMask === "function") {
		var bufferValue = (inputmask.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask).slice().reverse() : _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask)).join("");
		unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
	}
	return unmaskedValue;
}

function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
	const inputmask = input ? input.inputmask : this,
		opts = inputmask.opts,
		$ = inputmask.dependencyLib;

	if (event && typeof opts.onBeforeWrite === "function") {
		//    buffer = buffer.slice(); //prevent uncontrolled manipulation of the internal buffer
		var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
		if (result) {
			if (result.refreshFromBuffer) {
				var refresh = result.refreshFromBuffer;
				_validation__WEBPACK_IMPORTED_MODULE_3__.refreshFromBuffer.call(inputmask, refresh === true ? refresh : refresh.start, refresh.end, result.buffer || buffer);
				buffer = _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask, true);
			}
			if (caretPos !== undefined) caretPos = result.caret !== undefined ? result.caret : caretPos;
		}
	}
	if (input !== undefined) {
		input.inputmask._valueSet(buffer.join(""));
		if (caretPos !== undefined && (event === undefined || event.type !== "blur")) {
			// console.log(caretPos);
			_positioning__WEBPACK_IMPORTED_MODULE_2__.caret.call(inputmask, input, caretPos, undefined, undefined, (event !== undefined && event.type === "keydown" && (event.keyCode === _keycode_json__WEBPACK_IMPORTED_MODULE_0__.DELETE || event.keyCode === _keycode_json__WEBPACK_IMPORTED_MODULE_0__.BACKSPACE)));
		}
		if (triggerEvents === true) {
			var $input = $(input), nptVal = input.inputmask._valueGet();
			input.inputmask.skipInputEvent = true;
			$input.trigger("input");
			setTimeout(function () { //timeout needed for IE
				if (nptVal === _positioning__WEBPACK_IMPORTED_MODULE_2__.getBufferTemplate.call(inputmask).join("")) {
					$input.trigger("cleared");
				} else if (_validation__WEBPACK_IMPORTED_MODULE_3__.isComplete.call(inputmask, buffer) === true) {
					$input.trigger("complete");
				}
			}, 0);
		}
	}
}


/***/ }),

/***/ "./node_modules/inputmask/lib/inputmask.js":
/*!*************************************************!*\
  !*** ./node_modules/inputmask/lib/inputmask.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _polyfills_Object_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills/Object.getPrototypeOf */ "./node_modules/inputmask/lib/polyfills/Object.getPrototypeOf.js");
/* harmony import */ var _polyfills_Object_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills_Object_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _polyfills_Array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills/Array.includes */ "./node_modules/inputmask/lib/polyfills/Array.includes.js");
/* harmony import */ var _polyfills_Array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polyfills_Array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mask */ "./node_modules/inputmask/lib/mask.js");
/* harmony import */ var _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dependencyLibs/inputmask.dependencyLib */ "./node_modules/inputmask/lib/dependencyLibs/inputmask.dependencyLib.js");
/* harmony import */ var _global_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/window */ "./node_modules/inputmask/lib/global/window.js");
/* harmony import */ var _mask_lexer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mask-lexer */ "./node_modules/inputmask/lib/mask-lexer.js");
/* harmony import */ var _validation_tests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validation-tests */ "./node_modules/inputmask/lib/validation-tests.js");
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./positioning */ "./node_modules/inputmask/lib/positioning.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validation */ "./node_modules/inputmask/lib/validation.js");
/* harmony import */ var _inputHandling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inputHandling */ "./node_modules/inputmask/lib/inputHandling.js");
/* harmony import */ var _eventruler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./eventruler */ "./node_modules/inputmask/lib/eventruler.js");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./definitions */ "./node_modules/inputmask/lib/definitions.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./defaults */ "./node_modules/inputmask/lib/defaults.js");
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./canUseDOM */ "./node_modules/inputmask/lib/canUseDOM.js");
/*
 * Input Mask Core
 * http://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) Robin Herbots
 * Licensed under the MIT license
 */
















const document = _global_window__WEBPACK_IMPORTED_MODULE_4__.default.document, dataKey = "_inputmask_opts";

function Inputmask(alias, options, internal) {
	if (!_canUseDOM__WEBPACK_IMPORTED_MODULE_13__.default) {
		return;
	}
	
	//allow instanciating without new
	if (!(this instanceof Inputmask)) {
		return new Inputmask(alias, options, internal);
	}

	this.dependencyLib = _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default;
	this.el = undefined;
	this.events = {};
	this.maskset = undefined;

	if (internal !== true) {
		//init options
		if (Object.prototype.toString.call(alias) === "[object Object]") {
			options = alias;
		} else {
			options = options || {};
			if (alias) options.alias = alias;
		}
		this.opts = _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default.extend(true, {}, this.defaults, options);
		this.noMasksCache = options && options.definitions !== undefined;
		this.userOptions = options || {}; //user passed options
		resolveAlias(this.opts.alias, options, this.opts);
	}

	//maskscope properties
	this.refreshValue = false; //indicate a refresh from the inputvalue is needed (form.reset)
	this.undoValue = undefined;
	this.$el = undefined;
	this.skipKeyPressEvent = false; //Safari 5.1.x - modal dialog fires keypress twice workaround
	this.skipInputEvent = false; //skip when triggered from within inputmask
	this.validationEvent = false;
	this.ignorable = false;
	this.maxLength;
	this.mouseEnter = false;
	this.originalPlaceholder = undefined; //needed for FF
	this.isComposing = false; //keydowncode == 229  compositionevent fallback
}

Inputmask.prototype = {
	dataAttribute: "data-inputmask", //data attribute prefix used for attribute binding
	//options default
	defaults: _defaults__WEBPACK_IMPORTED_MODULE_12__.default,
	definitions: _definitions__WEBPACK_IMPORTED_MODULE_11__.default,
	aliases: {}, //aliases definitions
	masksCache: {},
	get isRTL() {
		return this.opts.isRTL || this.opts.numericInput;
	},
	mask: function (elems) {
		var that = this;
		if (typeof elems === "string") {
			elems = document.getElementById(elems) || document.querySelectorAll(elems);
		}
		elems = elems.nodeName ? [elems] : (Array.isArray(elems) ? elems : Array.from(elems));
		elems.forEach(function (el, ndx) {
			var scopedOpts = _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default.extend(true, {}, that.opts);
			if (importAttributeOptions(el, scopedOpts, _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default.extend(true, {}, that.userOptions), that.dataAttribute)) {
				var maskset = (0,_mask_lexer__WEBPACK_IMPORTED_MODULE_5__.generateMaskSet)(scopedOpts, that.noMasksCache);
				if (maskset !== undefined) {
					if (el.inputmask !== undefined) {
						el.inputmask.opts.autoUnmask = true; //force autounmasking when remasking
						el.inputmask.remove();
					}
					//store inputmask instance on the input with element reference
					el.inputmask = new Inputmask(undefined, undefined, true);
					el.inputmask.opts = scopedOpts;
					el.inputmask.noMasksCache = that.noMasksCache;
					el.inputmask.userOptions = _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default.extend(true, {}, that.userOptions);
					// el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput;
					el.inputmask.el = el;
					el.inputmask.$el = (0,_dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default)(el);
					el.inputmask.maskset = maskset;

					_dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default.data(el, dataKey, that.userOptions);
					_mask__WEBPACK_IMPORTED_MODULE_2__.mask.call(el.inputmask);
				}
			}
		});
		return elems && elems[0] ? (elems[0].inputmask || this) : this;
	},
	option: function (options, noremask) { //set extra options || retrieve value of a current option
		if (typeof options === "string") {
			return this.opts[options];
		} else if (typeof options === "object") {
			_dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default.extend(this.userOptions, options); //user passed options
			//remask
			if (this.el && noremask !== true) {
				this.mask(this.el);
			}
			return this;
		}
	},
	unmaskedvalue: function (value) {
		this.maskset = this.maskset || (0,_mask_lexer__WEBPACK_IMPORTED_MODULE_5__.generateMaskSet)(this.opts, this.noMasksCache);
		if (this.el === undefined || value !== undefined) {
			var valueBuffer = (typeof this.opts.onBeforeMask === "function" ? (this.opts.onBeforeMask.call(this, value, this.opts) || value) : value).split("");
			_inputHandling__WEBPACK_IMPORTED_MODULE_9__.checkVal.call(this, undefined, false, false, valueBuffer);
			if (typeof this.opts.onBeforeWrite === "function") this.opts.onBeforeWrite.call(this, undefined, _positioning__WEBPACK_IMPORTED_MODULE_7__.getBuffer.call(this), 0, this.opts);
		}
		return _inputHandling__WEBPACK_IMPORTED_MODULE_9__.unmaskedvalue.call(this, this.el);
	},
	remove: function () {
		if (this.el) {
			_dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default.data(this.el, dataKey, null); //invalidate
			//writeout the value
			var cv = this.opts.autoUnmask ? (0,_inputHandling__WEBPACK_IMPORTED_MODULE_9__.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
			if (cv !== _positioning__WEBPACK_IMPORTED_MODULE_7__.getBufferTemplate.call(this).join("")) this._valueSet(cv, this.opts.autoUnmask); else this._valueSet("");
			//unbind all events
			_eventruler__WEBPACK_IMPORTED_MODULE_10__.EventRuler.off(this.el);

			//restore the value property
			var valueProperty;
			if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
				valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value");
				if (valueProperty) {
					if (this.__valueGet) {
						Object.defineProperty(this.el, "value", {
							get: this.__valueGet,
							set: this.__valueSet,
							configurable: true
						});
					}
				}
			} else if (document.__lookupGetter__ && this.el.__lookupGetter__("value")) {
				if (this.__valueGet) {
					this.el.__defineGetter__("value", this.__valueGet);
					this.el.__defineSetter__("value", this.__valueSet);
				}
			}
			//clear data
			this.el.inputmask = undefined;
		}
		return this.el;
	},
	getemptymask: function () { //return the default (empty) mask value, usefull for setting the default value in validation
		this.maskset = this.maskset || (0,_mask_lexer__WEBPACK_IMPORTED_MODULE_5__.generateMaskSet)(this.opts, this.noMasksCache);
		return _positioning__WEBPACK_IMPORTED_MODULE_7__.getBufferTemplate.call(this).join("");
	},
	hasMaskedValue: function () { //check wheter the returned value is masked or not; currently only works reliable when using jquery.val fn to retrieve the value
		return !this.opts.autoUnmask;
	},
	isComplete: function () {
		this.maskset = this.maskset || (0,_mask_lexer__WEBPACK_IMPORTED_MODULE_5__.generateMaskSet)(this.opts, this.noMasksCache);
		return _validation__WEBPACK_IMPORTED_MODULE_8__.isComplete.call(this, _positioning__WEBPACK_IMPORTED_MODULE_7__.getBuffer.call(this));
	},
	getmetadata: function () { //return mask metadata if exists
		this.maskset = this.maskset || (0,_mask_lexer__WEBPACK_IMPORTED_MODULE_5__.generateMaskSet)(this.opts, this.noMasksCache);
		if (Array.isArray(this.maskset.metadata)) {
			var maskTarget = _validation_tests__WEBPACK_IMPORTED_MODULE_6__.getMaskTemplate.call(this, true, 0, false).join("");
			this.maskset.metadata.forEach(function (mtdt) {
				if (mtdt.mask === maskTarget) {
					maskTarget = mtdt;
					return false;
				}

				return true;
			});
			return maskTarget;
		}
		return this.maskset.metadata;
	},
	isValid: function (value) {
		this.maskset = this.maskset || (0,_mask_lexer__WEBPACK_IMPORTED_MODULE_5__.generateMaskSet)(this.opts, this.noMasksCache);
		if (value) {
			var valueBuffer = (typeof this.opts.onBeforeMask === "function" ? (this.opts.onBeforeMask.call(this, value, this.opts) || value) : value).split("");
			_inputHandling__WEBPACK_IMPORTED_MODULE_9__.checkVal.call(this, undefined, true, false, valueBuffer);
		} else {
			value = this.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_7__.getBuffer.call(this).slice().reverse().join("") : _positioning__WEBPACK_IMPORTED_MODULE_7__.getBuffer.call(this).join("");
		}
		var buffer = _positioning__WEBPACK_IMPORTED_MODULE_7__.getBuffer.call(this);
		var rl = _positioning__WEBPACK_IMPORTED_MODULE_7__.determineLastRequiredPosition.call(this),
			lmib = buffer.length - 1;
		for (; lmib > rl; lmib--) {
			if (_positioning__WEBPACK_IMPORTED_MODULE_7__.isMask.call(this, lmib)) break;
		}
		buffer.splice(rl, lmib + 1 - rl);

		return _validation__WEBPACK_IMPORTED_MODULE_8__.isComplete.call(this, buffer) && value === (this.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_7__.getBuffer.call(this).slice().reverse().join("") : _positioning__WEBPACK_IMPORTED_MODULE_7__.getBuffer.call(this).join(""));

	},
	format: function (value, metadata) {
		this.maskset = this.maskset || (0,_mask_lexer__WEBPACK_IMPORTED_MODULE_5__.generateMaskSet)(this.opts, this.noMasksCache);
		let valueBuffer = (typeof this.opts.onBeforeMask === "function" ? (this.opts.onBeforeMask.call(this, value, this.opts) || value) : value).split("");
		_inputHandling__WEBPACK_IMPORTED_MODULE_9__.checkVal.call(this, undefined, true, false, valueBuffer);
		let formattedValue = this.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_7__.getBuffer.call(this).slice().reverse().join("") : _positioning__WEBPACK_IMPORTED_MODULE_7__.getBuffer.call(this).join("");
		return metadata ? {
			value: formattedValue,
			metadata: this.getmetadata()
		} : formattedValue;
	},
	setValue: function (value) {
		if (this.el) {
			(0,_dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default)(this.el).trigger("setvalue", [value]);
		}
	},
	analyseMask: _mask_lexer__WEBPACK_IMPORTED_MODULE_5__.analyseMask
};

function resolveAlias(aliasStr, options, opts) {
	var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
	if (aliasDefinition) {
		if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, undefined, opts); //alias is another alias
		_dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default.extend(true, opts, aliasDefinition); //merge alias definition in the options
		_dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default.extend(true, opts, options); //reapply extra given options
		return true;
	} else //alias not found - try as mask
	if (opts.mask === null) {
		opts.mask = aliasStr;
	}

	return false;
}

function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
	function importOption(option, optionData) {
		const attrOption = dataAttribute === "" ? option : dataAttribute + "-" + option;
		optionData = optionData !== undefined ? optionData : npt.getAttribute(attrOption);
		if (optionData !== null) {
			if (typeof optionData === "string") {
				if (option.indexOf("on") === 0) {
					optionData = _global_window__WEBPACK_IMPORTED_MODULE_4__.default[optionData];
				}//get function definition
				else if (optionData === "false") {
					optionData = false;
				} else if (optionData === "true") optionData = true;
			}
			userOptions[option] = optionData;
		}
	}

	if (opts.importDataAttributes === true) {
		var attrOptions = npt.getAttribute(dataAttribute), option, dataoptions, optionData, p;

		if (attrOptions && attrOptions !== "") {
			attrOptions = attrOptions.replace(/'/g, "\"");
			dataoptions = JSON.parse("{" + attrOptions + "}");
		}

		//resolve aliases
		if (dataoptions) { //pickup alias from dataAttribute
			optionData = undefined;
			for (p in dataoptions) {
				if (p.toLowerCase() === "alias") {
					optionData = dataoptions[p];
					break;
				}
			}
		}
		importOption("alias", optionData); //pickup alias from dataAttribute-alias
		if (userOptions.alias) {
			resolveAlias(userOptions.alias, userOptions, opts);
		}

		for (option in opts) {
			if (dataoptions) {
				optionData = undefined;
				for (p in dataoptions) {
					if (p.toLowerCase() === option.toLowerCase()) {
						optionData = dataoptions[p];
						break;
					}
				}
			}
			importOption(option, optionData);
		}
	}
	_dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default.extend(true, opts, userOptions);

	//handle dir=rtl
	if (npt.dir === "rtl" || opts.rightAlign) {
		npt.style.textAlign = "right";
	}

	if (npt.dir === "rtl" || opts.numericInput) {
		npt.dir = "ltr";
		npt.removeAttribute("dir");
		opts.isRTL = true;
	}

	return Object.keys(userOptions).length;
}

//apply defaults, definitions, aliases
Inputmask.extendDefaults = function (options) {
	_dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default.extend(true, Inputmask.prototype.defaults, options);
};
Inputmask.extendDefinitions = function (definition) {
	_dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default.extend(true, Inputmask.prototype.definitions, definition);
};
Inputmask.extendAliases = function (alias) {
	_dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default.extend(true, Inputmask.prototype.aliases, alias);
};
//static fn on inputmask
Inputmask.format = function (value, options, metadata) {
	return Inputmask(options).format(value, metadata);
};
Inputmask.unmask = function (value, options) {
	return Inputmask(options).unmaskedvalue(value);
};
Inputmask.isValid = function (value, options) {
	return Inputmask(options).isValid(value);
};
Inputmask.remove = function (elems) {
	if (typeof elems === "string") {
		elems = document.getElementById(elems) || document.querySelectorAll(elems);
	}
	elems = elems.nodeName ? [elems] : elems;
	elems.forEach(function (el) {
		if (el.inputmask) el.inputmask.remove();
	});
};
Inputmask.setValue = function (elems, value) {
	if (typeof elems === "string") {
		elems = document.getElementById(elems) || document.querySelectorAll(elems);
	}
	elems = elems.nodeName ? [elems] : elems;
	elems.forEach(function (el) {
		if (el.inputmask) el.inputmask.setValue(value); else (0,_dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default)(el).trigger("setvalue", [value]);
	});
};

Inputmask.dependencyLib = _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_3__.default;

//make inputmask available
_global_window__WEBPACK_IMPORTED_MODULE_4__.default.Inputmask = Inputmask;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inputmask);


/***/ }),

/***/ "./node_modules/inputmask/lib/keycode.json":
/*!*************************************************!*\
  !*** ./node_modules/inputmask/lib/keycode.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"PAUSE/BREAK":19,"KEY_229":229}');

/***/ }),

/***/ "./node_modules/inputmask/lib/mask-lexer.js":
/*!**************************************************!*\
  !*** ./node_modules/inputmask/lib/mask-lexer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateMaskSet": () => (/* binding */ generateMaskSet),
/* harmony export */   "analyseMask": () => (/* binding */ analyseMask)
/* harmony export */ });
/* harmony import */ var _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependencyLibs/inputmask.dependencyLib */ "./node_modules/inputmask/lib/dependencyLibs/inputmask.dependencyLib.js");
/* harmony import */ var _masktoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./masktoken */ "./node_modules/inputmask/lib/masktoken.js");





function generateMaskSet(opts, nocache) {
	var ms;

	function generateMask(mask, metadata, opts) {
		var regexMask = false;
		if (mask === null || mask === "") {
			regexMask = opts.regex !== null;
			if (regexMask) {
				mask = opts.regex;
				mask = mask.replace(/^(\^)(.*)(\$)$/, "$2");
			} else {
				regexMask = true;
				mask = ".*";
			}
		}
		if (mask.length === 1 && opts.greedy === false && opts.repeat !== 0) {
			opts.placeholder = "";
		} //hide placeholder with single non-greedy mask
		if (opts.repeat > 0 || opts.repeat === "*" || opts.repeat === "+") {
			var repeatStart = opts.repeat === "*" ? 0 : (opts.repeat === "+" ? 1 : opts.repeat);
			mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1];
		}

		// console.log(mask);
		var masksetDefinition, maskdefKey;
		maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;
		if (opts.keepStatic !== false) { //keepstatic modifies the output from the testdefinitions ~ so differentiate in the maskcache
			maskdefKey = "ks_" + maskdefKey;
		}

		if (Inputmask.prototype.masksCache[maskdefKey] === undefined || nocache === true) {
			masksetDefinition = {
				"mask": mask,
				"maskToken": Inputmask.prototype.analyseMask(mask, regexMask, opts),
				"validPositions": {},
				"_buffer": undefined,
				"buffer": undefined,
				"tests": {},
				"excludes": {}, //excluded alternations
				"metadata": metadata,
				"maskLength": undefined,
				"jitOffset": {}
			};
			if (nocache !== true) {
				Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition;
				masksetDefinition = _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_0__.default.extend(true, {}, Inputmask.prototype.masksCache[maskdefKey]);
			}
		} else {
			masksetDefinition = _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_0__.default.extend(true, {}, Inputmask.prototype.masksCache[maskdefKey]);
		}

		return masksetDefinition;
	}

	if (typeof opts.mask === "function") { //allow mask to be a preprocessing fn - should return a valid mask
		opts.mask = opts.mask(opts);
	}
	if (Array.isArray(opts.mask)) {
		if (opts.mask.length > 1) {
			if (opts.keepStatic === null) { //enable by default when passing multiple masks when the option is not explicitly specified
				opts.keepStatic = true;
			}
			var altMask = opts.groupmarker[0];
			(opts.isRTL ? opts.mask.reverse() : opts.mask).forEach(function (msk) {
				if (altMask.length > 1) {
					altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0];
				}
				if (msk.mask !== undefined && typeof msk.mask !== "function") {
					altMask += msk.mask;
				} else {
					altMask += msk;
				}
			});
			altMask += opts.groupmarker[1];
			// console.log(altMask);
			return generateMask(altMask, opts.mask, opts);
		} else {
			opts.mask = opts.mask.pop();
		}
	}
	if (opts.keepStatic === null) opts.keepStatic = false;
	if (opts.mask && opts.mask.mask !== undefined && typeof opts.mask.mask !== "function") {
		ms = generateMask(opts.mask.mask, opts.mask, opts);
	} else {
		ms = generateMask(opts.mask, opts.mask, opts);
	}

	return ms;
}

function analyseMask(mask, regexMask, opts) {
	const tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
		//Thx to https://github.com/slevithan/regex-colorizer for the regexTokenizer regex
		regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g;
	var escaped = false,
		currentToken = new _masktoken__WEBPACK_IMPORTED_MODULE_1__.default(),
		match,
		m,
		openenings = [],
		maskTokens = [],
		openingToken,
		currentOpeningToken,
		alternator,
		lastMatch,
		closeRegexGroup = false;

	//test definition => {fn: RegExp/function, static: true/false optionality: bool, newBlockMarker: bool, casing: null/upper/lower, def: definitionSymbol, placeholder: placeholder, mask: real maskDefinition}
	function insertTestDefinition(mtoken, element, position) {
		position = position !== undefined ? position : mtoken.matches.length;
		var prevMatch = mtoken.matches[position - 1];
		if (regexMask) {
			if (element.indexOf("[") === 0 || (escaped && /\\d|\\s|\\w]/i.test(element)) || element === ".") {
				mtoken.matches.splice(position++, 0, {
					fn: new RegExp(element, opts.casing ? "i" : ""),
					static: false,
					optionality: false,
					newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element,
					casing: null,
					def: element,
					placeholder: undefined,
					nativeDef: element
				});
			} else {
				if (escaped) element = element[element.length - 1];
				element.split("").forEach(function (lmnt, ndx) {
					prevMatch = mtoken.matches[position - 1];
					mtoken.matches.splice(position++, 0, {
						fn: /[a-z]/i.test((opts.staticDefinitionSymbol || lmnt)) ? new RegExp("[" + (opts.staticDefinitionSymbol || lmnt) + "]", opts.casing ? "i" : "") : null,
						static: true,
						optionality: false,
						newBlockMarker: prevMatch === undefined ? "master" : (prevMatch.def !== lmnt && prevMatch.static !== true),
						casing: null,
						def: opts.staticDefinitionSymbol || lmnt,
						placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,
						nativeDef: (escaped ? "'" : "") + lmnt
					});
				});
			}
			escaped = false;
		} else {
			var maskdef = (opts.definitions && opts.definitions[element]) || (opts.usePrototypeDefinitions && Inputmask.prototype.definitions[element]);
			if (maskdef && !escaped) {
				mtoken.matches.splice(position++, 0, {
					fn: maskdef.validator ? typeof maskdef.validator == "string" ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function () {
						this.test = maskdef.validator;
					} : new RegExp("."),
					static: maskdef.static || false,
					optionality: false,
					newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
					casing: maskdef.casing,
					def: maskdef.definitionSymbol || element,
					placeholder: maskdef.placeholder,
					nativeDef: element,
					generated: maskdef.generated
				});
			} else {
				mtoken.matches.splice(position++, 0, {
					fn: /[a-z]/i.test((opts.staticDefinitionSymbol || element)) ? new RegExp("[" + (opts.staticDefinitionSymbol || element) + "]", opts.casing ? "i" : "") : null,
					static: true,
					optionality: false,
					newBlockMarker: prevMatch === undefined ? "master" : (prevMatch.def !== element && prevMatch.static !== true),
					casing: null,
					def: opts.staticDefinitionSymbol || element,
					placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
					nativeDef: (escaped ? "'" : "") + element
				});
				escaped = false;
			}
		}
	}

	function verifyGroupMarker(maskToken) {
		if (maskToken && maskToken.matches) {
			maskToken.matches.forEach(function (token, ndx) {
				var nextToken = maskToken.matches[ndx + 1];
				if ((nextToken === undefined || (nextToken.matches === undefined || nextToken.isQuantifier === false)) && token && token.isGroup) { //this is not a group but a normal mask => convert
					token.isGroup = false;
					if (!regexMask) {
						insertTestDefinition(token, opts.groupmarker[0], 0);
						if (token.openGroup !== true) {
							insertTestDefinition(token, opts.groupmarker[1]);
						}
					}
				}
				verifyGroupMarker(token);
			});
		}
	}

	function defaultCase() {
		if (openenings.length > 0) {
			currentOpeningToken = openenings[openenings.length - 1];
			insertTestDefinition(currentOpeningToken, m);
			if (currentOpeningToken.isAlternator) { //handle alternator a | b case
				alternator = openenings.pop();
				for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
					if (alternator.matches[mndx].isGroup) alternator.matches[mndx].isGroup = false; //don't mark alternate groups as group
				}
				if (openenings.length > 0) {
					currentOpeningToken = openenings[openenings.length - 1];
					currentOpeningToken.matches.push(alternator);
				} else {
					currentToken.matches.push(alternator);
				}
			}
		} else {
			insertTestDefinition(currentToken, m);
		}
	}

	function reverseTokens(maskToken) {
		function reverseStatic(st) {
			if (st === opts.optionalmarker[0]) {
				st = opts.optionalmarker[1];
			} else if (st === opts.optionalmarker[1]) {
				st = opts.optionalmarker[0];
			} else if (st === opts.groupmarker[0]) {
				st = opts.groupmarker[1];
			} else if (st === opts.groupmarker[1]) st = opts.groupmarker[0];

			return st;
		}

		maskToken.matches = maskToken.matches.reverse();
		for (var match in maskToken.matches) {
			if (Object.prototype.hasOwnProperty.call(maskToken.matches, match)) {
				var intMatch = parseInt(match);
				if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) { //reposition quantifier
					var qt = maskToken.matches[match];
					maskToken.matches.splice(match, 1);
					maskToken.matches.splice(intMatch + 1, 0, qt);
				}
				if (maskToken.matches[match].matches !== undefined) {
					maskToken.matches[match] = reverseTokens(maskToken.matches[match]);
				} else {
					maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
				}
			}
		}

		return maskToken;
	}

	function groupify(matches) {
		var groupToken = new _masktoken__WEBPACK_IMPORTED_MODULE_1__.default(true);
		groupToken.openGroup = false;
		groupToken.matches = matches;
		return groupToken;
	}

	function closeGroup() {
		// Group closing
		openingToken = openenings.pop();
		openingToken.openGroup = false; //mark group as complete
		if (openingToken !== undefined) {
			if (openenings.length > 0) {
				currentOpeningToken = openenings[openenings.length - 1];
				currentOpeningToken.matches.push(openingToken);
				if (currentOpeningToken.isAlternator) { //handle alternator (a) | (b) case
					alternator = openenings.pop();
					for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
						alternator.matches[mndx].isGroup = false; //don't mark alternate groups as group
						alternator.matches[mndx].alternatorGroup = false;
					}
					if (openenings.length > 0) {
						currentOpeningToken = openenings[openenings.length - 1];
						currentOpeningToken.matches.push(alternator);
					} else {
						currentToken.matches.push(alternator);
					}
				}
			} else {
				currentToken.matches.push(openingToken);
			}
		} else {
			defaultCase();
		}
	}

	function groupQuantifier(matches) {
		var lastMatch = matches.pop();
		if (lastMatch.isQuantifier) {
			lastMatch = groupify([matches.pop(), lastMatch]);
		}
		return lastMatch;
	}

	if (regexMask) {
		opts.optionalmarker[0] = undefined;
		opts.optionalmarker[1] = undefined;
	}
	while ((match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask))) {
		m = match[0];

		if (regexMask) {
			switch (m.charAt(0)) {
				//Quantifier
				case "?":
					m = "{0,1}";
					break;
				case "+":
				case "*":
					m = "{" + m + "}";
					break;
				case "|":
					//regex mask alternator  ex: [01][0-9]|2[0-3] => ([01][0-9]|2[0-3])
					if (openenings.length === 0) { //wrap the mask in a group to form a regex alternator  ([01][0-9]|2[0-3])
						var altRegexGroup = groupify(currentToken.matches);
						altRegexGroup.openGroup = true;
						openenings.push(altRegexGroup);
						currentToken.matches = [];
						closeRegexGroup = true;
					}
					break;
			}
		}

		if (escaped) {
			defaultCase();
			continue;
		}
		switch (m.charAt(0)) {
			case "$":
			case "^":
				//ignore beginswith and endswith as in masking this makes no point
				if (!regexMask) {
					defaultCase();
				}
				break;
			case "(?=": //lookahead
				openenings.push(new _masktoken__WEBPACK_IMPORTED_MODULE_1__.default(true));
				break;
			case "(?!": //negative lookahead
				openenings.push(new _masktoken__WEBPACK_IMPORTED_MODULE_1__.default(true));
				break;
			case "(?<=": //lookbehind
				openenings.push(new _masktoken__WEBPACK_IMPORTED_MODULE_1__.default(true));
				break;
			case "(?<!": //negative lookbehind
				openenings.push(new _masktoken__WEBPACK_IMPORTED_MODULE_1__.default(true));
				break;
			case opts.escapeChar:
				escaped = true;
				if (regexMask) {
					defaultCase();
				}
				break;
			// optional closing
			case opts.optionalmarker[1]:
			case opts.groupmarker[1]:
				closeGroup();
				break;
			case opts.optionalmarker[0]:
				// optional opening
				openenings.push(new _masktoken__WEBPACK_IMPORTED_MODULE_1__.default(false, true));
				break;
			case opts.groupmarker[0]:
				// Group opening
				openenings.push(new _masktoken__WEBPACK_IMPORTED_MODULE_1__.default(true));
				break;
			case opts.quantifiermarker[0]:
				//Quantifier
				var quantifier = new _masktoken__WEBPACK_IMPORTED_MODULE_1__.default(false, false, true);

				m = m.replace(/[{}]/g, "");
				var mqj = m.split("|"),
					mq = mqj[0].split(","),
					mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
					mq1 = mq.length === 1 ? mq0 : (isNaN(mq[1]) ? mq[1] : parseInt(mq[1])),
					mqJit = isNaN(mqj[1]) ? mqj[1] : parseInt(mqj[1]);
				if (mq0 === "*" || mq0 === "+") {
					mq0 = mq1 === "*" ? 0 : 1;
				}
				quantifier.quantifier = {
					min: mq0,
					max: mq1,
					jit: mqJit
				};
				var matches = openenings.length > 0 ? openenings[openenings.length - 1].matches : currentToken.matches;
				match = matches.pop();
				if (match.isAlternator) { //handle quantifier in an alternation [0-9]{2}|[0-9]{3}
					matches.push(match); //push back alternator
					matches = match.matches; //remap target matches
					var groupToken = new _masktoken__WEBPACK_IMPORTED_MODULE_1__.default(true);
					var tmpMatch = matches.pop();
					matches.push(groupToken); //push the group
					matches = groupToken.matches;
					match = tmpMatch;
				}
				if (!match.isGroup) {
					// if (regexMask && match.fn === null) { //why is this needed???
					//     if (match.def === ".") match.fn = new RegExp(match.def, opts.casing ? "i" : "");
					// }

					match = groupify([match]);
				}
				matches.push(match);
				matches.push(quantifier);

				break;
			case opts.alternatormarker:


				if (openenings.length > 0) {
					currentOpeningToken = openenings[openenings.length - 1];
					var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
					if (currentOpeningToken.openGroup && //regexp alt syntax
						(subToken.matches === undefined || (subToken.isGroup === false && subToken.isAlternator === false))) { //alternations within group
						lastMatch = openenings.pop();
					} else {
						lastMatch = groupQuantifier(currentOpeningToken.matches);
					}
				} else {
					lastMatch = groupQuantifier(currentToken.matches);
				}
				if (lastMatch.isAlternator) {
					openenings.push(lastMatch);
				} else {
					if (lastMatch.alternatorGroup) {
						alternator = openenings.pop();
						lastMatch.alternatorGroup = false;
					} else {
						alternator = new _masktoken__WEBPACK_IMPORTED_MODULE_1__.default(false, false, false, true);
					}
					alternator.matches.push(lastMatch);
					openenings.push(alternator);
					if (lastMatch.openGroup) { //regexp alt syntax
						lastMatch.openGroup = false;
						var alternatorGroup = new _masktoken__WEBPACK_IMPORTED_MODULE_1__.default(true);
						alternatorGroup.alternatorGroup = true;
						openenings.push(alternatorGroup);
					}
				}
				break;
			default:
				defaultCase();
		}
	}

	if (closeRegexGroup) closeGroup();

	while (openenings.length > 0) {
		openingToken = openenings.pop();
		currentToken.matches.push(openingToken);
	}
	if (currentToken.matches.length > 0) {
		verifyGroupMarker(currentToken);
		maskTokens.push(currentToken);
	}

	if (opts.numericInput || opts.isRTL) {
		reverseTokens(maskTokens[0]);
	}
	// console.log(JSON.stringify(maskTokens));
	return maskTokens;
}


/***/ }),

/***/ "./node_modules/inputmask/lib/mask.js":
/*!********************************************!*\
  !*** ./node_modules/inputmask/lib/mask.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mask": () => (/* binding */ mask)
/* harmony export */ });
/* harmony import */ var _keycode_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keycode.json */ "./node_modules/inputmask/lib/keycode.json");
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positioning */ "./node_modules/inputmask/lib/positioning.js");
/* harmony import */ var _inputHandling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputHandling */ "./node_modules/inputmask/lib/inputHandling.js");
/* harmony import */ var _eventruler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventruler */ "./node_modules/inputmask/lib/eventruler.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environment */ "./node_modules/inputmask/lib/environment.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation */ "./node_modules/inputmask/lib/validation.js");
/* harmony import */ var _eventhandlers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventhandlers */ "./node_modules/inputmask/lib/eventhandlers.js");










//todo put on the prototype?
function mask() {
	const inputmask = this,
		opts= this.opts,
	el=this.el,$=this.dependencyLib;


	function isElementTypeSupported(input, opts) {
		function patchValueProperty(npt) {
			var valueGet;
			var valueSet;

			function patchValhook(type) {
				if ($.valHooks && ($.valHooks[type] === undefined || $.valHooks[type].inputmaskpatch !== true)) {
					var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
						return elem.value;
					};
					var valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
						elem.value = value;
						return elem;
					};

					$.valHooks[type] = {
						get: function (elem) {
							if (elem.inputmask) {
								if (elem.inputmask.opts.autoUnmask) {
									return elem.inputmask.unmaskedvalue();
								} else {
									var result = valhookGet(elem);
									return _positioning__WEBPACK_IMPORTED_MODULE_1__.getLastValidPosition.call(inputmask, undefined, undefined, elem.inputmask.maskset.validPositions) !== -1 || opts.nullable !== true ? result : "";
								}
							} else {
								return valhookGet(elem);
							}
						},
						set: function (elem, value) {
							var result = valhookSet(elem, value);
							if (elem.inputmask) {
								(0,_inputHandling__WEBPACK_IMPORTED_MODULE_2__.applyInputValue)(elem, value);
							}
							return result;
						},
						inputmaskpatch: true
					};
				}
			}

			function getter() {
				if (this.inputmask) {
					return this.inputmask.opts.autoUnmask ?
						this.inputmask.unmaskedvalue() :
						(_positioning__WEBPACK_IMPORTED_MODULE_1__.getLastValidPosition.call(inputmask) !== -1 || opts.nullable !== true ?
							(((this.inputmask.shadowRoot || this.ownerDocument).activeElement) === this && opts.clearMaskOnLostFocus ?
								(inputmask.isRTL ? _inputHandling__WEBPACK_IMPORTED_MODULE_2__.clearOptionalTail.call(inputmask,_positioning__WEBPACK_IMPORTED_MODULE_1__.getBuffer.call(inputmask).slice()).reverse() : _inputHandling__WEBPACK_IMPORTED_MODULE_2__.clearOptionalTail.call(inputmask,_positioning__WEBPACK_IMPORTED_MODULE_1__.getBuffer.call(inputmask).slice())).join("") :
								valueGet.call(this)) :
							"");
				} else {
					return valueGet.call(this);
				}
			}

			function setter(value) {
				valueSet.call(this, value);
				if (this.inputmask) {
					(0,_inputHandling__WEBPACK_IMPORTED_MODULE_2__.applyInputValue)(this, value);
				}
			}

			function installNativeValueSetFallback(npt) {
				_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(npt, "mouseenter", function () {
					var input = this,
						value = input.inputmask._valueGet(true);
					if (value !== (inputmask.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_1__.getBuffer.call(inputmask).reverse() : _positioning__WEBPACK_IMPORTED_MODULE_1__.getBuffer.call(inputmask)).join("")) { //Is this correct? to apply RTL? TOCHECK
						(0,_inputHandling__WEBPACK_IMPORTED_MODULE_2__.applyInputValue)(input, value);
					}
				});
			}

			if (!npt.inputmask.__valueGet) {
				if (opts.noValuePatching !== true) {
					if (Object.getOwnPropertyDescriptor) {
						var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
						if (valueProperty && valueProperty.get && valueProperty.set) {
							valueGet = valueProperty.get;
							valueSet = valueProperty.set;
							Object.defineProperty(npt, "value", {
								get: getter,
								set: setter,
								configurable: true
							});
						} else if (npt.tagName.toLowerCase() !== "input") {
							valueGet = function () {
								return this.textContent;
							};
							valueSet = function (value) {
								this.textContent = value;
							};
							Object.defineProperty(npt, "value", {
								get: getter,
								set: setter,
								configurable: true
							});
						}
					} else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
						valueGet = npt.__lookupGetter__("value");
						valueSet = npt.__lookupSetter__("value");

						npt.__defineGetter__("value", getter);
						npt.__defineSetter__("value", setter);
					}
					npt.inputmask.__valueGet = valueGet; //store native property getter
					npt.inputmask.__valueSet = valueSet; //store native property setter
				}
				npt.inputmask._valueGet = function (overruleRTL) {
					return inputmask.isRTL && overruleRTL !== true ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
				};
				npt.inputmask._valueSet = function (value, overruleRTL) { //null check is needed for IE8 => otherwise converts to "null"
					valueSet.call(this.el, (value === null || value === undefined) ? "" : ((overruleRTL !== true && inputmask.isRTL) ? value.split("").reverse().join("") : value));
				};

				if (valueGet === undefined) { //jquery.val fallback
					valueGet = function () {
						return this.value;
					};
					valueSet = function (value) {
						this.value = value;
					};
					patchValhook(npt.type);
					installNativeValueSetFallback(npt);
				}
			}
		}

		if (input.tagName.toLowerCase() !== "textarea") {
			opts.ignorables.push(_keycode_json__WEBPACK_IMPORTED_MODULE_0__.ENTER);
		}

		var elementType = input.getAttribute("type");
		var isSupported = (input.tagName.toLowerCase() === "input" && opts.supportsInputType.includes(elementType)) || input.isContentEditable || input.tagName.toLowerCase() === "textarea";
		if (!isSupported) {
			if (input.tagName.toLowerCase() === "input") {
				var el = document.createElement("input");
				el.setAttribute("type", elementType);
				isSupported = el.type === "text"; //apply mask only if the type is not natively supported
				el = null;
			} else {
				isSupported = "partial";
			}
		}
		if (isSupported !== false) {
			patchValueProperty(input);
		} else {
			input.inputmask = undefined;
		}
		return isSupported;
	}

	//unbind all events - to make sure that no other mask will interfere when re-masking
	_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.off(el);
	var isSupported = isElementTypeSupported(el, opts);
	if (isSupported !== false) {
		inputmask.originalPlaceholder = el.placeholder;

		//read maxlength prop from el
		inputmask.maxLength = el !== undefined ? el.maxLength : undefined;
		if (inputmask.maxLength === -1) inputmask.maxLength = undefined;
		if ("inputMode" in el && el.getAttribute("inputmode") === null) {
			el.inputMode = opts.inputmode;
			el.setAttribute("inputmode", opts.inputmode);
		}


		if (isSupported === true) {
			opts.showMaskOnFocus = opts.showMaskOnFocus && ["cc-number", "cc-exp"].indexOf(el.autocomplete) === -1;
			if (_environment__WEBPACK_IMPORTED_MODULE_4__.iphone) { //selecting the caret shows as a slection on iphone
				opts.insertModeVisual = false;
			}

			//bind events
			_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "submit", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.submitEvent);
			_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "reset", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.resetEvent);
			_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "blur", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.blurEvent);
			_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "focus", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.focusEvent);
			_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "invalid", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.invalidEvent);
			_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "click", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.clickEvent);
			_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "mouseleave", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.mouseleaveEvent);
			_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "mouseenter", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.mouseenterEvent);
			_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "paste", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.pasteEvent);
			_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "cut", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.cutEvent);
			_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "complete", opts.oncomplete);
			_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "incomplete", opts.onincomplete);
			_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "cleared", opts.oncleared);
			if (opts.inputEventOnly !== true) {
				_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "keydown", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.keydownEvent);
				_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "keypress", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.keypressEvent);
				_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "keyup", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.keyupEvent);
			}
			if (_environment__WEBPACK_IMPORTED_MODULE_4__.mobile || opts.inputEventOnly) {
				el.removeAttribute("maxLength");
			}
			_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "input", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.inputFallBackEvent);
			_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "compositionend", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.compositionendEvent);
			// EventRuler.on(el, "beforeinput", EventHandlers.beforeInputEvent); //https://github.com/w3c/input-events - to implement
		}
		_eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "setvalue", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.setValueEvent);

		//apply mask
		_positioning__WEBPACK_IMPORTED_MODULE_1__.getBufferTemplate.call(inputmask).join(""); //initialize the buffer and getmasklength
		inputmask.undoValue = inputmask._valueGet(true);
		var activeElement = (el.inputmask.shadowRoot || el.ownerDocument).activeElement;
		if (el.inputmask._valueGet(true) !== "" || opts.clearMaskOnLostFocus === false || activeElement === el) {
			(0,_inputHandling__WEBPACK_IMPORTED_MODULE_2__.applyInputValue)(el, el.inputmask._valueGet(true), opts);
			var buffer = _positioning__WEBPACK_IMPORTED_MODULE_1__.getBuffer.call(inputmask).slice();
			if (_validation__WEBPACK_IMPORTED_MODULE_5__.isComplete.call(inputmask, buffer) === false) {
				if (opts.clearIncomplete) {
					_positioning__WEBPACK_IMPORTED_MODULE_1__.resetMaskSet.call(inputmask);
				}
			}
			if (opts.clearMaskOnLostFocus && activeElement !== el) {
				if (_positioning__WEBPACK_IMPORTED_MODULE_1__.getLastValidPosition.call(inputmask) === -1) {
					buffer = [];
				} else {
					_inputHandling__WEBPACK_IMPORTED_MODULE_2__.clearOptionalTail.call(inputmask, buffer);
				}
			}
			if (opts.clearMaskOnLostFocus === false || (opts.showMaskOnFocus && activeElement === el) || el.inputmask._valueGet(true) !== "") {
				(0,_inputHandling__WEBPACK_IMPORTED_MODULE_2__.writeBuffer)(el, buffer);
			}
			if (activeElement === el) { //position the caret when in focus
				_positioning__WEBPACK_IMPORTED_MODULE_1__.caret.call(inputmask,el, _positioning__WEBPACK_IMPORTED_MODULE_1__.seekNext.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_1__.getLastValidPosition.call(inputmask)));
			}
		}
	}
}

/***/ }),

/***/ "./node_modules/inputmask/lib/masktoken.js":
/*!*************************************************!*\
  !*** ./node_modules/inputmask/lib/masktoken.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(isGroup, isOptional, isQuantifier, isAlternator) {
	this.matches = [];
	this.openGroup = isGroup || false;
	this.alternatorGroup = false;
	this.isGroup = isGroup || false;
	this.isOptional = isOptional || false;
	this.isQuantifier = isQuantifier || false;
	this.isAlternator = isAlternator || false;
	this.quantifier = {
		min: 1,
		max: 1
	};
}

/***/ }),

/***/ "./node_modules/inputmask/lib/polyfills/Array.includes.js":
/*!****************************************************************!*\
  !*** ./node_modules/inputmask/lib/polyfills/Array.includes.js ***!
  \****************************************************************/
/***/ (() => {

// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
	Object.defineProperty(Array.prototype, "includes", {
		value: function(searchElement, fromIndex) {

			// 1. Let O be ? ToObject(this value).
			if (this == null) {
				throw new TypeError("\"this\" is null or not defined");
			}

			var o = Object(this);

			// 2. Let len be ? ToLength(? Get(O, "length")).
			var len = o.length >>> 0;

			// 3. If len is 0, return false.
			if (len === 0) {
				return false;
			}

			// 4. Let n be ? ToInteger(fromIndex).
			//    (If fromIndex is undefined, this step produces the value 0.)
			var n = fromIndex | 0;

			// 5. If n ≥ 0, then
			//  a. Let k be n.
			// 6. Else n < 0,
			//  a. Let k be len + n.
			//  b. If k < 0, let k be 0.
			var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

			// 7. Repeat, while k < len
			while (k < len) {
				// a. Let elementK be the result of ? Get(O, ! ToString(k)).
				// b. If SameValueZero(searchElement, elementK) is true, return true.
				// c. Increase k by 1.
				// NOTE: === provides the correct "SameValueZero" comparison needed here.
				if (o[k] === searchElement) {
					return true;
				}
				k++;
			}

			// 8. Return false
			return false;
		}
	});
}

/***/ }),

/***/ "./node_modules/inputmask/lib/polyfills/Object.getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inputmask/lib/polyfills/Object.getPrototypeOf.js ***!
  \***********************************************************************/
/***/ (() => {

if (typeof Object.getPrototypeOf !== "function") {
	Object.getPrototypeOf = typeof "test".__proto__ === "object" ? function (object) {
		return object.__proto__;
	} : function (object) {
		return object.constructor.prototype;
	};
}

/***/ }),

/***/ "./node_modules/inputmask/lib/positioning.js":
/*!***************************************************!*\
  !*** ./node_modules/inputmask/lib/positioning.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "caret": () => (/* binding */ caret),
/* harmony export */   "determineLastRequiredPosition": () => (/* binding */ determineLastRequiredPosition),
/* harmony export */   "determineNewCaretPosition": () => (/* binding */ determineNewCaretPosition),
/* harmony export */   "getBuffer": () => (/* binding */ getBuffer),
/* harmony export */   "getBufferTemplate": () => (/* binding */ getBufferTemplate),
/* harmony export */   "getLastValidPosition": () => (/* binding */ getLastValidPosition),
/* harmony export */   "isMask": () => (/* binding */ isMask),
/* harmony export */   "resetMaskSet": () => (/* binding */ resetMaskSet),
/* harmony export */   "seekNext": () => (/* binding */ seekNext),
/* harmony export */   "seekPrevious": () => (/* binding */ seekPrevious),
/* harmony export */   "translatePosition": () => (/* binding */ translatePosition)
/* harmony export */ });
/* harmony import */ var _validation_tests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-tests */ "./node_modules/inputmask/lib/validation-tests.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation */ "./node_modules/inputmask/lib/validation.js");





//tobe put on prototype?
function caret(input, begin, end, notranslate, isDelete) {
	const inputmask = this,
		opts = this.opts;

	var range;
	if (begin !== undefined) {
		if (Array.isArray(begin)) {
			end = inputmask.isRTL ? begin[0] : begin[1];
			begin = inputmask.isRTL ? begin[1] : begin[0];
		}
		if (begin.begin !== undefined) {
			end = inputmask.isRTL ? begin.begin : begin.end;
			begin = inputmask.isRTL ? begin.end : begin.begin;
		}
		if (typeof begin === "number") {
			begin = notranslate ? begin : translatePosition.call(inputmask, begin);
			end = notranslate ? end : translatePosition.call(inputmask, end);
			end = (typeof end == "number") ? end : begin;
			// if (!$(input).is(":visible")) {
			// 	return;
			// }

			var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
			input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0;
			input.inputmask.caretPos = {begin: begin, end: end}; //track caret internally
			if (opts.insertModeVisual && opts.insertMode === false && begin === end) {
				if (!isDelete) {
					end++; //set visualization for insert/overwrite mode
				}
			}
			if (input === (input.inputmask.shadowRoot || input.ownerDocument).activeElement) {
				if ("setSelectionRange" in input) {
					input.setSelectionRange(begin, end);
				} else if (window.getSelection) {
					range = document.createRange();
					if (input.firstChild === undefined || input.firstChild === null) {
						var textNode = document.createTextNode("");
						input.appendChild(textNode);
					}
					range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length);
					range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length);
					range.collapse(true);
					var sel = window.getSelection();
					sel.removeAllRanges();
					sel.addRange(range);
					//input.focus();
				} else if (input.createTextRange) {
					range = input.createTextRange();
					range.collapse(true);
					range.moveEnd("character", end);
					range.moveStart("character", begin);
					range.select();
				}
			}
		}
	} else {
		if ("selectionStart" in input && "selectionEnd" in input) {
			begin = input.selectionStart;
			end = input.selectionEnd;
		} else if (window.getSelection) {
			range = window.getSelection().getRangeAt(0);
			if (range.commonAncestorContainer.parentNode === input || range.commonAncestorContainer === input) {
				begin = range.startOffset;
				end = range.endOffset;
			}
		} else if (document.selection && document.selection.createRange) {
			range = document.selection.createRange();
			begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length);
			end = begin + range.text.length;
		}

		// if (opts.insertModeVisual && opts.insertMode === false && begin === (end - 1)) end--; //correct caret for insert/overwrite mode

		/*eslint-disable consistent-return */
		return {
			"begin": notranslate ? begin : translatePosition.call(inputmask, begin),
			"end": notranslate ? end : translatePosition.call(inputmask, end)
		};
		/*eslint-enable consistent-return */
	}
}

//tobe put on prototype?
function determineLastRequiredPosition(returnDefinition) {
	const inputmask = this,
		maskset = this.maskset,
		$ = this.dependencyLib;

	var buffer = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getMaskTemplate.call(inputmask, true, getLastValidPosition.call(inputmask), true, true),
		bl = buffer.length,
		pos, lvp = getLastValidPosition.call(inputmask),
		positions = {},
		lvTest = maskset.validPositions[lvp],
		ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined,
		testPos;
	for (pos = lvp + 1; pos < buffer.length; pos++) {
		testPos = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTestTemplate.call(inputmask, pos, ndxIntlzr, pos - 1);
		ndxIntlzr = testPos.locator.slice();
		positions[pos] = $.extend(true, {}, testPos);
	}

	var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
	for (pos = bl - 1; pos > lvp; pos--) {
		testPos = positions[pos];
		if ((testPos.match.optionality ||
			(testPos.match.optionalQuantifier && testPos.match.newBlockMarker) ||
			(lvTestAlt &&
				(
					(lvTestAlt !== positions[pos].locator[lvTest.alternation] && testPos.match.static != true) ||
					(testPos.match.static === true &&
						testPos.locator[lvTest.alternation] &&
						_validation__WEBPACK_IMPORTED_MODULE_1__.checkAlternationMatch.call(inputmask, testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) &&
						_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTests.call(inputmask, pos)[0].def !== "")
				)
			)) &&
			buffer[pos] === _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, pos, testPos.match)) {
			bl--;
		} else {
			break;
		}
	}
	return returnDefinition ? {
		"l": bl,
		"def": positions[bl] ? positions[bl].match : undefined
	} : bl;
}

//tobe put on prototype?
function determineNewCaretPosition(selectedCaret, tabbed, positionCaretOnClick) {
	const inputmask = this,
		maskset = this.maskset,
		opts = this.opts;

	function doRadixFocus(clickPos) {
		if (opts.radixPoint !== "" && opts.digits !== 0) {
			var vps = maskset.validPositions;
			if (vps[clickPos] === undefined || (vps[clickPos].input === _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, clickPos))) {
				if (clickPos < seekNext.call(inputmask, -1)) return true;
				var radixPos = getBuffer.call(inputmask).indexOf(opts.radixPoint);
				if (radixPos !== -1) {
					for (var vp in vps) {
						if (vps[vp] && radixPos < vp && vps[vp].input !== _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, vp)) {
							return false;
						}
					}
					return true;
				}
			}
		}
		return false;
	}

	if (tabbed) {
		if (inputmask.isRTL) {
			selectedCaret.end = selectedCaret.begin;
		} else {
			selectedCaret.begin = selectedCaret.end;
		}
	}
	if (selectedCaret.begin === selectedCaret.end) {
		positionCaretOnClick = positionCaretOnClick || opts.positionCaretOnClick;
		switch (positionCaretOnClick) {
			case "none":
				break;
			case "select":
				selectedCaret = {begin: 0, end: getBuffer.call(inputmask).length};
				break;
			case "ignore":
				selectedCaret.end = selectedCaret.begin = seekNext.call(inputmask, getLastValidPosition.call(inputmask));
				break;
			case "radixFocus":
				if (doRadixFocus(selectedCaret.begin)) {
					var radixPos = getBuffer.call(inputmask).join("").indexOf(opts.radixPoint);
					selectedCaret.end = selectedCaret.begin = opts.numericInput ? seekNext.call(inputmask, radixPos) : radixPos;
					break;
				} //fallback to lvp
			// eslint-disable-next-line no-fallthrough
			default: //lvp:
				var clickPosition = selectedCaret.begin,
					lvclickPosition = getLastValidPosition.call(inputmask, clickPosition, true),
					lastPosition = seekNext.call(inputmask, (lvclickPosition === -1 && !isMask.call(inputmask, 0)) ? -1 : lvclickPosition);

				if (clickPosition <= lastPosition) {
					selectedCaret.end = selectedCaret.begin = !isMask.call(inputmask, clickPosition, false, true) ? seekNext.call(inputmask, clickPosition) : clickPosition;
				} else {
					var lvp = maskset.validPositions[lvclickPosition],
						tt = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTestTemplate.call(inputmask, lastPosition, lvp ? lvp.match.locator : undefined, lvp),
						placeholder = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, lastPosition, tt.match);
					if ((placeholder !== "" && getBuffer.call(inputmask)[lastPosition] !== placeholder && tt.match.optionalQuantifier !== true && tt.match.newBlockMarker !== true) || (!isMask.call(inputmask, lastPosition, opts.keepStatic, true) && tt.match.def === placeholder)) {
						var newPos = seekNext.call(inputmask, lastPosition);
						if (clickPosition >= newPos || clickPosition === lastPosition) {
							lastPosition = newPos;
						}
					}
					selectedCaret.end = selectedCaret.begin = lastPosition;
				}
		}

		return selectedCaret;
	}
}


//tobe put on prototype?
function getBuffer(noCache) {
	const inputmask = this, maskset = this.maskset;

	if (maskset.buffer === undefined || noCache === true) {
		maskset.buffer = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getMaskTemplate.call(inputmask, true, getLastValidPosition.call(inputmask), true);
		if (maskset._buffer === undefined) maskset._buffer = maskset.buffer.slice();
	}
	return maskset.buffer;
}

//tobe put on prototype?
function getBufferTemplate() {
	const inputmask = this, maskset = this.maskset;

	if (maskset._buffer === undefined) {
		//generate template
		maskset._buffer = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getMaskTemplate.call(inputmask, false, 1);
		if (maskset.buffer === undefined) maskset.buffer = maskset._buffer.slice();
	}
	return maskset._buffer;
}

//tobe put on prototype?
function getLastValidPosition(closestTo, strict, validPositions) {
	const maskset = this.maskset;

	var before = -1,
		after = -1,
		valids = validPositions || maskset.validPositions; //for use in valhook ~ context switch
	if (closestTo === undefined) closestTo = -1;
	for (var posNdx in valids) {
		var psNdx = parseInt(posNdx);
		if (valids[psNdx] && (strict || valids[psNdx].generatedInput !== true)) {
			if (psNdx <= closestTo) before = psNdx;
			if (psNdx >= closestTo) after = psNdx;
		}
	}
	return (before === -1 || before == closestTo) ? after : after == -1 ? before : (closestTo - before) < (after - closestTo) ? before : after;
}

//tobe put on prototype?
function isMask(pos, strict, fuzzy) {
	const inputmask = this, maskset = this.maskset;

	var test = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTestTemplate.call(inputmask, pos).match;
	if (test.def === "") test = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, pos).match;

	if (test.static !== true) {
		return test.fn;
	}
	if (fuzzy === true && (maskset.validPositions[pos] !== undefined && maskset.validPositions[pos].generatedInput !== true)) {
		return true;
	}

	if (strict !== true && pos > -1) {
		if (fuzzy) { //check on the number of tests
			var tests = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTests.call(inputmask, pos);
			return tests.length > (1 + (tests[tests.length - 1].match.def === "" ? 1 : 0));
		}
		//else based on the template
		var testTemplate = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.determineTestTemplate.call(inputmask, pos, _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTests.call(inputmask, pos));
		var testPlaceHolder = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, pos, testTemplate.match);
		return testTemplate.match.def !== testPlaceHolder;

	}
	return false;
}

//tobe put on prototype?
function resetMaskSet(soft) {
	const maskset = this.maskset;

	maskset.buffer = undefined;
	if (soft !== true) {
		maskset.validPositions = {};
		maskset.p = 0;
	}
}

//tobe put on prototype?
function seekNext(pos, newBlock, fuzzy) {
	const inputmask = this;

	if (fuzzy === undefined) fuzzy = true;
	var position = pos + 1;
	while (_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, position).match.def !== "" &&
	((newBlock === true && (_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, position).match.newBlockMarker !== true || !isMask.call(inputmask, position, undefined, true))) ||
		(newBlock !== true && !isMask.call(inputmask, position, undefined, fuzzy)))) {
		position++;
	}
	return position;
}

//tobe put on prototype?
function seekPrevious(pos, newBlock) {
	const inputmask = this;

	var position = pos - 1;
	if (pos <= 0) return 0;

	while (position > 0 &&
	((newBlock === true && (_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, position).match.newBlockMarker !== true || !isMask.call(inputmask, position, undefined, true))) ||
		(newBlock !== true && !isMask.call(inputmask, position, undefined, true)))) {
		position--;
	}
	return position;
}

//tobe put on prototype?
function translatePosition(pos) {
	const inputmask = this,
		opts = this.opts,
		el = this.el;

	if (inputmask.isRTL && typeof pos === "number" && (!opts.greedy || opts.placeholder !== "") && el) {
		pos = Math.abs(inputmask._valueGet().length - pos);
	}
	return pos;
}


/***/ }),

/***/ "./node_modules/inputmask/lib/validation-tests.js":
/*!********************************************************!*\
  !*** ./node_modules/inputmask/lib/validation-tests.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "determineTestTemplate": () => (/* binding */ determineTestTemplate),
/* harmony export */   "getDecisionTaker": () => (/* binding */ getDecisionTaker),
/* harmony export */   "getMaskTemplate": () => (/* binding */ getMaskTemplate),
/* harmony export */   "getPlaceholder": () => (/* binding */ getPlaceholder),
/* harmony export */   "getTest": () => (/* binding */ getTest),
/* harmony export */   "getTests": () => (/* binding */ getTests),
/* harmony export */   "getTestTemplate": () => (/* binding */ getTestTemplate)
/* harmony export */ });
/* unused harmony export isSubsetOf */


function getLocator(tst, align) { //need to align the locators to be correct
	var locator = (tst.alternation != undefined ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
	if (locator !== "") while (locator.length < align) locator += "0";
	return locator;
}

function getDecisionTaker(tst) {
	var decisionTaker = tst.locator[tst.alternation];
	if (typeof decisionTaker == "string" && decisionTaker.length > 0) { //no decision taken ~ take first one as decider
		decisionTaker = decisionTaker.split(",")[0];
	}
	return decisionTaker !== undefined ? decisionTaker.toString() : "";
}

//tobe put on prototype?
function getPlaceholder(pos, test, returnPL) {
	const inputmask = this,
		opts = this.opts,
		maskset = this.maskset;

	test = test || getTest.call(inputmask, pos).match;
	if (test.placeholder !== undefined || returnPL === true) {
		return typeof test.placeholder === "function" ? test.placeholder(opts) : test.placeholder;
	} else if (test.static === true) {
		if (pos > -1 && maskset.validPositions[pos] === undefined) {
			var tests = getTests.call(inputmask, pos),
				staticAlternations = [],
				prevTest;
			if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
				for (var i = 0; i < tests.length; i++) {
					if (tests[i].match.def !== "" && tests[i].match.optionality !== true && tests[i].match.optionalQuantifier !== true &&
						(tests[i].match.static === true || (prevTest === undefined || tests[i].match.fn.test(prevTest.match.def, maskset, pos, true, opts) !== false))) {
						staticAlternations.push(tests[i]);
						if (tests[i].match.static === true) prevTest = tests[i];
						if (staticAlternations.length > 1) {
							if (/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)) {
								return opts.placeholder.charAt(pos % opts.placeholder.length);
							}
						}
					}
				}
			}
		}
		return test.def;
	}

	return opts.placeholder.charAt(pos % opts.placeholder.length);
}

//tobe put on prototype?
function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
	//includeMode true => input, undefined => placeholder, false => mask

	var inputmask = this,
		opts = this.opts,
		maskset = this.maskset;


	var greedy = opts.greedy;
	if (clearOptionalTail) opts.greedy = false;
	minimalPos = minimalPos || 0;
	var maskTemplate = [],
		ndxIntlzr, pos = 0,
		test, testPos, jitRenderStatic;
	do {
		if (baseOnInput === true && maskset.validPositions[pos]) {
			testPos = (clearOptionalTail && maskset.validPositions[pos].match.optionality === true
				&& maskset.validPositions[pos + 1] === undefined
				&& (maskset.validPositions[pos].generatedInput === true || (maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && pos > 0)))
				? determineTestTemplate.call(inputmask, pos, getTests.call(inputmask, pos, ndxIntlzr, pos - 1))
				: maskset.validPositions[pos];
			test = testPos.match;
			ndxIntlzr = testPos.locator.slice();
			maskTemplate.push(includeMode === true ? testPos.input : includeMode === false ? test.nativeDef : getPlaceholder.call(inputmask, pos, test));
		} else {
			testPos = getTestTemplate.call(inputmask, pos, ndxIntlzr, pos - 1);
			test = testPos.match;
			ndxIntlzr = testPos.locator.slice();
			var jitMasking = noJit === true ? false : (opts.jitMasking !== false ? opts.jitMasking : test.jit);
			//check for groupSeparator is a hack for the numerics as we don't want the render of the groupSeparator beforehand
			jitRenderStatic = ((jitRenderStatic && test.static && test.def !== opts.groupSeparator && test.fn === null) || (maskset.validPositions[pos - 1] && test.static && test.def !== opts.groupSeparator && test.fn === null)) && maskset.tests[pos] && maskset.tests[pos].length === 1;
			if (jitRenderStatic || jitMasking === false || jitMasking === undefined /*|| pos < lvp*/ || (typeof jitMasking === "number" && isFinite(jitMasking) && jitMasking > pos)) {
				maskTemplate.push(includeMode === false ? test.nativeDef : getPlaceholder.call(inputmask, pos, test));
			} else {
				jitRenderStatic = false;
			}
		}

		pos++;
	} while ((test.static !== true || test.def !== "") || minimalPos > pos);
	if (maskTemplate[maskTemplate.length - 1] === "") {
		maskTemplate.pop(); //drop the last one which is empty
	}
	if (includeMode !== false || //do not alter the masklength when just retrieving the maskdefinition
		maskset.maskLength === undefined) //just make sure the maskLength gets initialized in all cases (needed for isValid)
	{
		maskset.maskLength = pos - 1;
	}

	opts.greedy = greedy;
	return maskTemplate;
}

//tobe put on prototype?
function getTestTemplate(pos, ndxIntlzr, tstPs) {
	var inputmask = this,
		maskset = this.maskset;

	return maskset.validPositions[pos] || determineTestTemplate.call(inputmask, pos, getTests.call(inputmask, pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
}

//tobe put on prototype?
function determineTestTemplate(pos, tests) {
	var inputmask = this,
		opts = this.opts;

	pos = pos > 0 ? pos - 1 : 0;
	var altTest = getTest.call(inputmask, pos), targetLocator = getLocator(altTest), tstLocator, closest, bestMatch;
	for (var ndx = 0; ndx < tests.length; ndx++) { //find best matching
		var tst = tests[ndx];
		tstLocator = getLocator(tst, targetLocator.length);
		var distance = Math.abs(tstLocator - targetLocator);
		if (closest === undefined
			|| (tstLocator !== "" && distance < closest)
			|| (bestMatch && !opts.greedy && bestMatch.match.optionality && bestMatch.match.newBlockMarker === "master" && (!tst.match.optionality || !tst.match.newBlockMarker))
			|| (bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier)) {
			closest = distance;
			bestMatch = tst;
		}
	}

	return bestMatch;
}

//tobe put on prototype?
function getTest(pos, tests) {
	var inputmask = this,
		maskset = this.maskset;

	if (maskset.validPositions[pos]) {
		return maskset.validPositions[pos];
	}
	return (tests || getTests.call(inputmask, pos))[0];
}

function isSubsetOf(source, target, opts) {
	function expand(pattern) {
		var expanded = [], start = -1, end;
		for (var i = 0, l = pattern.length; i < l; i++) {
			if (pattern.charAt(i) === "-") {
				end = pattern.charCodeAt(i + 1);
				while (++start < end) expanded.push(String.fromCharCode(start));
			} else {
				start = pattern.charCodeAt(i);
				expanded.push(pattern.charAt(i));
			}
		}
		return expanded.join("");
	}

	if (source.match.def === target.match.nativeDef) return true;
	if ((opts.regex || (source.match.fn instanceof RegExp && target.match.fn instanceof RegExp)) && source.match.static !== true && target.match.static !== true) { //is regex a subset
		return expand(target.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g, ""))) !== -1;
	}
	return false;
}

//tobe put on prototype?
function getTests(pos, ndxIntlzr, tstPs) {
	var inputmask = this,
		$ = this.dependencyLib,
		maskset = this.maskset,
		opts = this.opts,
		el = this.el,
		maskTokens = maskset.maskToken,
		testPos = ndxIntlzr ? tstPs : 0,
		ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
		matches = [],
		insertStop = false,
		latestMatch,
		cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";

	function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) { //ndxInitializer contains a set of indexes to speedup searches in the mtokens
		function handleMatch(match, loopNdx, quantifierRecurse) {
			function isFirstMatch(latestMatch, tokenGroup) {
				var firstMatch = tokenGroup.matches.indexOf(latestMatch) === 0;
				if (!firstMatch) {
					tokenGroup.matches.every(function (match, ndx) {
						if (match.isQuantifier === true) {
							firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]);
						} else if (Object.prototype.hasOwnProperty.call(match, "matches")) firstMatch = isFirstMatch(latestMatch, match);
						if (firstMatch) return false;

						return true;
					});
				}
				return firstMatch;
			}

			function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
				var bestMatch, indexPos;

				if (maskset.tests[pos] || maskset.validPositions[pos]) {
					(maskset.tests[pos] || [maskset.validPositions[pos]]).every(function (lmnt, ndx) {
						if (lmnt.mloc[alternateNdx]) {
							bestMatch = lmnt;
							return false; //break
						}
						var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation,
							ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
						if ((indexPos === undefined || ndxPos < indexPos) && ndxPos !== -1) {
							bestMatch = lmnt;
							indexPos = ndxPos;
						}

						return true;
					});
				}
				if (bestMatch) {
					var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation];
					var locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
					return locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1);
				} else {
					return targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
				}
			}

			function staticCanMatchDefinition(source, target) {
				return source.match.static === true && target.match.static !== true ? target.match.fn.test(source.match.def, maskset, pos, false, opts, false) : false;
			}

			//mergelocators for retrieving the correct locator match when merging
			function setMergeLocators(targetMatch, altMatch) {
				var alternationNdx = targetMatch.alternation,
					shouldMerge = altMatch === undefined || (alternationNdx === altMatch.alternation &&
						targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]) === -1);
				if (!shouldMerge && alternationNdx > altMatch.alternation) {
					for (var i = altMatch.alternation; i < alternationNdx; i++) {
						if (targetMatch.locator[i] !== altMatch.locator[i]) {
							alternationNdx = i;
							shouldMerge = true;
							break;
						}
					}
				}

				if (shouldMerge) {
					targetMatch.mloc = targetMatch.mloc || {};
					var locNdx = targetMatch.locator[alternationNdx];
					if (locNdx === undefined) {
						targetMatch.alternation = undefined;
					} else {
						if (typeof locNdx === "string") locNdx = locNdx.split(",")[0];
						if (targetMatch.mloc[locNdx] === undefined) targetMatch.mloc[locNdx] = targetMatch.locator.slice();
						if (altMatch !== undefined) {
							for (var ndx in altMatch.mloc) {
								if (typeof ndx === "string") ndx = ndx.split(",")[0];
								if (targetMatch.mloc[ndx] === undefined) targetMatch.mloc[ndx] = altMatch.mloc[ndx];
							}
							targetMatch.locator[alternationNdx] = Object.keys(targetMatch.mloc).join(",");
						}
						return true;
					}
				}
				return false;
			}

			function isSameLevel(targetMatch, altMatch) {
				if (targetMatch.locator.length !== altMatch.locator.length) {
					return false;
				}
				for (let locNdx = targetMatch.alternation + 1; locNdx < targetMatch.locator.length; locNdx++) {
					if (targetMatch.locator[locNdx] !== altMatch.locator[locNdx]) {
						return false;
					}
				}
				return true;
			}

			if (testPos > (pos + opts._maxTestPos)) {
				throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + maskset.mask;
			}
			if (testPos === pos && match.matches === undefined) {
				matches.push({
					"match": match,
					"locator": loopNdx.reverse(),
					"cd": cacheDependency,
					"mloc": {}
				});
				return true;
			} else if (match.matches !== undefined) {
				if (match.isGroup && quantifierRecurse !== match) { //when a group pass along to the quantifier
					match = handleMatch(maskToken.matches[maskToken.matches.indexOf(match) + 1], loopNdx, quantifierRecurse);
					if (match) return true;
				} else if (match.isOptional) {
					var optionalToken = match, mtchsNdx = matches.length;
					match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
					if (match) {
						//mark optionality in matches
						matches.forEach(function (mtch, ndx) {
							if (ndx >= mtchsNdx) {
								mtch.match.optionality = true;
							}
						});
						latestMatch = matches[matches.length - 1].match;
						if (quantifierRecurse === undefined && isFirstMatch(latestMatch, optionalToken)) { //prevent loop see #698
							insertStop = true; //insert a stop
							testPos = pos; //match the position after the group
						} else {
							return true;
						}
					}
				} else if (match.isAlternator) {
					var alternateToken = match,
						malternateMatches = [],
						maltMatches,
						currentMatches = matches.slice(),
						loopNdxCnt = loopNdx.length,
						unMatchedAlternation = false;
					var altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
					if (altIndex === -1 || typeof altIndex === "string") {
						var currentPos = testPos,
							ndxInitializerClone = ndxInitializer.slice(),
							altIndexArr = [],
							amndx;
						if (typeof altIndex == "string") {
							altIndexArr = altIndex.split(",");
						} else {
							for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
								altIndexArr.push(amndx.toString());
							}
						}

						if (maskset.excludes[pos] !== undefined) {
							var altIndexArrClone = altIndexArr.slice();
							for (var i = 0, exl = maskset.excludes[pos].length; i < exl; i++) {
								var excludeSet = maskset.excludes[pos][i].toString().split(":");
								if (loopNdx.length == excludeSet[1]) {
									altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]), 1);
								}
							}
							if (altIndexArr.length === 0) { //fully alternated => reset
								delete maskset.excludes[pos];
								altIndexArr = altIndexArrClone;
							}
						}
						if (opts.keepStatic === true || (isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic)) altIndexArr = altIndexArr.slice(0, 1);
						for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
							amndx = parseInt(altIndexArr[ndx]);
							matches = [];
							//set the correct ndxInitializer
							ndxInitializer = typeof altIndex === "string" ? resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice() : ndxInitializerClone.slice();
							var tokenMatch = alternateToken.matches[amndx];
							if (tokenMatch && handleMatch(tokenMatch, [amndx].concat(loopNdx), quantifierRecurse)) {
								match = true;
							} else {
								if (ndx === 0) {
									unMatchedAlternation = true;
								}
								if (tokenMatch && tokenMatch.matches && tokenMatch.matches.length > alternateToken.matches[0].matches.length) {
									break;
								}
							}

							maltMatches = matches.slice();
							testPos = currentPos;
							matches = [];

							//fuzzy merge matches
							for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
								var altMatch = maltMatches[ndx1],
									dropMatch = false;
								altMatch.match.jit = altMatch.match.jit || unMatchedAlternation; //mark jit when there are unmatched alternations  ex: mask: "(a|aa)"
								altMatch.alternation = altMatch.alternation || loopNdxCnt;
								setMergeLocators(altMatch);
								for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
									var altMatch2 = malternateMatches[ndx2];
									if (typeof altIndex !== "string" || (altMatch.alternation !== undefined && altIndexArr.includes(altMatch.locator[altMatch.alternation].toString()))) {
										if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
											dropMatch = true;
											setMergeLocators(altMatch2, altMatch);
											break;
										} else if (isSubsetOf(altMatch, altMatch2, opts)) {
											if (setMergeLocators(altMatch, altMatch2)) {
												dropMatch = true;
												malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
											}
											break;
										} else if (isSubsetOf(altMatch2, altMatch, opts)) {
											setMergeLocators(altMatch2, altMatch);
											break;
										} else if (staticCanMatchDefinition(altMatch, altMatch2)) {
											if (!isSameLevel(altMatch, altMatch2) && el.inputmask.userOptions.keepStatic === undefined) {
												opts.keepStatic = true;
											} else if (setMergeLocators(altMatch, altMatch2)) {
												//insert match above general match
												dropMatch = true;
												malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
											}
											break;
										}
									}
								}
								if (!dropMatch) {
									malternateMatches.push(altMatch);
								}
							}
						}

						matches = currentMatches.concat(malternateMatches);
						testPos = pos;
						insertStop = matches.length > 0; //insert a stopelemnt when there is an alternate - needed for non-greedy option
						match = malternateMatches.length > 0; //set correct match state

						//cloneback
						ndxInitializer = ndxInitializerClone.slice();
					} else {
						match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);
					}
					if (match) return true;
				} else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[maskToken.matches.indexOf(match) - 1]) {
					var qt = match;
					for (var qndx = (ndxInitializer.length > 0) ? ndxInitializer.shift() : 0; (qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max)) && testPos <= pos; qndx++) {
						var tokenGroup = maskToken.matches[maskToken.matches.indexOf(qt) - 1];
						match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup); //set the tokenGroup as quantifierRecurse marker
						if (match) {
							//get latest match
							latestMatch = matches[matches.length - 1].match;
							//mark optionality
							//TODO FIX RECURSIVE QUANTIFIERS
							latestMatch.optionalQuantifier = qndx >= qt.quantifier.min;
							// console.log(pos + " " + qt.quantifier.min + " " + latestMatch.optionalQuantifier);
							//qndx + 1 as the index starts from 0
							latestMatch.jit = (qndx + 1) * (tokenGroup.matches.indexOf(latestMatch) + 1) > qt.quantifier.jit;
							if (latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
								insertStop = true;
								testPos = pos; //match the position after the group
								break; //stop quantifierloop && search for next possible match
							}
							if (latestMatch.jit /*&& !latestMatch.optionalQuantifier*/) {
								//always set jitOffset, isvalid checks when to apply
								maskset.jitOffset[pos] = tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch);
							}
							return true;
						}
					}
				} else {
					match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
					if (match) return true;
				}
			} else {
				testPos++;
			}
		}

		//the offset is set in the quantifierloop when git masking is used
		for (var tndx = (ndxInitializer.length > 0 ? ndxInitializer.shift() : 0); tndx < maskToken.matches.length; tndx++) {
			if (maskToken.matches[tndx].isQuantifier !== true) {
				var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
				if (match && testPos === pos) {
					return match;
				} else if (testPos > pos) {
					break;
				}
			}
		}
	}

	function mergeLocators(pos, tests) {
		let locator = [], alternation;
		if (!Array.isArray(tests)) tests = [tests];

		if (tests.length > 0) {
			if (tests[0].alternation === undefined || opts.keepStatic === true) {
				locator = determineTestTemplate.call(inputmask, pos, tests.slice()).locator.slice();
				if (locator.length === 0) locator = tests[0].locator.slice();
			} else {
				tests.forEach(function (tst) {
					if (tst.def !== "") {
						if (locator.length === 0) {
							alternation = tst.alternation;
							locator = tst.locator.slice();
						} else {
							if (tst.locator[alternation] && locator[alternation].toString().indexOf(tst.locator[alternation]) === -1) {
								locator[alternation] += "," + tst.locator[alternation];
							}
						}
					}
				});
			}
		}
		return locator;
	}

	if (pos > -1) {
		if (ndxIntlzr === undefined) { //determine index initializer
			var previousPos = pos - 1,
				test;
			while ((test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) === undefined && previousPos > -1) {
				previousPos--;
			}
			if (test !== undefined && previousPos > -1) {
				ndxInitializer = mergeLocators(previousPos, test);
				cacheDependency = ndxInitializer.join("");
				testPos = previousPos;
			}
		}
		if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency) { //cacheDependency is set on all tests, just check on the first
			return maskset.tests[pos];
		}
		for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
			var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
			if ((match && testPos === pos) || testPos > pos) {
				break;
			}
		}
	}
	if (matches.length === 0 || insertStop) {
		matches.push({
			match: {
				fn: null,
				static: true,
				optionality: false,
				casing: null,
				def: "",
				placeholder: ""
			},
			locator: [],
			mloc: {},
			cd: cacheDependency
		});
	}

	if (ndxIntlzr !== undefined && maskset.tests[pos]) { //prioritize full tests for caching
		return $.extend(true, [], matches);
	}
	maskset.tests[pos] = $.extend(true, [], matches); //set a clone to prevent overwriting some props
	// console.log(pos + " - " + JSON.stringify(matches));
	return maskset.tests[pos];
}


/***/ }),

/***/ "./node_modules/inputmask/lib/validation.js":
/*!**************************************************!*\
  !*** ./node_modules/inputmask/lib/validation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkAlternationMatch": () => (/* binding */ checkAlternationMatch),
/* harmony export */   "isComplete": () => (/* binding */ isComplete),
/* harmony export */   "isValid": () => (/* binding */ isValid),
/* harmony export */   "refreshFromBuffer": () => (/* binding */ refreshFromBuffer),
/* harmony export */   "handleRemove": () => (/* binding */ handleRemove)
/* harmony export */ });
/* unused harmony exports alternate, revalidateMask */
/* harmony import */ var _validation_tests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-tests */ "./node_modules/inputmask/lib/validation-tests.js");
/* harmony import */ var _keycode_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keycode.json */ "./node_modules/inputmask/lib/keycode.json");
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positioning */ "./node_modules/inputmask/lib/positioning.js");
/* harmony import */ var _eventhandlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventhandlers */ "./node_modules/inputmask/lib/eventhandlers.js");







//tobe put on prototype?
function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) { //pos == true => generalize
	const inputmask = this,
		$ = this.dependencyLib,
		opts = this.opts,
		maskset = inputmask.maskset;

	var validPsClone = $.extend(true, {}, maskset.validPositions),
		tstClone = $.extend(true, {}, maskset.tests),
		lastAlt,
		alternation,
		isValidRslt = false, returnRslt = false,
		altPos, prevAltPos, i, validPos,
		decisionPos,
		lAltPos = rAltPos !== undefined ? rAltPos : _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask), nextPos, input, begin, end;

	if (selection) {
		begin = selection.begin;
		end = selection.end;
		if (selection.begin > selection.end) {
			begin = selection.end;
			end = selection.begin;
		}
	}
	if (lAltPos === -1 && rAltPos === undefined) { //do not recurse when already paste the beginning
		lastAlt = 0;
		prevAltPos = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, lastAlt);
		alternation = prevAltPos.alternation;
	} else {
		//find last modified alternation
		for (; lAltPos >= 0; lAltPos--) {
			altPos = maskset.validPositions[lAltPos];
			if (altPos && altPos.alternation !== undefined) {
				if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) {
					break;
				}
				lastAlt = lAltPos;
				alternation = maskset.validPositions[lastAlt].alternation;
				prevAltPos = altPos;
			}
		}
	}

	if (alternation !== undefined) {
		decisionPos = parseInt(lastAlt);
		maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || [];
		if (maskPos !== true) { //generalize
			maskset.excludes[decisionPos].push((0,_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getDecisionTaker)(prevAltPos) + ":" + prevAltPos.alternation);
		}

		var validInputs = [], resultPos = -1;
		for (i = decisionPos; i < _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask, undefined, true) + 1; i++) {
			if (resultPos === -1 && maskPos <= i && c !== undefined) {
				validInputs.push(c);
				resultPos = validInputs.length - 1;
			}
			validPos = maskset.validPositions[i];
			if (validPos && validPos.generatedInput !== true && (selection === undefined || (i < begin || i >= end))) {
				validInputs.push(validPos.input);
			}
			delete maskset.validPositions[i];
		}
		if (resultPos === -1 && c !== undefined) {
			validInputs.push(c);
			resultPos = validInputs.length - 1;
		}

		while (maskset.excludes[decisionPos] !== undefined && maskset.excludes[decisionPos].length < 10) {
			// maskset.tests[decisionPos] = undefined; //clear decisionPos
			maskset.tests = {};  //clear all
			_positioning__WEBPACK_IMPORTED_MODULE_2__.resetMaskSet.call(inputmask, true); //clear getbuffer
			isValidRslt = true;
			for (i = 0; i < validInputs.length; i++) {
				nextPos = isValidRslt.caret || (_positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask, undefined, true) + 1);
				input = validInputs[i];
				// nextPos = translatePosition.call(inputmask, nextPos);
				if (!(isValidRslt = isValid.call(inputmask, nextPos, input, false, fromIsValid, true))) {
					break;
				}
				if (i === resultPos) {
					returnRslt = isValidRslt;
				}
				if (maskPos == true && isValidRslt) {  //return validposition on generalise
					returnRslt = {caretPos: i};
				}
			}
			if (!isValidRslt) {
				_positioning__WEBPACK_IMPORTED_MODULE_2__.resetMaskSet.call(inputmask);
				prevAltPos = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, decisionPos);  //get the current decisionPos to exclude ~ needs to be before restoring the initial validation
				//reset & revert
				maskset.validPositions = $.extend(true, {}, validPsClone);
				maskset.tests = $.extend(true, {}, tstClone); //refresh tests after possible alternating
				if (maskset.excludes[decisionPos]) {
					var decisionTaker = (0,_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getDecisionTaker)(prevAltPos);
					if (maskset.excludes[decisionPos].indexOf(decisionTaker + ":" + prevAltPos.alternation) !== -1) {
						returnRslt = alternate.call(inputmask, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
						break;
					}
					maskset.excludes[decisionPos].push(decisionTaker + ":" + prevAltPos.alternation);
					for (i = decisionPos; i < _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask, undefined, true) + 1; i++) delete maskset.validPositions[i];
				} else { //latest alternation
					returnRslt = alternate.call(inputmask, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
					break;
				}
			} else {
				break;
			}
		}
	}
	//reset alternation excludes
	if (!returnRslt || opts.keepStatic !== false) {
		delete maskset.excludes[decisionPos];
	}
	return returnRslt;
}

function casing(elem, test, pos) {
	const opts = this.opts,
		maskset = this.maskset;

	switch (opts.casing || test.casing) {
		case "upper":
			elem = elem.toUpperCase();
			break;
		case "lower":
			elem = elem.toLowerCase();
			break;
		case "title":
			var posBefore = maskset.validPositions[pos - 1];
			if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(_keycode_json__WEBPACK_IMPORTED_MODULE_1__.SPACE)) {
				elem = elem.toUpperCase();
			} else {
				elem = elem.toLowerCase();
			}
			break;
		default:
			if (typeof opts.casing === "function") {
				var args = Array.prototype.slice.call(arguments);
				args.push(maskset.validPositions);
				elem = opts.casing.apply(this, args);
			}
	}

	return elem;
}

//tobe put on prototype?
function checkAlternationMatch(altArr1, altArr2, na) {
	const opts = this.opts;

	var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1),
		isMatch = false,
		naArr = na !== undefined ? na.split(",") : [],
		naNdx;

	//remove no alternate indexes from alternation array
	for (var i = 0; i < naArr.length; i++) {
		if ((naNdx = altArr1.indexOf(naArr[i])) !== -1) {
			altArr1.splice(naNdx, 1);
		}
	}

	for (var alndx = 0; alndx < altArr1.length; alndx++) {
		if (altArrC.includes(altArr1[alndx])) {
			isMatch = true;
			break;
		}
	}
	return isMatch;
}

//tobe put on prototype?
function handleRemove(input, k, pos, strict, fromIsValid) {
	const inputmask = this, maskset = this.maskset, opts = this.opts;

	if (opts.numericInput || inputmask.isRTL) {
		if (k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.BACKSPACE) {
			k = _keycode_json__WEBPACK_IMPORTED_MODULE_1__.DELETE;
		} else if (k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.DELETE) {
			k = _keycode_json__WEBPACK_IMPORTED_MODULE_1__.BACKSPACE;
		}

		if (inputmask.isRTL) {
			var pend = pos.end;
			pos.end = pos.begin;
			pos.begin = pend;
		}
	}

	var lvp = _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask, undefined, true);
	if (pos.end >= _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask).length && lvp >= pos.end) { //handle numeric negate symbol offset, due to  dynamic jit masking
		pos.end = lvp + 1;
	}

	if (k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.BACKSPACE) {
		if ((pos.end - pos.begin < 1)) {
			pos.begin = _positioning__WEBPACK_IMPORTED_MODULE_2__.seekPrevious.call(inputmask, pos.begin);
		}
	} else if (k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.DELETE) {
		if (pos.begin === pos.end) {
			pos.end = _positioning__WEBPACK_IMPORTED_MODULE_2__.isMask.call(inputmask, pos.end, true, true) ? pos.end + 1 : _positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, pos.end) + 1;
		}
	}
	var offset;
	if ((offset = revalidateMask.call(inputmask, pos)) !== false) {
		if (strict !== true && opts.keepStatic !== false || (opts.regex !== null && _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, pos.begin).match.def.indexOf("|") !== -1)) { //TODO NEEDS BETTER CHECK WHEN TO ALTERNATE  ~ opts regex isn"t good enough
			var result = alternate.call(inputmask, true);
			if (result) {
				var newPos = result.caret !== undefined ? result.caret : (result.pos ? _positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, result.pos.begin ? result.pos.begin : result.pos) : _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask, -1, true));
				if (k !== _keycode_json__WEBPACK_IMPORTED_MODULE_1__.DELETE || pos.begin > newPos) {
					pos.begin == newPos;
				}
			}
		}

		if (strict !== true) {
			maskset.p = k === _keycode_json__WEBPACK_IMPORTED_MODULE_1__.DELETE ? pos.begin + offset : pos.begin;
			maskset.p = _positioning__WEBPACK_IMPORTED_MODULE_2__.determineNewCaretPosition.call(inputmask, {
				begin: maskset.p,
				end: maskset.p
			}, false).begin;
		}
	}
}

//tobe put on prototype?
function isComplete(buffer) { //return true / false / undefined (repeat *)
	const inputmask = this, opts = this.opts, maskset = this.maskset;

	if (typeof opts.isComplete === "function") return opts.isComplete(buffer, opts);
	if (opts.repeat === "*") return undefined;
	var complete = false,
		lrp = _positioning__WEBPACK_IMPORTED_MODULE_2__.determineLastRequiredPosition.call(inputmask, true),
		aml = _positioning__WEBPACK_IMPORTED_MODULE_2__.seekPrevious.call(inputmask, lrp.l);

	if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
		complete = true;
		for (var i = 0; i <= aml; i++) {
			var test = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTestTemplate.call(inputmask, i).match;
			if ((test.static !== true && maskset.validPositions[i] === undefined && test.optionality !== true && test.optionalQuantifier !== true) || (test.static === true && buffer[i] !== _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, i, test))) {
				complete = false;
				break;
			}
		}
	}
	return complete;
}

//tobe put on prototype?
function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly, fromCheckval) { //strict true ~ no correction or autofill
	const inputmask = this,
		$ = this.dependencyLib,
		opts = this.opts,
		maskset = inputmask.maskset;

	function isSelection(posObj) {
		return inputmask.isRTL ? (posObj.begin - posObj.end) > 1 || ((posObj.begin - posObj.end) === 1) :
			(posObj.end - posObj.begin) > 1 || ((posObj.end - posObj.begin) === 1);
	}

	strict = strict === true; //always set a value to strict to prevent possible strange behavior in the extensions

	var maskPos = pos;
	if (pos.begin !== undefined) { //position was a position object - used to handle a delete by typing over a selection
		maskPos = inputmask.isRTL ? pos.end : pos.begin;
	}

	function processCommandObject(commandObj) {
		if (commandObj !== undefined) {
			if (commandObj.remove !== undefined) { //remove position(s)
				if (!Array.isArray(commandObj.remove)) commandObj.remove = [commandObj.remove];
				commandObj.remove.sort(function (a, b) {
					return b.pos - a.pos;
				}).forEach(function (lmnt) {
					revalidateMask.call(inputmask, {begin: lmnt, end: lmnt + 1});
				});
				commandObj.remove = undefined;
			}
			if (commandObj.insert !== undefined) { //insert position(s)
				if (!Array.isArray(commandObj.insert)) commandObj.insert = [commandObj.insert];
				commandObj.insert.sort(function (a, b) {
					return a.pos - b.pos;
				}).forEach(function (lmnt) {
					if (lmnt.c !== "") {
						isValid.call(inputmask, lmnt.pos, lmnt.c, lmnt.strict !== undefined ? lmnt.strict : true, lmnt.fromIsValid !== undefined ? lmnt.fromIsValid : fromIsValid);
					}
				});
				commandObj.insert = undefined;
			}

			if (commandObj.refreshFromBuffer && commandObj.buffer) {
				var refresh = commandObj.refreshFromBuffer;
				refreshFromBuffer.call(inputmask, refresh === true ? refresh : refresh.start, refresh.end, commandObj.buffer);
				commandObj.refreshFromBuffer = undefined;
			}

			if (commandObj.rewritePosition !== undefined) {
				maskPos = commandObj.rewritePosition;
				// commandObj.rewritePosition = undefined;
				commandObj = true;
			}
		}
		return commandObj;
	}

	function _isValid(position, c, strict) {
		var rslt = false;
		_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTests.call(inputmask, position).every(function (tst, ndx) {
			var test = tst.match;
			//make sure the buffer is set and correct
			_positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask, true);
			if (test.jit && maskset.validPositions[_positioning__WEBPACK_IMPORTED_MODULE_2__.seekPrevious.call(inputmask, position)] === undefined) //ignore if jit is not desirable
			{
				rslt = false;
			} else {
				//return is false or a json object => { pos: ??, c: ??} or true
				rslt = test.fn != null ?
					test.fn.test(c, maskset, position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && test.def !== "" ? //non mask
						{
							c: _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, position, test, true) || test.def,
							pos: position
						} : false;
			}
			if (rslt !== false) {
				var elem = rslt.c !== undefined ? rslt.c : c, validatedPos = position;
				elem = (elem === opts.skipOptionalPartCharacter && test.static === true) ?
					(_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, position, test, true) || test.def) : elem;

				rslt = processCommandObject(rslt);

				if (rslt !== true && rslt.pos !== undefined && rslt.pos !== position) { //their is a position offset
					validatedPos = rslt.pos;
				}

				if (rslt !== true && rslt.pos === undefined && rslt.c === undefined) {
					return false; //breakout if nothing to insert
				}

				if (revalidateMask.call(inputmask, pos, $.extend({}, tst, {
					"input": casing.call(inputmask, elem, test, validatedPos)
				}), fromIsValid, validatedPos) === false) {
					rslt = false;
				}
				return false; //break from loop
			}

			return true;
		});
		return rslt;
	}

	var result = true,
		positionsClone = $.extend(true, {}, maskset.validPositions); //clone the currentPositions

	if (opts.keepStatic === false && maskset.excludes[maskPos] !== undefined && fromAlternate !== true && fromIsValid !== true) {
		for (var i = maskPos; i < (inputmask.isRTL ? pos.begin : pos.end); i++) {
			if (maskset.excludes[i] !== undefined) {
				maskset.excludes[i] = undefined;
				delete maskset.tests[i];
			}
		}
	}

	if (typeof opts.preValidation === "function" && fromIsValid !== true && validateOnly !== true) {
		result = opts.preValidation.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask), maskPos, c, isSelection(pos), opts, maskset, pos, strict || fromAlternate);
		result = processCommandObject(result);
	}
	if (result === true) { //preValidation result
		result = _isValid(maskPos, c, strict);
		if ((!strict || fromIsValid === true) && result === false && validateOnly !== true) {
			var currentPosValid = maskset.validPositions[maskPos];
			if (currentPosValid && currentPosValid.match.static === true && (currentPosValid.match.def === c || c === opts.skipOptionalPartCharacter)) {
				result = {
					"caret": _positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, maskPos)
				};
			} else {
				if (opts.insertMode || maskset.validPositions[_positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, maskPos)] === undefined || pos.end > maskPos) { //does the input match on a further position?
					var skip = false;
					if (maskset.jitOffset[maskPos] && maskset.validPositions[_positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, maskPos)] === undefined) {
						result = isValid.call(inputmask, maskPos + maskset.jitOffset[maskPos], c, true, true);
						if (result !== false) {
							if (fromAlternate !== true) result.caret = maskPos;
							skip = true;
						}
					}
					if (pos.end > maskPos) {
						maskset.validPositions[maskPos] = undefined;
					}
					if (!skip && !_positioning__WEBPACK_IMPORTED_MODULE_2__.isMask.call(inputmask, maskPos, opts.keepStatic && maskPos === 0)) {
						for (var nPos = maskPos + 1, snPos = _positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, maskPos, false, maskPos !== 0); nPos <= snPos; nPos++) {
							// if (!isMask(nPos, true)) {
							// 	continue;
							// }
							result = _isValid(nPos, c, strict);
							if (result !== false) {
								result = trackbackPositions.call(inputmask, maskPos, result.pos !== undefined ? result.pos : nPos) || result;
								maskPos = nPos;
								break;
							}
						}
					}
				}
			}
		}

		if (result === false && opts.keepStatic && (isComplete.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask)) || maskPos === 0) && !strict && fromAlternate !== true) { //try fuzzy alternator logic
			result = alternate.call(inputmask, maskPos, c, strict, fromIsValid, undefined, pos);
		} else if (isSelection(pos) && maskset.tests[maskPos] && maskset.tests[maskPos].length > 1 && opts.keepStatic && !strict && fromAlternate !== true) { //selection clears an alternated keepstatic mask ~ #2189
			result = alternate.call(inputmask, true);
		}

		if (result === true) {
			result = {
				"pos": maskPos
			};
		}
	}
	if (typeof opts.postValidation === "function" && fromIsValid !== true && validateOnly !== true) {
		var postResult = opts.postValidation.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask, true), pos.begin !== undefined ? (inputmask.isRTL ? pos.end : pos.begin) : pos, c, result, opts, maskset, strict, fromCheckval);
		if (postResult !== undefined) {
			result = postResult === true ? result : postResult;
		}
	}

	if (result && result.pos === undefined) {
		result.pos = maskPos;
	}

	if (result === false || validateOnly === true) {
		_positioning__WEBPACK_IMPORTED_MODULE_2__.resetMaskSet.call(inputmask, true);
		maskset.validPositions = $.extend(true, {}, positionsClone); //revert validation changes
	} else {
		trackbackPositions.call(inputmask, undefined, maskPos, true);
	}

	var endResult = processCommandObject(result);
	// console.log("returned result " + JSON.stringify(endResult));
	if (inputmask.maxLength !== undefined) {
		var buffer = _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask);
		if (buffer.length > inputmask.maxLength && !fromIsValid) {
			_positioning__WEBPACK_IMPORTED_MODULE_2__.resetMaskSet.call(inputmask, true);
			maskset.validPositions = $.extend(true, {}, positionsClone); //revert validation changes
			endResult = false;
		}
	}
	return endResult;
}

//tobe put on prototype?
function positionCanMatchDefinition(pos, testDefinition, opts) {
	const inputmask = this,
		maskset = this.maskset;

	var valid = false,
		tests = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTests.call(inputmask, pos);
	for (var tndx = 0; tndx < tests.length; tndx++) {
		if (tests[tndx].match &&
			((tests[tndx].match["nativeDef"] === testDefinition.match[opts.shiftPositions ? "def" : "nativeDef"] && (!opts.shiftPositions || !testDefinition.match.static)) ||
				tests[tndx].match["nativeDef"] === testDefinition.match["nativeDef"] || (opts.regex && !tests[tndx].match.static && tests[tndx].match.fn.test(testDefinition.input)))) {
			valid = true;
			break;
		} else if (tests[tndx].match && tests[tndx].match["def"] === testDefinition.match["nativeDef"]) {
			valid = undefined;
			break;
		}
	}
	if (valid === false) {
		if (maskset.jitOffset[pos] !== undefined) {
			valid = positionCanMatchDefinition.call(inputmask, pos + maskset.jitOffset[pos], testDefinition, opts);
		}
	}
	return valid;
}

//tobe put on prototype?
function refreshFromBuffer(start, end, buffer) {
	const inputmask = this,
		maskset = this.maskset,
		opts = this.opts,
		$ = this.dependencyLib;
	// checkVal.call(inputmask, el, false, true, isRTL ? buffer.reverse() : buffer);
	var i, p, skipOptionalPartCharacter = opts.skipOptionalPartCharacter,
		bffr = inputmask.isRTL ? buffer.slice().reverse() : buffer;
	opts.skipOptionalPartCharacter = "";
	if (start === true) {
		_positioning__WEBPACK_IMPORTED_MODULE_2__.resetMaskSet.call(inputmask);
		maskset.tests = {}; //refresh tests after possible alternating
		start = 0;
		end = buffer.length;
		p = _positioning__WEBPACK_IMPORTED_MODULE_2__.determineNewCaretPosition.call(inputmask, {begin: 0, end: 0}, false).begin;
	} else {
		for (i = start; i < end; i++) {
			delete maskset.validPositions[i];
		}
		p = start;
	}

	var keypress = new $.Event("keypress");
	for (i = start; i < end; i++) {
		keypress.which = bffr[i].toString().charCodeAt(0);
		inputmask.ignorable = false; //make sure ignorable is ignored ;-)
		var valResult = _eventhandlers__WEBPACK_IMPORTED_MODULE_3__.EventHandlers.keypressEvent.call(inputmask, keypress, true, false, false, p);
		if (valResult !== false && valResult !== undefined) {
			p = valResult.forwardPosition;
		}
	}

	opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
}

//tobe put on prototype?
//fill in best positions according the current input
function trackbackPositions(originalPos, newPos, fillOnly) {
	const inputmask = this,
		maskset = this.maskset,
		$ = this.dependencyLib;

	// console.log("trackbackPositions " + originalPos + " " + newPos);
	if (originalPos === undefined) {
		//find previous valid
		for (originalPos = newPos - 1; originalPos > 0; originalPos--) {
			if (maskset.validPositions[originalPos]) break;
		}
	}
	for (var ps = originalPos; ps < newPos; ps++) {
		if (maskset.validPositions[ps] === undefined && !_positioning__WEBPACK_IMPORTED_MODULE_2__.isMask.call(inputmask, ps, false)) {
			var vp = ps == 0 ? _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, ps) : maskset.validPositions[ps - 1];
			if (vp) {
				var tests = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTests.call(inputmask, ps).slice();
				if (tests[tests.length - 1].match.def === "") tests.pop();
				var bestMatch = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.determineTestTemplate.call(inputmask, ps, tests), np;
				if (bestMatch && (bestMatch.match.jit !== true || (bestMatch.match.newBlockMarker === "master" && (np = maskset.validPositions[ps + 1]) && np.match.optionalQuantifier === true))) {
					bestMatch = $.extend({}, bestMatch, {
						"input": _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, ps, bestMatch.match, true) || bestMatch.match.def
					});
					bestMatch.generatedInput = true;
					revalidateMask.call(inputmask, ps, bestMatch, true);

					if (fillOnly !== true) {
						//revalidate the new position to update the locator value
						var cvpInput = maskset.validPositions[newPos].input;
						maskset.validPositions[newPos] = undefined;
						return isValid.call(inputmask, newPos, cvpInput, true, true);
					}
				}
			}
		}
	}
}

//tobe put on prototype?
function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
	const inputmask = this,
		maskset = this.maskset,
		opts = this.opts,
		$ = this.dependencyLib;

	function IsEnclosedStatic(pos, valids, selection) {
		var posMatch = valids[pos];
		if (posMatch !== undefined && posMatch.match.static === true && posMatch.match.optionality !== true && (valids[0] === undefined || valids[0].alternation === undefined)) {
			var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && valids[pos - 1].match.static === true && valids[pos - 1] : valids[pos - 1],
				nextMatch = selection.end > pos + 1 ? valids[pos + 1] && valids[pos + 1].match.static === true && valids[pos + 1] : valids[pos + 1];
			return prevMatch && nextMatch;
		}
		return false;
	}

	var offset = 0, begin = pos.begin !== undefined ? pos.begin : pos, end = pos.end !== undefined ? pos.end : pos,
		valid = true;
	if (pos.begin > pos.end) {
		begin = pos.end;
		end = pos.begin;
	}

	validatedPos = validatedPos !== undefined ? validatedPos : begin;
	if (begin !== end || (opts.insertMode && maskset.validPositions[validatedPos] !== undefined && fromIsValid === undefined) || validTest === undefined) {
		//reposition & revalidate others
		var positionsClone = $.extend(true, {}, maskset.validPositions),
			lvp = _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask, undefined, true),
			i;
		maskset.p = begin; //needed for alternated position after overtype selection

		for (i = lvp; i >= begin; i--) {
			delete maskset.validPositions[i];
			if (validTest === undefined) delete maskset.tests[i + 1];
		}

		var j = validatedPos,
			posMatch = j, t, canMatch;

		if (validTest) {
			maskset.validPositions[validatedPos] = $.extend(true, {}, validTest);
			posMatch++;
			j++;
		}

		for (i = validTest ? end : end - 1; i <= lvp; i++) {
			if ((t = positionsClone[i]) !== undefined && t.generatedInput !== true &&
				(i >= end || (i >= begin && IsEnclosedStatic(i, positionsClone, {
					begin: begin,
					end: end
				})))) {
				while (_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, posMatch).match.def !== "") { //loop needed to match further positions
					if ((canMatch = positionCanMatchDefinition.call(inputmask, posMatch, t, opts)) !== false || t.match.def === "+") { //validated match //we still need some hackery for the + validator (numeric alias)
						if (t.match.def === "+") _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask, true);
						var result = isValid.call(inputmask, posMatch, t.input, t.match.def !== "+", /*t.match.def !== "+"*/ true);
						valid = result !== false;
						j = (result.pos || posMatch) + 1;
						if (!valid && canMatch) break;
					} else {
						valid = false;
					}
					if (valid) {
						if (validTest === undefined && t.match.static && i === pos.begin) offset++;
						break;
					}
					if (!valid && posMatch > maskset.maskLength) {
						break;
					}
					posMatch++;
				}
				if (_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, posMatch).match.def == "") {
					valid = false;
				}
				//restore position
				posMatch = j;
			}
			if (!valid) break;
		}
		if (!valid) {
			maskset.validPositions = $.extend(true, {}, positionsClone);
			_positioning__WEBPACK_IMPORTED_MODULE_2__.resetMaskSet.call(inputmask, true);
			return false;
		}
	} else if (validTest && _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, validatedPos).match.cd === validTest.match.cd) {
		maskset.validPositions[validatedPos] = $.extend(true, {}, validTest);
	}

	_positioning__WEBPACK_IMPORTED_MODULE_2__.resetMaskSet.call(inputmask, true);
	return offset;
}


/***/ })

}]);
//# sourceMappingURL=inputmask.fd14ae122d9b0fe227b0.js.map