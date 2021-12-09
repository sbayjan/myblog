import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <br />
      <p>That Page is nonExistent</p>
      <br />
      <Link to="/">
        <h3>Go Home</h3>
      </Link>
    </div>
  );
};

export default NotFound;
