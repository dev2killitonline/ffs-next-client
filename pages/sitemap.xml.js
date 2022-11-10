//pages/sitemap.xml.js
import sanity from "../lib/sanity";

const postQuery = `*[_type == "post"]{ slug, title, mainImage, metaDescription }`;

const escapeHTML = str => str.replace(/[&<>'"]/g, 
  tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag]));

function generateSiteMap(posts) {
  console.log(posts);
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
     <loc>https://floodandfiresolutions.com/404</loc>
 </url>
 <url>
     <loc>https://floodandfiresolutions.com/about</loc>
 </url>

 <url>
     <loc>https://floodandfiresolutions.com/bedbugs</loc>
 </url>
 <url>
     <loc>https://floodandfiresolutions.com/biohazards</loc>
 </url>
 <url>
     <loc>https://floodandfiresolutions.com/contact</loc>
     <changefreq>hourly</changefreq>
 </url>
 <url>
     <loc>https://floodandfiresolutions.com/fire</loc>
     <changefreq>hourly</changefreq>
 </url>
 <url>
     <loc>https://floodandfiresolutions.com/flood</loc>
     <changefreq>hourly</changefreq>
 </url>
 <url>
     <loc>https://floodandfiresolutions.com</loc>
     <changefreq>hourly</changefreq>
 </url>
 <url>
     <loc>https://floodandfiresolutions.com/insurance</loc>
     <changefreq>hourly</changefreq>
 </url>
 <url>
     <loc>https://floodandfiresolutions.com/mold</loc>
     <changefreq>hourly</changefreq>
 </url>
 <url>
     <loc>https://floodandfiresolutions.com/privacy-policy</loc>
     <changefreq>hourly</changefreq>
 </url>
 <url>
     <loc>https://floodandfiresolutions.com/terms-of-use</loc>
     <changefreq>hourly</changefreq>
 </url>
 <url>
     <loc>https://floodandfiresolutions.com/blog</loc>
     <changefreq>hourly</changefreq>
 </url>
     ${posts
       .map(({ slug }) => 
`<url>
  <loc>https://floodandfiresolutions.com/blog/${escapeHTML(slug.current)}</loc>
</url>
`).join("")}
</urlset>`;
}



function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const posts = await sanity.fetch(postQuery);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
