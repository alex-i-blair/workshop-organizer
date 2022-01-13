// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderParticipant } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('this function should create a dom element h4, add text content from an object and add a classlist', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const participant = {
        name: 'Jeff'
    };

    const expected = '<h4 class="participant">Jeff</h4>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderParticipant(participant).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
