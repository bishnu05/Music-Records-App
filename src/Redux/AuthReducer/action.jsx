import * as types from "./actiontypes";
import axios from "axios";

const login = (payload)=>(dispatch)=>{
       dispatch({type:types.USER_LOGIN_REQUEST});

       return axios ({
        method:"post",
        url:"/api/login",
        baseURL:"https://reqres.in",
        data:payload,
       })
       .then ((r)=>{
       return dispatch({type:types.USER_LOGIN_SUCCESS,
              payload:r.data.token})
      })
       .catch((e)=>dispatch({type:types.USER_LOGIN_FAILURE}))
}

export {login}