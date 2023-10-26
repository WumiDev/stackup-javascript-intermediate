// Define a class for a school hostel account
class HostelAccount {
    constructor(accountType, accountName) {
        this.accountType = accountType;
        this.accountName = accountName;
        this.checkedIn = false;
    }

    checkIn() {
        if (!this.checkedIn) {
            this.checkedIn = true;
            return `${this.accountName} has successfully checked in.`;
        } else {
            return `${this.accountName} is already checked in.`;
        }
    }

    checkOut() {
        if (this.checkedIn) {
            this.checkedIn = false;
            return `${this.accountName} has successfully checked out.`;
        } else {
            return `${this.accountName} is not checked in.`;
        }
    }

    checkStatus() {
        return `${this.accountName} is ${this.checkedIn ? 'checked in' : 'checked out'}.`;
    }
}

// Define a class for a student
class Student {
    constructor(accountName, accountType) {
        this.accountName = accountName;
        this.accountType = accountType;
        this.checkedIn = false; // Initialize to false when a student is registered
    }

    checkIn() {
        if (!this.checkedIn) {
            this.checkedIn = true;
            return `${this.accountName} has successfully checked in.`;
        } else {
            return `${this.accountName} is already checked in.`;
        }
    }

    checkOut() {
        if (this.checkedIn) {
            this.checkedIn = false;
            return `${this.accountName} has successfully checked out.`;
        } else {
            return `${this.accountName} is not checked in.`;
        }
    }

    checkStatus() {
        return `${this.accountName} is ${this.checkedIn ? 'checked in' : 'checked out'}.`;
    }
}

// Function to save data to localStorage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Function to load data from localStorage
function loadData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Function to handle the check-in, check-out, and check status actions
function performAction() {
    const accountType = document.getElementById("accountType").value;
    const accountName = document.getElementById("accountName").value;

    try {
        if (!accountName) {
            throw new Error("Please enter an account holder name.");
        }

        if (accountType !== "undergraduate" && accountType !== "postgraduate") {
            throw new Error("Invalid account type.");
        }

        const hostelAccount = new HostelAccount(accountType, accountName);

        const action = document.activeElement.id;

        let message = "";

        switch (action) {
            case "checkInButton":
                message = hostelAccount.checkIn();
                break;
            case "checkOutButton":
                message = hostelAccount.checkOut();
                break;
            case "checkStatusButton":
                message = hostelAccount.checkStatus();
                break;
        }

        document.getElementById("statusMessage").textContent = message;

        // Save updated data to localStorage
        saveData("hostelAccount", hostelAccount);
    } catch (error) {
        document.getElementById("statusMessage").textContent = error.message;
    } finally {
        // Clear input fields
        document.getElementById("accountName").value = "";
    }
}

// Function to register a new student
function registerStudent() {
    const accountType = document.getElementById("accountType").value;
    const accountName = document.getElementById("accountName").value;

    try {
        if (!accountName) {
            throw new Error("Please enter an account holder name.");
        }

        if (accountType !== "undergraduate" && accountType !== "postgraduate") {
            throw new Error("Invalid account type.");
        }

        const student = new Student(accountName, accountType);
        const message = `${student.accountName} has been registered as a ${student.accountType} student.`;
        document.getElementById("statusMessage").textContent = message;

        // Save student data to localStorage
        const students = loadData("students") || [];
        students.push(student);
        saveData("students", students);
    } catch (error) {
        document.getElementById("statusMessage").textContent = error.message;
    } finally {
        // Clear input fields
        document.getElementById("accountName").value = "";
    }
}

// Add event listeners to buttons
document.getElementById("checkInButton").addEventListener("click", performAction);
document.getElementById("checkOutButton").addEventListener("click", performAction);
document.getElementById("checkStatusButton").addEventListener("click", performAction);
document.getElementById("registerButton").addEventListener("click", registerStudent);

// Load and display student data from localStorage
window.addEventListener("load", () => {
    const students = loadData("students") || [];
    if (students.length > 0) {
        const studentList = document.createElement("ul");
        studentList.innerHTML = "<h2>Registered Students</h2>";
        students.forEach((student) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${student.accountName} (${student.accountType})`;
            studentList.appendChild(listItem);
        });
        document.body.appendChild(studentList);
    }
});
