<script lang="ts">
  import {onMount} from "svelte";
  import kaviyarsanStylish from "../../assets/images/kaviyarasanFormal.png";
  import MenuBotton from "./menuBotton.svelte";
  import {page} from "$app/stores";

  $: currentRoute = $page.url.pathname.replace(/^\/+/, "");

  let i = 0;
  const verticalLine = '<span class="w-0.5 h-6 bg-gray-200 mx-4"></span>';
  const horizontalLine =
    '<span class="w-full h-0.5 bg-indigo-100 my-2"></span>';
  const linkNames = [
    ["Home", ""],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["About", "info"],
    ["Contact", "info/contact"],
    ["Blogs", "blogs"],
  ];

  let isMenuShow = false;
  let menuHeight = "h-0 p-0 opacity-0";

  $: if (isMenuShow) {
    menuHeight = "h-auto p-2 pb-4 opacity-100";
  } else {
    menuHeight = "h-0 p-0 opacity-0";
  }

  function handleMenuButton() {
    isMenuShow = !isMenuShow;
  }

  function handleClickOutside(event: MouseEvent) {
    const menuButton = document.getElementById("menuButton");

    if (
      isMenuShow &&
      menuButton &&
      !menuButton.contains(event.target as Node)
    ) {
      isMenuShow = false;
    }
  }

  onMount(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
</script>

<header
  class="bg-white sticky top-0 z-50 text-gray-800 font-medium shadow-md drop-shadow flex items-center justify-between px-6 md:px-10 lg:px-16 p-2 rounded-b-md md:rounded-br-3xl"
>
  <div class={`flex items-center md:items-end justify-between gap-4`}>
    <img
      src={kaviyarsanStylish}
      alt="Kaviyarasan"
      class="rounded-full w-10 h-auto shadow-md border-gray-800"
    />
    <span class={`min-w-max text-lg lg:text-xl`}>
      <span class="text-xl lg:text-2xl"> C </span>Kaviyarasan
    </span>
  </div>
  <button
    id="menuButton"
    on:click={handleMenuButton}
    on:mouseenter={handleMenuButton}
  >
    <MenuBotton {isMenuShow} />
  </button>
  <ul
    class={` ${menuHeight} w-40 md:hidden absolute right-2 top-14 border border-t-indigo-500 flex flex-col items-center bg-gray-100 rounded-b shadow shadow-indigo-400 transition-all duration-300 ease-in-out overflow-hidden`}
  >
    {#each linkNames as link, i}
      <button class="relative group" on:click={handleMenuButton}>
        <a
          id="navLink"
          href={`/${link[1]}`}
          class={`${currentRoute === link[1] ? "text-cyan-500" : ""} hover:text-cyan-500 active:text-blue-500 transition-all duration-300 p-1`}
        >
          {link[0]}
        </a>
        <span
          class={`${currentRoute === link[1] ? "w-full" : "w-0"} 
          absolute bottom-0 left-0 h-0.5 rounded bg-cyan-400 transition-all duration-300 ease-in-out group-hover:w-full`}
        ></span>
      </button>
      {#if linkNames.length > i + 1}
        {@html horizontalLine}
      {/if}
    {/each}
  </ul>
  <ul class={`hidden md:flex justify-between items-center"`}>
    {#each linkNames as link, i}
      <li class="relative group">
        <a
          id="navLink"
          href={`/${link[1]}`}
          class={`${currentRoute === link[1] ? "text-cyan-500" : ""} hover:text-cyan-500 active:text-blue-500 transition-all duration-300 p-1`}
        >
          {link[0]}
        </a>
        <span
          class={`${currentRoute === link[1] ? "w-full" : "w-0"} 
          absolute bottom-0 left-0 h-0.5 rounded bg-cyan-400 transition-all duration-300 ease-in-out group-hover:w-full`}
        ></span>
      </li>
      {#if linkNames.length > i + 1}
        {@html verticalLine}
      {/if}
    {/each}
  </ul>
</header>
