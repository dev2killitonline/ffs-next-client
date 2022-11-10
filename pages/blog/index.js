import React from "react";
import Head from "next/head";
import Link from "next/link";
import Page from "../../components/Page";
import sanity, { urlFor } from "../../lib/sanity";


const postQuery = `*[_type == "post"]{ slug, title, mainImage, metaDescription }`;

export default function Blog({ posts }) {
  return (
    <Page>
      <Head>
        <title>Blog - Flood & Fire Solutions</title>
        <meta
          type="description"
          content="From answering your questions to talking a bit about ourselves, the Flood & Fire Solutions blog is a great resource for homeowners looking to learn more about restoration."
        />
        <link rel="canonical" href="https://floodandfiresolutions.com/blog" />
        
      </Head>
      <div className="blog-articles">
        {posts?.map((post, i) => (
          <Link key={i} href={`/blog/${post.slug.current}`}>
            <a className="blog-article">
              <div className="blog-article__content">
                <h2>{post.title}</h2>
                {post?.metaDescription ? (
                  <p>{post?.metaDescription?.slice(0, 100)}</p>
                ) : null}
              </div>
              <div className="blog-img__container">
                <img
                  src={urlFor(post.mainImage).width(250).url()}
                  alt={post.title}
                />
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Page>
  );
}

export async function getStaticProps() {
  const posts = await sanity.fetch(postQuery);
  return { props: { posts } };
}
