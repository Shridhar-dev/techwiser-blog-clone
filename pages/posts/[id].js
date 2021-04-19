import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import Layout from '../../components/Layout';


export async function getStaticProps(context){
    let data = await fetch(`${process.env.API_URL}/articles/?id=${context.params.id}`)
    let post = await data.json();
    return{
        props:{post},
        revalidate:300
    }
}
export async function getStaticPaths() {
    return {
      paths: [],
      fallback: true 
    };
  }
function Page(props) {
    const router = useRouter()
    if(router.isFallback){
        return <h1>Loading....</h1>
    }
    else{
        return (
            <Layout>
                <div className="mx-5 px-5">
                    <div className="mx-5 px-5">
                        <h1 style={{fontSize:'3rem'}} className="my-5 py-5">{props.post[0].title}</h1>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]} className="main___content">
                            {props.post[0].content}
                        </ReactMarkdown>
                    </div>
                </div>
            </Layout>
        )
}
}

export default Page
