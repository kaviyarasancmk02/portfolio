<script>
  import kaviyarsanStylish from "../../assets/images/kaviyarsanStylish.jpg";
  import Ping from "../animation/ping.svelte";

  let greetingName = "Hello, I'm KAVIYARASAN";
  const verticalLine =
    '<div class="hidden md:block w-1 h-80 bg-gray-200"></div>';
  const horizontalLine =
    '<div class="hidden md:block w-2/3 h-0.5 bg-gray-200"></div>';
  const mySkills = [
    "HTML",
    ["CSS", "Tailwind CSS"],
    ["JavaScript", "SvelteJS"],
    "Git &GitHub",
    ["MS Power Platform", "Power Apps, Power Automate, Power Virtual Agent"],
  ];
</script>

<section
  id="home"
  class="md:min-h-[90vh] bg-white text-gray-800 transition-all duration-300 ease-in-out"
>
  <div
    class="p-4 md:p-6 lg:p-10 flex flex-col md:flex-row items-center justify-stretch gap-4"
  >
    <div
      class="intro text-center flex flex-col items-center justify-center gap-4 transition-all duration-500 ease-in-out"
    >
      <div
        class="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-4 lg:gap-10"
      >
        <div>
          <div
            class="flex flex-col items-center justify-center relative transition-all duration-500 ease-in-out"
          >
            <span
              class="absolute rounded-full w-32 md:w-48 lg:w-60 h-32 md:h-48 lg:h-60 shadow-lg border border-blue-600 animate-spin transition-all duration-500 ease-in-out"
            >
            </span>
            <img
              src={kaviyarsanStylish}
              alt="Your Name"
              class="z-20 rounded-full w-32 md:w-48 lg:w-60 h-32 md:h-48 lg:h-60 shadow-lg transition-all duration-500 ease-in-out"
            />
          </div>
          <h1
            class="my-6 text-xl md:text-2xl lg:text-4xl font-bold mb-2 max-w-max relative"
          >
            <span
              class="inline-block overflow-hidden whitespace-nowrap border-r-2 border-black animate-typing"
            >
              {greetingName}
            </span>
          </h1>
        </div>
        <div
          class="md:w-1/4 m-2 min-w-40 border border-green-400 p-2 md:p-4 rounded-md text-pretty text-base font-semibold text-green-600 transition-all duration-500 ease-in-out text-justify relative"
        >
          Eager and motivated fresher seeking Entry-Level web developer
          opportunities.
          <div class="absolute top-1 right-1">
            <Ping color="bg-green-600" />
          </div>
        </div>
      </div>

      <p class="text-justify p-4">
        Driven and enthusiastic computer science graduate seeking
        <strong> Entry-Level </strong>
        opportunities to begin my career. I am passionate about learning and eager
        to contribute to a collaborative and dynamic team. Ready to apply my skills,
        grow professionally, and take on new challenges in a fast-paced environment.
      </p>
    </div>

    {@html verticalLine}

    <div class="p-4 flex flex-col items-start gap-4">
      <h2 class="text-3xl font-semibold mb-6">My Skills</h2>
      <ul class="pl-6 flex items-start justify-between gap-6 flex-wrap">
        {#each mySkills as skill}
          <span
            class="transition-all duration-300 ease-in-out flex items-center justify-start gap-4"
          >
            <Ping />
            {#if typeof skill === "string"}
              <span
                class="underline decoration-indigo-500 decoration-wavy text-indigo-500 -indigo-600 font-semibold"
              >
                {skill}
              </span>
            {:else if typeof skill === "object"}
              <div>
                <div
                  class="underline text-ellipsis decoration-indigo-500 decoration-wavy text-indigo-500 -indigo-600 font-semibold"
                >
                  {skill[0]}
                </div>
                <div
                  class=" text-wrap text-gray-500 font-medium text-sm text-ellipsis"
                >
                  ({skill[1].slice(0)})
                </div>
              </div>
            {/if}
          </span>
        {/each}
      </ul>
      <span class="w-full flex items-center justify-end">
        <a href="../skills" class="hover:underline text-blue-600">Know more</a>
      </span>
    </div>
  </div>
</section>
