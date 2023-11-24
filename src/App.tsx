import "./App.css"
import PostList from "./entities/posts/ui/PostsList"
import UserList from "./entities/user/ui/UserList"

function App() {
  return (
    <div style={{
      display: 'flex',
      gap: 24
    }}>
      <div style={{
        flex: 1
      }}>
        <PostList />
      </div>
      <div style={{
        flex: 1
      }}>
        <UserList />
      </div>
    </div>
  )
}

export default App
