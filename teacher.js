document.getElementById('teacher-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const graduation = document.getElementById('graduation').value;
    const specialization = document.getElementById('specialization').value;
    
    const teacher = {
        name,
        email,
        phone,
        address,
        graduation,
        specialization
    };
    
    let teachers = JSON.parse(localStorage.getItem('teachers')) || [];
    teachers.push(teacher);
    localStorage.setItem('teachers', JSON.stringify(teachers));
    
    alert('Teacher registered successfully!');
    window.location.href = 'teachers.html';
});
document.addEventListener('DOMContentLoaded', function() {
    const teachersList = document.getElementById('teachers-list');
    const teachers = JSON.parse(localStorage.getItem('teachers')) || [];
    
    teachers.forEach(teacher => {
        const teacherDiv = document.createElement('div');
        teacherDiv.classList.add('teacher-profile');
        teacherDiv.innerHTML = `
            <h3>${teacher.name}</h3>
            <p><strong>Email:</strong> ${teacher.email}</p>
            <p><strong>Phone:</strong> ${teacher.phone}</p>
            <p><strong>Address:</strong> ${teacher.address}</p>
            <p><strong>Graduation:</strong> ${teacher.graduation}</p>
            <p><strong>Specialization:</strong> ${teacher.specialization}</p>
        `;
        teachersList.appendChild(teacherDiv);
    });
});
// teacher.js
// teacher.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("teacher-form");

    form.addEventListener("submit", function(event) {
        const profilePic = document.getElementById("profile-pic");
        const degreeFile = document.getElementById("degree-file");

        if (profilePic.files.length === 0) {
            alert("Please upload a profile picture.");
            event.preventDefault();
            return;
        }

        if (degreeFile.files.length === 0) {
            alert("Please upload your latest degree.");
            event.preventDefault();
            return;
        }

        // No need to validate certificate and medal files as they are optional
    });
});
