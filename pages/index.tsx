import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import { gql, GraphQLClient } from "graphql-request";
import ReactMarkdown from "react-markdown";

export const getStaticProps: GetStaticProps = async () => {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CSI}`;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_CAK}`,
    },
  });
  const dataQuery = gql`
    {
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
  const data = await graphQLClient.request(dataQuery);
  const projects: Array<Project> = data.projectCollection.items;
  return { props: { projects } };
};

interface Project {
  name: string;
  slug: string;
  year: string;
  url: string;
  cover: {
    url: string;
  };
  description: string;
}

const Home: NextPage = ({ projects }: any) => {
  return (
    <>
      <Head>
        <title>acidbjazz.com :: portfolio</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="portfolio">
        <div className="cards">
          {projects.map((item: Project, i: number) => {
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
      </div>
    </>
  );
};

export default Home;
