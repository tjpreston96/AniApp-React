import tokenService from "./tokenService";

export function search(term, category) {
  return fetch(`/api/${category}/search`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      'Authorization': "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify({ term }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}
