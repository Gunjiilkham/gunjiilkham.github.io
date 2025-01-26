const content = document.getElementById("content");

const sections = {
    about: `
        <p>Hi, I'm Gunjiilkham Altanzaya, a Software Engineer passionate about creating scalable and creative solutions. 
        I specialize in Python, JavaScript, and building full-stack applications.</p>
        <p>Welcome to my portfolio, where you can explore my projects and skills.</p>
    `,
    projects: `
        <h2>Projects</h2>
        <ul>
            <li><strong>CoFound:</strong> Internship matching platform with ML recommendations</li>
            <li><strong>AI-based Study Helper:</strong> Personalized schedules using AI</li>
        </ul>
        <h2>Skills</h2>
        <ul>
            <li>Languages: Python, JavaScript, C++, SQL</li>
            <li>Frameworks: Flask, Next.js, Tailwind CSS</li>
            <li>Tools: Git, Docker, PostgreSQL</li>
        </ul>
    `,
};

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const section = event.target.dataset.section;
        content.innerHTML = sections[section] || "<p>Content not found.</p>";
    });
});

// Load About section by default
content.innerHTML = sections.about;
