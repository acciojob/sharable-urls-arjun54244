// your code here
 const nameInput = document.getElementById("name");
    const yearInput = document.getElementById("year");
    const button = document.getElementById("button");
    const urlDisplay = document.getElementById("url");

    button.addEventListener("click", function () {
      const baseUrl = "https://localhost:8080/";
      const name = nameInput.value.trim();
      const year = yearInput.value.trim();

      let queryParams = [];

      if (name) {
        queryParams.push(`name=${encodeURIComponent(name)}`);
      }

      if (year) {
        queryParams.push(`year=${encodeURIComponent(year)}`);
      }

      if (queryParams.length > 0) {
        urlDisplay.textContent = baseUrl + "?" + queryParams.join("&");
      } else {
        urlDisplay.textContent = baseUrl;
      }
    });