/**
 * @desc 热力图组件
 */
import { type FC } from 'react';
interface HeatProps {
    /**
     * 热力图数据
     */
    data?: TMap.visualization.HeatPoint[];
    /**
     * 最大辐射半径，默认为50
     */
    radius?: number;
    /**
     * 峰值高度，默认为100
     */
    height?: number;
    /**
     * 渐变颜色
     */
    gradientColor?: TMap.GradientColor;
    /**
     * 热力最弱阈值，小于该值的不显示，默认为0
     */
    min?: number;
    /**
     * 热力最强阈值，大于该值的显示为最强色，默认为数据中的最大值
     */
    max?: number;
    /**
     * 全局透明度，取值范围[0，1]，默认为0.8
     */
    opacity?: number;
    /**
     * GL API 参数
     */
    options?: Omit<TMap.visualization.HeatOptions, 'radius' | 'height' | 'gradientColor' | 'min' | 'max' | 'opacity'>;
    [key: string]: any;
}
declare const HeatComponent: FC<HeatProps>;
export default HeatComponent;
