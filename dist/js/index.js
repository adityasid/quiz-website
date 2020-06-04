function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;

    // store user's name
    sessionStorage.setItem("name", name);
    location.href = "quiz.html"
}