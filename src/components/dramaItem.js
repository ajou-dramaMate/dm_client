export default function DramaItem({ item, setIsShowModal, setSelectedDrama }) {
  return (
    <button
      className="flex flex-col gap-[8px] items-center"
      onClick={() => {
        setSelectedDrama(item);
        setIsShowModal(true);
      }}
    >
      <img
        alt="포스터"
        src={`data:image/png;base64,${item.image}`}
        className="w-[100px] h-[140px] bg-slate-200 rounded-[6px]"
      />
      <span>{item.title}</span>
    </button>
  );
}
