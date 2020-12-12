export const services = {
  get: async <TData>(url: RequestInfo): Promise<TData> => {
    const response = await fetch(url);
    const data = response.json();

    return data;
  },

  patch: async <TData>(url: RequestInfo, data: string): Promise<TData> => {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });

    return response.json();
  },
};
