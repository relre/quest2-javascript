/**
 * Play with URLs
 * @param {string} url - The URL that's we want to manipulate
 * @param {string} param - The parameter that we want to change or add
 * @returns {string} The result URL.
 */
function addOrChangeUrlParameter (url, param) {
  // TODO: Make something awesome
  const key = param.split("=")[0];
  const regex = new RegExp(`${key}=[^&]+`);
  
  const replaced = url.replace(regex, param);
  if(replaced !== url) return replaced
  
  const seperator = url.includes("?") ? "&" : "?"
  
  return `${url}${seperator}${param}`
  
}
