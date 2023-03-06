import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({onBodyChange,onAuthorChange,onCancel}) {

  const [enteredBody, setBody] = useState('');
    const [enteredAuthor, setAuthor] = useState('');

    function onBodyChangeHandler(event) {
        setBody(event.target.value);
    }

    function onAuthorChangeHandler(event) {
        setAuthor(event.target.value);
    }

    function onFormSubmit(event){
      event.preventDefault();
      const postData = {
        body:enteredBody,
        author: enteredAuthor
      }

      onCancel();
    }

  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel} >Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;