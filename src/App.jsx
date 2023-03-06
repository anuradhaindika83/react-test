import { useState } from 'react'
import './App.css'
import MainHeader from './components/MainHeader'
import PostList from './components/PostList'

function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  function onCreateClickHandler(event){
    setModalVisible(true);
  }

  function onCloseHandler() {
    setModalVisible(false);
}

  return (
    <>
    <MainHeader onCreatePost={onCreateClickHandler} />
     <main>
      <PostList ModalVisible={isModalVisible} onModalClose={onCloseHandler}/>
    </main>
    </>
   
   
  )
}

export default App
