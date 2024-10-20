<script>
  import kaviyarsanStylish from "../../assets/images/kaviyarsanStylish.jpg";

  let greetingName = "Hello, I'm KAVIYARASAN";
  const verticalLine =
    '<div class="hidden md:block w-1 h-80 bg-gray-200"></div>';
  const horizontalLine =
    '<div class="hidden md:block w-2/3 h-0.5 bg-gray-200"></div>';
  const mySkills = [
    "HTML",
    ["CSS", "Tailwind CSS"],
    ["JavaScript", ["SvelteJS"]],
    "Git &GitHub",
  ];
</script>

<section
  id="home"
  class="md:min-h-[90vh] bg-white text-gray-800 transition-all duration-300 ease-in-out"
>
  <div
    class="p-4 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-stretch gap-6"
  >
    <div
      class="intro text-center flex flex-col items-center justify-center gap-4 transition-all duration-500 ease-in-out"
    >
      <div
        class="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-6 lg:gap-10"
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
          class="md:w-1/4 min-w-40 border border-stone-400 p-2 md:p-4 rounded-md text-pretty text-base font-semibold text-slate-600 transition-all duration-500 ease-in-out text-justify relative"
        >
          Eager and motivated fresher seeking Entry-Level web developer
          opportunities.
          <div
            class="w-2 h-2 absolute top-1 right-1 bg-blue-600 rounded-full transition-all duration-500"
          ></div>
          <div
            class="w-2 h-2 absolute top-1 right-1 bg-blue-600 rounded-full animate-ping transition-all duration-500"
          ></div>
        </div>
      </div>

      <p class="text-justify p-4">
        Driven and enthusiastic computer science graduate seeking entry-level
        opportunities to begin my career. I am passionate about learning and
        eager to contribute to a collaborative and dynamic team. Ready to apply
        my skills, grow professionally, and take on new challenges in a
        fast-paced environment
      </p>
    </div>

    {@html verticalLine}

    <div class="p-4 md:w-1/4 flex flex-col items-start w-full gap-4">
      <h2 class="text-3xl font-semibold mb-6">My Skills</h2>
      <ul class="pl-6 flex items-start gap-6 flex-wrap">
        {#each mySkills as skill}
          <button
            class="min-w-max w-28 rounded border border-b-2 border-b-indigo-500 hover:border-indigo-500 py-1 px-4 hover:bg-indigo-100 transition-all duration-300 ease-in-out"
          >
            <li class="text-indigo-500 hover:text-indigo-600 font-semibold">
              {#if typeof skill === "string"}
                {skill}
              {:else if typeof skill === "object"}
                {skill[0]}
              {/if}
            </li>
          </button>
        {/each}
      </ul>
    </div>
  </div>
</section>
