import { IoIosStar } from "react-icons/io";

// eslint-disable-next-line react/prop-types
function Stars({ rate }) {
  const stars = Array.from({ length: rate }, (num) => num++);
  return (
    <div className="flex items-center gap-0.5 text-black-shade-3">
      {stars.map((star, idx) => (
        <IoIosStar key={`${star} ${idx}`} />
      ))}
    </div>
  );
}

export default Stars;
