const getAuthHeader = () => ({
  Authorization: `Bearer ${
    localStorage.getItem('access')
  }`,
})

export default getAuthHeader