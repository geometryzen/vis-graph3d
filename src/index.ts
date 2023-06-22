import { DataSet as VisDataSet } from 'vis-data';
import { Graph3d as VisGraph3d } from 'vis-graph3d';

export type Id = number | string;
export type OptId = undefined | null | Id;
export type PartItem<IdProp extends string> = Partial<Record<IdProp, OptId>>;

export interface DataSet<Item extends PartItem<IdProp>, IdProp extends string = "id"> {
    add(data: Item | Item[], senderId?: Id | null): (string | number)[];
}

export function createDataSet<Item extends PartItem<IdProp>, IdProp extends string = "id">(): DataSet<Item, IdProp> {
    return new VisDataSet<Item, IdProp>();
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Graph3d {

}

export interface Graph3dOptions {
    /**
     * e.g. "600px"
     */
    width?: string;
    /**
     * e.g. "600px"
     */
    height?: string;
    /**
     * 
     */
    style?: 'surface';
    showPerspective?: boolean;
    showGrid?: boolean;
    showShadow?: boolean;
    showAnimationControls?: boolean;
    keepAspectRatio?: boolean;
    verticalRatio?: number;
    /**
     * e.g. 100
     */
    animationInterval?: number;
    animationPreload?: boolean;
}

export function createGraph3d<Item extends PartItem<IdProp>, IdProp extends string = "id">(container: HTMLElement, data: DataSet<Item, IdProp>, options?: Graph3dOptions): Graph3d {
    return new VisGraph3d(container, data, options);
}


