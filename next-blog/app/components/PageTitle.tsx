import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

type title = {
    title: string
}

export function PageTitle(props: title) {
    const {title} = props;
    return (
        <>
            <h1 className="ml-5 mt-5 font-bold">{title}</h1>
        </>
    );
}