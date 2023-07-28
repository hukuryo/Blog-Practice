import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function getArticlesList() {
    const supabase = createServerComponentClient({ cookies });
    const { data: books } = await supabase.from("books").select();
    
    return {
        props: {
            books
        }
    };
}