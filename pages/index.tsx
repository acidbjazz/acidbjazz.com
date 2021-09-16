import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import { gql, GraphQLClient } from "graphql-request";
import Lottie from "react-lottie";
import animationData from "../img/cat.json";
import Icon from "../components/icon/Icon";
import ReactMarkdown from "react-markdown";

export const getStaticProps: GetStaticProps = async () => {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
    },
  });
  const dataQuery = gql`
    {
      dataCollection {
        items {
          name
          jobTitle
        }
      }
      projectCollection(order: year_DESC) {
        items {
          name
          slug
          year
          url
          cover {
            url
          }
          description
        }
      }
    }
  `;
  const res = await graphQLClient.request(dataQuery);
  return { props: { res } };
};

const Home: NextPage = ({ res }: any) => {
  return (
    <>
      <Head>
        <title>acidbjazz.com</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="layout">
        <header>
          <div className="lottie-cat">
            <Lottie options={{ animationData, loop: true, autoplay: true, rendererSettings: { className: "cat" } }} />
          </div>
          <h1>{res.dataCollection.items[0].name}</h1>
          <p>{res.dataCollection.items[0].jobTitle}</p>
          <a href="mailto:acidbjazz@gmail.com">acidbjazz@gmail.com</a>
          <div className="social">
            <a href="https://www.linkedin.com/in/acidbjazz/" target="_blank" rel="noreferrer">
              <Icon name={"linkedin"} />
            </a>
            <a href="https://github.com/acidbjazz" target="_blank" rel="noreferrer">
              <Icon name={"github"} />
            </a>
            <a href="https://www.instagram.com/acidbjazz" target="_blank" rel="noreferrer">
              <Icon name={"instagram"} />
            </a>
            <a href="https://open.spotify.com/user/12124188210" target="_blank" rel="noreferrer">
              <Icon name={"spotify"} />
            </a>
          </div>
        </header>
        <main>
          <div className="cards">
            {res.projectCollection.items.map((item: any, i: any) => {
              return (
                <div className={`card ${!item.url && "disabled"}`} key={i}>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <img className="cover" src={item.cover.url} alt={item.name} />
                      <h2>{item.name}</h2>
                    </a>
                  ) : (
                    <>
                      <img className="cover" src={item.cover.url} alt={item.name} />
                      <h2>{item.name}</h2>
                    </>
                  )}
                  <ReactMarkdown>{item.description}</ReactMarkdown>
                </div>
              );
            })}
          </div>
        </main>
        <footer>
          <div className="tech">
            This site: React::Next.js, CSS3::SASS. Lottie SVG animations. Contentful, Graphql. After Effects,
            Illustrator, Photoshop
          </div>
          <div className="copy">©{new Date().getFullYear()}</div>
        </footer>
      </div>
    </>
  );
};

export default Home;
