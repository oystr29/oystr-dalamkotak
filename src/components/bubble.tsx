import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import styles from './bubble.module.css';
import Me from '~/assets/img/me.jpg';

export const Bubble = component$(() => {
  const text = useSignal('I Hate You');
  useVisibleTask$(({ cleanup }) => {
    const observable = document.querySelectorAll('.observe');
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        console.log('------');
        let closestSection: Element | undefined = undefined;
        let minDistance = Infinity;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const distance = Math.abs(entry.boundingClientRect.top);
            if (distance < minDistance) {
              minDistance = distance;
              closestSection = entry.target;
            }
          }
        });
        if (closestSection) {
          text.value = closestSection?.classList.value;
        }
      },
      { root: null, threshold: 0 },
    );

    observable.forEach((o) => observer.observe(o));
    cleanup(() => observable.forEach((o) => observer.unobserve(o)));
  });

  return (
    <div
      id="bubble"
      class="sticky top-2 -right-2 z-10 flex items-center justify-end gap-4"
    >
      <div class={styles.chat_bubble}>{text}</div>
      <img
        {...Me}
        alt="me"
        class="rounded-full min-h-10 min-w-10  max-h-10 max-w-10 h-full w-full object-cover grayscale hover:grayscale-0"
      />
    </div>
  );
});
