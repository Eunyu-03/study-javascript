const postLayout = (() => {
    const showPosts = (photos) => {
        const table = document.getElementById("post-wrap");
        let text = ``;

        photos.forEach(({ userId, title, body }) => {
            text += `
                <tr>
                    <td>${title}</td>
                    <td>${userId}</td>
                    <td>${body}</td>
                </tr>
            `;
        });

        table.innerHTML = text;
    };

    return { showPosts: showPosts };
})();
