const ABSOLUTE_URL_PATTERN = /^(?:[a-z]+:)?\/\//i;

export function assetUrl(path) {
  if (!path || ABSOLUTE_URL_PATTERN.test(path) || path.startsWith("data:")) {
    return path;
  }

  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

  return `${normalizedBase}${path.replace(/^\/+/, "")}`;
}
