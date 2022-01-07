const container = document.querySelector(".data_container");
const searchForm = document.querySelector(".search");

const readerPosts = async () => {
  let uri = "http://localhost:5000/posts/";
  const res = await fetch(uri);
  const posts = await res.json();

  let data_Post = "";
  posts.map((items) => {
    data_Post += `<div class="Cards">
    <h1>${items.title.slice(0, 50)}</h1>
    <p>${items.body.slice(0, 60)}...</p>
    <a href="./pages/details.html?id=${items.id}">Read more</a>
  </div>`;
  });
  container.innerHTML = data_Post;
};

window.addEventListener("DOMContentLoaded", readerPosts);
