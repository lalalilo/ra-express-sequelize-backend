import { Op, FindOptions } from 'sequelize';
import { Response, Request, NextFunction } from 'express';
export declare type GetSearchList = (q: string, limit: number, req?: Request<any>, res?: Response, next?: NextFunction) => Promise<{
    rows: any[];
    count: number;
}>;
export declare const searchFields: (model: {
    findAll: (findOptions: FindOptions) => Promise<any>;
}, searchableFields: string[], comparator?: symbol) => (q: string, limit: number, scope?: FindOptions) => Promise<{
    rows: any[];
    count: number;
}>;
export declare const prepareQueries: (searchableFields: string[]) => (q: string, comparator?: symbol) => ({
    [Op.or]: {
        [x: string]: {
            [x: string]: string;
        };
    }[];
} | {
    [Op.and]: {
        [Op.or]: {
            [x: string]: {
                [x: string]: string;
            };
        }[];
    }[];
})[];
