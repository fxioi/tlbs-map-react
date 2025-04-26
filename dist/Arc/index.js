function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @desc 弧线图组件
 */
import React, { useContext, useEffect, useImperativeHandle, useState } from 'react';
import { MapContext, useEventListener } from "./..";
var ArcComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _ref = props,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    mode = _ref.mode,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? {} : _ref$options;
  var pickStyle = options.pickStyle,
    curvature = options.curvature,
    selectOptions = options.selectOptions,
    enableBloom = options.enableBloom,
    enableGeodesic = options.enableGeodesic,
    toggleAnimation = options.toggleAnimation,
    processAnimation = options.processAnimation,
    zIndex = options.zIndex,
    minZoom = options.minZoom,
    maxZoom = options.maxZoom;
  var map = useContext(MapContext); // 获取地图实例
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    instance = _useState2[0],
    setInstance = _useState2[1];

  /** 初始化弧线图图层 */
  var initArc = function initArc() {
    if (!map) return;
    var arcInstance = new TMap.visualization.Arc({
      pickStyle: pickStyle,
      mode: mode,
      curvature: curvature,
      selectOptions: selectOptions,
      enableBloom: enableBloom,
      toggleAnimation: toggleAnimation,
      enableGeodesic: enableGeodesic,
      processAnimation: processAnimation,
      zIndex: zIndex,
      minZoom: minZoom,
      maxZoom: maxZoom
    }).setData(data.map(function (item) {
      var _item$from, _item$from2, _item$to, _item$to2;
      return _objectSpread(_objectSpread({}, item), {}, {
        from: new TMap.LatLng((_item$from = item.from) === null || _item$from === void 0 ? void 0 : _item$from.lat, (_item$from2 = item.from) === null || _item$from2 === void 0 ? void 0 : _item$from2.lng),
        to: new TMap.LatLng((_item$to = item.to) === null || _item$to === void 0 ? void 0 : _item$to.lat, (_item$to2 = item.to) === null || _item$to2 === void 0 ? void 0 : _item$to2.lng)
      });
    })).addTo(map);
    setInstance(arcInstance);
  };

  // @hook 初始化弧线图图层
  useEffect(function () {
    if (!instance) initArc();
    return function () {
      instance === null || instance === void 0 || instance.remove();
      instance === null || instance === void 0 || instance.destroy();
    };
  }, [map, instance]);

  // @hook 绑定事件
  useEventListener(instance, props);

  // @hook 给父组件暴露实例
  useImperativeHandle(ref, function () {
    return instance;
  }, [instance]);

  // @hook 监听数据改变
  useEffect(function () {
    if (instance && data) {
      instance.setData(data.map(function (item) {
        var _item$from3, _item$from4, _item$to3, _item$to4;
        return _objectSpread(_objectSpread({}, item), {}, {
          from: new TMap.LatLng((_item$from3 = item.from) === null || _item$from3 === void 0 ? void 0 : _item$from3.lat, (_item$from4 = item.from) === null || _item$from4 === void 0 ? void 0 : _item$from4.lng),
          to: new TMap.LatLng((_item$to3 = item.to) === null || _item$to3 === void 0 ? void 0 : _item$to3.lat, (_item$to4 = item.to) === null || _item$to4 === void 0 ? void 0 : _item$to4.lng)
        });
      }));
    }
  }, [data]);

  // @hook 监听弧线图样式映射函数改变
  useEffect(function () {
    if (pickStyle) {
      instance === null || instance === void 0 || instance.setPickStyle(pickStyle);
    }
  }, [pickStyle]);

  // @hook 监听弧线的曲度改变
  useEffect(function () {
    if (curvature) {
      instance === null || instance === void 0 || instance.setCurvature(curvature);
    }
  }, [curvature]);

  // @hook 监听弧线的模式改变
  useEffect(function () {
    if (mode) {
      instance === null || instance === void 0 || instance.setMode(mode);
    }
  }, [mode]);

  // @hook 监听拾取配置改变
  useEffect(function () {
    if (selectOptions) {
      instance === null || instance === void 0 || instance.setSelectOptions(selectOptions);
    }
  }, [selectOptions]);

  // @hook 监听图层最小缩放层级改变
  useEffect(function () {
    instance === null || instance === void 0 || instance.setMinZoom(minZoom || 3);
  }, [minZoom]);

  // @hook 监听图层最大缩放改变
  useEffect(function () {
    if (maxZoom) {
      instance === null || instance === void 0 || instance.setMaxZoom(maxZoom || 20);
    }
  }, [maxZoom]);
  return null;
});
export default ArcComponent;