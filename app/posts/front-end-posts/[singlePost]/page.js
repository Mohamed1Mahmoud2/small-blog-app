


async function SinglePost({ params }) {
    console.log(params.singlePost)
    const postId = params.singlePost
    const dataRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const postShow = await dataRes.json()
    console.log(postShow);
    const thePostEle = (
        <div style={{
            height: "400px",
            width: "70vw",
            background: "white",
            color: 'black',
            margin: '5px'
        }}>
            <h2>{postShow.title}</h2>
            <p>{postShow.body}</p>
            <p>{postShow.body}</p>
            <p>{postShow.body}</p>
            <p>{postShow.body}</p>
            <p>{postShow.body}</p>
            <p>{postShow.body}</p>
            <p>{postShow.body}</p>
        </div>
    )


    return (
        <div>
            <h1>You read</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {postId}
                {thePostEle}
            </div>
        </div>
    )
}

export default SinglePost
