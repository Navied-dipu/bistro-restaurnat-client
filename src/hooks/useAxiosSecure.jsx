import axios from "axios"

 const axiosSecure =axios.create({
    baseURL:'http://localhost:5000'
})
export default function useAxiosSecure() {
   axiosSecure.interceptors.request.use(function (config){
    const token=localStorage.getItem('access-token')
    console.log('request intercept by', token)
    config.headers.authorization=`Bearer ${token}`
    return config
   }) , function (error) {
    // Do something with request error
    return Promise.reject(error);

  }
      // intercept 401 and 403

  axiosSecure.interceptors.response.use((response)=>{
    return response
  },
    (error)=>{
      const status=error.response.status
        console.log('status error in the interceptor', status)
        return Promise.reject(error);
    }
    )
  return axiosSecure
}
