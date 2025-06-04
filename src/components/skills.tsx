import { createSignal, For, Show } from "solid-js";
import {
  createAutoAnimate,
  createAutoAnimateDirective,
} from "@formkit/auto-animate/solid";

const data = [
  {
    id: 1,
    question: "Why did you create it?",
    answer: `We needed a way to animate DOM elements without adding to the
    virtual DOM in Vue and React. And it turned out our solution was gonna work
    great for lots of other use cases as well.`,
  },
  {
    id: 2,
    question: "Is it open source?",
    answer: `It sure is! AutoAnimate is MIT licensed, which basically means you
    are free to take it and do whatever you want with it. If you find it useful
    consider <a href="https://github.com/sponsors/formkit">supporting our open source efforts</a>.`,
  },
  {
    id: 3,
    question: "Who made this?",
    answer: `AutoAnimate is a team effort 💪 . Most of the code was written by
      <a href='https://twitter.com/jpschroeder'>Justin Schroeder</a>,
      <a href='https://twitter.com/0xBOYD'>Andrew Boyd</a> played a key
      role on the docs, and the rest of the <a href='https://formkit.com'>FormKit</a>
      team held down the fort.`,
  },
];

const Item = (props: {
  onClick: () => void;
  item: (typeof data)[0];
  isActive: boolean;
}) => {
  const [parent, setEnabled] = createAutoAnimate(/* optional config */);
  return (
    <>
      <li class="block overflow-hidden rounded bg-red-50" ref={parent}>
        <div
          class="flex cursor-pointer items-center p-4 before:mr-2 before:text-2xl before:text-red-500 before:content-['Q']"
          onClick={props.onClick}
        >
          {props.item.question}
        </div>
        <Show when={props.isActive} keyed>
          <p class="mx-4 my-0 pt-0 pr-0 pb-4 pl-0 text-sm">
            {props.item.answer}
          </p>
        </Show>
      </li>
    </>
  );
};

const SkillSolid = () => {
  const [current, setCurrent] = createSignal(0);

  return (
    <>
      <ul class="m-0 list-none p-0">
        <For each={data}>
          {(item) => (
            <Item
              isActive={item.id === current()}
              item={item}
              onClick={() => {
                setCurrent((c) => (c === item.id ? -1 : item.id));
              }}
            />
          )}
        </For>
      </ul>
    </>
  );
};

export { SkillSolid };
