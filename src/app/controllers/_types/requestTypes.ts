export type EmailParams = {
  email: string;
};

export type IdParams = {
  id: string;
};

export type PublicIdParams = {
  public_id: string;
};

export type ImagePathParams = {
  image: string;
};

export type SubcategoryNameParams = {
  name: string;
};

export type ConnectBody = {
  email: string;
  password: string;
};

export type BasketBody = {
  product_id: string;
  user_id: string;
};
