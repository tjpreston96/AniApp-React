import tokenService from "../services/tokenService";

  export function addToCollection(formData) {
    return fetch(`/api/media/${formData.id}/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());
  }
  
  export function removeFromCollection(formData) {
      return fetch(`/api/media/${formData.id}/remove`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          "Authorization": "Bearer " + tokenService.getToken(),
        },
      }).then((res) => res.json());
    }
  



export function index() {
  return fetch(`/api/media/`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}

export function mangaIndex() {
  return fetch(`/api/media/manga`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}

export function mangaCollection(collection) {
  return fetch(`/api/media/manga/collection`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify({collection})
  }).then((res) => res.json());
}

export function animeIndex() {
  return fetch(`/api/media/anime`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}

export function animeCollection(collection) {
  return fetch(`/api/media/anime/collection`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify({collection})
  }).then((res) => res.json());
}



// !Probably not needed
export function showDetail(slug, type) {
  return fetch(`/api/${type}/${slug}`, {
    headers: {
      "Authorization": "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}

export function animeIdx() {
  return fetch(`/api/anime/`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}

export function mangaIdx() {
  return fetch(`/api/anime/`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}