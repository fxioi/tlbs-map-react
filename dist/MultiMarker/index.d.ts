/**
 * @desc 点标记组件
 */
import { type FC } from 'react';
import { CustomPointGeometry } from "../interfaces";
interface MultiMarkerProps {
    /**
     * 图层id，若没有会自动分配一个
     */
    id?: string;
    /**
     * 点标注的相关样式
     */
    styles?: TMap.MultiMarkerStyleHash;
    /**
     * 点标注数据数组
     */
    geometries?: CustomPointGeometry[];
    /**
     * GL API 参数
     */
    options?: Omit<TMap.MultiMarkerOptions, 'id' | 'styles' | 'geometries'>;
    [key: string]: any;
}
declare const MultiMarkerComponent: FC<MultiMarkerProps>;
export default MultiMarkerComponent;
