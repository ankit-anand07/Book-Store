import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";
import UploadBook from './UploadBooks';

const EditBooks = () => {
  const {id} = useParams();
  const { book_title, author_name, image_url, category, book_description, book_pdf_url } = useLoaderData()|| {};

  const bookCartegories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Romance",
    "Art and Design"
  ]
  const [selectedBookcategory, setSelectedBookCategory] = useState(category || bookCartegories[0]);

  const handlechangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  // handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const book_title = form.book_title.value;
    const author_name = form.author_name.value;
    const image_url = form.image_url.value;
    const category = form.categoryName.value;
    const book_description = form.book_description.value;
    const book_pdf_url = form.book_pdf_url.value;

    const bookObj = {
      book_title, author_name, image_url, category, book_description, book_pdf_url
    }
    // console.log(bookObj)
    // update book data
    fetch('https://book-store-0abb.onrender.com/book/${id}',{
      method:"PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(UpdateBookObj)
    }).then(res => res.json()).then(data => {
      alert("Book updated successfully!!")
    
    })

  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'> Update the Book Data </h2>

      <form onSubmit={handleUpdate} className="flex LG:W-[1180PX] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8'>

          {/* book_title */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="book_title" value="Book Title" />
            </div>
            <TextInput id="book_title" name='book_title' type="text" defaultValue={book_title} placeholder="book name" required />
          </div>

          {/* author_name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="author_name" value="Author Name" />
            </div>
            <TextInput id="author_name" name='author_name' type="text" placeholder="author name" defaultValue={author_name} required />
          </div>

        </div>

        {/* second row */}
        <div className='flex gap-8'>

          {/* image_url */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="image_url" value="Image URL" />
            </div>
            <TextInput id="image_url" name='image_url' type="text" placeholder="image url" defaultValue={image_url} required />
          </div>

          {/* category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookcategory}
              onChange={handlechangeSelectedValue}>
              {
                bookCartegories.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </Select>
          </div>

        </div>

        {/* book_description */}
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="book_description" value="Book Description" />
          </div>
          <Textarea id="book_description" name='book_description' placeholder=" Write your book descriptions..." defaultValue={book_description} required className='w-full' rows={6} />
        </div>

        {/* book_pdf_url */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="book_pdf_url" value="Book PDF URL" />
          </div>
          <TextInput id="book_pdf_url" type="text" name='book_pdf_url' placeholder="book pdf url" defaultValue={book_pdf_url} required />
        </div>

        {/* Button */}
        <button type="submit"
          className='mt-5 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-500'>
          Update Book
        </button>


      </form>
    </div>
  )
}

export default EditBooks