document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const dataList = document.getElementById("dataList");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };
      await fetch("/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Data Submitted!");
      contactForm.reset();
    });
  }

  if (dataList) {
    async function fetchData() {
      const response = await fetch("/data");
      const data = await response.json();
      data.forEach((entry) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td class="border px-4 py-2">${entry.name}</td>
          <td class="border px-4 py-2">${entry.email}</td>
          <td class="border px-4 py-2">${entry.phone}</td>
          <td class="border px-4 py-2">${entry.subject}</td>
          <td class="border px-4 py-2">
            <button class="bg-green-500 text-white px-2 py-1 rounded">Edit</button>
            <select class="ml-2 border rounded px-2">
              <option>Process</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </td>
        `;
        dataList.appendChild(row);
      });
    }
    fetchData();
  }
});
