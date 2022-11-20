<script>
	import { cards } from '../routes/+page';
</script>

{#if cards && cards.length}
	<div class="grid grid-cols-4 gap-8 mx-[8vw]">
		{#each cards as card}
			<div class="border-2 border-black">
				<p class="font-dmserifdisplay text-2xl font-bold text-grey underline">{card.name}</p>
			</div>
		{/each}
	</div>
{/if}
