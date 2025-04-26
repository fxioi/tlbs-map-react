function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @desc 热力图组件
 */
import React, { useContext, useEffect, useImperativeHandle, useState } from 'react';
import { MapContext } from "./..";
var HeatComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$data = props.data,
    data = _props$data === void 0 ? [] : _props$data,
    radius = props.radius,
    height = props.height,
    gradientColor = props.gradientColor,
    min = props.min,
    max = props.max,
    opacity = props.opacity,
    _props$options = props.options,
    options = _props$options === void 0 ? {} : _props$options;
  var enableAggregation = options.enableAggregation,
    enableLighting = options.enableLighting,
    transitAnimation = options.transitAnimation,
    toggleAnimation = options.toggleAnimation,
    zIndex = options.zIndex,
    minZoom = options.minZoom,
    maxZoom = options.maxZoom,
    offset = options.offset,
    distanceUnit = options.distanceUnit;
  var map = useContext(MapContext); // 获取地图实例
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    instance = _useState2[0],
    setInstance = _useState2[1]; // 存储热力图图层实例

  /** 初始化热力图图层 */
  var initHeat = function initHeat() {
    if (!map) return;
    var heatInstance = new TMap.visualization.Heat({
      radius: radius,
      height: height,
      gradientColor: gradientColor,
      min: min,
      max: max,
      opacity: opacity,
      enableAggregation: enableAggregation,
      enableLighting: enableLighting,
      transitAnimation: transitAnimation,
      toggleAnimation: toggleAnimation,
      zIndex: zIndex,
      minZoom: minZoom,
      maxZoom: maxZoom,
      offset: offset,
      distanceUnit: distanceUnit
    }).setData(data).addTo(map);
    setInstance(heatInstance);
  };

  // @hook 初始化热力图图层
  useEffect(function () {
    if (!instance) initHeat();
    return function () {
      instance === null || instance === void 0 || instance.remove();
      instance === null || instance === void 0 || instance.destroy();
    };
  }, [map, instance]);

  // @hook 给父组件暴露实例
  useImperativeHandle(ref, function () {
    return instance;
  }, [instance]);

  // @hook 监听数据改变
  useEffect(function () {
    instance === null || instance === void 0 || instance.setData(data);
  }, [data]);

  // @hook 监听辐射半径改变
  useEffect(function () {
    instance === null || instance === void 0 || instance.setRadius(radius || 50);
  }, [radius]);

  // @hook 监听高度改变
  useEffect(function () {
    instance === null || instance === void 0 || instance.setHeight(height || 100);
  }, [height]);

  // @hook 监听渐变颜色改变
  useEffect(function () {
    if (instance && gradientColor) {
      instance.setGradientColor(gradientColor);
    }
  }, [gradientColor]);

  // @hook 监听最弱阈值改变
  useEffect(function () {
    instance === null || instance === void 0 || instance.setMin(min || 0);
  }, [min]);

  // @hook 监听最强阈值改变
  useEffect(function () {
    if (max) {
      instance === null || instance === void 0 || instance.setMax(max);
    }
  }, [max]);

  // @hook 监听透明度改变
  useEffect(function () {
    instance === null || instance === void 0 || instance.setOpacity(opacity || 0.8);
  }, [opacity]);

  // @hook 监听图层最小缩放层级改变
  useEffect(function () {
    instance === null || instance === void 0 || instance.setMinZoom(minZoom || 3);
  }, [minZoom]);

  // @hook 监听图层最大缩放改变
  useEffect(function () {
    instance === null || instance === void 0 || instance.setMaxZoom(maxZoom || 20);
  }, [maxZoom]);

  // @hook 监听图层底部离地高度改变
  useEffect(function () {
    instance === null || instance === void 0 || instance.setOffset(offset || 0);
  }, [offset]);
  return null;
});
export default HeatComponent;