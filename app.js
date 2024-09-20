document.getElementById('generate-resume').addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;
    var age = document.getElementById('age').value;
    var birthdate = document.getElementById('birthdate').value;
    var birthplace = document.getElementById('birthplace').value;
    var nationality = document.getElementById('nationality').value;
    var fathername = document.getElementById('fathername').value;
    var status = document.getElementById('status').value;
    var religion = document.getElementById('religion').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    // Generate resume content
    var resumeContent = "\n    <h1>".concat(name, "</h1> <br> <br>\n        <h3>Personal Information</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Gender:</strong> ").concat(gender, "</p>\n        <p><strong>Age:</strong> ").concat(age, "</p>\n        <p><strong>Birthdate:</strong> ").concat(birthdate, "</p>\n        <p><strong>Birthplace:</strong> ").concat(birthplace, "</p>\n        <p><strong>Nationality:</strong> ").concat(nationality, "</p>\n        <p><strong>Father's Name:</strong> ").concat(fathername, "</p>\n        <p><strong>Status:</strong> ").concat(status, "</p>\n        <p><strong>Religion:</strong> ").concat(religion, "</p> <br> <hr>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p> <br> <hr>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n    ");
    var resumeOutput = document.getElementById('resume-output');
    var resumeContentDiv = document.getElementById('resume-content');
    // Show the generated resume
    resumeContentDiv.innerHTML = resumeContent;
    resumeOutput.classList.remove('hidden');
});
