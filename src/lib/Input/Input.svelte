<script>
    import './input.css';
    import { createEventDispatcher } from 'svelte';

    export let placeholder = '';
    export let label = '';
    export let disabled = false;
  
    export let state = "active";
  
    const dispatch = createEventDispatcher();

     /**
     * input change handler
     */
     function onChange(event) {
      dispatch('click', event);
    }
</script>

<label >

    {#if label}
        <span class="sveltio-input-label">{label}</span>
    {/if}
    
    <input
    disabled={disabled}
    type="text"
    class={['sveltio-input',`sveltio-input--${state}`].join(' ')}
    placeholder={placeholder}
    >
</label>


