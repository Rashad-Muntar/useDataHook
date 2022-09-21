export interface fetProps {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    url: string;
    mode?: "no-cors" | "cors" | "same-origin";
    cat?:
      | "default"
      | "no-cache"
      | "reload"
      | "force-cache"
      | "only-if-cached"
      | undefined;
    credentials?: "same-origin" | "include" | "omit";
    contentType?: "text/plain";
    redirect?: "manual" | "follow" | "error";
    referrerPolicy?:
      | "no-referrer"
      | "no-referrer-when-downgrade"
      | "origin"
      | "strict-origin"
      | "strict-origin-when-cross-origin"
      | "unsafe-url";
  }