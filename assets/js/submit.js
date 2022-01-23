window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Thank you for signing Up! If You Do Not Recieve An Email Within 15 Minutes, Check Your Spam Folder, Or Email Us At Beta@copy3000.com");
    })
  });
});