let alreadyLiked = false
id("like").addEventListener("click", function () {
    const currentLikeCount = parseInt(id("likeCount").innerText);
    if (!alreadyLiked) {
        id("likeImg").src = "/assets/img/liked.png";
        id("likeCount").innerText = currentLikeCount + 1;
        alreadyLiked = true;
    } else {
        id("likeImg").src = "/assets/img/like.png";
        id("likeCount").innerText = currentLikeCount - 1;
        alreadyLiked = false;
    }
});