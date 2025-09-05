const page = document.getElementById("page");
const button = document.getElementById("get-page");

button.addEventListener("click", (e) => {
    console.log("실행1");
    postService.getPosts(page.value, postLayout.showPosts);
});
