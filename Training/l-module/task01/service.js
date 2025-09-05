const postService = (() => {
    const getPosts = async (page, callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();

        console.log(page);

        const rowSize = 5;
        const end = page * rowSize;
        const start = end - rowSize + 1;

        if (callback) {
            callback(posts.slice(start - 1, end));
        }
    };

    return { getPosts: getPosts };
})();
