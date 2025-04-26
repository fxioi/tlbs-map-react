function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @desc 信息窗体组件
 */
import React, { useContext, useEffect, useImperativeHandle, useState } from 'react';
import { MapContext } from "./..";
var InfoWindowComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _ref = props,
    _ref$visible = _ref.visible,
    visible = _ref$visible === void 0 ? true : _ref$visible,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? {
      lat: 40.0404,
      lng: 116.2735
    } : _ref$position,
    _ref$content = _ref.content,
    content = _ref$content === void 0 ? '' : _ref$content,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? {} : _ref$options;
  var _ref2 = options || {},
    zIndex = _ref2.zIndex,
    offset = _ref2.offset,
    enableCustom = _ref2.enableCustom;
  var map = useContext(MapContext); // 获取地图实例
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    instance = _useState2[0],
    setInstance = _useState2[1]; // 存储信息窗体图层实例

  /** 初始化信息窗体图层 */
  var initInfoWindow = function initInfoWindow() {
    if (!map) return;
    var infoWindowInstance = new TMap.InfoWindow({
      map: map,
      position: new TMap.LatLng(position.lat, position.lng),
      content: content,
      zIndex: zIndex,
      offset: offset,
      enableCustom: enableCustom
    });
    if (!visible) {
      infoWindowInstance.close();
    }
    setInstance(infoWindowInstance);

    // 绑定事件：点击信息窗的关闭按钮时会触发此事件
    infoWindowInstance.on('closeclick', function () {
      if (typeof props.onClose === 'function') {
        props.onClose();
      }
      if (typeof props.onCloseclick === 'function') {
        props.onCloseclick();
      }
    });
  };

  // @hook 初始化信息窗体图层
  useEffect(function () {
    if (!instance) initInfoWindow();
    return function () {
      instance === null || instance === void 0 || instance.destroy(); // 销毁信息窗体
      instance === null || instance === void 0 || instance.setMap(null); // 将infoWindow从Map中移除
    };
  }, [map, instance]);

  // @hook 给父组件暴露实例
  useImperativeHandle(ref, function () {
    return instance;
  }, [instance]);

  // @hook 监听图层可见性改变
  useEffect(function () {
    visible ? instance === null || instance === void 0 ? void 0 : instance.open() : instance === null || instance === void 0 ? void 0 : instance.close();
  }, [visible]);

  // @hook 监听位置改变
  useEffect(function () {
    instance === null || instance === void 0 || instance.setPosition(new TMap.LatLng(position === null || position === void 0 ? void 0 : position.lat, position === null || position === void 0 ? void 0 : position.lng));
  }, [position]);

  // @hook 监听内容改变
  useEffect(function () {
    instance === null || instance === void 0 || instance.setContent(content);
  }, [content]);
  return null;
});
export default InfoWindowComponent;