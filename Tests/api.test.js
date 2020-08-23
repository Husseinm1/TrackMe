const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();
const { API_URL } = process.env;



test('test device array', () => 
{  
    expect.assertions(1);
     axios.get(`${API_URL}/devices`) 
     .then(resp => resp.data)
     .then(resp => {  expect(resp[1].user).toEqual('mary123');  
      }); 
      
})