/**
 * @desc 文本标记组件
 */
import { type FC } from 'react';
import { CustomLabelGeometry } from "../interfaces";
interface MultiLabelProps {
    /**
     * 图层id，若没有会自动分配一个
     */
    id?: string;
    /**
       * 文本标注的相关样式
       */
    styles?: TMap.MultiLabelStyleHash;
    /**
       * 文本标注数据数组
       */
    geometries?: CustomLabelGeometry[];
    /**
       * GL API 参数
       */
    options?: Omit<TMap.MultiLabelOptions, 'id' | 'styles' | 'geometries'>;
    [key: string]: any;
}
declare const MultiLabelComponent: FC<MultiLabelProps>;
export default MultiLabelComponent;
