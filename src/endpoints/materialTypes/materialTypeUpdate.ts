import { D1UpdateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MaterialType, MaterialTypeModel } from "./base";

export class MaterialTypeUpdate extends D1UpdateEndpoint<HandleArgs> {
    _meta = {
        model: MaterialTypeModel,
        fields: MaterialTypeModel.schema.pick({
            name: true,
            description: true,
            isActive: true,
        }),
    };
}
