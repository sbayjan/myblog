import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('jane');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setLoading(true);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    }).then(() => {
      setLoading(false);
      navigate('/');
    });
  };

  return (
    <div className="create">
      <h1>New article</h1>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="jane">jane</option>
          <option value="john">john</option>
          <option value="dave"> dave</option>
        </select>
        {!loading && <button>Add Blog</button>}
        {loading && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
