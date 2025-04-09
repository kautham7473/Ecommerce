export const setTokenWithExpiry = (token, expiryInMinutes = 60) => {
    const now = new Date()
    const expiryTime = now.getTime() + expiryInMinutes * 60 * 1000
  
    localStorage.setItem('token', token)
    localStorage.setItem('tokenExpiry', expiryTime)
  }
  
  export const getToken = () => {
    const token = localStorage.getItem('token')
    const expiry = localStorage.getItem('tokenExpiry')
  
    if (!token || !expiry) return null
  
    const now = new Date().getTime()
  
    if (now > parseInt(expiry)) {
      // Token expired
      removeToken()
      return null
    }
  
    return token
  }
  
  export const removeToken = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiry')
  }
  