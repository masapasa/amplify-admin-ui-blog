import { Link } from 'react-router-dom'

export default function NavBar () {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <h1 className='title'>Bob's Amplify Blog</h1>
        </Link>
      </div>
      <div className='navbar-end'>
        <div className='navbar-item'>
          <div className='buttons'>
            <Link to='/new' className='button is-primary'>
              <strong>Create a Post</strong>
            </Link>
          </div>
        </div>
      </div>
    </nav>)
}
