# School Hostel Check-In Management Website
This website is a user-friendly tool for managing school hostel check-ins. It allows users to register students, check them in and out, and check their current status. The website is built using HTML, CSS, and JavaScript, incorporating classes, switch statements, try-catch-finally statements, and improved input validation for a seamless user experience.

## Source Files Folder:
Click the link below to access the source files.

##### <a href="https://github.com/WumiDev/stackup-javascript-intermediate/tree/main/hostel-check-in" target="_blank">Source Codes</a>

## Website Link:
Click the link below to access the website.

##### <a href="https://wumidev-hostel-check-in-app.netlify.app" target="_blank">School Hostel Check-In Management Website</a>


## Usage Instructions:

Please note that this website is currently a MVP with very few and limited features. As a result, for example, you will only be able to Check-In, Check-Out, Check Status for only the last student that you registered (refresh your browser to register and manage another student). The data are locally stored in the user's browser for the purpose of demonstration. 

#### 1. Registration:

Enter the student's name in the "Student Name" field (leading/trailing spaces are trimmed).
Select the student's type (Undergraduate or Postgraduate) from the dropdown.
Click the "Register" button to add the student to the system.
Successful registrations clear the input field and display a green success message.

#### 2. Check-In:

After registration, you can click the "Check-In" button to mark the student as checked in.
If a student is already checked in, you'll receive an error message.

#### 3. Check-Out:

To check a student out, click the "Check-Out" button.
If the student is not checked in, you'll receive an error message.

#### 4. Check Status:

Click the "Check Status" button to see the current status of the registered student.
Successful actions display a green success message, while errors have a red background.

## Incorporating Class, Switch, and Try-Catch-Finally statements:

#### 1. Class:

The code uses a JavaScript class Student to represent student objects. This class has properties for student name, type, and check-in status. New student instances are created when users register.

```
// javascript [index.js]

class Student {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.checkedIn = false;
    }
}
```

#### 2. Switch Statements:

Switch statements are used to perform different actions based on user input. For example, when the user clicks the "Check-In" button, the code checks if the student is already checked in or not using a switch statement.

```
// javascript [index.js]

switch (currentStudent.checkedIn) {
                case true:
                    throw new Error("Student is already checked in.");
                case false:
                    currentStudent.checkedIn = true;
                    statusMessage.textContent = `${currentStudent.name} has been checked in.`;
                    statusMessage.style.backgroundColor = "#00ff00";
                    break;
            }
```

#### 3. Try-Catch-Finally Statements
Try-catch-finally statements are used for error handling. For instance, if a user tries to register a student with an existing name, performs an invalid action, or leaves the input empty, the code throws an error, which is caught and displayed to the user. Successful actions are also indicated with a green background.

```
// javascript [index.js]

try {
    // Check if the student name already exists
    if (registeredStudents.some(student => student.name === studentName)) {
        throw new Error("Student with this name already exists.");
    }
    // Handle registration...
} catch (error) {
    statusMessage.textContent = error.message;
} finally {
    // Reset the name input field to an empty value
    studentNameInput.value = "";
}

```
