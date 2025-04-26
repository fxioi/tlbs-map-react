/**
 * @desc 信息窗体组件
 */
import { type FC } from 'react';
interface InfoWindowProps {
    /**
     * 是否显示信息窗体
     */
    visible?: boolean;
    /**
     * 信息窗的经纬度坐标
     */
    position: TMap.LatLngData;
    /**
     * 信息窗显示内容，默认为空字符串。当enableCustom为true时，需传入信息窗体的dom字符串
     */
    content?: string;
    /**
     * GL API 参数
     */
    options?: Omit<TMap.InfoWindowOptions, 'map' | 'position' | 'content'>;
    [key: string]: any;
}
declare const InfoWindowComponent: FC<InfoWindowProps>;
export default InfoWindowComponent;
