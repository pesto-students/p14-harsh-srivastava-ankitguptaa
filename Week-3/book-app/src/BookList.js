import Book from './Book';
import './BookList.css';

function BookList() {
    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 },
    ];

    return books.map(x => <li className='BookList' key={x.title}>
        <Book author={x.author} title={x.title} year={x.year}></Book>
    </li>);
}

export default BookList;