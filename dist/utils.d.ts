import React from 'react';
export declare const MapContext: React.Context<import("tmap-gl-types/types/packages/jsapi/types/map/map").default | undefined>;
export declare const useEventListener: (instance: any, props: Record<string, unknown>) => void;
/**
 * 生成样式对象
 * @param stylesObj 样式对象
 */
export declare const getStyle: (type: string, stylesObj: TMap.MultiMarkerStyleHash | TMap.MultiLabelStyleHash | TMap.MultiPolylineStyleHash | TMap.MultiPolygonStyleHash | TMap.MultiCircleStyleHash) => any;
/**
 * 矢量折线和多边形坐标转换
 * @param paths 坐标数组
 */
export declare const getPaths: (paths: TMap.LatLngData[] | TMap.LatLngData[][] | TMap.LatLngData[][][]) => any[];
