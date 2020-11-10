import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataStore } from '@aws-amplify/datastore'

import MarkdownContainer from './MarkdownContainer'
import CreateComment from './CreateComment'
import { Comment } from './models'

export default function Post ({ posts }) {
  const params = useParams()
  const post = posts.find(post => post.id === params.id)
  const [comments, setComments] = useState([])

  useEffect(() => {
    const getComments = async () => {
      const postComments = await DataStore.query(Comment, c => c.postID('eq', post.id))
      setComments(postComments)
    }
    getComments()
  }, [post])

  return (
    <div>
      <section>
        <h1 className='title is-4'>{post.title}</h1>
        <MarkdownContainer markdown={post.content} />
      </section>
      <div className='section'>
        <h3 className='title is-4'>Comments</h3>
        {comments.map(comment => <div key={comment.id} style={{ marginTop: '10px' }}>
          <p>{comment.text}</p>
          <b>{comment.author}</b>
        </div>)}
      </div>
      <CreateComment postId={post.id} />
    </div>
  )
}
