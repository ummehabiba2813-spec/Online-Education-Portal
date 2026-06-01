const playlists = {
    html: [
        'Introduction to HTML',
        'HTML Elements and Attributes',
        'HTML Forms and Input',
        'HTML Tables and Lists',
        '<a href="https://youtu.be/HcOc7P5BMi4?si=SXP_DKdLj4lEp4GT" target="_blank">HTML Video Tutorial</a>'
    ],
    css: [
        'Introduction to CSS',
        'CSS Selectors and Properties',
        'CSS Flexbox and Grid',
        'Responsive Web Design',
        '<a href="https://youtu.be/PVBqZRAOZL8?si=xl3wKzfBne0kzunG" target="_blank">CSS Video Tutorial</a>'
    ],
    javascript: [
        'Introduction to JavaScript',
        'JavaScript Variables and Data Types',
        'JavaScript Functions and Scope',
        'DOM Manipulation and Events',
        '<a href="https://youtu.be/ajdRvxDWH4w?si=tWQp3izU1LsnnPBW" target="_blank">JavaScript Video Tutorial</a>'
    ],
    python: [
        'Introduction to Python',
        'Python Variables and Data Types',
        'Python Functions and Modules',
        'Working with Data in Python',
        '<a href="https://youtu.be/t2_Q2BRzeEE?si=BtHR7G08bm-hJ5I6" target="_blank">Python Video Tutorial</a>'
    ],
    csharp: [
        'Introduction to C#',
        'C# Variables and Data Types',
        'C# Object-Oriented Programming',
        'Working with Databases in C#',
        '<a href="https://youtu.be/QxJaNIo1DUo?si=PGFAaniWw-Ox3kPx" target="_blank">C# Video Tutorial</a>'
    ],
    php: [
        'Introduction to PHP',
        'PHP Syntax and Variables',
        'PHP Functions and Arrays',
        'PHP and MySQL Integration',
        '<a href="https://youtu.be/at19OmH2Bg4?si=7hgSG6uYRrG1eEKc" target="_blank">PhP Video Tutorial</a>'
    ],
    datascience: [
        'Introduction to Data Science',
        'Data Wrangling and Cleaning',
        'Data Visualization Techniques',
        'Machine Learning Basics',
        '<a href="https://youtu.be/-ETQ97mXXF0?si=EHbCHep0et_yfO3F" target="_blank">DataScience Video Tutorial</a>'
    ],
    dataanalysis: [
        'Introduction to Data Analysis',
        'Exploratory Data Analysis',
        'Statistical Analysis',
        'Data Visualization with Python',
        '<a href="https://youtu.be/5zEt1_Nkiio?si=aKY72DOL5kX71Jz5" target="_blank">Data Analysist Video Tutorial</a>'
    ],
    database: [
        'Introduction to Databases',
        'SQL Basics',
        'Database Design and Normalization',
        'Advanced SQL Queries',
        '<a href="https://youtu.be/kBdlM6hNDAE?si=lK6siwU8xQdP4McY" target="_blank">DataBase Video Tutorial</a>'
    ]
};
function showPlaylist(course) {
    const playlistDiv = document.getElementById('playlist');
    const playlistContent = document.getElementById('playlist-content');
    playlistContent.innerHTML = '';

    if (playlists[course]) {
        playlists[course].forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item; // Use innerHTML to interpret HTML tags
            playlistContent.appendChild(li);
        });

        playlistDiv.style.display = 'block';
    } else {
        playlistDiv.style.display = 'none';
    }
}
