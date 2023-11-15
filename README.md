This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## 11/15/2023

Tailwind 사용법과 params과 slug 및 마크다운을 사용하는 법을 공부했음.

마크다운을 웹과 연결시키는 방법은 아래와 같다.

```js
import { readdir, readFile } from 'node:fs/promises';
```

node:fs/promises를 통해서 마크다운 파일을 웹으로 가져올 수가 있다. 그리고 아래는 리뷰 페이지를 작성하는 데 쓰여진 코드이다.

```js
export default async function ReviewPage({ params: { slug } }){
    const review = await getReview(slug);
    return(
        <>
            <Heading>{review.title}</Heading>
            <p className="italic pb-2">{review.date}</p>
            <img src={review.image} alt="" 
                width="640" height="360" className="mb-2 rounded"
            />
            <article dangerouslySetInnerHTML={{ __html: review.body }} 
                className="max-w-screen-sm prose prose-slate"
            />
        </>
    );
}

```

위의 코드를 통해서 리뷰 페이지를 생성하는데 쓰여졌다.

### Slug

wild card처럼 다양한 값을 받을수 있는데, 하나의 파일로 여러 파일을 대체할 수 있다.

### slug 값의 활용

useRouter 훅을 이용하여 다양하게 사용할 수 있다.

```js
import { useRouter } from 'next/router';
const router = useRouter();
const { slug } = router.query;
// 여기서 slug는 지정해준 파일이름이 된다
```