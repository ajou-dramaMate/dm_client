import Link from "next/link";

export default function DramaItem({ item }) {
  return (
    <Link
      href={{
        pathname: "/dramaDetail",
        query: { dramaId: item.dramaId, like: item.like },
      }}
      as={"/dramaDetail"}
    >
      <div className="flex flex-col gap-[8px] items-center">
        <img
          alt="포스터"
          src={`data:image/png;base64,${item.image}`}
          className="w-[100px] h-[140px] bg-slate-200"
        />
        <span>{item.title}</span>
      </div>
    </Link>
  );
}
