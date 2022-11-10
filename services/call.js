const DEV_SERVER = "http://localhost:49153";
const PROD_SERVER = "https://everlastbrands.dev/ffs-api";
const ACTIVE_SERVER = PROD_SERVER;

export async function post(endpointPath, data) {
  const init = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const result = await fetch(ACTIVE_SERVER + endpointPath, init);
    const jsonResult = await result.json();
    return jsonResult;
  } catch (err) {
    return err;
  }
}
export async function put(endpointPath, data) {
  const init = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const result = await fetch(ACTIVE_SERVER + endpointPath, init);
    const jsonResult = await result.json();
    return jsonResult;
  } catch (err) {
    return err;
  }
}

export async function del(endpointPath) {
  const init = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  };
  try {
    const result = await fetch(ACTIVE_SERVER + endpointPath, init);
    const jsonResult = await result.json();
    return jsonResult;
  } catch (err) {
    return err;
  }
}

export async function get(endpointPath) {
  try {
    const result = await fetch(ACTIVE_SERVER + endpointPath);
    const jsonResult = await result.json();
    return jsonResult;
  } catch (err) {
    return err;
  }
}
