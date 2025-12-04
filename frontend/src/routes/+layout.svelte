<script>
	import "$lib/styles/bootstrap.scss";
	import "../app.css";
	import "$lib/fa.js";

	import favicon from "$lib/assets/favicon.svg";
	import Header from "../components/Header.svelte";

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</svelte:head>

<Header />
<slot/>
