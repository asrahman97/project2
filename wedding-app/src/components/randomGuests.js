import axios from 'axios';


export async function apiCall() {
  const results = await axios('https://uinames.com/api/?amount=10')
  return results
}