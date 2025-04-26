/**
 * @desc 折线组件
 */
import { type FC } from 'react';
import { CustomPolylineGeometry } from "../interfaces";
interface MultiPolylineProps {
    /**
     * 图层id，若没有会自动分配一个
     */
    id?: string;
    /**
       * 折线相关样式
       */
    styles?: TMap.MultiPolylineStyleHash;
    /**
       * 折线数据数组
       */
    geometries?: CustomPolylineGeometry[];
    /**
     * GL API 参数
     */
    options?: Omit<TMap.MultiPolylineOptions, 'id' | 'styles' | 'geometries'>;
    [key: string]: any;
}
declare const MultiPolylineComponent: FC<MultiPolylineProps>;
export default MultiPolylineComponent;
