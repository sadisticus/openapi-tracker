import { D1CreateEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { PackTypeModel } from './base';

export class PackTypeCreate extends D1CreateEndpoint<HandleArgs> {
    _meta = {
        model: PackTypeModel,
        fields: PackTypeModel.schema.pick({
            // omit id
            REF: true,
            name: true,
            description: true,
            averageWeight: true,
        }),
    };
}