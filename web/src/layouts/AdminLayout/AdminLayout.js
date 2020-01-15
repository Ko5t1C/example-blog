import { useState } from 'react'
import netlifyIdentity from 'netlify-identity-widget'
import { Link, routes } from '@redwoodjs/router'

const AdminLayout = (props) => {
  return (
    <div className="p-4">
      <header className="flex justify-between">
        <h1 className="text-xl font-semibold">
          <Link to={routes.posts()} className="underline">
            Posts
          </Link>
        </h1>
        <nav className="">
          <Link
            to={routes.newPost()}
            className="bg-red-600 hover:bg-red-500 text-white text-xs font-semibold px-3 py-2 uppercase tracking-wide rounded"
          >
            + New Post
          </Link>
        </nav>
      </header>
      <main>
        <section className="mt-8">{props.children}</section>
      </main>
    </div>
  )
}

export default AdminLayout
