import { store } from "../index";
import { HIDE_LOADER, SHOW_LOADER } from "../store/constants";

export const truncate = (str, length) => {
  const ending = "...";

  if (length == null) {
    length = 100;
  }

  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

export const fetchWithLoader = async (url, options) => {
  store.dispatch({ type: SHOW_LOADER });
  const start = new Date().getTime();

  const res = await fetch(url, options).then((res) => {
    const end = new Date().getTime();

    setTimeout(
      () => store.dispatch({ type: HIDE_LOADER }),
      end - start < 500 ? 500 : 0
    );
    return res;
  });

  return res;
};
