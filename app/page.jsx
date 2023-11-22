import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";
import Link from "next/link";

export default async function HomePage(){
    const review = await getFeaturedReview();
    // console.log('[HomePage] rendering!');
    return(
        <>
            <Heading>Indie Gamer</Heading>
            <p className="pb-3">
                Only the best indie games, reviewed for you.
            </p>
            <div className="bg-white border rounded shadow w-80 
                            hover:shadow-xl sm:w-full">
                <Link href={`/reviews/${review.slug}`}
                    className="flex flex-col sm:flex-row">
                <img src={review.image} alt="" 
                    width="320" height="180" className="rounded-t sm:rounded-l sm:rounded-r-none"
                />
                <h2 className="font-semibold font-orbitron py-1 text-center text-slate-500 sm:px-2">
                    {review.title}
                </h2>
                </Link>
            </div>
        </>
    );
}
// 페이지 앞에 있는 화면을 정하는데 있어서 ${review.slug}, ${review.image}, ${review.title}이 있는데 이들은 lib/reviews에 있는 코드를 통해서 전달된다. lib/reviews에 있는 코드는 마크다운에 있는 키워드를 통해서 전달된다.