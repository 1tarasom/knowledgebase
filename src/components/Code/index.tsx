import React from "react";
import Highlight, {defaultProps, Language} from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';

type Props = {
    children: string
    language: Language
}

const Code = ({children, language}: Props) => {
    return (
        <Highlight
            {...defaultProps}
            theme={dracula}
            code={children}
            language={language}
        >
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({line, key: i})}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({token, key})} />
                            ))}
                        </div>
                    ))}
              </pre>
            )}
        </Highlight>
    )
}

export default Code;
