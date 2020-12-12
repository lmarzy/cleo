interface OptionsInterface {
  method: string;
  headers: {
    [key: string]: string;
  };
  body?: string;
}

export const request = async <TData>(url: RequestInfo, method = 'GET', body?: string): Promise<TData> => {
  const options: OptionsInterface = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = body;
  }

  const response = await fetch(url, options);

  return response.json();
};
