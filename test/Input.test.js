import '@testing-library/jest-dom';
import Input from '$lib/Input/Input.svelte';
import { render } from '@testing-library/svelte';

describe('Input component', () => {
    it('Input Has Placeholder', () => {
        const { getByPlaceholderText } = render(Input, { placeholder: 'Hello Sveltio' });
        expect(getByPlaceholderText('Hello Sveltio')).toBeInTheDocument();
    });
});
