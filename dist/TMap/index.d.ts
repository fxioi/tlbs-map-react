/**
 * @desc 地图组件
 */
import React from 'react';
import { ControlProps, CustomMapOptions } from "../interfaces";
/**
 * 异步加载地图资源
 * @param key 地图 key
 * @param libraries 地图附加库
 */
export declare const loadScript: (key: string, libraries?: string) => Promise<unknown>;
interface TMapProps {
    /**
     * 地图 key
     */
    apiKey: string;
    /**
     * 附加库
     */
    libraries?: string;
    /**
     * 类名
     */
    className?: string;
    /**
     * 样式
     */
    style?: Record<string, string>;
    /**
     * 地图控件
     */
    control?: ControlProps;
    /**
     * 动画时间
     */
    duration?: number;
    /**
     * GL API 参数
     */
    options?: CustomMapOptions;
    [key: string]: any;
}
declare const TMapComponent: React.FC<TMapProps>;
export default TMapComponent;
