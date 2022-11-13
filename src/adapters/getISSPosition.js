const getISSPosition = () => {
  return fetch("http://api.open-notify.org/iss-now.json")
}

export default getISSPosition;