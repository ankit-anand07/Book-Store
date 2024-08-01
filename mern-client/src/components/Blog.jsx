import React from 'react'

const Blog = () => {
  return (

    <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
      <h1 class="text-4xl font-bold text-center mb-8 text-gray-800">Welcome to The Book Nook Blog</h1>

      <p class="text-lg text-gray-700 mb-6 text-center">
        Welcome to The Book Nook Blog, your go-to source for book reviews, author interviews, literary insights, and much more. Dive into the world of books with us and discover your next great read!
      </p>

      <div class="mb-10">
        <h2 class="text-3xl font-semibold text-gray-800 mb-4">Categories</h2>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">Book Reviews</h3>
          <p class="text-gray-700 mb-4">
            Check out our latest reviews to find out which books are worth your time. From thrilling mysteries to heartwarming romances, we cover it all. Here are a few of our recent reviews:
          </p>
          <ul class="list-disc list-inside text-gray-700">
            <li><strong>Mystery at Maple Hill</strong> by Jane Smith: A gripping tale of suspense and intrigue.</li>
            <li><strong>Love in Bloom</strong> by Emily Rose: A heartwarming romance perfect for a cozy evening.</li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">Author Interviews</h3>
          <p class="text-gray-700 mb-4">
            Get to know your favorite authors up close and personal. Our interviews reveal the stories behind the stories. Recent interviews include:
          </p>
          <ul class="list-disc list-inside text-gray-700">
            <li><strong>John Doe</strong>: The mind behind the bestselling thriller "Shadow's Edge."</li>
            <li><strong>Alice Green</strong>: Author of the beloved children's series "Magic Meadows."</li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">Reading Lists</h3>
          <p class="text-gray-700 mb-4">
            Looking for your next read? Our curated reading lists cover everything from summer beach reads to thought-provoking classics. Check out these lists:
          </p>
          <ul class="list-disc list-inside text-gray-700">
            <li><strong>Top 10 Summer Beach Reads</strong>: Perfect books to enjoy by the sea.</li>
            <li><strong>Classic Literature Must-Reads</strong>: Timeless novels that everyone should experience.</li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">Literary News</h3>
          <p class="text-gray-700 mb-4">
            Stay up-to-date with the latest literary news. Find out about upcoming releases, award winners, and exciting events in the book world. Recent news highlights:
          </p>
          <ul class="list-disc list-inside text-gray-700">
            <li><strong>New Release</strong>: "Echoes of Eternity" by Robert White hits the shelves next month.</li>
            <li><strong>Award Announcement</strong>: The winner of the 2024 Booker Prize is revealed.</li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">Community Stories</h3>
          <p class="text-gray-700 mb-4">
            Read about the amazing literary initiatives in our community. From local book clubs to author events, there's always something happening. Recent stories include:
          </p>
          <ul class="list-disc list-inside text-gray-700">
            <li><strong>Local Book Club Spotlight</strong>: Springfield Readers Club discusses their favorite books of the year.</li>
            <li><strong>Event Recap</strong>: Highlights from our recent author signing event with Sarah Blue.</li>
          </ul>
        </div>
      </div>

      <div class="mb-10">
        <h2 class="text-3xl font-semibold text-gray-800 mb-4">Engagement</h2>
        <p class="text-gray-700">
          We love hearing from our readers! Share your thoughts on our reviews, tell us about your favorite books, and join the conversation. Leave a comment below each post and let’s talk about all things books.
        </p>
      </div>

      <div>
        <h2 class="text-3xl font-semibold text-gray-800 mb-4">Call to Action</h2>
        <p class="text-gray-700 mb-4">
          Never miss an update! Sign up for our newsletter to get the latest blog posts, event announcements, and special offers delivered straight to your inbox. <a href="http://localhost:5173/sign-up" class="text-blue-500 underline">Sign up here!</a>
        </p>
      </div>
    </div>
  )
}

export default Blog