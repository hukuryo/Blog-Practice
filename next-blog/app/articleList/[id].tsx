import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { useRouter } from 'next/router';
import { useState } from "react";

const ArticleDetail = async () => {
    const supabase = createServerComponentClient({ cookies });
    const { data: books } = await supabase.from("books").select();

    const [pass, setPass] = useState(0);

    const router = useRouter();
    const { id } = router.query;

    

    return (
        <div>
        <h1>Article Detail Page</h1>
        <p>Article ID: {id}</p>
        {/* 詳細情報の表示 */}
        </div>
    );
};