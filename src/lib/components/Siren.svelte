<script lang="ts">
	import Siren from '$lib/images/lope1.png';

	export let classes: string;
	export let width: number = 512;
	export let height: number = 512;
</script>

<img class="{classes} rounded-image" {width} {height} alt="Softweel logo." src={Siren} />

<style>
	.rounded-image {
		border-radius: 50%;
	}
</style>
