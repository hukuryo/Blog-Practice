import { useRouter } from 'next/router';

const ArticleDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Article Detail Page</h1>
            <p>Article ID: {id}</p>
        </div>
    );
};

export default ArticleDetail;