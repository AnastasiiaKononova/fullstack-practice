const API_BASE = 'http://localhost:5000/api';
 
 export const signIn = async (data) => {
     const options = {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     }
     const res =  await fetch(`${API_BASE}/users/sign-in`, options);
     return await res.json();
 }
 
 
 export const signUp = async (data) => {
     const options = {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     }
     const res = await fetch(`${API_BASE}/users/sign-up`, options)
     return await res.json();
 }