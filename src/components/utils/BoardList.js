import { useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { setActive, setFavorite } from "../../stores";

export default function BoardList({ board, index }) {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  let icon = board.favorite ? (
    <AiFillStar className="h-7 w-7 cursor-pointer p-1" />
  ) : (
    show && <AiOutlineStar className="h-7 w-7 cursor-pointer p-1" />
  );

  return (
    <li
      className={`w-full h-8 p-2 my-2  rounded flex items-center justify-between hover:bg-slate-700 cursor-pointer ${
        board.active && "bg-slate-500"
      }`}
      onMouseEnter={setShow.bind(null, !show)}
      onMouseLeave={setShow.bind(null, !show)}
      onClick={() => dispatch(setActive(board.id))}
    >
      <h3>{board.title}</h3>

      <div onClick={() => dispatch(setFavorite(board.id))}>{icon}</div>
    </li>
  );
}