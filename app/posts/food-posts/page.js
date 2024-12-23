import Link from "next/link"



export default async function Food() {

    const dataRes = await fetch('https://jsonplaceholder.typicode.com/posts')
    const dataShow = await dataRes.json()

    const divPost = dataShow.map((post) => {

        return (
            <Link href={`/posts/food-posts/${post.id}`}>
                <div key={post.id} style={{
                    height: "400px",
                    width: "70vw",
                    background: "white",
                    color: 'black',
                    margin: '5px'
                }}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p>{post.body}</p>
                    <p>{post.body}</p>
                    <p>{post.body}</p>
                </div>
            </Link>
        )
    })

    return (
        <div>
            <h1>FOOD</h1>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {divPost}
            </div>

        </div>
    )
}