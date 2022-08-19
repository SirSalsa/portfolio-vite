export default function Skills() {

    //Image links
    const java_url = new URL('../media/skills/java.png', import.meta.url);
    const html_url = new URL('../media/skills/html5.png', import.meta.url);
    const css_url = new URL('../media/skills/css.png', import.meta.url);
    const js_url = new URL('../media/skills/js.png', import.meta.url);
    const react_url = new URL('../media/skills/reactjs.png', import.meta.url);
    const mysql_url = new URL('../media/skills/mysql.png', import.meta.url);
    const restful_url = new URL('../media/skills/api_rest.png', import.meta.url);
    const github_url = new URL('../media/skills/github.png', import.meta.url);

    return (
        <>
            <div className="skills_header">
                <article>
                    <h1 id="skills_title">My Skills</h1>
                </article>
            </div>
            <div className="skills_wrapper">
                <article>
                    <img id="skills_img" src={java_url} alt="Java Logo" />
                    <p id="skills_text">Java</p>
                </article>
                <article>
                    <img id="skills_img" src={js_url} alt="Javascript Logo" />
                    <p id="skills_text">JavaScript</p>
                </article>
                <article>
                    <img id="skills_img" src={html_url} alt="HTML Logo" />
                    <p id="skills_text">HTML</p>
                </article>
                <article>
                    <img id="skills_img" src={css_url} alt="CSS Logo" />
                    <p id="skills_text">CSS</p>
                </article>
                <article>
                    <img id="skills_img" src={react_url} alt="React.JS Logo" />
                    <p id="skills_text">React JS</p>
                </article>
                <article>
                    <img id="skills_img" src={mysql_url} alt="MySQL Logo" />
                    <p id="skills_text">MySQL</p>
                </article>
                <article>
                    <img id="skills_img" src={restful_url} alt="Restful API Logo" />
                    <p id="skills_text">RESTful API</p>
                </article>
                <article>
                    <img id="skills_img" src={github_url} alt="Github Logo" />
                    <p id="skills_text">Github</p>
                </article>
            </div>
        </>
    )

}