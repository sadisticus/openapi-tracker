import { D1DeleteEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { PackTypeModel } from './base';

export class PackTypeDelete extends D1DeleteEndpoint<HandleArgs> {
    _meta = {
        model: PackTypeModel,
    };
}
