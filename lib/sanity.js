import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanity = sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: "1xuoiy22",
  dataset: "production",
  useCdn: true,
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).

  apiVersion: "2021-10-21",
});

const imgBuilder = imageUrlBuilder(sanity);

export function urlFor(source) {
  return imgBuilder.image(source);
}

export default sanity;
