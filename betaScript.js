let email = document.getElementById("Message");

let mailToolTip = document.getElementsByClassName("mailTool")

let ActiveButton = document.querySelector(".activeButton");
let ActiveToolBox = document.querySelector(".Activetiptext");

let helpButton = document.querySelector(".helpButton");
let SupportToolBox = document.querySelector(".SupportTiptext");


let mail = document.querySelector('.mail');
let mailIcon =document.querySelector('.m5');
let chat = document.querySelector('.chat')
let chatIcon = document.querySelector('.mt');
let meet = document.querySelector('.mmm');
let meetIcon = document.querySelector('.meet');
let meetTwo = document.querySelector('.m8');

let mailTog = false;
let chatTog = false;
let meetTog = false;



let buttons = document.querySelectorAll('.icon, .md, .activeButton, .helpButton')
console.log(buttons);


///Mouse down
buttons.forEach(button => {

    button.addEventListener('mousedown', () => {
        button.style.backgroundColor = '#b8b8b8';
        //button.style.borderRadius = "11px";
         // Change color to a darker gray
    });
    button.addEventListener('mouseup', () => {
        button.style.backgroundColor = '';
        
    });

});

//Mail
mail.addEventListener('click', () => {

            // changes button to be filled in

    if (mail.textContent === "mail_outline") {
        mail.textContent = "mail"; // Switch to the second path
        mailTog = true;
        mail.classList.remove('test');
        mailIcon.classList.remove('icon');
        mail.classList.add('active');
        Message.textContent = "User's Emails";
        
   
        
        if (chatTog === true) {
            chat.textContent = "chat_bubble_outline";
            chatTog === false;
            chat.classList.remove('active');
            chatIcon.classList.add('icon');
            chat.classList.add('test');

        };

        if (meetTog === true) {
            meet.style.fontVariationSettings = '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24';
            meetTog = false;
            meet.classList.remove('active');
            meetTwo.classList.add('icon');
            meetIcon.classList.add('test');
        };



    } else {
        Message.textContent = "Page Refresh then Emails are presented";


     
    }
});
//chat
chat.addEventListener('click', () => {
    if (chat.textContent === "chat_bubble_outline") {
        chat.textContent = "chat_bubble"; // Switch to the second path
        chatTog = true;
        chat.classList.remove('test');
        chat.classList.remove('test');
        chatIcon.classList.remove('icon');
        chat.classList.add('active');
        Message.textContent = "User's Messages";

        if (mailTog === true) {
            mail.textContent = "mail_outline";
            mailTog = false;
            mail.classList.remove('active');
            mailIcon.classList.add('icon');
            mail.classList.add('test');
        };

        if (meetTog === true) {
            meet.style.fontVariationSettings = '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24';
            meetTog = false;
            meet.classList.remove('active');
            meetTwo.classList.add('icon');
            meetIcon.classList.add('test');
        };


    } else{
        Message.textContent = "Page Refresh then Messages are presented";


    }
});

//meet
meet.addEventListener('click', () => {  // Select the element

    if (meet.style.fontVariationSettings === '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24') {
        meet.style.fontVariationSettings = '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24';
        meetTog = true;
        meetIcon.classList.remove('test');
        meet.classList.remove('test');
        meetTwo.classList.remove('icon');
        meet.classList.add('active');
        Message.textContent = "User's Meeting Information";

        if (chatTog === true) {
            chat.textContent = "chat_bubble_outline";
            chatTog = false;
            chat.classList.remove('active');
            chatIcon.classList.add('icon');
            chat.classList.add('test');
        };

        if (mailTog === true) {
            mail.textContent = "mail_outline";
            mailTog = false;
            mail.classList.remove('active');
            mailIcon.classList.add('icon');
            mail.classList.add('test');
        };


        
    } else {
        // Optional: Reset the font-variation-settings to the original state
        Message.textContent = "Page Refresh with Meeting Information";



    }
});



ActiveButton.addEventListener("click", (event) => {

    ActiveToolBox.style.display = ActiveToolBox.classList.contains("visible") ? "none" : "block";
    setTimeout(() => {
        ActiveToolBox.classList.toggle("visible");
    }, 0);
    event.stopPropagation();
});

document.addEventListener("click", () => {
    if (ActiveToolBox.classList.contains("visible")) {
        ActiveToolBox.classList.remove("visible");
        setTimeout(() => {
            ActiveToolBox.style.display = "none";
        }, 600); 
    }
});

helpButton.addEventListener("click", () => {
    if (ActiveToolBox.classList.contains("visible")) {
        ActiveToolBox.classList.remove("visible");
        setTimeout(() => {
            ActiveToolBox.style.display = "none";
        }, 600); 
    }
});


ActiveToolBox.addEventListener("click", (event) => {
    event.stopPropagation();
});


  helpButton.addEventListener("click", (event) => {

    SupportToolBox.style.display = SupportToolBox.classList.contains("visible") ? "none" : "block";
    setTimeout(() => {
        SupportToolBox.classList.toggle("visible");
    }, 0);
    event.stopPropagation();
});

document.addEventListener("click", () => {
    if (SupportToolBox.classList.contains("visible")) {
        SupportToolBox.classList.remove("visible");
        setTimeout(() => {
            SupportToolBox.style.display = "none";
        }, 600); 
    }
});

ActiveButton.addEventListener("click", () => {
    if (SupportToolBox.classList.contains("visible")) {
        SupportToolBox.classList.remove("visible");
        setTimeout(() => {
            SupportToolBox.style.display = "none";
        }, 600);
    }
});

SupportToolBox.addEventListener("click", (event) => {
    event.stopPropagation();
});
