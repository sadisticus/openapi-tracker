import { D1CreateEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { MaterialModel } from './base';

export class MaterialCreate extends D1CreateEndpoint<HandleArgs> {
    _meta = {
        model: MaterialModel,
        fields: MaterialModel.schema.pick({
            // this is purposely missing the id, because users shouldn't be able to define it
            REF: true,
            categoryId: true,
            name: true,
            description: true,
            balance: true,
            minBalance: true,
            maxBalance: true,
            isActive: true,
        }),
    };
}