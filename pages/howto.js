import Head from 'next/head'
import Link from 'next/link'
import HCard from '../components/HCard';
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export async function getStaticProps(){
  const data = await fetch(`${process.env.API_URL}/categories/?id=6`)
  const res = await data.json();
  const articles = res[0].articles;
  const main_url = process.env.API_URL;
  return{
    props: {articles,main_url},
    revalidate:300
  }
}

export default function Howto(props) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>TechWiser | HowTo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h4 className={`mx-4 pt-5 mt-3 mb-5 text-center`} style={{fontWeight:'700'}}>CATEGORY: HOW TO</h4>
        <div className="row px-0 mx-0">
        
        {
          router.isFallback? <h1>Loading....</h1> :
          props.articles.map((post,id)=>{
            return(
              <div key={id} className="col-xl-12 col-md-12 col-12 px-0 mx-0">
                <Link as={`/posts/${post.id}`} href="/posts/[id]">
                  <a><HCard title={post.title} image={props.main_url + post.image.url} date={post.publishedAt}/></a>

                </Link>
              </div>           
          )})
            }
        </div>
      </Layout>
    </>
  )
}
