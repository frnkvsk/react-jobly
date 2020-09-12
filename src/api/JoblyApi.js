import axios from 'axios';
require('dotenv').config();

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001/";

const request = async (endpoint, paramsOrData = {}, verb = "get") => {
  
  
  console.debug("API Call:", BASE_URL, endpoint, paramsOrData, verb);

  
  try {
    const res = await axios({
      method: verb,
      url: `${BASE_URL}${endpoint}`,
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      [verb === "get" ? "params" : "data"]: paramsOrData});
      
    return res.data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
  }catch(err) {
    let message = err.response ? err.response.data.message : err;
    throw Array.isArray(message) ? message : [message];
  }
}

const getCompany = async (token, companyHandle) => {
  try {
    return await request(`companies/${companyHandle}`, token);
  } catch (error) {
    console.error(error);
  }  
}
const getCompanies = async (token) => {  
  try {
    return await request('companies/', token);
  } catch (error) {
    console.error(error);
  }  
}
const getJobs = async (token) => {
  try {
    return await request('jobs/', token);  
  } catch (error) {
    console.error(error);
  }  
}
const login = async (username, password) => {
  try {
    return await request('login/', {username: username, password: password}, 'post');
  } catch (error) {
    console.error(error);
  }   
}
const signup = async (username, password, first_name, last_name, photo_url, email) => {
  try {
    return await request('users/', {
      username: username, 
      password: password, 
      first_name: first_name, 
      last_name: last_name, 
      photo_url: photo_url, 
      email: email}, 'post');
  } catch (error) {
    console.error(error);
  }   
}
const getUserInfo = async (token, username) => {
  try {
    return await request(`users/${username}/`, {_token: token});
  } catch (error) {
    console.error(error);
  }   
}
const patchUserInfo = async (token, username, userInfo) => {
  userInfo._token = token;
  try {
    return await request(`users/${username}/`, userInfo, 'patch');
  } catch (error) {
    console.error(error);
  }   
}
const postUserApply = async (token, jobId, username, state) => {
  const userInfo = {
    _token: token,
    username: username,
    state: state,
  } 
  try {
    return await request(`jobs/${jobId}/apply`, userInfo, 'post');
  } catch (error) {
    console.error(error);
  }   
}

export {
  getCompany, 
  getCompanies, 
  getJobs, 
  login, 
  signup, 
  getUserInfo, 
  patchUserInfo,
  postUserApply };
