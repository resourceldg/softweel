<script>
	import { page } from '$app/stores';

	const capitalize = (str, lower = false) =>
		(lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
			match.toUpperCase()
		);

	const img = '/softweel-logo.png ';
	const desc = 'Softweel es tecnología';

	$: title =
		$page.url.pathname === '/' || $page.url.pathname.includes('//prerender/')
			? 'Softweel'
			: `${capitalize(
					$page.url.pathname.substring(1).replace('s/', ' | ').replace(/-/g, ' ')
			  )} | Softweel`;
</script>

<svelte:head>
	<meta name="description" content={desc} />
	<meta name="title" content={title} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`https://www.sveltesirens.dev${$page.url.pathname}`} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={img} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:url" content="https://twitter.com/SvelteSirens" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={desc} />
	<meta property="twitter:image" content={img} />
	<meta name="twitter:image:alt" content="Svelte Sirens" />
	<link rel="icon" type="image/png" href="/softweel-logo.png" />
	<link rel="icon" type="image/png" href="/softweel-logo.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Red+Hat+Text:wght@300;400;500;700&display=swap"
		rel="stylesheet"
	/>
	<title>{title}</title>
</svelte:head>
