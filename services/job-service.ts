import { ApiConstants } from "../constants/api-constants";
import { GET } from "./api-method";

export const JobsInfo = async (): Promise<any> => {
  const data = GET(ApiConstants.JOBS);
  return data;
};
