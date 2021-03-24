import BookService from './service'

class BookController {
  constructor() {
    this.bookService = new BookService();
  }

  get(request, response) {
    // console.log('request', request);
    // console.log('response', response);

    const books = this.bookService.get();

    if (!books || !books.length > 0) {
      return response.json({ message: 'Sorry my friend, 0 books here' })
    }

    return response.json(books)

  }

  getAuthor() {

  }
}

export default BookController