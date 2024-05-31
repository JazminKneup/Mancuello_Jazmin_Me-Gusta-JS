let likes = [9, 12, 9];

function likePost(postId) {
    likes[postId - 1]++; 
    document.getElementById(`likes${postId}`).textContent = `${likes[postId - 1]} likes`; 
}
