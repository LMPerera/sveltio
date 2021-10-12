import '@testing-library/jest-dom';
import Toggle from '$lib/Toggle/Toggle.svelte';
import { render, fireEvent } from '@testing-library/svelte';

describe('Toggle component', () => {
    it('Check Toggled', async () => {
        const { container } = render(Toggle, { isToggled: false });
        const toggle = container.querySelector("input[type=checkbox]")
        await fireEvent.change(toggle, { target: { value: true } });
        expect(JSON.parse(toggle.value)).toBe(true);
    });
});
