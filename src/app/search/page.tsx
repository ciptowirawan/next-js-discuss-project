import { redirect } from "next/navigation";
import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerm } from '@/db/queries/posts';

interface SearchPageProps {
    searchParams: {
        term: string;
    }
}

const SearchPage = async ({searchParams}: SearchPageProps) => {
    const { term } = searchParams;

    if (!term) {
        redirect('/');
    }

    return (
        <div>
            <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
        </div>
    )
}

export default SearchPage