// import {useState, useEffect} from 'react';
import axios from 'axios';

const request = async (endpoint, paramsOrData = {}, verb = "get") => {
  
  // paramsOrData.token = auth.authState.token;
  console.log('JoblyApi endpoint',endpoint, 'paramsOrData=',paramsOrData)
  // ( // for now, hardcode token for "testing"
  // // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
  // // "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
  // // "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1OTg4Mjk5OTV9.DsC1u6ebeTOiM1Q5ulXoGdxSP66tJy_Meig40sLMPTo");
  console.debug("API Call:", endpoint, paramsOrData, verb);

  try {
    const res = await axios({
      method: verb,
      url: `http://172.22.234.136:3000/${endpoint}`,
      [verb === "get" ? "params" : "data"]: paramsOrData});
    // const res = await axios({
    //   method: verb,
    //   url: `http://localhost:3000/${endpoint}`,
    //   [verb === "get" ? "params" : "data"]: paramsOrData});
    console.log('---res ',res.data)
    return res.data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
  }catch(err) {
    console.error("API Error:", err);
    let message = err.response.data.message;
    throw Array.isArray(message) ? message : [message];
  }
}

const getCompany = async (handle, token) => {
  console.log('JoblyApi getCompany')
  return await request(`companies/${handle}`, token);
}
const getCompanies = async (token) => {
  console.log('---JoblyApi getCompanies params = ', token);
  
  return await request('companies/', token);
}
const getJobs = async (token) => {
  console.log('JoblyApi getJobs params=', {_token: token});
  
  return await request('jobs/', token);
}
const login = async (username, password) => {
  console.log('JoblyApi login')
  return await request('login/', {username: username, password: password}, 'post');
}
const signup = async (username, password, first_name, last_name, photo_url, email) => {
  return await request('users/', {username: username, password: password, first_name: first_name, last_name: last_name, photo_url: photo_url, email: email}, 'post');
}

export {getCompany, getCompanies, getJobs, login, signup};
