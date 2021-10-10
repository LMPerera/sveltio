<script>
    import './toggle.css';

	export let label = '';
	export let isToggled = false;
	export let style = '';
</script>

<label {style}>
	<input type="checkbox" class="input" bind:checked={isToggled} />
	<div class="toggle" />
	{label}
</label>