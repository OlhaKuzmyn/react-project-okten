const CommentDetails = ({comment}) => {
    return (
        <div>
            <h4>{comment.name}</h4>
            <ul>
                {Object.keys(comment).map(key => <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {comment[key]}</li>)}
            </ul>
        </div>
    );
};

export {CommentDetails};