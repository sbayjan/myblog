import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch('http://localhost:8000/blogs');
  return (
    <div className="home">
      {error && <div className="error">{error.message}</div>}
      {loading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All articles" />}
    </div>
  );
};

export default Home;
