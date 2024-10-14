// Default button


let DislikeButton = document.querySelector('.post-rate:last-child');

// mouse down action
DislikeButton.addEventListener('mousedown', () => {
    DislikeButton.style.backgroundColor = '#bbbbbb'; // change color to a darker gray
});

DislikeButton.addEventListener('mouseup', () => {
    DislikeButton.style.backgroundColor = '';
});

// turns button black

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




