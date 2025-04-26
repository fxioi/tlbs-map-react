/**
 * @desc 多边形组件
 */
import { type FC } from 'react';
import { CustomPolygonGeometry } from "../interfaces";
interface MultiPolygonProps {
    /**
     * 图层id，若没有会自动分配一个
     */
    id?: string;
    /**
       * 多边形相关样式
       */
    styles?: TMap.MultiPolygonStyleHash;
    /**
       * 多边形数据数组
       */
    geometries?: CustomPolygonGeometry[];
    /**
       * GL API 参数
       */
    options?: Omit<TMap.MultiPolylineOptions, 'id' | 'styles' | 'geometries'>;
    [key: string]: any;
}
declare const MultiPolygonComponent: FC<MultiPolygonProps>;
export default MultiPolygonComponent;
