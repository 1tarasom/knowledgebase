import React from 'react';
import {graphql} from 'gatsby';
import {ContentfulPost} from "../../types/graphql-types";
import {BLOCKS, MARKS} from "@contentful/rich-text-types"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const Bold = ({children}: any) => <span className="bold">{children}</span>
const Text = ({children}: any) => <p className="align-center">{children}</p>
import Code from "../components/Code";

type Props = {
    data: {
        contentfulPost: ContentfulPost
    }
}

const Page = ({data}: Props) => {
    const document = data.contentfulPost?.body?.raw
        ? JSON.parse(data.contentfulPost.body.raw)
        : {};

    const options = {
            renderMark: {
                [MARKS.BOLD]: (text: string) => <Bold>{text}</Bold>,
                [MARKS.CODE]: (text: string) => <Code language={'jsx'}>{text}</Code>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{
            children
        }
</Text>,
    [BLOCKS.EMBEDDED_ASSET]
:
    (node: any) => {
        return (
            <>
                <h2>Embedded Asset</h2>
                <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
            </>
        )
    },
},
}
    return (
        <main>
            <h1>{data.contentfulPost.slug}</h1>
            <p>{data.contentfulPost.title}</p>
            {
                documentToReactComponents(document, options)
            }
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
