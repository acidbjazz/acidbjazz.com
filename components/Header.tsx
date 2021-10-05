import { GraphQLClient } from "graphql-request";
import { useRef } from "react";
import useSWR from "swr";
import Animation from "./Animation";
import Icon from "./Icon";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CSI}`;
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_CAK}`,
  },
});
const fetcher = (query: string) => graphQLClient.request(query);

const Header = () => {
  const { data, error } = useSWR(
    `
      {
        dataCollection {
          items {
            name
            jobTitle
          }
        }
      }
    `,
    fetcher
  );

  const animationBiplaneRef = useRef<any | null>(null);

  return (
    <header>
      <Animation className="biplane" ref={animationBiplaneRef} />
      <h1>{data?.dataCollection.items[0].name}</h1>
      <p>{data?.dataCollection.items[0].jobTitle}</p>
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
      {/* <div className="control">
        <button onClick={() => animationBiplaneRef.current.goToAndPlay(1)}>goToAndPlay(1)</button>
      </div> */}
    </header>
  );
};

export default Header;
