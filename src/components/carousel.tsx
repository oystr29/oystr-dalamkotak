import createEmblaCarousel from 'embla-carousel-solid';
import { onMount } from 'solid-js';

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = createEmblaCarousel(() => ({ loop: true }));

  onMount(() => {
    const api = emblaApi();
    if (api) {
      console.log(api.slideNodes()); // Access API
    }
  });

  return (
    <div class="embla" ref={emblaRef}>
      <div class="embla__container">
        <div class="embla__slide">Slide 1</div>
        <div class="embla__slide">Slide 2</div>
        <div class="embla__slide">Slide 3</div>
      </div>
    </div>
  );
}
