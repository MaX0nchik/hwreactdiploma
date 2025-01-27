export interface IApiParams {
  categoryID?: number;
  offset?: number;
  query?: string;
}

export const setApiParamsString = ({
  categoryID,
  offset,
  query,
}: IApiParams) => {
  const params = new URLSearchParams();

  if (categoryID !== undefined) {
    params.append("category", String(categoryID));
  }

  if (offset !== undefined) {
    params.append("offset", String(offset));
  }

  if (query) {
    params.append("q", query);
  }

  const url = params.toString();

  return url ? `?${url}` : "";
};
