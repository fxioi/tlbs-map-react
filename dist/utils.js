import React, { useEffect } from 'react';

// 通过上下文在组件之间传递地图实例
export var MapContext = /*#__PURE__*/React.createContext(undefined);

// 处理事件的钩子
export var useEventListener = function useEventListener(instance, props) {
  useEffect(function () {
    if (!instance) {
      return;
    }
    var eventsMap = {};
    Object.keys(props).forEach(function (attr) {
      if (attr.indexOf('on') === 0) {
        var eventName = attr.slice(2).toLowerCase();
        var eventCallback = props[attr];
        if (typeof eventCallback === 'function') {
          eventsMap[eventName] = eventCallback;
        }
      }
    });

    // 绑定事件
    Object.keys(eventsMap).forEach(function (eventName) {
      instance.on(eventName, eventsMap[eventName]);
    });

    // 卸载事件
    return function () {
      Object.keys(eventsMap).forEach(function (eventName) {
        instance.on(eventName, eventsMap[eventName]);
      });
    };
  }, [instance]);
};

/**
 * 生成样式对象
 * @param stylesObj 样式对象
 */
export var getStyle = function getStyle(type, stylesObj) {
  var styles = {};
  Object.keys(stylesObj).forEach(function (item) {
    switch (type) {
      case 'marker':
        styles[item] = new TMap.MarkerStyle(stylesObj[item]);
        break;
      case 'label':
        styles[item] = new TMap.LabelStyle(stylesObj[item]);
        break;
      case 'polyline':
        styles[item] = new TMap.PolylineStyle(stylesObj[item]);
        break;
      case 'polygon':
        styles[item] = new TMap.PolygonStyle(stylesObj[item]);
        break;
      case 'circle':
        styles[item] = new TMap.CircleStyle(stylesObj[item]);
      default:
        break;
    }
  });
  return styles;
};

/**
 * 矢量折线和多边形坐标转换
 * @param paths 坐标数组
 */
export var getPaths = function getPaths(paths) {
  var convertLatLng = function convertLatLng(coord) {
    // 带洞多边形 多条不相连的折线
    if (Array.isArray(coord)) {
      return coord.map(function (point) {
        return convertLatLng(point);
      });
    }
    // 简单多边形 一条连续的折线
    return new TMap.LatLng(coord.lat, coord.lng);
  };
  return paths.map(function (item) {
    return convertLatLng(item);
  });
};