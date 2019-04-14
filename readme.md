# bradtraversy-projects-collection

This repo will be dedicated to all the projects I've done from Brad Traversy's tutorials. I absolutely love his stuff and the way he teaches. These projects are both from his courses and YouTube video, both of which feature a lot of overwhelming content. He goes over everything in great detail and always opens your eyes to new things. A link to his courses can be found [here](https://www.udemy.com/user/brad-traversy/).

## todotask-app (modern-js)

The code is fairly similar to what he gives us, I've done a slight modification to the JavaScript to minimize code duplication with es6 arrow functions.

Interesting features:

- The filter function uses CSS display to show/hide results.
- Shows how while loop is faster than clearing the innerHTML.
- Uses DOMContentLoaded to trigger task loading.

The web app can be viewed **[here](https://w3althambition.github.io/bradtraversy-projects-collection/modernJS-todotask-app/index.html)**.

## loan-calc-app (modern-js)

Description same as the above project.

Interesting features:

- Error HTML object template injected into the dom.
- Timeout looks to remove the error by class lookup.

The web app can be viewed **[here](https://w3althambition.github.io/bradtraversy-projects-collection/modernJS-loan-calc-app/index.html)**.

## number-guesser (modern-js)

Description same as the above project. Plus there are some interesting bits. There were two cases where I was able to come up with a better JS code. one case was on line 36, my code looks much nicer - thanks for bugging me eslint! Also, in line 85, he checked the entire string against one class, which means if you add more than one class, the result will be false, stopping the function from working correctly. I checked against the list of classes, eliminating the potential problem. I think this shows that I am starting to become a decent dev.

Interesting features:

- use of 'className += 'someName' - very interesting.
- input validation conditions.

The web app can be viewed **[here](https://w3althambition.github.io/bradtraversy-projects-collection/modernJS-number-guesser/index.html)**.

## modernJS-book-list-app (modern-js)

This project drills into how we might apply the principals of object-oriented programming into an actual project. As a whole, this further opens my eyes to the possible uses for classes, static classes, etc. Overall the application of OOP is not perfect, this isn't some amazingly well thought out application that when you look into the logic, it blows your mind away. No. It's a tutorial, but it's one of the best tutorials in this topic out there in my opinion.

Interesting features:

- Use of object-oriented programming
- ^^ what more would you need.

The web app can be viewed **[here](https://w3althambition.github.io/bradtraversy-projects-collection/modernJS-book-list-app/index.html)**
