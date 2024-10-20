<script>
  import Hero from "./component/hero.svelte";
  import kaviyarsanStylish from "../assets/images/kaviyarsanStylish.jpg";

  let greetingName = "Hello, I'm KAVIYARASAN";
  const verticalLine = '<div class="w-1 h-80 bg-gray-200"></div>';
  const horizontalLine = '<div class="w-2/3 h-0.5 bg-gray-200"></div>';
</script>

<div class="flex flex-col items-center justify-center">
  <Hero />
  {@html horizontalLine}
</div>
