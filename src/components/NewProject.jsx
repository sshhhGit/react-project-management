import { useRef } from "react";

import Input from "./input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancle }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSvae() {
    const endteredTitle = title.current.value;
    const endteredDescription = description.current.value;
    const endteredDueDate = dueDate.current.value;

    if (endteredTitle.trim() === '' || endteredDescription.trim() === '' || endteredDueDate.trim() === '') {
      modal.current.open();
      return;
    }

    onAdd({
      title: endteredTitle,
      description: endteredTitle,
      dueDate: endteredTitle,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
      <h2 className="text-xl font-bold text-stone-700 my-4">입력값이 유효하지 않습니다.</h2>
      <p className="text-stone-600 mb-4">이런... 값을 입력하지 않은 것 같습니다.</p>
      <p className="text-stone-600 mb-4">각 입력 필드에 유효한 값을 제공해주세요.</p>
    </Modal >
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancle}>취소</button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-stone-950"
              onClick={handleSvae}>
              저장
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="제목" />
          <Input ref={description} label="내용" textarea />
          <Input type="date" ref={dueDate} label="완료일자" />
        </div>
      </div>
    </>
  );
}
