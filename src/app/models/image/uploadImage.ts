import { cloud } from '../_config';

export const uploadImageDatamapper = async (imagePath: string) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };
  const result = await cloud.uploader.upload(imagePath, options);
  return result.public_id;
};
