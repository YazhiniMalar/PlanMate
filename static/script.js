let i=1;
let totalstudents = 0;

//parallax
window.addEventListener("scroll", ()=>{
	let value=window.scrollY;
	document.getElementById("layer1").style.paddingTop = value * 1.5 + "px";
  document.getElementsByTagName("p")[0].style.paddingTop = value * 1.5 + "px";
  if(value >350)
  document.getElementById("layer1").style.opacity = 0;
  else
  document.getElementById("layer1").style.opacity = 1;
  
  if(value >10)
    document.querySelector(".nav_bar").style.display = "flex";
    else
    document.querySelector(".nav_bar").style.display = "none";
});

// function downloadPDF() {
//   const doc = new jsPDF();
//   doc.autoTable({ html: "#timetable" });
//   doc.save("timetable.pdf");
// }

  //halls count
  function allocateStudents() {
    document.getElementById("halltitle").innerText="HALLS GENERATED";
    let r = parseInt(prompt("Enter the number of rows in one hall: "));
    let c = parseInt(prompt("Enter the number of columns in one hall: "));
    let students_per_class = r * c * 2;
    let classCount = Math.ceil(totalstudents / students_per_class);
    let student_in_final_class = totalstudents - (students_per_class * (classCount - 1));
    if (student_in_final_class > students_per_class) {
      student_in_final_class = students_per_class;
    }
    let i, no_of_student_per_class;
    let resultText = "";
    for (i = 1; i <= classCount; i++) {
      if (i == classCount) {
        no_of_student_per_class = student_in_final_class;
      } else {
        no_of_student_per_class = students_per_class;
      }
      resultText += `Hall ${i}: ${no_of_student_per_class} students <br>`;
    }
    const resultHeading = document.createElement("h3");
    resultHeading.id="halltext";
    resultHeading.innerHTML = resultText;
    document.getElementById("halls").appendChild(resultHeading);
    document.getElementById("totalhall").innerText=`Total Halls Needed: ${classCount}`;
  }
  


function addTimetableEntry() {
  // Get input values
  const subject = document.getElementById("subject").value;
  const startTime = document.getElementById("start-time").value;
  const endTime = document.getElementById("end-time").value;
  const day = document.getElementById("day").value;
  const year = document.getElementById("year").value;
  const date = document.getElementById("date").value;
  const students = document.getElementById("students").value;
  // Create new row
  const row = document.createElement("tr");

  // Create new cells and add text nodes with input values
  const serialnum = document.createElement("td");
  const dateCell = document.createElement("td");
  const dayCell = document.createElement("td");
  const subjectCell = document.createElement("td");
  const yearcell = document.createElement("td");
  const startTimeCell = document.createElement("td");
  const endTimeCell = document.createElement("td");
  const total = document.createElement("td");
  

  if (!subject || !startTime || !endTime || !day || !date || !students || !year) {
    alert("Please fill all fields");
    return;
  }

  serialnum.appendChild(document.createTextNode(i));
  i++;
  dateCell.appendChild(document.createTextNode(date));
  dayCell.appendChild(document.createTextNode(day));
  subjectCell.appendChild(document.createTextNode(subject));
  yearcell.appendChild(document.createTextNode(year));
  startTimeCell.appendChild(document.createTextNode(startTime));
  endTimeCell.appendChild(document.createTextNode(endTime));
  total.appendChild(document.createTextNode(students));
  

  // Add cells to row
  row.appendChild(serialnum);
  row.appendChild(dateCell);
  row.appendChild(dayCell);
  row.appendChild(subjectCell);
  row.appendChild(yearcell);
  row.appendChild(startTimeCell);
  row.appendChild(endTimeCell);
  row.appendChild(total);
  
  //Cummulatively adding total students
  totalstudents += parseInt(students); // convert to number and add
  document.getElementById("total-students").innerText = `Total Students: ${totalstudents}`;
  
  // Add row to table body
  const tableBody = document.getElementById("timetable-body");
  tableBody.appendChild(row);

  // // Remove the old download button, if any
  // const oldDownloadButton = document.getElementById("download-pdf-button");
  // if (oldDownloadButton) {
  //   oldDownloadButton.remove();
  // }

  // // Add Download PDF button
  // const downloadButton = document.createElement("button");
  // downloadButton.id = "download-pdf-button";
  // downloadButton.innerHTML = "Download PDF";
  // downloadButton.addEventListener("click", downloadPDF);
  // tableBody.appendChild(downloadButton);


  // Remove the old halls button, if any
  const oldHallButton = document.getElementById("gen-halls-button");
  if (oldHallButton) {
    oldHallButton.remove();
  }

  // Add HALLS button
  const table = document.querySelector(".container");
  const hallButton = document.createElement("button");
  hallButton.id = "gen-halls-button";
  hallButton.innerHTML = `<a href="#halltitle" style="color: white;">Generate Halls<a>`;
  hallButton.addEventListener("click", allocateStudents);
  table.appendChild(hallButton);
}
