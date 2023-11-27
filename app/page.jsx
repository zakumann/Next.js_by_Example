import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage(){
    const { reviews } = await getReviews(3);
    console.log('[HomePage] rendering:',
     reviews.map((review) => review.slug).join(', '));
    return(
        <>
            <Heading>Indie Gamer</Heading>
            <p className="pb-3">
                Only the best indie games, reviewed for you.
            </p>
            <ul className="flex flex-col gap-3">
                {reviews.map((review) => (
                    <li key={review.slug} 
                    className="bg-white border rounded shadow w-80 
                                hover:shadow-xl sm:w-full">
                        <Link href={`/reviews/${review.slug}`}
                            className="flex flex-col sm:flex-row">
                        <Image src={review.image} alt="" 
                            width="320" height="180" className="rounded-t sm:rounded-l sm:rounded-r-none"
                        />
                        <div className="px-2 py-1 text-center sm:text-left">
                            <h2 className="font-semibold font-orbitron">
                                {review.title}
                            </h2>
                            <p className="hidden pt-2 sm:block">
                                {review.subtitle}
                            </p>
                        </div>
                        </Link>
                    </li>

                ))}
            </ul>
        </>
    );
}
// 페이지 앞에 있는 화면을 정하는데 있어서 ${review.slug}, ${review.image}, ${review.title}이 있는데 이들은 lib/reviews에 있는 코드를 통해서 전달된다. lib/reviews에 있는 코드는 마크다운에 있는 키워드를 통해서 전달된다.