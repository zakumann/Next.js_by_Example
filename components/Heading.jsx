//Head란에 쓸 때 사용한 코드
export default function Heading({ children }){
    return (
        <h1 className={"font-bold font-orbitron pb-3 text-2xl"}>
            {children}
        </h1>
    );
}
