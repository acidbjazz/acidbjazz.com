const Footer = () => {
  return (
    <footer>
      <div className="tech">
        This site: React::Next.js, CSS3::SASS. Lottie SVG animations. Contentful, Graphql. After Effects, Illustrator,
        Photoshop
      </div>
      <div className="copy">©{new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
