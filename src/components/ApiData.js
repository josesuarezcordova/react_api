import React, {useState, useEffect} from "react";

const ApiData = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://stephen-king-api.onrender.com/api/books')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Inspect the API response
                setBooks(data.data || []); // Assuming the array is inside a "villians" property
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
           <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <h3>{book.Title}</h3>
                        <p><strong>Year:</strong> {book.Year}</p>
                        <p><strong>Publisher:</strong> {book.Publisher}</p>
                        <p><strong>ISBN:</strong> {book.ISBN}</p>
                        <p><strong>Pages:</strong> {book.Pages}</p>

                        <h4>Villains:</h4>
                        <ul>
                            {book.villains.map((villain, index) => (
                                <li key={index}>
                                    <a href={villain.url} target="_blank" rel="noopener noreferrer">
                                        {villain.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            {/* <pre>{JSON.stringify(books, null, 2)}</pre> */}
        </div>
    );
}

export default ApiData;