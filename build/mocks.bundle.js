/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./mock-data/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./mock-data/defaults.ts":
/*!*******************************!*\
  !*** ./mock-data/defaults.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultDeckStats = {
    model: 'Shiawase Cyber-5',
    deckLimits: {
        attack: 1,
        sleaze: 2,
        dataProcessing: 3,
        firewall: 4
    },
    deviceRating: 4,
    programSlots: 4,
    conditionMonitor: 12,
    currentCondition: 0
};
exports.defaultDecker = {
    augs: {
        antennaWireless: false,
        dataJackWireless: false,
        narco: false,
        neocorticalNanites: false,
        pushed: false
    },
    currentPhysical: 0,
    currentStun: 0,
    drugs: {
        cereprax: false,
        chillBtl: false,
        hurlg: false,
        novacoke: false,
        overdrive: false,
        psyche: false,
        redMesc: false,
        trance: false,
        zen: false
    },
    edge: 6,
    edgeUsed: 2,
    qualities: {
        impenetrableLogic: false,
        overdrive: false
    },
    attributes: {
        body: 2,
        agility: 3,
        reaction: 5,
        strength: 1,
        willpower: 5,
        intuition: 6,
        logic: 9,
        charisma: 3
    },
    skills: {}
};
exports.defaultEnvironment = {
    inHost: false,
    noise: 0,
    vr: false,
    hotSim: false,
    runningSilent: false,
    publicGrid: false,
    targetOtherGrid: false,
    teamwork: 0
};


/***/ }),

/***/ "./mock-data/index.ts":
/*!****************************!*\
  !*** ./mock-data/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defaults_1 = __webpack_require__(/*! ./defaults */ "./mock-data/defaults.ts");
var _services_1 = __webpack_require__(/*! @services */ "./src/services/index.ts");
exports.primeMockData = function () {
    _services_1.save({
        id: '1',
        deck: defaults_1.defaultDeckStats,
        decker: defaults_1.defaultDecker,
        environment: defaults_1.defaultEnvironment
    }, {
        showEditor: false
    });
};


/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./local-persistence */ "./src/services/local-persistence.ts"));


/***/ }),

