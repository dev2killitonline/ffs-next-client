export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const pageview = (url) => {
  const blacklistUrls = ["/drylog", "/drylogs", "/job"];
  if (blacklistUrls.find((fUrl) => fUrl === url)) {
    return;
  }
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
