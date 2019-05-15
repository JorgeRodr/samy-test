import fetchIntercept from "fetch-intercept";

export function registerInterceptor() {
  fetchIntercept.register({
    request: function(url, config) {
      if (!config) {
        config = {};
      }
      config.headers = {
        api_key: "123456"
      };
      return [url, config];
    }
  });
}
