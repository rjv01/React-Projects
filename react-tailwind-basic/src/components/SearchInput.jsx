import React from 'react';

export default function SearchInput({ posts, setSearchResults }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleSearchChange = (e) => {
        const searchText = e.target.value.toLowerCase(); 
        if (!searchText) {
            setSearchResults(posts); 
            return;
        }

        const resultsArray = posts.filter(
            (post) =>
                post.title.toLowerCase().includes(searchText) ||
                post.body.toLowerCase().includes(searchText)
        );

        setSearchResults(resultsArray);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter text to search"
                onChange={handleSearchChange}
                className='m-3 p-3 text-xl border-4 rounded-xl border-blue-800'
            />
            <i className="fa-solid fa-magnifying-glass text-3xl"></i>
        </form>
    );
}
