const UserPost = ({uPost}) => {
    const {title} = uPost
    return (
        <div>
            <h4>{title}</h4>
            <ul>
                {Object.keys(uPost).map(key => (<li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {uPost[key]}</li>))}
            </ul>
        </div>
    );
};

export {UserPost};