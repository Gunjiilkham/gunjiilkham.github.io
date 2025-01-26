const pages = {
    about: `
        <section id="about">
            <h1>About Me</h1>
            <p>
                Hey, I'm Gunjiilkham Altanzaya, a Software Engineer passionate about building scalable solutions.
                I love solving problems and exploring creative ways to bring tech into everyday life.
            </p>
        </section>
    `,
    projects: `
        <section id="projects">
            <h1>Projects</h1>
            <ul>
                <li><a href="#">CoFound</a>: Internship matching platform with ML recommendations</li>
                <li><a href="#">AI-based Study Helper</a>: Personalized schedules using AI</li>
            </ul>
            <h2>Skills</h2>
            <ul>
                <li>Python, JavaScript, C++, SQL</li>
                <li>Frameworks: Flask, Next.js, Tailwind CSS</li>
                <li>Tools: Git, Docker, PostgreSQL</li>
            </ul>
        </section>
    `,
    cv: `
        <section id="cv">
            <h1>CV</h1>
            <p>
                You can view my CV here:
                <a href="https://gunjiilkham-altanzaya-resume.tiiny.site" target="_blank">Download CV</a>
            </p>
        </section>
    `,
};

function navigateTo(page) {
    document.getElementById('content').innerHTML = pages[page];
}

// Load the default page
navigateTo('about');
