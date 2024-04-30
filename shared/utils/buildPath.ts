export function buildPath(path: string, params: Record<string, string>) {
  const used = new Set();
  // Replace the parts in [xxx]
  path = path.replace(/\[([^\]]+)]/g, (m, c0) => {
    used.add(c0);
    return c0 in params ? params[c0] : "";
  });
  // Add query string if there are any left over
  let qstr = Object.entries(params)
    .filter(([key]) => !used.has(key))
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
  return path + (qstr && "?" + qstr);
}
