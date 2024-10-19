import logo from './logo.svg';
import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store'
import { useGetUserByNameQuery } from './services/userApi'
import { Table, } from 'react-bootstrap';
import { useEffect } from 'react';
import { fetchPosts } from './slices/postSlice'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])
  const { data, error, isLoading } = useGetUserByNameQuery()
  const posts = useSelector(state => state.posts.posts)
  console.log({ posts })
  return (
    <div>
      <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
        <h1>User Table</h1>
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e,index) => 
              <tr key={e.username}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
              </tr>
              )}
            
            </tbody>
          </Table>
        
          <h1>Posts</h1>
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((e,index) => 
              <tr key={e.username}>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.body}</td>
              </tr>
              )}
            
            </tbody>
          </Table>
        </>
      ) : null}
    </div>
    </div>
  );
}

export default App;
