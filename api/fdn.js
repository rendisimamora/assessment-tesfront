export default ctx => {
  let { $axios } = ctx;

  return {
    async get() {
      let res = await $axios.get(
        "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp"
      );
      return res;
    }
  };
};
