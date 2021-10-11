<script>
    import './modal.css';
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