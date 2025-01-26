const pages = {
    main: `
        <span>Welcome to the portfolio of Gunjiilkham Altanzaya!</span><br>
        <span>Type 'about', 'projects', or 'cv' in the terminal to navigate.</span>
    `,
    about: `
        <span>(gunjiilkham-altanzaya)@Portfolio:~$</span> whoami<br/>
        I'm Gunjiilkham Altanzaya, a Software Engineer passionate about scalable solutions.<br/>
    `,
    projects: `
        <span>(gunjiilkham-altanzaya)@Portfolio:~$</span> echo $PROJECTS<br/>
        <ul>
            <li><a href="#">CoFound</a>: Internship matching platform with ML recommendations</li>
            <li><a href="#">AI-based Study Helper</a>: Personalized schedules using AI</li>
        </ul><br/>
        <span>(gunjiilkham-altanzaya)@Portfolio:~$</span> echo $SKILLS<br/>
        <ul>
            <li>Languages: Python, JavaScript, C++, SQL</li>
            <li>Frameworks: Flask, Next.js</li>
            <li>Tools: Git, Docker, PostgreSQL</li>
        </ul>
    `,
    cv: `
        <span>(gunjiilkham-altanzaya)@Portfolio:~$</span> echo $CV<br/>
        <a href="https://gunjiilkham-altanzaya-resume.tiiny.site" target="_blank">View CV</a>
    `
};

function navigateTo(page) {
    const consoleDiv = document.getElementById('console');
    consoleDiv.innerHTML = pages[page];
    consoleDiv.innerHTML += '<span class="blinking-cursor">█</span>';
}

// Default page load
navigateTo('main');
