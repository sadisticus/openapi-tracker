import { D1CreateEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { Manifest, ManifestModel } from './base';
import { z } from 'zod';

type ManifestInput = z.infer<typeof Manifest>;
export class ManifestCreate extends D1CreateEndpoint<HandleArgs> {
    _meta = {
        model: ManifestModel,
        fields: ManifestModel.schema.pick({
            // omit id
            VoyageId: true,
            ContainerNumber: true,
            quantity: true,
            ReceivedDate: true,
        }),
    };

    async beforeCreate(data: ManifestInput, c: any) {
        return {
            ...data,
            ReceivedDate: data.ReceivedDate ?? null,
        };
    }
}