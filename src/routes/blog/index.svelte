<script context="module">
	export function preload() {
		return this.fetch(`blog.json`)
			.then(r => r.json())
			.then(posts => {
				return { posts };
		});
	}
</script>

<script>
	import Post from "../../components/Post.svelte"

	export let posts;
</script>
<style>
	.Posts {
		display: grid;
		justify-content: space-between;
		gap: 15px;
		grid-template-columns: 1fr;
	}
</style>

<svelte:head>
	<title>Lahincapie</title>

	<meta name="description" content="Blog de lahincapie" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@lahincapie" />
	<meta name="twitter:creator" content="@lahincapie" />
	<meta name="twitter:title" content="Alejandra Hincapie" />
	<meta name="twitter:description" content="Blog de lahincapie" />
	<meta name="twitter:image" content="https://arepa.s3.amazonaws.com/blogpost-cover.png" />

	<meta name="og:title" content="Alejandra Hincapie" />
	<meta name="og:description" content="Blog de lahincapie" />
	<meta name="og:image" content="https://arepa.s3.amazonaws.com/blogpost-cover.png" />
	<meta name="og:url" content="https://blog.alejandra.com" />
	<meta name="og:site_name" content="Alejandra Hincapie" />
	<meta name="og:locale" content="es_ES" />
	<meta name="og:type" content="article" />
	<meta name="fb:app_id" content="" />
</svelte:head>

<div class="blog">
	<div class="Posts">
		{#each posts as post}
			<Post {post} />
		{/each}
	</div>
</div>

	<ul>
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
		{/each}
	</ul>
