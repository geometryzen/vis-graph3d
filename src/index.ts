import { DataSet as VisDataSet } from 'vis-data';
import { Graph3d as VisGraph3d } from 'vis-graph3d';

export type Id = number | string;
export type OptId = undefined | null | Id;
export type PartItem<IdProp extends string> = Partial<Record<IdProp, OptId>>;

export interface DataSet<Item extends PartItem<IdProp>, IdProp extends string = "id"> {
    add(data: Item | Item[], senderId?: Id | null): (string | number)[];
}

export interface QueueOptions {
    /** The queue will be flushed automatically after an inactivity of this delay in milliseconds. By default there is no automatic flushing (`null`). */
    delay?: null | number;
    /** When the queue exceeds the given maximum number of entries, the queue is flushed automatically. Default value is `Infinity`. */
    max?: number;
}

export interface DataSetInitialOptions<IdProp extends string> {
    /**
     * The name of the field containing the id of the items. When data is fetched from a server which uses some specific field to identify items, this field name can be specified in the DataSet using the option `fieldId`. For example [CouchDB](http://couchdb.apache.org/) uses the field `'_id'` to identify documents.
     */
    fieldId?: IdProp;
    /**
     * Queue data changes ('add', 'update', 'remove') and flush them at once. The queue can be flushed manually by calling `DataSet.flush()`, or can be flushed after a configured delay or maximum number of entries.
     *
     * When queue is true, a queue is created with default options. Options can be specified by providing an object.
     */
    queue?: QueueOptions | false;
}

export function createDataSet<Item extends PartItem<IdProp>, IdProp extends string = "id">(options?: DataSetInitialOptions<IdProp>): DataSet<Item, IdProp> {
    return new VisDataSet<Item, IdProp>(options);
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Graph3d {

}

export interface Graph3dOptions {
    /**
     * e.g. "500px" or "100%"
     */
    width?: string;
    /**
     * e.g. "500px" or "100%"
     */
    height?: string;
    /**
     * 
     */
    style?: 'bar' | 'bar-color' | 'bar-size' | 'dot' | 'dot-color' | 'dot-size' | 'dot-line' | 'line' | 'grid' | 'surface';
    showAnimationControls?: boolean;
    showGrayBottom?: boolean;
    showGrid?: boolean;
    showXAxis?: boolean;
    showYAxis?: boolean;
    showZAxis?: boolean;
    showPerspective?: boolean;
    showLegend?: boolean;
    showShadow?: boolean;
    showSurfaceGrid?: boolean;
    keepAspectRatio?: boolean;
    /**
     * a value between 0.1 and 1.0
     */
    verticalRatio?: number;
    /**
     * milliseconds
     * e.g. 100
     */
    animationInterval?: number;
    animationPreload?: boolean;
    animationAutoStart?: boolean;
    xCenter?: string;
    yCenter?: string;
    xMin?: number;
    xMax?: number;
    xStep?: number;
    yMin?: number;
    yMax?: number;
    yStep?: number;
    zMin?: number;
    zMax?: number;
    zStep?: number;
    valueMin?: number;
    valueMax?: number;
    xBarWidth?: number;
    yBarWidth?: number;
    xLabel?: string;
    yLabel?: string;
    zLabel?: string;
    filterLabel?: string;
    legendLabel?: string;
}

export function createGraph3d<Item extends PartItem<IdProp>, IdProp extends string = "id">(container: HTMLElement, data: DataSet<Item, IdProp>, options?: Graph3dOptions): Graph3d {
    return new VisGraph3d(container, data, options);
}


