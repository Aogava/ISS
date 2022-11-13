const getCosmonautsInSpace = () => {
  return fetch("http://api.open-notify.org/astros.json")
}

export default getCosmonautsInSpace;