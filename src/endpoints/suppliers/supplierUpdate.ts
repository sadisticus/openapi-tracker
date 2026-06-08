import { D1UpdateEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { SupplierModel } from './base';

export class SupplierUpdate extends D1UpdateEndpoint<HandleArgs> {
    _meta = {
        model: SupplierModel,
        fields: SupplierModel.schema.pick({
            // this is purposely missing the id, because users shouldn't be able to define it
            REF: true,
            name: true,
            description: true,
            contactName: true,
            contactEmail: true,
            isActive: true,
        }),
    };
}

