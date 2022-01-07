const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details_container");
const deleteBtn = document.querySelector(".delete");

const renderDetails = async () => {
  const res = await fetch(`http://localhost:5000/posts/${id}`);
  if (!res.ok) {
    window.location.replace("/");
  }

  const post = await res.json();

  const post_details = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>`;

  container.innerHTML = post_details;
};
deleteBtn.addEventListener("click", () => {
  fetch("http://localhost:5000/posts/" + id, {
    method: "DELETE",
  });

  window.location.replace("/");
});
window.addEventListener("DOMContentLoaded", renderDetails);
