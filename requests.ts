import { Configuration, CoreApi } from "@/generated/api";
import { CORE_URL } from "../config/environment";

export const coreApi = new CoreApi(
  new Configuration({
    basePath: CORE_URL,
    credentials: "include",
  })
);
