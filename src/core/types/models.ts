/**
 * Http
 */
export interface HttpResponseModel {
    data: any[];
    total: number;
    message: string;
    error: string;
    accessToken: string;
    refreshToken: string;
}

/**
 * Auth
 */
export interface AuthDataModel {
    username: string;
    password: string;
}

/**
 * Items
 */
export interface ItemModel {
    id?: string;
    category: string;
    imgSrc: string;
    price: number;
    title: string;
}

export interface ItemsFiltersModel {
    title?: string;
    priceFrom?: number;
    category?: string;
    currentPage: number;
    itemsPerPage: number;
}

export type ItemsFiltersKeys = 'title' | 'priceFrom' | 'category' | 'currentPage' | 'itemsPerPage';
export type ItemsGridKeys = 'title' | 'imgSrc' | 'price';

/**
 * Workers
 */
export interface WorkerModel {
    id?: string,
    name: string,
    phone: number,
    category: string
}

export type WorkersFiltersKeys = 'name' | 'phone' | 'category';
export type WorkersGridKeys = 'name' | 'phone' | 'category';

/**
 * Data grid component
 */
export type GridFieldTypes = 'image' | 'input' | 'button';

export interface GridFieldModel<T> {
    key?: T;
    type?: GridFieldTypes;
    text?: string;
}

/**
 * Search component
 */
export type ControlTypes = 'input' | 'select' | 'button' | 'slider';

export interface SearchControlModel<T> {
    key: T;
    type: ControlTypes;
    value?: | string;
    options?: any[];
    defaultValue?: any;
}

/**
 * Reducer action
 */
export interface Action {
    type: string,
    payload: any
}
