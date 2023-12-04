import { UserCircleIcon } from "@heroicons/react/20/solid";

const comments = [
    { id: '1', user: 'Alice', message: 'Love this game!' },
    { id: '2', user: 'John', message: 'Recommend this game!' },
    { id: '3', user: 'Pual', message: 'Palcon punch!' },
]

export default function CommentList() {
  return (
    <ul className="border mt-3 rounded">
        {comments.map((comment) => (
            <li key={comment.id}
                className="border-b px-3 py-2 last:border-none odd:bg-orange-100">
                <div className="flex gap-3 pb-1 text-slate-500">
                    <UserCircleIcon className="h-6 w-6"/>
                    {comment.user}
                </div>
                <p className="italic">
                    {comment.message}
                </p>
            </li>
        ))}
    </ul>
  );
}
