class Student {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.checkedIn = false;
    }
}

let registeredStudents = [];
let currentStudent = null;

document.addEventListener("DOMContentLoaded", () => {
    const registerBtn = document.getElementById("registerBtn");
    const checkInBtn = document.getElementById("checkInBtn");
    const checkOutBtn = document.getElementById("checkOutBtn");
    const checkStatusBtn = document.getElementById("checkStatusBtn");
    const statusMessage = document.getElementById("statusMessage");

    registerBtn.addEventListener("click", () => {
        const studentNameInput = document.getElementById("studentName");
        const studentType = document.getElementById("studentType").value;
        const studentName = studentNameInput.value.trim(); // Trim to remove leading/trailing white spaces
    
        try {
            // Check if the student name is empty
            if (studentName === "") {
                throw new Error("Please enter a valid student name.");
            }
            
            // Check if the student name already exists
            if (registeredStudents.some(student => student.name === studentName)) {
                throw new Error("Student with this name already exists.");
            }
    
            currentStudent = new Student(studentName, studentType);
            registeredStudents.push(currentStudent); // Add to the list of registered students
            statusMessage.textContent = "Registration successful!";
            statusMessage.style.backgroundColor = "#00ff00"; // Green background for success
        } catch (error) {
            statusMessage.textContent = error.message;
            statusMessage.style.backgroundColor = "#ff0000"; // Red background for error
        } finally {
            // Reset the name input field to an empty value
            studentNameInput.value = "";
        }
    });
   
    checkInBtn.addEventListener("click", () => {
        try {
            if (!currentStudent) {
                throw new Error("No student is registered.");
            }
    
            switch (currentStudent.checkedIn) {
                case true:
                    throw new Error("Student is already checked in.");
                case false:
                    currentStudent.checkedIn = true;
                    statusMessage.textContent = `${currentStudent.name} has been checked in.`;
                    statusMessage.style.backgroundColor = "#00ff00"; // Green background for success
                    break;
            }
        } catch (error) {
            statusMessage.textContent = error.message;
            statusMessage.style.backgroundColor = "#ff0000"; // Red background for error
        } finally {
            // Set the name input field to the name of the current student being managed
            document.getElementById("studentName").value = currentStudent ? currentStudent.name : "";
        }
    });

    checkOutBtn.addEventListener("click", () => {
        try {
            if (!currentStudent) {
                throw new Error("No student is registered.");
            }
            if (!currentStudent.checkedIn) {
                throw new Error("Student is not checked in.");
            }
            currentStudent.checkedIn = false;
            statusMessage.textContent = `${currentStudent.name} has been checked out.`;
            statusMessage.style.backgroundColor = "#00ff00"; // Green background for success
        } catch (error) {
            statusMessage.textContent = error.message;
            statusMessage.style.backgroundColor = "#ff0000"; // Red background for error
        } finally {
            // Set the name input field to name of current student that is being managed
            document.getElementById("studentName").value = currentStudent.name;
        }
    });

    checkStatusBtn.addEventListener("click", () => {
        if (!currentStudent) {
            statusMessage.textContent = "No student is registered.";
            statusMessage.style.backgroundColor = "#ff0000"; // Red background for error
        } else if (currentStudent.checkedIn) {
            statusMessage.textContent = `${currentStudent.name} is checked in as a ${currentStudent.type} student.`;
            statusMessage.style.backgroundColor = "#00ff00"; // Green background for success
        } else {
            statusMessage.textContent = `${currentStudent.name} is not checked in.`;
            statusMessage.style.backgroundColor = "#00ff00"; // Green background for success
        }
    });
});
