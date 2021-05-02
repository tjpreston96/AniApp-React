import tokenService from "../services/tokenService";

export function addToCollection(formData, type) {
  return fetch(`/api/${type}/${formData.slug}/collection`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(formData),
  }).then((res) => res.json());
}

export function removeFromCollection(formData, type) {
    return fetch(`/api/${type}/${formData.slug}/collection`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "Authorization": "Bearer " + tokenService.getToken(),
      },
    }).then((res) => res.json());
  }

export function showDetail(slug, type) {
  return fetch(`/api/${type}/${slug}`, {
    headers: {
      "Authorization": "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}


export function animeIdx() {
  return fetch('/api/anime/', {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}