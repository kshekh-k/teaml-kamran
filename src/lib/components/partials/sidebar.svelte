<script>
  import {
    BagIcon,
    CommentIcon,
    DashboardIcon,
    GearIcon,
    HeadphoneIcon,
    LogoIcon,
    LogoutIcon,
  } from "$lib/icons";
  import { onMount } from "svelte";
  let currentPath = "/";
  import { ChevronRight } from "lucide-svelte";

  onMount(() => {
    currentPath = window.location.pathname;
  });
  const sideMenu = [
    {
      name: "Dashboard",
      icon: DashboardIcon,
      url: "/",
    },
    {
      name: "Plan",
      icon: BagIcon,
      url: "/#",
      counter: 3,
    },
    {
      name: "Conversations",
      icon: CommentIcon,
      url: "/#",
      counter: 16,
    },
    {
      name: "Settings",
      icon: GearIcon,
      url: "/#",
    },
  ];
</script>

<aside class="px-8 pt-7 pb-8 flex flex-col bg-white">
  <div class="flex justify-center">
    <a
      href="/#"
      class="text-xl font-bold text-center text-black-60 hidden md:flex justify-center items-center"
      >TeamLynQ</a
    >
    <!-- <LogoIcon className="size-4 text-black md:hidden" /> -->
  </div>
  <div
    class="flex flex-col justify-between flex-1 max-h-full overflow-auto mt-16"
  >
    <div class="flex flex-col gap-2">
      {#each sideMenu as { name, icon: Icon, url, counter }}
        <a
          href={url}
          class={`flex gap-1 items-center px-5 py-4 text-sm leading-none rounded-xl relative ease-in-out duration-200 ${currentPath === url ? "bg-primary-100 text-white " : "text-black-50 hover:bg-black/10"}`}
          ><span class="w-8 shrink-0 flex jc items-center"
            ><Icon className="size-5" /></span
          >{name}
          {#if counter}<span
              class="rounded-3xl size-6 bg-secondary-100 inline-flex items-center justify-center text-center p-1 text-xs text-black ml-2"
              >{counter}</span
            >{/if}</a
        >
      {/each}
    </div>
    <div class="flex flex-col gap-3.5">
      <a
        href="/#"
        class="flex gap-1 items-center px-4 py-3 min-h-12 text-left leading-none rounded-2xl relative ease-in-out text-sm duration-200 text-black bg-black/10 hover:bg-black/20"
        ><span class="w-8 shrink-0 flex jc items-center"
          ><HeadphoneIcon className="size-5" /></span
        >Contact Support</a
      >
      <div class="bg-[#FFCC91]/20 rounded-2xl px-5 py-2.5 pb-14">
        <button class="text-black-40 flex gap-2 items-center">
          <span class="text-sm">Upgrade your account</span>
          <ChevronRight class="size-4 mt-1" strokeWidth={2.5} />
        </button>
      </div>
      <button
        class="flex gap-1 items-center text-left px-4 py-2 rounded-lg text-red"
      >
        <LogoutIcon className="size-5" />
        <span class="text-sm">Logout</span>
      </button>
    </div>
  </div>
</aside>
