import './App.css';
import GetApiCall from './components/getapicall';
import PostApiCall from './components/postapicall';

function App() {
  return (
   <>
   <GetApiCall />
   <PostApiCall text="Some text"/>
   </>
  );
}

export default App;
