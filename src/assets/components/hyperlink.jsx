const Hyperlink = ({text, url}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="hyperlink">
      {text}
    </a>
  );
};
export default Hyperlink;
