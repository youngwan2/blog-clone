import Markdown from "react-markdown";
import  remarkGfm  from  'remark-gfm' 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
export default function MarkdownView({markdown}:{markdown:string}) {



    return (
        <Markdown className={"prose lg:prose-xl prose-neutral mx-auto"} remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
        
    )
}