import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function loadPosts() {
    // Call an external API endpoint to get posts
    const supabase = createServerComponentClient({ cookies });
    const { data: books } = await supabase.from("books").select();
    return books
}