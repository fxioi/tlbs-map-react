function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @desc 网格图组件
 */
import React, { useContext, useEffect, useImperativeHandle, useState } from 'react';
import { MapContext, useEventListener } from "./..";
var GridComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _ref = props,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    sideLength = _ref.sideLength,
    extrudable = _ref.extrudable,
    colorList = _ref.colorList,
    heightRange = _ref.heightRange,
    _ref$showRange = _ref.showRange,
    showRange = _ref$showRange === void 0 ? [0, 1000] : _ref$showRange,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? {} : _ref$options;
  var selectOptions = options.selectOptions,
    enableBloom = options.enableBloom,
    toggleAnimation = options.toggleAnimation,
    zIndex = options.zIndex,
    minZoom = options.minZoom,
    maxZoom = options.maxZoom,
    heightScale = options.heightScale;
  var map = useContext(MapContext); // 获取地图实例
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    instance = _useState2[0],
    setInstance = _useState2[1]; // 存储网格图图层实例

  /** 初始化网格图图层 */
  var initGrid = function initGrid() {
    if (!map) return;
    var gridInstance = new TMap.visualization.Grid({
      sideLength: sideLength,
      extrudable: extrudable,
      colorList: colorList,
      heightRange: heightRange,
      showRange: showRange,
      selectOptions: selectOptions,
      enableBloom: enableBloom,
      toggleAnimation: toggleAnimation,
      zIndex: zIndex,
      minZoom: minZoom,
      maxZoom: maxZoom,
      heightScale: heightScale
    }).setData(data).addTo(map);
    setInstance(gridInstance);
    gridInstance.setShowRange(gridInstance.getValueRange());
  };

  // @hook 初始化网格图图层
  useEffect(function () {
    if (!instance) initGrid();
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
    instance === null || instance === void 0 || instance.setData(data);
    instance === null || instance === void 0 || instance.setShowRange(instance.getValueRange());
  }, [data]);

  // @hook 监听网格边长改变
  useEffect(function () {
    instance === null || instance === void 0 || instance.setSideLength(sideLength || 1000);
  }, [sideLength]);

  // @hook 监听网格是否可拔起改变
  useEffect(function () {
    if (instance && extrudable) {
      instance.setExtrudable(extrudable);
    }
  }, [extrudable]);

  // @hook 监听颜色层级改变
  useEffect(function () {
    if (instance && colorList) {
      instance.setColorList(colorList);
    }
  }, [colorList]);

  // @hook 监听高度变化区间改变
  useEffect(function () {
    instance === null || instance === void 0 || instance.setHeightRange(heightRange || [1, 100]);
  }, [heightRange]);

  // @hook 监听聚合数据显示区间范围改变
  useEffect(function () {
    instance === null || instance === void 0 || instance.setShowRange(showRange);
  }, [props.showRange]); // NOTE 如果监听 showRange 会有问题

  // @hook 监听拾取配置改变
  useEffect(function () {
    if (instance && selectOptions) {
      instance === null || instance === void 0 || instance.setSelectOptions(selectOptions);
    }
  }, [selectOptions]);

  // @hook 监听图层最小缩放层级改变
  useEffect(function () {
    instance === null || instance === void 0 || instance.setMinZoom(minZoom || 3);
  }, [minZoom]);

  // @hook 监听图层最大缩放改变
  useEffect(function () {
    instance === null || instance === void 0 || instance.setMaxZoom(maxZoom || 20);
  }, [maxZoom]);
  return null;
});
export default GridComponent;