import React from 'react';
import {graphql} from 'gatsby';
import {ContentfulPost} from "../../types/graphql-types";

type Props = {
    data: {
        contentfulPost: ContentfulPost
    }
}

const Page = ({data}: Props) => {
    return (
        <main>
            <h1>{data.contentfulPost.slug}</h1>
            <p>{data.contentfulPost.title}</p>
        </main>
    );
};

export const data = graphql`
    query contentfulPost($id: String) {
        contentfulPost(id: { eq: $id }) {
            slug
            title
            body {
                raw
            }
            categories {
                name
            }
        }
    }
`;

export default Page;
