import { http, HttpResponse } from 'msw'
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...

  
  http.post('api/user/login', async({request }) => {
    const username = await request.json()
    const password = await request.json()
    const response = {
      username,
      password,
      createdAt : new Date().toLocaleString()
    }

    return HttpResponse.json(response)
   
  }),
]