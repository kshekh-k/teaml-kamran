<script lang="ts">
  import Sidebar from "$lib/components/partials/sidebar.svelte";
  import "../app.css";
  import GoogleFont, {
    type GoogleFontDefinition,
  } from "@svelte-web-fonts/google";
  import { ChartPie, Users, Folder, Gift, ShoppingBag } from "lucide-svelte";

  const fonts: GoogleFontDefinition[] = [
    {
      family: "Poppins",
      //   @ts-ignore
      variants: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    },
  ];
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <GoogleFont {fonts} display="swap" />
</svelte:head>

<div class="main-wrapper">
  <Sidebar />
  <div class="main-wrapper-inner">
    <!-- Left -->
    <div>
      <div class="grid grid-cols-2 gap-5">
        <!-- Card -->
        <div class="bg-white rounded-2xl px-4 py-2.5">
          <div class="flex items-center justify-between">
            <div
              class="size-9 rounded-xl bg-[#5570F1]/20 flex items-center justify-center"
            >
              <ChartPie class="text-[#5570F1] size-5" />
            </div>
          </div>
          <div class="mt-8 grid grid-cols-2">
            <div>
              <h4 class="text-sm text-black-30">Announcements Sent</h4>
              <p class="text-xl mt-2 font-medium text-black-60">4000</p>
            </div>
            <div>
              <h4 class="text-sm text-black-30">Acknowledgement</h4>
              <div class="flex items-center gap-2 mt-2">
                <p class="text-xl font-medium text-black-60">450</p>
                <span class="text-t-green text-xs">+20.00%</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Card -->
        <div class="bg-white rounded-2xl px-4 py-2.5">
          <div class="flex items-center justify-between">
            <div
              class="size-9 rounded-xl bg-[#FFCC91]/20 flex items-center justify-center"
            >
              <Users class="text-black size-5" />
            </div>
          </div>
          <div class="mt-8 grid grid-cols-2">
            <div>
              <h4 class="text-sm text-black-30">Employees</h4>
              <div class="flex items-center gap-2 mt-2">
                <p class="text-xl font-medium text-black-60">1,250</p>
                <span class="text-t-green text-xs">+15.80%</span>
              </div>
            </div>
            <div>
              <h4 class="text-sm text-black-30">Active Users</h4>
              <div class="flex items-center gap-2 mt-2">
                <p class="text-xl font-medium text-black-60">1,180</p>
                <span class="text-t-green text-xs">+85.00%</span>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div class="grid grid-cols-1 gap-5">
          <!-- Card -->
          <div class="bg-primary-100 rounded-2xl px-4 py-2.5">
            <div class="flex items-center justify-between">
              <div
                class="size-9 rounded-xl bg-white/20 flex items-center justify-center"
              >
                <Folder class="text-white size-5" />
              </div>
            </div>
            <div class="mt-8 grid grid-cols-2">
              <div>
                <h4 class="text-sm text-white">Incentives</h4>
                <div class="flex items-center gap-2 mt-2">
                  <p class="text-xl font-medium text-white">45</p>
                </div>
              </div>
              <div>
                <h4 class="text-sm text-white">Dollar Amount</h4>
                <div class="flex items-center gap-2 mt-2">
                  <p class="text-xl font-medium text-white">32</p>
                  <span class="text-white text-xs">+24.00%</span>
                </div>
              </div>
            </div>
          </div>

          <button>
            <Gift class="text-black" />
          </button>
          <!-- Card -->
          <div class="bg-white rounded-2xl px-4 py-2.5">
            <div class="flex justify-center">This Week</div>
            <div class="mt-8 grid grid-cols-2">
              <div>
                <h4 class="text-sm text-black-30">Monthly Spent</h4>
                <div class="flex items-center gap-2 mt-2">
                  <p class="text-xl font-medium text-black-60">20%</p>
                  <span class="text-t-green text-xs">+0.00%</span>
                </div>
              </div>
              <div>
                <h4 class="text-sm text-black-30">Customers</h4>
                <div class="flex items-center gap-2 mt-2">
                  <p class="text-xl font-medium text-black-60">30</p>
                  <span class="text-t-green text-xs">+85.00%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right -->
    <div class="flex flex-col gap-5">
      <!-- Card -->
      <div class="bg-white rounded-2xl px-4 py-2.5">
        <div class="flex items-center justify-between">
          <div
            class="size-9 rounded-xl bg-[#FFCC91]/20 flex items-center justify-center"
          >
            <ShoppingBag class="text-black size-5" />
          </div>
        </div>
        <div class="mt-8 grid grid-cols-3">
          <div>
            <h4 class="text-sm text-black-30">Text Sent</h4>
            <div class="flex items-center gap-2 mt-2">
              <p class="text-xl font-medium text-black-60">450</p>
            </div>
          </div>
          <div>
            <h4 class="text-sm text-black-30">Pending</h4>
            <div class="flex items-center gap-2 mt-2">
              <p class="text-xl font-medium text-black-60">5</p>
            </div>
          </div>
          <div>
            <h4 class="text-sm text-black-30">Completed</h4>
            <div class="flex items-center gap-2 mt-2">
              <p class="text-xl font-medium text-black-60">445</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Messages -->
      <div class="bg-white rounded-xl p-5">
        <h3 class="text-black-60 font-medium mb-6">Recent Messages</h3>

        <div class="flex flex-col gap-3">
          <div class="flex gap-3.5 border-b pb-2.5">
            <div class="size-12 rounded-lg border"></div>
            <div class="flex-1">
              <div class="flex justify-between items-center">
                <span class="text-sm text-black-60">Marty Snyder</span>
                <span class="text-xs text-black-20">12 Sept 2022</span>
              </div>
              <div class="flex justify-between items-center mt-2.5">
                <span class="text-sm text-black-80 font-medium">I Quit</span>
                <span
                  class="py-0.5 px-4 leading-none text-t-red bg-red-50 rounded-full text-xs"
                  >Pending</span
                >
              </div>
            </div>
          </div>
          <div class="flex gap-3.5 border-b pb-2.5">
            <div class="size-12 rounded-lg border"></div>
            <div class="flex-1">
              <div class="flex justify-between items-center">
                <span class="text-sm text-black-60">Marty Snyder</span>
                <span class="text-xs text-black-20">12 Sept 2022</span>
              </div>
              <div class="flex justify-between items-center mt-2.5">
                <span class="text-sm text-black-80 font-medium">I Quit</span>
                <span
                  class="py-0.5 px-4 leading-none text-t-red bg-red-50 rounded-full text-xs"
                  >Pending</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
