import { MAX_SELECT_CNT } from "../pages/ott";

export default function DramaRecommItem({ item, selectedIds, setSelectedIds }) {
  const handleClick = () => {
    if (selectedIds.includes(item.dramaId)) {
      let newSelectedIds = [...selectedIds];
      newSelectedIds = newSelectedIds.filter((v) => v !== item.dramaId);
      setSelectedIds(newSelectedIds);
      return;
    }
    if (selectedIds.length === MAX_SELECT_CNT) {
      alert("드라마는 최대 3개 선택 가능합니다.");
      return;
    }
    setSelectedIds((prev) => [...prev, item.dramaId]);
  };

  return (
    <button
      className={`flex flex-col gap-[8px] items-center`}
      onClick={handleClick}
    >
      <div className="relative">
        <img
          alt="포스터"
          src={`data:image/png;base64,${item.image}`}
          className={`w-[100px] h-[140px] bg-slate-200 rounded-[6px]`}
        />
        {selectedIds.includes(item.dramaId) && (
          <div className="absolute top-0 left-0 w-full h-full rounded-[6px] bg-black/50 flex justify-center items-center">
            <span className="text-[3rem]">✅</span>
          </div>
        )}
      </div>
      <span>{item.title}</span>
    </button>
  );
}
