import axios from 'axios';

export const instance = createAxiosInstance();

function createAxiosInstance(){
  const axiosInstance = axios.create({
    baseURL: '/api/v1'
  });

  axiosInstance.interceptors.request.use((request)=>{
    return request;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      if (response.status !== 200) {
        alert(`An error has occurred.\nstatus: ${response.status}`);
      }
      return response
    },
    (error) => {
      console.error(error);
      return Promise.reject(error);
    }
  );
  return axiosInstance;
}
