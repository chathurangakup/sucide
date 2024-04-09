import axios from 'axios';
import { baseUrl } from './constants';

async function postData(data:any) {
  console.log(`${baseUrl}/app/suicide-detection/`)
  try {
    const response = await axios.post(`${baseUrl}/app/suicide-detection/`, data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      },
    });
    
    console.log('Response:', response.data);
    return response.data; // Return the response data if needed
  } catch (error) {
    console.error('Error posting data:', error);
    throw error; // Rethrow the error if needed
  }
}

export default postData;
