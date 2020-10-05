export const fetchRequest = async (
  url: string,
  opt?: RequestInit | undefined
) => {
  let error;
  let response;
  let isLoading = true;
  try {
    const res = await fetch(url, opt);
    response = res;
  } catch (e) {
    error = e;
  }

  isLoading = false;

  return { error, response, isLoading };
};
