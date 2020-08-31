// import React from 'react';
import axios from 'axios';

export default class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    console.log('JoblyApi endpoint',endpoint)
    paramsOrData._token = ( // for now, hardcode token for "testing"
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
    // "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
    // "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1OTg4Mjk5OTV9.DsC1u6ebeTOiM1Q5ulXoGdxSP66tJy_Meig40sLMPTo");
    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      const res = await axios({
        method: verb,
        url: `http://172.22.236.214:3000/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData});
      // const res = await axios({
      //   method: verb,
      //   url: `http://localhost:3000/${endpoint}`,
      //   [verb === "get" ? "params" : "data"]: paramsOrData});
      console.log('---res ',res)
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

  static async getCompany(handle) {
    return await this.request(`companies/${handle}`);
  }
  static async getCompanies() {
    return await this.request(`companies/`);
  }
  static async getJobs() {
    let res = await this.request(`jobs/`)
  }
  static async login(username, password) {
    return await this.request(`login/`, {username: username, password: password}, 'post');
  }
}

