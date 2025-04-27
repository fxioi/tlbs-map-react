function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * @desc 地图组件
 */
import React, { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { MapContext, useEventListener } from "./..";
// 加载地图资源标签
var script;
// 加载地图资源回调数组
var resolveArr = [];

/**
 * 异步加载地图资源
 * @param key 地图 key
 * @param libraries 地图附加库
 */
export var loadScript = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(key, libraries) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve) {
            if (window.TMap) {
              resolve(true);
              return;
            }

            // @important 这种写法可以同时展示多个地图
            resolveArr.push(resolve);
            if (!window.initGLMap) {
              window.initGLMap = function () {
                resolveArr.forEach(function (resolve) {
                  resolve(true);
                });
              };
            }

            // 防止标签多次加载
            if (!script) {
              script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = libraries ? "https://map.qq.com/api/gljs?v=1.exp&key=".concat(key, "&libraries=").concat(libraries, "&callback=initGLMap") : "https://map.qq.com/api/gljs?v=1.exp&key=".concat(key, "&callback=initGLMap");
              document.body.appendChild(script);
            }
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function loadScript(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 设置地图控件的函数
 * @param map 地图实例
 * @param controlId 地图控件 ID
 * @param config 地图控件配置
 */
var setMapControl = function setMapControl(map, showControl, control) {
  var CONTROL_ID = {
    scale: 'scale',
    zoom: 'zoom',
    rotation: 'rotation'
  };
  var CONTROL_POSITION = {
    topLeft: TMap.constants.CONTROL_POSITION.TOP_LEFT,
    topCenter: TMap.constants.CONTROL_POSITION.TOP_CENTER,
    topRight: TMap.constants.CONTROL_POSITION.TOP_RIGHT,
    centerLeft: TMap.constants.CONTROL_POSITION.CENTER_LEFT,
    center: TMap.constants.CONTROL_POSITION.CENTER,
    centerRight: TMap.constants.CONTROL_POSITION.CENTER_RIGHT,
    bottomLeft: TMap.constants.CONTROL_POSITION.BOTTOM_LEFT,
    bottomCenter: TMap.constants.CONTROL_POSITION.BOTTOM_CENTER,
    bottomRight: TMap.constants.CONTROL_POSITION.BOTTOM_RIGHT
  };
  if (!map) return;
  // 不显示控件
  if (!showControl) {
    Object.keys(CONTROL_ID).forEach(function (item) {
      return map.removeControl(CONTROL_ID[item]);
    });
    return;
  }

  // 遍历设置三个控件
  Object.keys(CONTROL_ID).forEach(function (item) {
    // 获取控件实例
    var controlIns = map.getControl(CONTROL_ID[item]);
    // 如果控件实例被移除过，则需要重新添加
    // @ts-ignore
    if (!controlIns.map) {
      map.addControl(controlIns);
    }
    if (control) {
      // 如果没有传递该控件位置和类名，则移除该控件
      if (!control[item]) {
        map.removeControl(CONTROL_ID[item]);
      }
      // 解构控件参数并设置控件位置和类名
      var _ref2 = control[item] || {},
        position = _ref2.position,
        className = _ref2.className,
        numVisible = _ref2.numVisible;
      position && controlIns.setPosition(CONTROL_POSITION[position]);
      className && controlIns.setClassName(className);
      item === 'zoom' && controlIns.setNumVisible(!!numVisible);
    }
  });
};

// @type 地图实例参数类型

// 地图组件
var TMapComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  // 结构 props 并设置默认值
  var _ref3 = props,
    _ref3$apiKey = _ref3.apiKey,
    apiKey = _ref3$apiKey === void 0 ? '' : _ref3$apiKey,
    _ref3$libraries = _ref3.libraries,
    libraries = _ref3$libraries === void 0 ? 'visualization,geometry,tools' : _ref3$libraries,
    _ref3$className = _ref3.className,
    className = _ref3$className === void 0 ? 'tmap-container' : _ref3$className,
    _ref3$style = _ref3.style,
    style = _ref3$style === void 0 ? {
      height: '100%',
      width: '100%'
    } : _ref3$style,
    _ref3$control = _ref3.control,
    control = _ref3$control === void 0 ? undefined : _ref3$control,
    _ref3$duration = _ref3.duration,
    duration = _ref3$duration === void 0 ? 500 : _ref3$duration,
    _ref3$options = _ref3.options,
    options = _ref3$options === void 0 ? {} : _ref3$options,
    children = _ref3.children;
  var _options$center = options.center,
    center = _options$center === void 0 ? {
      lat: 40.0404,
      lng: 116.2735
    } : _options$center,
    _options$zoom = options.zoom,
    zoom = _options$zoom === void 0 ? 12 : _options$zoom,
    _options$minZoom = options.minZoom,
    minZoom = _options$minZoom === void 0 ? 3 : _options$minZoom,
    _options$maxZoom = options.maxZoom,
    maxZoom = _options$maxZoom === void 0 ? 20 : _options$maxZoom,
    _options$rotation = options.rotation,
    rotation = _options$rotation === void 0 ? 0 : _options$rotation,
    _options$pitch = options.pitch,
    pitch = _options$pitch === void 0 ? 0 : _options$pitch,
    _options$scale = options.scale,
    scale = _options$scale === void 0 ? 1 : _options$scale,
    _options$offset = options.offset,
    offset = _options$offset === void 0 ? {
      x: 0,
      y: 0
    } : _options$offset,
    _options$draggable = options.draggable,
    draggable = _options$draggable === void 0 ? true : _options$draggable,
    _options$scrollable = options.scrollable,
    scrollable = _options$scrollable === void 0 ? true : _options$scrollable,
    _options$pitchable = options.pitchable,
    pitchable = _options$pitchable === void 0 ? true : _options$pitchable,
    _options$rotatable = options.rotatable,
    rotatable = _options$rotatable === void 0 ? true : _options$rotatable,
    _options$doubleClickZ = options.doubleClickZoom,
    doubleClickZoom = _options$doubleClickZ === void 0 ? true : _options$doubleClickZ,
    mapZoomType = options.mapZoomType,
    _options$boundary = options.boundary,
    boundary = _options$boundary === void 0 ? undefined : _options$boundary,
    mapStyleId = options.mapStyleId,
    _options$baseMap = options.baseMap,
    baseMap = _options$baseMap === void 0 ? {
      type: 'vector'
    } : _options$baseMap,
    _options$viewMode = options.viewMode,
    viewMode = _options$viewMode === void 0 ? '3D' : _options$viewMode,
    _options$showControl = options.showControl,
    showControl = _options$showControl === void 0 ? true : _options$showControl,
    renderOptions = options.renderOptions,
    clip = options.clip;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    map = _useState2[0],
    setMap = _useState2[1]; // 存储地图实例
  var domRef = useRef(null); // 地图容器
  var isInitMapInstance = false;

  /** 初始化地图 */
  var initMap = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var result, mapInstance;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return loadScript(apiKey, libraries);
          case 3:
            result = _context2.sent;
            if (result && domRef.current && !isInitMapInstance) {
              // 创建地图实例
              mapInstance = new TMap.Map(domRef.current, {
                center: new TMap.LatLng(center.lat, center.lng),
                zoom: zoom,
                minZoom: minZoom,
                maxZoom: maxZoom,
                rotation: rotation,
                pitch: pitch,
                scale: scale,
                offset: offset,
                draggable: draggable,
                scrollable: scrollable,
                pitchable: pitchable,
                rotatable: rotatable,
                doubleClickZoom: doubleClickZoom,
                mapZoomType: mapZoomType,
                boundary: boundary ? new TMap.LatLngBounds(new TMap.LatLng(boundary.sw.lat, boundary.sw.lng), new TMap.LatLng(boundary.ne.lat, boundary.ne.lng)) : undefined,
                mapStyleId: mapStyleId,
                baseMap: baseMap,
                viewMode: viewMode,
                showControl: showControl,
                renderOptions: renderOptions,
                clip: clip
              });
              isInitMapInstance = true;
              setMap(mapInstance);

              // 设置地图控件
              setMapControl(mapInstance, showControl, control);
              if (props.onMapInited) {
                // 延迟触发，保证在事件回调中获取到地图及图层实例
                setTimeout(function () {
                  props.onMapInited(mapInstance);
                });
              }
            }
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function initMap() {
      return _ref4.apply(this, arguments);
    };
  }();

  // @hook 初始化地图
  useEffect(function () {
    if (!map) initMap();
    return function () {
      return map === null || map === void 0 ? void 0 : map.destroy();
    };
  }, []);

  // @hook 绑定事件
  useEventListener(map, props);

  // @hook 让父组件能够通过 ref 访问到子组件内部的 map 地图实例
  useImperativeHandle(ref, function () {
    return map;
  }, [map]);

  // @hook 监听地图中心点改变
  useEffect(function () {
    map === null || map === void 0 || map.panTo(new TMap.LatLng(center.lat, center.lng), {
      duration: duration
    });
  }, [center]);

  // @hook 监听地图缩放级别改变
  useEffect(function () {
    map === null || map === void 0 || map.zoomTo(zoom, {
      duration: duration
    });
  }, [zoom]);

  // @hook 监听地图最小缩放级别改变
  useEffect(function () {
    map === null || map === void 0 || map.setMinZoom(minZoom);
  }, [minZoom]);

  // @hook 监听地图最大缩放级别改变
  useEffect(function () {
    map === null || map === void 0 || map.setMaxZoom(maxZoom);
  }, [maxZoom]);

  // @hook 监听地图水平旋转角度改变
  useEffect(function () {
    map === null || map === void 0 || map.rotateTo(rotation, {
      duration: duration
    });
  }, [rotation]);

  // @hook 监听地图俯仰角度改变
  useEffect(function () {
    map === null || map === void 0 || map.pitchTo(pitch, {
      duration: duration
    });
  }, [pitch]);

  // @hook 监听地图显示比例改变
  useEffect(function () {
    map === null || map === void 0 || map.setScale(scale);
  }, [scale]);

  // @hook 监听地图中心与容器的偏移量改变
  useEffect(function () {
    map === null || map === void 0 || map.setOffset(offset);
  }, [offset]);

  // @hook 监听地图是否可拖拽
  useEffect(function () {
    map === null || map === void 0 || map.setDraggable(draggable);
  }, [draggable]);

  // @hook 监听地图是否可鼠标滚轮缩放地图
  useEffect(function () {
    map === null || map === void 0 || map.setScrollable(scrollable);
  }, [scrollable]);

  // @hook 监听地图是否可可调节俯仰
  useEffect(function () {
    map === null || map === void 0 || map.setPitchable(pitchable);
  }, [pitchable]);

  // @hook 监听地图可调节旋转
  useEffect(function () {
    map === null || map === void 0 || map.setRotatable(rotatable);
  }, [rotatable]);

  // @hook 监听地图是否可双击缩放地图
  useEffect(function () {
    map === null || map === void 0 || map.setDoubleClickZoom(doubleClickZoom);
  }, [doubleClickZoom]);

  // @hook 监听地图边界改变
  useEffect(function () {
    if (boundary) {
      map === null || map === void 0 || map.setBoundary(new TMap.LatLngBounds(new TMap.LatLng(boundary.sw.lat, boundary.sw.lng), new TMap.LatLng(boundary.ne.lat, boundary.ne.lng)));
    }
  }, [boundary]);

  // @hook 监听地图底图改变
  useEffect(function () {
    map === null || map === void 0 || map.setBaseMap(baseMap);
  }, [baseMap]);

  // @hook 监听地图视图模式改变
  useEffect(function () {
    map === null || map === void 0 || map.setViewMode(viewMode);
  }, [viewMode]);

  // @hook 监听地图控件改变
  useEffect(function () {
    if (map) {
      setMapControl(map, showControl, control);
    }
  }, [showControl, control]);

  // @component 渲染子组件
  var childrenNode = useMemo(function () {
    return React.Children.map(children, function (child) {
      if (!map) return;
      if ( /*#__PURE__*/React.isValidElement(child)) {
        return /*#__PURE__*/React.cloneElement(child);
      }
    });
  }, [map, children]);
  return /*#__PURE__*/React.createElement(MapContext.Provider, {
    value: map
  }, /*#__PURE__*/React.createElement("div", {
    ref: domRef,
    className: className,
    style: style
  }, childrenNode));
});
export default TMapComponent;