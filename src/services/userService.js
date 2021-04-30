import tokenService from "../services/tokenService";
const BASE_URL = "/api/auth/";

function signup(user) {
  return fetch(BASE_URL + "signup", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(user),
  })
    .then((res) => {
      console.log(res, "<-- response object");
      return res.json();
    })
    .then((json) => {
      if (json.token) return json;
      throw new Error(`${json.err || json.message}`);
    })
    .then(({ token }) => {
      tokenService.setToken(token);
    });
}

function getUser() {
  return tokenService.getUserFromToken();
}

function getAllUsers() {
  return fetch(`/api/users`, {
    headers: {
      "content-type": "application/json",
      'Authorization': "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds),
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.token) return json;
      throw new Error(`${json.err || json.message}`);
    })
    .then(({ token }) => tokenService.setToken(token));
}

function forgotPassword(email) {
  return fetch(BASE_URL + "forgot-password", {
    method: "PUT",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify({ email }),
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.message) return json;
      throw new Error(`${json.error}`);
    });
}

function resetPassword(password, token) {
  return fetch(BASE_URL + "reset-password", {
    method: "PUT",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify({ password, token }),
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.message) return json;
      throw new Error(`${json.error}`);
    });
}

function newFriend(id) {
  return fetch(`/api/users/${id}/friend`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken(),
    }
  }).then((res) => res.json());
}

function removeFriend(id) {
  return fetch(`/api/users/${id}/unfriend`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken(),
    }
  }).then((res) => res.json());
}

let functions = {
  signup,
  getUser,
  getAllUsers,
  logout,
  login,
  forgotPassword,
  resetPassword,
  newFriend,
  removeFriend
};

export default functions;
