<script lang="ts">
    import Sidebar from "../components/ui/sidebar.svelte";
import "../styles.scss"
    import GoogleFont from '@svelte-web-fonts/google';

    const fonts = [
        {
            family: 'Poppins',
            variants: ['100','200','300', '400', '500', '600', '700', '800', '900'],        
        },
         
    ];
</script>
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <GoogleFont fonts={fonts} display="swap" />
</svelte:head>

<div class="overflow-hidden min-w-screen flex flex-col">
<div class="pl-72">
    <Sidebar />
    <div class=""></div>
</div>
</div>
