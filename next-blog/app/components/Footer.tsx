import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <footer>
            <a href="https://github.com/hukuryo"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://twitter.com/hukuryo_"><FontAwesomeIcon icon={faTwitter} /></a>
        </footer>
    );
}