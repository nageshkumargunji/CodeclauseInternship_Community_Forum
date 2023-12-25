
import {ChatEngine} from 'react-chat-engine'
import './App.css';
import LoginForm  from "./Components/LoginForm";
import ChatFeed from './Components/ChatFeed';
const  App=()=> {
  //Samarth Samarth@123
  const projectID="ae255fe3-1a66-4e37-933f-4000fd58c938"
  if(!localStorage.getItem('username'))
  return <LoginForm />
  return (
   <ChatEngine 
   height="100vh" 
   projectID={projectID}
    
   userName={localStorage.getItem('username')}
   userSecret={localStorage.getItem('password')}
   renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}>
   </ChatEngine> 
  );
}


export default App;
