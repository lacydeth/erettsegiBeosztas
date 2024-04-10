

async function DisplayItems(sender) {
    const container = document.querySelector(".student-list");
    const tableClass = document.querySelector(".table")
    const response = await fetch("adatok.json");
    if (!response.ok) {
        console.log("Hiba történt!");
    }
    const data = await response.json();

    let [dayNumber, classroom] = sender.value.split(' ');
    let students = data[dayNumber][classroom];

    const table = document.createElement("table");
    table.classList.toggle("table");

    if (tableClass != null) {
        tableClass.remove();
    }

    students.forEach(student => {
        const tableRow = document.createElement("tr");
        
        for (const key in student) {
            const tableCell = document.createElement("td");
            tableCell.textContent = student[key];
            tableRow.appendChild(tableCell);
        }
        table.appendChild(tableRow);
    });

    container.appendChild(table);
}