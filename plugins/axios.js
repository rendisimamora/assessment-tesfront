export default function({ store, $axios, redirect, route, env }) {
  $axios.onResponse(res => {
    res.data.status = res.status;
    return res.data;
  });

  $axios.onError(err => {
    return err;
  });

  $axios.setHeader("Accept", "application/json; charset=utf-8");
  $axios.setHeader("X-Requested-With", "XMLHttpRequest");
}
