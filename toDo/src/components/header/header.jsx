import "./header.css";

function Header({ header, description }) {
  return (
    <div className="header">
      <h1>{header}</h1>
      <h1>{description}</h1>
    </div>
  );
}

export default Header;
