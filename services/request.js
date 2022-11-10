export default class Request {
  // serverSrc = "http://site2/";
  static serverSrc = "/api.php";

  static post(url, data, callback, auth) {
    const init = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: auth,
      },
      body: JSON.stringify(data),
    };
    if (auth) init.headers.Authorization = auth;
    fetch(Request.serverSrc + url, init)
      .then((res) => res.json())
      .then((res) => {
        callback(res);
      });
  }

  static get(url, callback, auth) {
    const init = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: auth,
      },
    };
    if (auth) init.headers.Authorization = auth;
    fetch(Request.serverSrc + url, init)
      .then((res) => res.json())
      .then((res) => {
        callback(res);
      });
  }

  static put(url, data, callback, auth) {
    const init = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: auth,
      },
      body: JSON.stringify(data),
    };
    fetch(Request.serverSrc + url, init)
      .then((res) => res.json())
      .then((res) => {
        callback(res);
      });
  }

  static delete(url, callback, auth) {
    const init = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: auth,
      },
    };
    fetch(Request.serverSrc + url, init)
      .then((res) => res.json())
      .then((res) => {
        callback(res);
      });
  }
}
