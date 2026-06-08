import { D1UpdateEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { PackTypeModel } from './base';

export class PackTypeUpdate extends D1UpdateEndpoint<HandleArgs> {
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
