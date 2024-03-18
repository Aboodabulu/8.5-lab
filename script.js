import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://kiknuotgjjqsbslznsve.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtpa251b3Rnampxc2JzbHpuc3ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3OTYwNTIsImV4cCI6MjAyNjM3MjA1Mn0.uTgR4JQfV-PhiixdCwO1nnSO0kWwIWhCAktJejncp9g'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks(){
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

  for (let book of books) {
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<li>${book.title} - ${book.author} - ${book.ISBN}</li>`
  }
}

getBooks();