let DislikeButton = document.querySelector('.post-rate:last-child');
let LikeButton = document.querySelector('.post-rate:not(:last-child)')
let LikeMessage = document.querySelector('.tooltiptext.LikeTip');
let dislike = false;
let LikeCount = 0;
let like = false;

let checkbox = document.getElementById("check");
let LikeEle = document.getElementsByClassName("post-rating-like-count");


// mouse down/up button

let buttons = document.querySelectorAll('.post-rate')

buttons.forEach(button => {

    button.addEventListener('mousedown', () => {
        button.style.backgroundColor = '#bbbbbb'; // Change color to a darker gray
    });
    button.addEventListener('mouseup', () => {
        button.style.backgroundColor = ''; 
    });


    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = ''; 
    });
});

// turns button dislike black

let DislikeIcon = document.querySelector('.post-rating-button.material-symbols-outlined');

DislikeButton.addEventListener('click', () => {

    if (DislikeIcon.classList.contains("material-symbols-outlined")) {
        DislikeIcon.classList.remove('material-symbols-outlined');
        // changes button to be filled in
        DislikeIcon.classList.add('material-icons');
        dislike = true;

        if (like === true) {
            checkbox.checked = false;
            like = false;
            LikeCount -= 1;
            LikeEle[0].textContent = LikeCount;
            


        };


    } else {
        DislikeIcon.classList.remove('material-icons');
        // changes button to be filled in
        DislikeIcon.classList.add('material-symbols-outlined');
        dislike = false;

    };
            

});

// Animation and Like count for like button

checkbox.addEventListener('change', function() {
    LikeEle[0].textContent='';

    if (checkbox.checked) {
        LikeCount += 1; // Increment like count
        like = true;
        LikeMessage.textContent = "Unlike";
        
        
        if (dislike === true) {
            DislikeIcon.classList.remove('material-icons');
            // changes button to be filled in
            DislikeIcon.classList.add('material-symbols-outlined');
            dislike = false;
        };

    } else {
        LikeCount -= 1; // Decrement like count
        like = false;
        LikeMessage.textContent = "I like this";
        
    }
    LikeEle[0].textContent = LikeCount; // Update the displayed like count
});









