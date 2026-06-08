import { D1ReadEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { PackTypeModel } from './base';

export class PackTypeRead extends D1ReadEndpoint<HandleArgs> {
    _meta = {
        model: PackTypeModel,
    };
}

