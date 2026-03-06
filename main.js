onload = () => {

    document.body.classList.remove("container");

    // GREETING SCRIPT

    const title = document.getElementById("greeting-title");
    const message = document.getElementById("greeting-message");

    if(!title || !message) return;

    const hour = new Date().getHours();

    if(hour >= 5 && hour < 12){
        title.textContent = "Good Morning Avias 🌞";
        message.textContent = "Have a beautiful morning";
    }
    else if(hour >= 12 && hour < 18){
        title.textContent = "Good Afternoon Avias ☀️";
        message.textContent = "Hope you're having a great day";
    }
    else{
        title.textContent = "Good Evening Avias 🌙";
        message.textContent = "Enjoy the peaceful night";
    }

};
