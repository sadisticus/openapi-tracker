import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { CategoryModel } from "./base";

export class CategoryCreate extends D1CreateEndpoint<HandleArgs> {
    _meta = {
        model: CategoryModel,
        fields: CategoryModel.schema.pick({
            MaterialTypeId: true,
            name: true,
            description: true,
            isActive: true,

        }),
    };
}