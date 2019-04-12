# bradtraversy-projects-collection

This repo will be dedicated to all the projects I've done from Brad Traversy's tutorials. I absolutely love his stuff and the way he teaches. These projects are both from his courses and YouTube video, both of which feature a lot of overwhelming content. He goes over everything in great detail and always opens your eyes to new things.

## todotask-app (modern-js)

The code is fairly similar to what he gives us, I've done a slight modification to the JavaScript to minimize code duplication with es6 arrow functions.

Interesting features:

- The filter function uses CSS display to show/hide results.
- Shows how while loop is faster than clearing the innerHTML.
- Uses DOMContentLoaded to trigger task loading.

The web app can be viewed **[here](https://w3althambition.github.io/bradtraversy-todotask-app)**.

## loan-calc-app (modern-js)

Description same as the above project.

Interesting features:

- Error HTML object template injected into the dom.
- Timeout looks to remove the error by class lookup.

The web app can be viewed **[here](https://w3althambition.github.io/bradtraversy-loan-calc-app/)**.

## number-guesser (modern-js)

Description same as the above project. Plus there are some interesting bits. There were two cases where I was able to come up with a better JS code. one case was on line 36, my code looks much nicer - thanks for bugging me eslint! Also, in line 85, he checked the entire string against one class, which means if you add more than one class, the result will be false, stopping the function from working correctly. I checked against the list of classes, eliminating the potential problem. I think this shows that I am starting to become a decent dev.

Interesting features:

- use of 'className += 'someName' - very interesting.
- input validation conditions.

A link to his course can be found [here](https://www.udemy.com/modern-javascript-from-the-beginning/).
