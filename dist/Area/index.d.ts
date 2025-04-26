/**
 * @desc 热力图组件
 */
import { type FC } from 'react';
interface AreaProps {
    /**
     * 区域图数据
     */
    data: TMap.visualization.AreaPlane[];
    /**
     * 区域图样式
     */
    styles?: TMap.visualization.AreaStyleHash;
    /**
     * GL API 参数
     */
    options?: Omit<TMap.visualization.AreaOptions, 'styles'>;
    [key: string]: any;
}
declare const AreaComponent: FC<AreaProps>;
export default AreaComponent;
