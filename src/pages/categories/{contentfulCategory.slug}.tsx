import React from 'react';
import {graphql} from 'gatsby';
import {ContentfulCategory} from "../../../types/graphql-types";

type Props = {
    data: {
        contentfulCategory: ContentfulCategory
    }
}

const Page = ({data}: Props) => {
    return (
        <main>
            <h1>{data.contentfulCategory.slug}</h1>
            <p>{data.contentfulCategory.name}</p>
        </main>
    );
};

export const data = graphql`
    query contentfulCategoryBySlug($slug: String) {
        contentfulCategory(slug: { eq: $slug }) {
            slug
            name
        }
    }
`;

export default Page;
