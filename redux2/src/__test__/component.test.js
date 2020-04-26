import React from 'react';
import Footer from '../component/Footer/';
import { create } from 'react-test-renderer';


describe('Snapshot Component', () => {
    test('Testiing footer' ,() => {
        let tree = create(<Footer/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})