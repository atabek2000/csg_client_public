import { message } from "ant-design-vue";

const { stopLoading } = useLoader();

export default (response) => {
  if (!response.ok) {
    if (Array.isArray(response._data)) {
      response._data.forEach((element) => {
        message.error(element);
        stopLoading();
      });
    } else if (typeof response._data === "object") {
      for (const [key, value] of Object.entries(response._data)) {
        if (Array.isArray(value)) {
          value.forEach((el) => {
            if (typeof el === "string") {
              message.error(el);
              stopLoading();
            }
          });
        } else if (typeof value === "string") {
          message.error(value);
          stopLoading();
        }
      }
    }
  }
};
