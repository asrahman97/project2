import axios from 'axios';



  // export async function apiCall() {
  //   await axios.get('https://uinames.com/api/?amount=10')
  //     .then(res => {
  //       console.log(res)
  //       return res
        
        
  //     }
        
  //     )
  //     .catch(err => console.log(err))
  // }


export async function apiCall() {
  const results = await axios('https://uinames.com/api/?amount=10')
  // console.log(results)
  return results
}