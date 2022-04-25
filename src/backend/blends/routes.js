import { Response } from 'miragejs';

let id = 3
const blendRoutes = {
  getBlends: (schema, request) => {
    const blends = schema.db.blends;
    return blends;
  },
  getBlend: (schema, request) => {
    const { id } = request.params;
    const blend = schema.db.blends.find(id);
    return blend;
  },
  addBlend: (schema, request) => {
    const newBlend = JSON.parse(request.requestBody);
    newBlend.id = id++
    // // add new blend
    const blendRes = schema.db.blends.insert(newBlend);
    return blendRes;
  },
};

export default blendRoutes;
