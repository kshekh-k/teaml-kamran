<script>
  import {
    Bagicon,
    Commenticon,
    Dashboardicon,
    Gearicon,
    Headphoneicon,
    Logoicon,
    Logouticon
  } from "$lib/icons";
  import { onMount } from "svelte";
  let currentPath = "/";

  onMount(() => {
    currentPath = window.location.pathname;
  });
  const sidemenu = [
    {
      name: "Dashboard",
      icon: Dashboardicon,
      url: "/",
    },
    {
      name: "Plan",
      icon: Bagicon,
      url: "/#",
      counter: 3,
    },
    {
      name: "Conversations",
      icon: Commenticon,
      url: "/#",
      counter: 16,
    },
    {
      name: "Settings",
      icon: Gearicon,
      url: "/#",
    },
  ];
</script>

<aside class="fixed left-0 inset-y-0 bg-white flex flex-col w-72">
  <div class="flex">
    <a
      href="/#"
      class="text-xl font-bold text-center text-black-60 hidden md:flex justify-center items-center py-4 px-5"
      >TeamLynQ</a
    >
    <Logoicon className="size-4 text-black md:hidden" />
  </div>
  <div class="flex flex-col flex-1 max-h-full overflow-auto">
    <div class="flex flex-col gap-2 px-4">
      {#each sidemenu as { name, icon: Icon, url, counter }}
        <a
          href={url}
          class={`flex gap-1 items-center px-4 py-2 min-h-14 text-left leading-none rounded-lg relative ease-in-out duration-200 ${currentPath === url ? "bg-primary-100 text-white " : "text-black-50 hover:bg-black/10"}`}
          ><span class="w-8 shrink-0 flex jc items-center"
            ><Icon className="size-5" /></span
          >{name}
          {#if counter}<span
              class="rounded-3xl h-8 min-w-8 bg-secondary-100 inline-flex items-center justify-center text-center p-1 text-sm text-black ml-2"
              >{counter}</span
            >{/if}</a
        >
      {/each}
    </div>
  </div>
  <div class="flex flex-col gap-2 px-4">
    <a
      href="/#"
      class="flex gap-1 items-center px-4 py-2 min-h-12 text-left leading-none rounded-lg relative ease-in-out duration-200 text-black bg-black/10 hover:bg-black/20"
      ><span class="w-8 shrink-0 flex jc items-center"
        ><Headphoneicon className="size-5" /></span
      >Support</a
    >
    <button class="bg-secondary/10 px-4 py-2 rounded-lg text-black-40">Upgrade your account <span>
        <!-- <ArrowRight /> -->
    </span> </button>
    <button class="flex gap-1 items-center text-left px-4 py-2 rounded-lg text-red"><span>
        <Logouticon className="size-5" />
    </span>Logout </button>
  </div>
</aside>
