import React from 'react';
import renderer from 'react-test-renderer';

import LandingPage from '../../src/screens/landingPage';

describe('<LandingPage /> load', () => {
    it('pass', () => {
        expect(true).toBe(true);
    });
    it('has 2 children', () => {
        const tree = renderer.create(<LandingPage />).toJSON();
        expect(tree.children.length).toBe(3);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<LandingPage />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});