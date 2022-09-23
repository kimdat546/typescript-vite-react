import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import App from './App';

describe('Test description', () => {
	test('Check', () => {
		render(<App name="Testing" />);

		expect(screen.getByText(/Testing/i)).toBeDefined();
	});
});
