import axios from 'axios';

const request = async (endpoint, paramsOrData = {}, verb = "get") => {
  
  console.debug("API Call:", endpoint, paramsOrData, verb);

  try {
    const res = await axios({
      method: verb,
      url: `http://localhost:3000/${endpoint}`,
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
  return await request(`companies/${companyHandle}`, token);
}
const getCompanies = async (token) => {  
  return await request('companies/', token);
}
const getJobs = async (token) => {
  return await request('jobs/', token);
}
const login = async (username, password) => {
  return await request('login/', {username: username, password: password}, 'post');
}
const signup = async (username, password, first_name, last_name, photo_url, email) => {
  return await request('users/', {
    username: username, 
    password: password, 
    first_name: first_name, 
    last_name: last_name, 
    photo_url: photo_url, 
    email: email}, 'post');
}
const getUserInfo = async (token, username) => {
  return await request(`users/${username}/`, {_token: token});
}
const patchUserInfo = async (token, username, userInfo) => {
  userInfo._token = token;
  return await request(`users/${username}/`, userInfo, 'patch');
}
const postUserApply = async (token, jobId, username, state) => {
  const userInfo = {
    _token: token,
    username: username,
    state: state,
  } 
  return await request(`jobs/${jobId}/apply`, userInfo, 'post');
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
