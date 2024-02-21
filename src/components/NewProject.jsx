import { useRef } from "react";

import Input from "./input";

export default function NewProject({onAdd}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSvae() {
    const endteredTitle = title.current.value;
    const endteredDescription = description.current.value;
    const endteredDueDate = dueDate.current.value;

    // validation 

    onAdd({
      title: endteredTitle,
      description: endteredTitle,
      dueDate: endteredTitle,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancle</button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-stone-950"
            onClick={handleSvae}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}
