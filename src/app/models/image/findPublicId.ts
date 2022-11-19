import { cloud } from '../_config';

export const findPublicIdDatamapper = async (publicId: string) => {
  const options = {
    colors: true,
  };
  const result = await cloud.api.resource(publicId, options);
  return result.url;
};
