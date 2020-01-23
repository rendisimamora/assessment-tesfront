import fdn from "@/api/fdn";

export default (ctx, inject) => {
  let api = {};
  api.fdn = fdn(ctx);
  inject("api", api);
};
