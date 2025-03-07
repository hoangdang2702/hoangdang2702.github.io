const posts = [
    {
        title: "Wave Shader",
        url: "posts/first-shader.html",
        thumbnail: "assets/thumbnails/wave.jpg",
        description: "Procedural wave pattern using noise functions"
    },
    // Add more posts here
];

function createPostCard(post) {
    return `
    <a href="${post.url}" class="post-card">
        <img src="${post.thumbnail}" alt="${post.title}">
        <h3>${post.title}</h3>
        <p>${post.description}</p>
    </a>
    `;
}

window.onload = () => {
    const grid = document.getElementById('posts-grid');
    grid.innerHTML = posts.map(createPostCard).join('');
};
