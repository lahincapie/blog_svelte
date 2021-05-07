<script>
	import Greeting from '../components/Greeting.svelte';
	import Nav from '../components/Nav.svelte';
	import Header from '../components/Header.svelte';
	import Main from '../components/Main.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	.wrapper__content {
		position: relative;
		max-width: 56em;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<div class="wrapper__content">
	<Greeting />
</div>




<!-- <Header />
<Nav {segment}/>

<Main>
	<slot></slot>
</Main>
<Footer /> -->