// The Modern 'use strict'
/*
For a long time, JavaScript evolved without compatibility issues. New features were added to the language while old functionality didn’t change.
That had the benefit of never breaking existing code. But the downside was that any mistake or an imperfect decision made by JavaScript’s creators got stuck in the language forever.
This was the case until 2009 when ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive:*/

// The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.

// For example:
//  CODE:
        // "use strict";
        // this code works the modern way
        // ...