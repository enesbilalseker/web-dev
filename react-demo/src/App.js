import "./App.css";
//import { Inline } from "./components/Inline";
//import { NameList } from "./components/NameList";
//import { UserGreeting } from "./components/UserGreeting";
//import { ClickHandler } from "./components/ClickHandler";
//import Greet from "./components/greet";
//import { Greet } from "./components/greet";
//import { Message } from "./components/Message";
//import { ParentComponent } from "./components/ParentComponent";
//import { Stylesheet } from "./components/Stylesheet";
//import { Form } from "./components/Form";
//import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";

function App() {
  return (
    <div className="App">
      {/*
      <Greet name="Bruce" heroName="Batman" />
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Women">
        <p>This is children props</p>
      </Greet>*/}

      {/*<Message></Message>
      <ClickHandler />

      <ParentComponent />

      <UserGreeting />

      <NameList />
      <Stylesheet />
      <Inline />
      <Form></Form>
      <PostList />*/}
      <PostForm />
    </div>
  );
}

export default App;
