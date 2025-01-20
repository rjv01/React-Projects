// import React from 'react'

// export default function SearchInput(props) {
//     const {posts,setSearchResults} = props;

//     function handleSubmit(e){
//         e.preventDefault();
//     }

//     const handleSearchChange = (e)=>{
//         // const txt = e.target.value.trim();
//         if(e.target.value){
//             setSearchResults(posts);
//             return ;
//         }
//         const resultsArray = posts.filter(post=> post.title.includes(e.target.value) || (post.body.includes(e.target.value)));

//         setSearchResults(resultsArray);
//     }
    
//     return (
//         <div>
//             <form
//                 className=''
//                 onSubmit={handleSubmit}
//             >
//                 <input 
//                     type="text"
//                     placeholder='Enter text'
//                     onChange={handleSearchChange}/>
//                 <button

//                 >
//                     Search
//                 </button>
//             </form>
//         </div>
//     )
// }
import React from 'react';

export default function SearchInput(props) {
    const { posts, setSearchResults } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleSearchChange = (e) => {
        const searchText = e.target.value.toLowerCase(); // Convert input to lowercase
        if (!searchText) {
            setSearchResults(posts); // Show all posts if input is empty
            return;
        }

        // Filter posts by title or body
        const resultsArray = posts.filter(
            (post) =>
                post.title.toLowerCase().includes(searchText) ||
                post.body.toLowerCase().includes(searchText)
        );

        setSearchResults(resultsArray);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter text to search"
                    onChange={handleSearchChange}
                    aria-label="Search posts"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}
