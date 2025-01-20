import Posts from "./Posts";

export default function ListPost(props) {
    const {searchResults} = props;
    const results = searchResults.map(post=> <Posts key={post.id} post={post}/>);
    const content = results.length ? results : <article className="text-xl"><p>No Matching Posts</p></article>
    return (
        <div className="grid grid-cols-3 m-3 p-3">
            {content}
        </div>
    )
}