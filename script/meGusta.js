let likes = [9, 12, 9]; // Initial likes for the posts

function likePost(postId) {
    likes[postId - 1]++; // Increase the likes for the corresponding post
    document.getElementById(`likes${postId}`).textContent = `${likes[postId - 1]} likes`; // Update the text
}