/***/ "./src/services/local-persistence.ts":
/*!*******************************************!*\
  !*** ./src/services/local-persistence.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LOCAL_PERSISTENCE_NAMESPACE = 'cyberdeck-runner.';
function save(data, state) {
    localStorage.setItem(LOCAL_PERSISTENCE_NAMESPACE + 'data.' + data.id, JSON.stringify(data));
    localStorage.setItem(LOCAL_PERSISTENCE_NAMESPACE + 'state.' + data.id, JSON.stringify(state));
}
exports.save = save;
function load(id) {
    var dataString = localStorage.getItem(LOCAL_PERSISTENCE_NAMESPACE + 'data.' + id);
    var stateString = localStorage.getItem(LOCAL_PERSISTENCE_NAMESPACE + 'state.' + id);
    var loaded = { data: null, state: null };
    try {
        loaded.data = JSON.parse(dataString);
        loaded.state = JSON.parse(stateString);
    }
    catch (e) {
        // intentional fall through
    }
    return loaded;
}
exports.load = load;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9jay1kYXRhL2RlZmF1bHRzLnRzIiwid2VicGFjazovLy8uL21vY2stZGF0YS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2xvY2FsLXBlcnNpc3RlbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hGYSx3QkFBZ0IsR0FBUztJQUNsQyxLQUFLLEVBQUUsa0JBQWtCO0lBQ3pCLFVBQVUsRUFBRTtRQUNSLE1BQU0sRUFBRSxDQUFDO1FBQ1QsTUFBTSxFQUFFLENBQUM7UUFDVCxjQUFjLEVBQUUsQ0FBQztRQUNqQixRQUFRLEVBQUUsQ0FBQztLQUNkO0lBQ0QsWUFBWSxFQUFFLENBQUM7SUFDZixZQUFZ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UUFDckMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVksQ0FBQztLQUMxQztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsMkJBQTJCO0tBQzlCO0lBQ0QsT0FBTyxNQUFNO0FBQ2pCLENBQUM7QUFYRCxvQkFXQyIsImZpbGUiOiJtb2Nrcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21vY2stZGF0YS9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IERlY2ssIERlY2tlciwgRW52aXJvbm1lbnQgfSBmcm9tICdAbW9kZWxzJ1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdERlY2tTdGF0czogRGVjayA9IHtcbiAgICBtb2RlbDogJ1NoaWF3YXNlIEN5YmVyLTUnLFxuICAgIGRlY2tMaW1pdHM6IHtcbiAgICAgICAgYXR0YWNrOiAxLFxuICAgICAgICBzbGVhemU6IDIsXG4gICAgICAgIGRhdGFQcm9jZXNzaW5nOiAzLFxuICAgICAgICBmaXJld2FsbDogNFxuICAgIH0sXG4gICAgZGV2aWNlUmF0aW5nOiA0LFxuICAgIHByb2dyYW1TbG90czogNCxcbiAgICBjb25kaXRpb25Nb25pdG9yOiAxMixcbiAgICBjdXJyZW50Q29uZGl0aW9uOiAwXG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0RGVja2VyOiBEZWNrZXIgPSB7XG4gICAgYXVnczoge1xuICAgICAgICBhbnRlbm5hV2lyZWxlc3M6IGZhbHNlLFxuICAgICAgICBkYXRhSmFja1dpcmVsZXNzOiBmYWxzZSxcbiAgICAgICAgbmFyY286IGZhbHNlLFxuICAgICAgICBuZW9jb3J0aWNhbE5hbml0ZXM6IGZhbHNlLFxuICAgICAgICBwdXNoZWQ6IGZhbHNlXG4gICAgfSxcbiAgICBjdXJyZW50UGh5c2ljYWw6IDAsXG4gICAgY3VycmVudFN0dW46IDAsXG4gICAgZHJ1Z3M6IHtcbiAgICAgICAgY2VyZXByYXg6IGZhbHNlLFxuICAgICAgICBjaGlsbEJ0bDogZmFsc2UsXG4gICAgICAgIGh1cmxnOiBmYWxzZSxcbiAgICAgICAgbm92YWNva2U6IGZhbHNlLFxuICAgICAgICBvdmVyZHJpdmU6IGZhbHNlLFxuICAgICAgICBwc3ljaGU6IGZhbHNlLFxuICAgICAgICByZWRNZXNjOiBmYWxzZSxcbiAgICAgICAgdHJhbmNlOiBmYWxzZSxcbiAgICAgICAgemVuOiBmYWxzZVxuICAgIH0sXG4gICAgZWRnZTogNixcbiAgICBlZGdlVXNlZDogMixcbiAgICBxdWFsaXRpZXM6IHtcbiAgICAgICAgaW1wZW5ldHJhYmxlTG9naWM6IGZhbHNlLFxuICAgICAgICBvdmVyZHJpdmU6IGZhbHNlXG4gICAgfSxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGJvZHk6IDIsXG4gICAgICAgIGFnaWxpdHk6IDMsXG4gICAgICAgIHJlYWN0aW9uOiA1LFxuICAgICAgICBzdHJlbmd0aDogMSxcbiAgICAgICAgd2lsbHBvd2VyOiA1LFxuICAgICAgICBpbnR1aXRpb246IDYsXG4gICAgICAgIGxvZ2ljOiA5LFxuICAgICAgICBjaGFyaXNtYTogM1xuICAgIH0sXG4gICAgc2tpbGxzOiB7fVxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEVudmlyb25tZW50OiBFbnZpcm9ubWVudCA9IHtcbiAgICBpbkhvc3Q6IGZhbHNlLFxuICAgIG5vaXNlOiAwLFxuICAgIHZyOiBmYWxzZSxcbiAgICBob3RTaW06IGZhbHNlLFxuICAgIHJ1bm5pbmdTaWxlbnQ6IGZhbHNlLFxuICAgIHB1YmxpY0dyaWQ6IGZhbHNlLFxuICAgIHRhcmdldE90aGVyR3JpZDogZmFsc2UsXG4gICAgdGVhbXdvcms6IDBcbn0iLCJpbXBvcnQgeyBkZWZhdWx0RGVja2VyLCBkZWZhdWx0RGVja1N0YXRzLCBkZWZhdWx0RW52aXJvbm1lbnQgfSBmcm9tICcuL2RlZmF1bHRzJ1xuaW1wb3J0IHsgc2F2ZSB9IGZyb20gJ0BzZXJ2aWNlcydcblxuZXhwb3J0IGNvbnN0IHByaW1lTW9ja0RhdGEgPSAoKSA9PiB7XG4gICAgc2F2ZSh7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIGRlY2s6IGRlZmF1bHREZWNrU3RhdHMsXG4gICAgICAgIGRlY2tlcjogZGVmYXVsdERlY2tlcixcbiAgICAgICAgZW52aXJvbm1lbnQ6IGRlZmF1bHRFbnZpcm9ubWVudFxuICAgIH0sIHtcbiAgICAgICAgc2hvd0VkaXRvcjogZmFsc2VcbiAgICB9KVxufSIsImV4cG9ydCAqIGZyb20gJy4vbG9jYWwtcGVyc2lzdGVuY2UnIiwiaW1wb3J0IHsgQXBwRGF0YSwgQXBwU3RhdGUgfSBmcm9tIFwiQG1vZGVsc1wiO1xuaW1wb3J0IHsgbG9jYWxzIH0gZnJvbSBcIkBzdHlsZXMvbWFycXVlLmNzc1wiO1xuXG5jb25zdCBMT0NBTF9QRVJTSVNURU5DRV9OQU1FU1BBQ0UgPSAnY3liZXJkZWNrLXJ1bm5lci4nXG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlIChkYXRhOiBBcHBEYXRhLCBzdGF0ZTogQXBwU3RhdGUpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9QRVJTSVNURU5DRV9OQU1FU1BBQ0UgKyAnZGF0YS4nICsgZGF0YS5pZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfUEVSU0lTVEVOQ0VfTkFNRVNQQUNFICsgJ3N0YXRlLicgKyBkYXRhLmlkLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkIChpZDogc3RyaW5nKTogeyBkYXRhOiBBcHBEYXRhIHwgbnVsbCwgc3RhdGU6IEFwcFN0YXRlIHwgbnVsbCB9IHtcbiAgICBjb25zdCBkYXRhU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfUEVSU0lTVEVOQ0VfTkFNRVNQQUNFICsgJ2RhdGEuJyArIGlkKVxuICAgIGNvbnN0IHN0YXRlU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfUEVSU0lTVEVOQ0VfTkFNRVNQQUNFICsgJ3N0YXRlLicgKyBpZClcbiAgICBjb25zdCBsb2FkZWQgPSB7IGRhdGE6IG51bGwsIHN0YXRlOiBudWxsIH1cbiAgICB0cnkge1xuICAgICAgICBsb2FkZWQuZGF0YSA9IEpTT04ucGFyc2UoZGF0YVN0cmluZyEpXG4gICAgICAgIGxvYWRlZC5zdGF0ZSA9IEpTT04ucGFyc2Uoc3RhdGVTdHJpbmchKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaW50ZW50aW9uYWwgZmFsbCB0aHJvdWdoXG4gICAgfVxuICAgIHJldHVybiBsb2FkZWRcbn0iXSwic291cmNlUm9vdCI6IiJ9