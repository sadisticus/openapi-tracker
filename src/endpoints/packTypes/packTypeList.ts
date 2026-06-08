import { D1ListEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { PackTypeModel } from './base';
import { extend } from 'zod/v4-mini';

export class PackTypeList extends D1ListEndpoint<HandleArgs> {
    _meta = {
        model: PackTypeModel,

    };

    searchFields = ["REF", "name"];
    defaultOrderBy = "REF ASC";
}