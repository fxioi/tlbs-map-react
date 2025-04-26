/**
 * @desc 弧线图组件
 */
import { type FC } from 'react';
import { CustomArcLine } from "../interfaces";
interface ArcProps {
    /**
     * 弧线图数据
     */
    data: CustomArcLine[];
    /**
     * 弧线模式
     */
    mode?: string;
    /**
     * GL API 参数
     */
    options?: Omit<TMap.visualization.ArcOptions, 'mode'>;
    [key: string]: any;
}
declare const ArcComponent: FC<ArcProps>;
export default ArcComponent;
