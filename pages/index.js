import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/card';
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export async function getStaticProps(){
  const data = await fetch(`${process.env.API_URL}/articles`)
  const res = await data.json();
  const main_url = process.env.API_URL;
  return{
    props: {res,main_url},
    revalidate:300,
  }
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h5 className={`${styles.lpost} mx-4 pt-5 mt-3 mb-5 `}>Latest Posts</h5>
        <div className="row px-0 mx-0">
        {
          props.res.map((post,id)=>{
            return(
              <div key={id} className="col-xl-4 col-md-6 col-12 px-0 mx-0">
                <Link as={`/posts/${post.id}`} href="/posts/[id]">
                  <a><Card title={post.title} author={post.author.name} image={props.main_url + post.image.url} date={post.publishedAt}/></a>

                </Link>
              </div>           
          )})
          }
        </div>
      </Layout>
    </>
  )
}
