const from = document.querySelector("form");

from.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newData = {
    title: from.title.value,
    body: from.content.value,
    likes: 0,
  };
  await fetch("http://localhost:5000/posts/", {
    method: "POST",
    body: JSON.stringify(newData),
    headers: { "Content-Type": "application/json" },
  });
  window.location.replace("/");
});
