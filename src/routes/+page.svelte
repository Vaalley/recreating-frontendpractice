<script context="module">
</script>

<script>
	import Cards from '../components/Cards.svelte';
	import Hero from '../components/Hero.svelte';
	import Navbar from '../components/Navbar.svelte';
	import { cards } from '../routes/+page';
</script>

<svelte:head>
	<title>Recreating Frontend Practice</title>
</svelte:head>

<header>
	<Navbar />
	<Hero />
</header>

<Cards />
