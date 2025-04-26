import { type FC } from 'react';
export declare function getGeometries(geometries: TMap.CircleGeometry[]): TMap.CircleGeometry[];
interface MultiCircleProps {
    /**
     * 图层id，若没有会自动分配一个
     */
    id?: string;
    styles?: {
        [key: string]: TMap.CircleStyleOptions;
    };
    gemeitries?: TMap.CircleGeometry[];
    options?: Omit<TMap.MultiCircleOptions, 'id' | 'styles' | 'gemeitries'>;
    [key: string]: any;
}
declare const MultiCircleComponent: FC<MultiCircleProps>;
export default MultiCircleComponent;
