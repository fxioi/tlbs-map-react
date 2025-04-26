export interface ControlConfig {
    position?: 'topLeft' | 'topCenter' | 'topRight' | 'centerLeft' | 'center' | 'centerRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
    className?: string;
    numVisible?: boolean;
}
export interface ControlProps {
    scale?: ControlConfig;
    zoom?: ControlConfig;
    rotation?: ControlConfig;
}
export interface CustomMapOptions extends Omit<TMap.MapOptions, 'center' | 'boundary'> {
    center?: TMap.LatLngData;
    boundary?: {
        sw: TMap.LatLngData;
        ne: TMap.LatLngData;
    };
}
export interface CustomPointGeometry extends Omit<TMap.PointGeometry, 'position'> {
    position: TMap.LatLngData;
}
export interface CustomLabelGeometry extends Omit<TMap.LabelGeometry, 'position'> {
    position: TMap.LatLngData;
}
export interface CustomPolylineGeometry extends Omit<TMap.PolylineGeometry, 'paths' | 'rainbowPaths'> {
    paths?: TMap.LatLngData[] | TMap.LatLngData[][];
    rainbowPaths?: Array<{
        path: TMap.LatLngData[];
        color?: string;
        borderColor?: string;
    }>;
}
export interface CustomPolygonGeometry extends Omit<TMap.PolygonGeometry, 'paths'> {
    paths: TMap.LatLngData[] | TMap.LatLngData[][] | TMap.LatLngData[][][];
}
export interface CustomArcLine extends Omit<TMap.visualization.ArcLine, 'from' | 'to'> {
    from: TMap.LatLngData;
    to: TMap.LatLngData;
}
