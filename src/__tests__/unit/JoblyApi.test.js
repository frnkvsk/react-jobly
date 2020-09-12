import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {getCompany, 
        getCompanies, 
        getJobs, 
        login, 
        signup, 
        getUserInfo, 
        patchUserInfo,
        postUserApply} from '../../api/JoblyApi';

import { testData } from '../../test-data/fake-data';

const BASE_URL = 'http://localhost:3001/';

describe('getCompany tests', () => {  
  it('getCompany', async () => {
    const server = setupServer(
      rest.get(`${BASE_URL}companies/${testData.companies[0].handle}`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(testData.companies[0])
        )
      })
    );
    server.listen();
    const res = await getCompany('testtoken', testData.companies[0].handle);
    expect(res.name).toEqual(testData.companies[0].name);
    server.resetHandlers();
    server.close();
  });    
});


describe('getCompanies test', () => {  
  it('getCompanies', async () => {
    const server = setupServer(
      rest.get(`${BASE_URL}companies/?0=testtoken`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(testData.companies)
        )
      })
    );
    
    server.listen();
    const res = await getCompanies('testtoken');
    expect(res.length).toEqual(3);
    expect(res[0].name).toEqual(testData.companies[0].name);
    server.resetHandlers();
    server.close();
  });
});

describe('getJobs test', () => {  
  it('getJobs', async () => {
    const server = setupServer(
      rest.get(`${BASE_URL}jobs/?0=testtoken`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(testData.jobs)
        )
      })
    );
    
    server.listen();
    const res = await getJobs('testtoken');
    expect(res.length).toEqual(3);
    expect(res[0].name).toEqual(testData.jobs[0].name);
    server.resetHandlers();
    server.close();
  });
});

describe('signup test', () => {  
  const {username, password, first_name, last_name, photo_url, email} = testData.users[0];
  it('signup', async () => {
    const server = setupServer(
      rest.post(`${BASE_URL}users/`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({token: 'testtoken'})
        )
      })
    );
    
    server.listen();
    const res = await signup(username, password, first_name, last_name, photo_url, email);
    expect(res.token).toEqual('testtoken');
    server.resetHandlers();
    server.close();    
  });
});

describe('login test', () => {  
  const {username, password} = testData.users[0];
  it('login', async () => {
    const server = setupServer(
      rest.post(`${BASE_URL}login/`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({token: 'testtoken'})
        )
      })
    );
    
    server.listen();
    const res = await login(username, password);
    expect(res.token).toEqual('testtoken');
    server.resetHandlers();
    server.close();
  });
});

describe('getUserInfo test', () => {  
  const {username} = testData.users[0];
  it('getUserInfo', async () => {
    const server = setupServer(
      rest.get(`${BASE_URL}users/${username}`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(testData.users[0])
        )
      })
    );
    
    server.listen();
    const res = await getUserInfo('testtoken', username);
    expect(res.first_name).toEqual(testData.users[0].first_name);
    server.resetHandlers();
    server.close();
  });
});

describe('patchUserInfo test', () => {  
  const {username} = testData.users[0];
  it('patchUserInfo', async () => {
    const server = setupServer(
      rest.patch(`${BASE_URL}users/${username}`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(testData.users[0])
        )
      })
    );
    
    server.listen();
    const res = await patchUserInfo('testtoken', username, testData.users[0]);
    expect(res.first_name).toEqual(testData.users[0].first_name);
    server.resetHandlers();
    server.close();
  });
});

describe('postUserApply test', () => {  
  const {id} = testData.jobs[0];
  const {username} = testData.users[0];
  it('postUserApply', async () => {
    const server = setupServer(
      rest.post(`${BASE_URL}jobs/${id}/apply`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({ message: 'applied' })
        )
      })
    );
    
    server.listen();
    const res = await postUserApply('testtoken', id, username, 'applied');
    expect(res.message).toEqual('applied');
    server.resetHandlers();
    server.close();
  });
});
