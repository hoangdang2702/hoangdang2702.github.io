const posts = [
    {
        title: "Liquid Universe",
        slug: "liquid-universe",
        date: "2024-02-20",
        thumbnail: "assets/thumbnails/liquid.jpg",
        excerpt: "Procedural fluid simulation using WebGL",
        tags: ["WebGL", "Fluid Dynamics"]
    },
    {
        title: "Quantum Waves",
        slug: "quantum-waves",
        date: "2024-02-18",
        thumbnail: "assets/thumbnails/waves.jpg",
        excerpt: "Wave function collapse visualization",
        tags: ["GLSL", "Physics"]
    }
];

function createPostCard(post) {
    return `
    <a href="posts/${post.slug}.html" class="post-card">
        <img src="${post.thumbnail}" alt="${post.title}" class="post-thumbnail">
        <div class="post-content">
            <div class="post-meta">
                <span>${post.date}</span>
                <div>${post.tags.map(tag => `<span>#${tag}</span>`).join(' ')}</div>
            </div>
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
        </div>
    </a>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('posts-grid');
    grid.innerHTML = posts.map(createPostCard).join('');
});
