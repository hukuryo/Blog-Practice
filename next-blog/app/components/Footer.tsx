import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <footer className='w-full pt-8 pb-8 text-center bg-gray-600 absolute bottom-0'>
            <div className='flex justify-center'>
                <a href="https://github.com/hukuryo" className='mr-5'><FontAwesomeIcon className='text-white' icon={faGithub} /></a>
                <a href="https://twitter.com/hukuryo_"><FontAwesomeIcon className='text-white' icon={faTwitter} /></a>
            </div>
        </footer>
    );
}