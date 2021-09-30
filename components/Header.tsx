import { GraphQLClient } from "graphql-request";
import useSWR from "swr";
import Lottie from "lottie-react";
// import { useLottie, useLottieInteractivity } from "lottie-react";
import animationData from "../img/star.json";
import Icon from "./Icon";
import { useEffect, useRef, useState } from "react";

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

  const lottieRef = useRef<any | null>(null);

  const [isVisible, setIsVisible] = useState(true);

  const doSomething = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
    if (entry.isIntersecting) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(doSomething, options);
    lottieRef.current.animationItem && observer.observe(lottieRef.current?.animationItem?.wrapper);
  }, [lottieRef, options]);

  return (
    <header>
      <div className="lottie-cat">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          lottieRef={lottieRef}
          className="cat"
          style={isVisible ? { border: "1px solid red" } : { border: "1px solid blue" }}
        />
      </div>
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
      <div className="control">
        <button onClick={() => lottieRef.current.goToAndPlay(1)}>goToAndPlay(1)</button>
      </div>
    </header>
  );
};

export default Header;
