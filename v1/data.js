const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");

  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
      >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>n
  </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

/*
function createFactsList(dataArray) {
  const htmlArr = dataArray.map((fact) => {
    `<li class="fact">
  <p>
  ${fact.text}
  <a
    class="source"
    href="${fact.source}"
    target="_blank"
    >(Source)</a>
 </p>
 <span class="tag" style="background-color: #3b82f6">${fact.category}</span>
</li>`;
  });
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}
*/

async function loadFacts() {
  const res = await fetch(
    "https://chtyeljiacjadkssybez.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNodHllbGppYWNqYWRrc3N5YmV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0MzMxNzUsImV4cCI6MTk4NzAwOTE3NX0.-6aCoH8Fogmill7up4o1NkqLXxHM5F94HVNOz2yufrk",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNodHllbGppYWNqYWRrc3N5YmV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0MzMxNzUsImV4cCI6MTk4NzAwOTE3NX0.-6aCoH8Fogmill7up4o1NkqLXxHM5F94HVNOz2yufrk",
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
}

loadFacts();
