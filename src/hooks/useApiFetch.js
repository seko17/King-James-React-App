export const useApiFetch = {
  get: (url) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          reject({
            data: null,
            loading: false,
            err: "Network response was not ok",
          });
        }
        const jsonData = await response.json();
        resolve({ data: jsonData, loading: false, err: null });
      } catch (err) {
        reject({ data: null, loading: false, err });
      }
    });
  },
};