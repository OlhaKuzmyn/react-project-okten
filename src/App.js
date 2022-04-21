import {Routes, Route, Navigate} from 'react-router-dom';
import {MainLayout} from "./Layouts";
import {AboutPage, CommentsPage, HomePage, NotFoundPage, PostsPage, SingleUserPage, UsersPage} from "./Pages";


const App = () => {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'home'} />}  />
              <Route path={'home'} element={<HomePage/>} />
              <Route path={'users'} element={<UsersPage/>} >
                  <Route path={':id'} element={<SingleUserPage/>} />
              </Route>
              <Route path={'posts'} element={<PostsPage/>}>

              </Route>
              <Route path={'comments'} element={<CommentsPage/>} />
              <Route path={'about'} element={<AboutPage/>} />
              <Route path={'*'} element={<NotFoundPage/>} />
          </Route>
      </Routes>
  );
};

export default App;
