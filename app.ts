document.getElementById('generate-resume')!.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const gender = (document.getElementById('gender') as HTMLSelectElement).value;
    const age = (document.getElementById('age') as HTMLInputElement).value;
    const birthdate = (document.getElementById('birthdate') as HTMLInputElement).value;
    const birthplace = (document.getElementById('birthplace') as HTMLInputElement).value;
    const nationality = (document.getElementById('nationality') as HTMLInputElement).value;
    const fathername = (document.getElementById('fathername') as HTMLInputElement).value;
    const status = (document.getElementById('status') as HTMLSelectElement).value;
    const religion = (document.getElementById('religion') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;

    // Generate resume content
    const resumeContent = `
    <h1>${name}</h1> <br> <br>
        <h3>Personal Information</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Birthdate:</strong> ${birthdate}</p>
        <p><strong>Birthplace:</strong> ${birthplace}</p>
        <p><strong>Nationality:</strong> ${nationality}</p>
        <p><strong>Father's Name:</strong> ${fathername}</p>
        <p><strong>Status:</strong> ${status}</p>
        <p><strong>Religion:</strong> ${religion}</p> <br> <hr>
        <h3>Experience</h3>
        <p>${experience}</p> <br> <hr>
        <h3>Education</h3>
        <p>${education}</p>
    `;

    const resumeOutput = document.getElementById('resume-output')!;
    const resumeContentDiv = document.getElementById('resume-content')!;

    // Show the generated resume
    resumeContentDiv.innerHTML = resumeContent;
    resumeOutput.classList.remove('hidden');
});
