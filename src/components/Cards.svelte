<script>
	import { cards } from '../routes/+page';
</script>

{#if cards && cards.length}
	<div class="grid grid-cols-4 gap-8 mx-[8vw] my-20">
		{#each cards as card}
			<div class="border-2 border-black card-container relative">
				<img src={card.imglink} alt="Project preview" />
				<a href="/"
					><p
						class="font-dmserifdisplay text-2xl font-bold text-grey underline py-3 pl-3 border-t-2 border-black bg-pale"
					>
						{card.name}
					</p></a
				>
				{#if card.level == 1}
					<p
						class="absolute top-[-8px] right-[-8px] text-base font-archivo font-bold text-grey bg-green px-2 py-1 border-2 border-black z-10 w-max"
					>
						Level {card.level}
					</p>
				{/if}
				{#if card.level == 2}
					<p
						class="absolute top-[-8px] right-[-8px] text-base font-archivo font-bold text-grey bg-yellow px-2 py-1 border-2 border-black z-10 w-max"
					>
						Level {card.level}
					</p>
				{/if}
				{#if card.level == 3}
					<p
						class="absolute top-[-8px] right-[-8px] text-base font-archivo font-bold text-grey bg-orange px-2 py-1 border-2 border-black z-10 w-max"
					>
						Level {card.level}
					</p>
				{/if}
			</div>
		{/each}
	</div>
{/if}

<style>
	.card-container:hover {
		translate: 0px -10px;
	}

	.card-container {
		transition: translate 0.3s;
	}
</style>
