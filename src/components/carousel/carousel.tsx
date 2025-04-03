import { component$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';

const ButtonPrev = component$(() => {
  return (
    <Carousel.Previous class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-8 w-8 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-circle-arrow-left-icon lucide-circle-arrow-left"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M16 12H8" />
        <path d="m12 8-4 4 4 4" />
      </svg>
    </Carousel.Previous>
  );
});

const ButtonNext = component$(() => {
  return (
    <Carousel.Next class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-8 w-8 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="m12 16 4-4-4-4" />
      </svg>
    </Carousel.Next>
  );
});

export default component$(() => {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];
  return (
    <Carousel.Root rewind class="relative w-full" align="center">
      <Carousel.Scroller class="">
        {colors.map((color) => (
          <Carousel.Slide
            key={color}
            class="border-red-500 min-h-40 max-h-40 flex-basis-[300px]"
          >
            {color}
          </Carousel.Slide>
        ))}
      </Carousel.Scroller>
      <div class="carousel-buttons">
        <ButtonPrev />
        <ButtonNext />
      </div>

      <Carousel.Pagination class="carousel-pagination">
        {colors.map((color, index) => (
          <Carousel.Bullet class="carousel-pagination-bullet" key={color}>
            {index + 1}
          </Carousel.Bullet>
        ))}
      </Carousel.Pagination>
    </Carousel.Root>
  );
});
