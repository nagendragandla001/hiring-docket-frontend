import axios from "axios";

export const GET = async (url, optionalParams?) => {
  const call = await axios.request({
    url,
    method: "GET",
  });

  return call;
};
