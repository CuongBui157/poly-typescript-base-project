import instance from ".";

export const getAll = () => {
  return instance.get("products");
};
