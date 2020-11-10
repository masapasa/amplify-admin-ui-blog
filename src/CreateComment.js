import { useState } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import { Comment } from './models'

export default function CreatePost ({ postId }) {
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    await DataStore.save(
      new Comment(
        {
          author,
          text,
          postID: postId
        }
      )
    )
    setAuthor('')
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className='section'>
      <h2 className='title is-4'>Create a Comment</h2>
      <div className='field'>
        <label className='label'>Text</label>
        <textarea className='textarea' type='text' onChange={e => setText(e.target.value)} />
      </div>
      <div className='field'>
        <label className='label' htmlFor='author'>Author</label>
        <input className='input' type='text' name='author' onChange={e => setAuthor(e.target.value)} />
      </div>
      <input className='button is-link' type='submit' value='create' />
    </form>
  )
}
