const pages = {
    research: `
        <h1>Research</h1>
        <p>
            Researched RL/Imitation Learning @CILVRLab NYU Computational Intelligence, Learning, Vision, and Robotics.
        </p>
        <ul>
            <li>Explored deep reinforcement learning methods for policy optimization.</li>
            <li>Published results in applied machine learning for robotic systems.</li>
        </ul>
    `,
    projects: `
        <h1>Projects</h1>
        <p>Here are some of my notable projects:</p>
        <ul>
            <li><strong>CoFound</strong>: Platform matching students with internships using machine learning. <a href="#">GitHub</a></li>
            <li><strong>AI-based Study Helper</strong>: Personalized study schedules with AI. <a href="#">GitHub</a></li>
            <li><strong>GhostAI</strong>: Advanced vision-based robotic learning algorithms. <a href="#">GitHub</a></li>
        </ul>
    `,
    notes: `
        <h1>Notes</h1>
        <p>Occasional thoughts, articles, and writings about tech and software development.</p>
        <ul>
            <li><a href="#">Exploring Reinforcement Learning: Challenges and Opportunities</a></li>
            <li><a href="#">Building Scalable AI Systems</a></li>
        </ul>
    `,
};

function navigateTo(page) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = pages[page];
}

// Load the default page
navigateTo('research');
