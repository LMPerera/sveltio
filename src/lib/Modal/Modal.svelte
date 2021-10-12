<script>
	import { fly, fade } from 'svelte/transition';

	export let isModalOpen = false;

	function closeModal() {
		isModalOpen = false;
	}

    function portal(node) {
		let target;

		function update() {
			target = document.querySelector('body');
			target.appendChild(node);
			node.hidden = false;
		}

		function destroy() {
			if (node.parentNode) {
				// Child tells parent to remove itself
				node.parentNode.removeChild(node);
			}
		}

		update();

		return {
			update,
			destroy
		};
	}
</script>

{#if isModalOpen}
    <div use:portal hidden>
		<div class="sveltio-modal-wrapper" transition:fly={{ opacity: 0, y: 100 }}>
			<button on:click={closeModal} aria-label="Close Modal">Close</button>
			<slot />
		</div>
		<div on:click={closeModal} transition:fade class="sveltio-background" />
	</div>
{/if}

<style>
	.sveltio-modal-wrapper {
	position: fixed;
	inset: 100px 0;
	min-width: 320px;
	max-width: 530px;
	margin: 0 auto;
	width: 100%;
	z-index: 1001;
}

.sveltio-background {
	background: black;
	cursor: pointer;
	inset: 0;
	opacity: 0.9;
	position: fixed;
	z-index: 1000;
}

</style>