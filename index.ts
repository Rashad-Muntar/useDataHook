import { useEffect, useState } from "react";
import { fetProps } from "./types";
import {
  methods,
  modes,
  cats,
  credential,
  contentTypes,
  redirects,
  referrerPolicies,
} from "./optionValues";

const useDataFetch = ({
  url,
  method,
  mode,
  cat,
  credentials,
  contentType,
  redirect,
  referrerPolicy,
}: fetProps) => {
  const [data, setData] = useState(null);

  if (
    methods.indexOf(method?.toString() as string) === -1 ||
    modes.indexOf(mode?.toString() as string) === -1 ||
    cats.indexOf(cat?.toString() as string) === -1 ||
    credential.indexOf(credentials?.toString() as string) === -1 ||
    contentTypes.indexOf(contentType?.toString() as string) === -1 ||
    redirects.indexOf(redirect?.toString() as string) === -1 ||
    referrerPolicies.indexOf(referrerPolicy?.toString() as string) === -1
  ) {
    return;
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: mode, // no-cors, *cors, same-origin
        cache: cat, // *default, no-cache, reload, force-cache, only-if-cached
        credentials: credentials, // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json" || contentType,
        },
        redirect: redirect, // manual, *follow, error
        referrerPolicy: referrerPolicy, // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return data;
};

export default useDataFetch;
