// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Felix Stefan Jost" />

            <div className='header__content'>
                <h1>Hi, I'm Felix Stefan Jost</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:felix.jost.7@gmx.de" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;