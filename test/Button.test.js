import '@testing-library/jest-dom';
import Button from '$lib/Button/Button.svelte';
import { render } from '@testing-library/svelte';

describe('Toggle component', () => {
    it('Button Has Text', () => {
        const { getByText } = render(Button, { label: 'Hello Sveltio' });
        expect(getByText('Hello Sveltio')).toBeInTheDocument();
    });
});
