import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

const $axios=axios.create({
    url:''
})

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: 'http://localhost:4200/' }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?:AxiosRequestConfig['params']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data }) => {
    try {
      const result = await $axios({ url: baseUrl + url, method, data })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError as AxiosError
      return {
        error: { status: err.response?.status, data: err.response?.data },
      }
    }
  }

$axios.interceptors.request.use((conf)=>{
  const token=localStorage.getItem('token')
  if(token && conf.headers){
    conf.headers.authorization=token
  }
  return conf
})

export default $axios