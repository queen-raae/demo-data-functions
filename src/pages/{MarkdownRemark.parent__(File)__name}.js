import React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const {
    markdownRemark: { html },
  } = data;

  return <main dangerouslySetInnerHTML={{ __html: html }}></main>;
};

export const query = graphql`
  query PageBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
export default IndexPage;
