export default function Footer() {

    //Image links
    const linkedin_url = new URL('../media/footer/linkedin.png', import.meta.url);
    const email_url = new URL('../media/footer/email.png', import.meta.url);
    const phone_url = new URL('../media/footer/phone.png', import.meta.url);

    return (
        <footer>
            
            <div className="footwrapper">
                <div className="footlinks">
                    <a href="mailto:torsten.lareke@hotmail.se">
                        <img width="35px" src={email_url} alt="Email icon" />
                    </a>
                    <p>torsten.lareke@hotmail.se</p>
                </div>
                <div className="footlinks">
                    <img width="35px" src={phone_url} alt="Phone icon" />
                    <p>+4673 2682 109</p>
                </div>
                <div className="footlinks">
                    <a href="https://www.linkedin.com/in/torsten-lareke-0a15b7141/">
                        <img width="35px" src={linkedin_url} alt="Linkedin img" />
                    </a>
                </div>
            </div>
            <p>This website is programmed and designed by me.</p>
        </footer>
    )

}