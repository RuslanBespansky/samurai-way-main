
import "./App.css";

import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Profile } from "./components/profile/Profile";
import { Dialogs } from "./components/dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { News } from "./components/news/News";
import { Music } from "./components/music/Music";
import { Seting } from "./components/seting/Seting";
import { RootStateType, StoreType } from "./redux/State";




type AppType = {
  state: RootStateType;
  addPost: (postMesage: string) => void;
  changeNewPostText:(newText:string)=>void
};

function App(props: AppType) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.state.dialogsPage} />}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                state={props.state}
                addPost={props.addPost}
                newPostText={props.state.profilePage.newPostText}
                changeNewPostText={props.changeNewPostText}
              />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/seting" render={() => <Seting />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
