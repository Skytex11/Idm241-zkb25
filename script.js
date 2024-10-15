let DislikeButton = document.querySelector('.post-rate:last-child');

let LikeButton = document.querySelector('.post-rate:not(:last-child)')





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


    } else {
        DislikeIcon.classList.remove('material-icons');
        // changes button to be filled in
        DislikeIcon.classList.add('material-symbols-outlined');
    };
            

});

// Animation for like button






