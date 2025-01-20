import Posts from "./Posts";

export default function ListPost(props) {
    const {searchResults} = props;
    const results = searchResults.map(post=> <Posts key={post.id} post={post}/>);
    const content = results.length ? results : <article><p>No Matching Posts</p></article>
    return (
        <div>{content}</div>
    )
}