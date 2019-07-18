// @flow

import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Author, Image, LanguageHint } from '../components/Markdown';
import { Title } from '../layouts/utils';

export default ({
  data,
  lang,
  prefix
}: {|
  ...Props,
  data: {| contentfulPage: Page, site: { siteMetadata: { siteUrl: string } } |}
|}) => {
  const { title, description, language, content, author, date } = data.contentfulPage;
  const frontmatter = {};
  const { siteUrl } = data.site.siteMetadata;

  return (
    <div>
      <Title
        title={title}
        description={description}
        thumbnailUrl={
          frontmatter.coverImage
            ? `${siteUrl}${frontmatter.coverImage.childImageSharp.fixed.src}`
            : ''
        }
      />
      <header className="header text-white bg-ledgy">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <h1>{title}</h1>
              <LanguageHint lang={lang} documentLang={language || 'en'} />
            </div>
          </div>
        </div>
      </header>
      <main className="main-content">
        <section className="section">
          <div className="container container-small">
            <div className="markdown clearfix">
              <MDXProvider components={{ img: Image }}>
                <MDXRenderer>{content.childMdx.body}</MDXRenderer>
              </MDXProvider>
            </div>
            <div className="d-flex py-4">{date && <small>{date}</small>}</div>
            {author && <Author prefix={prefix} name={author} />}
          </div>
        </section>
      </main>
    </div>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    contentfulPage(id: { eq: $id }) {
      slug
      title
      description
      language
      date(formatString: "DD MMM YYYY")
      author
      content {
        childMdx {
          body
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
