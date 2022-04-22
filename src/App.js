import {Route, Routes, Navigate} from 'react-router-dom'
import {MainLayout} from "./Layouts";
import {AboutPage, HomePage, PostsPage, UserDetailsPage, UserPostsPage, UsersPage} from "./pages";

const App = () => {
  return (
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'home'}/>}/>
            <Route path={'home'} element={<HomePage/>}/>
            <Route path={'users'} element={<UsersPage/>}>
                <Route path={':id'} element={<UserDetailsPage/>}>
                    <Route path={'posts'} element={<UserPostsPage/>}/>
                </Route>
            </Route>
            <Route path={'posts'} element={<PostsPage/>}></Route>
            <Route path={'about'} element={<AboutPage/>} />
        </Route>
      </Routes>
  );
};

export default App;
