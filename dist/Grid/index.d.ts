/**
 * @desc 网格图组件
 */
import { type FC } from 'react';
interface GridProps {
    /**
     * 网格图数据
     */
    data: TMap.visualization.HeatPoint[];
    /**
     * 单位正方形网格边长, 单位为米, 默认1000
     */
    sideLength?: number;
    /**
     * 网格是否可拔起，默认为true
     */
    extrudable?: boolean;
    /**
     * 颜色层级，颜色支持rgb(), #RRGGBB格式, 默认为[’#D8AFA7’, ‘#842610’, ‘#641200’]
     */
    colorList?: string[];
    /**
     * 高度变化区间，需要传入正整数，默认为[1, 100]，若extrudable为false，则不生效
     */
    heightRange?: number[];
    /**
     * 网格聚合数据显示区间，需要传入正整数，区间外的数据不显示，区间内的数据线性映射到高度区间及颜色层级
     */
    showRange?: number[];
    /**
     * GL API 参数
     */
    options?: Omit<TMap.visualization.GridOptions, 'sideLength' | 'extrudable' | 'colorList' | 'heightRange' | 'showRange'>;
    [key: string]: any;
}
declare const GridComponent: FC<GridProps>;
export default GridComponent;
