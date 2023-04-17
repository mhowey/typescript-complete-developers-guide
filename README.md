## Maps Application Portion

At some point I'll move this repo to one that is more properly labeled "typescript-mappable" or something along those lines because this is just a portion of the whole Stephen Grider tutorial notes.

# TypeScript: Complete Developer's Guide

These are my "code notes" for the Maps application portion of Stephen Grider's Udemy course: [Stephen Grider's TypeScript: The Complete Developer's Guide](https://www.udemy.com/course/typescript-the-complete-developers-guide/)

## Use Parcel Bundler

To start this project you can simply run `npx parcel index.html` and navigate to `http://localhost:1234`

## Google Maps Key

In order for this to work, you'll need to add your own Google maps key in index.html where it says
[GOOGLE_MAPS_KEY].

## My Thoughts are in the Comments

Throughout this tutorial, I have been writing extensive (sometimes, repetitive, sorry!) comments throughout the codebase. Yes this makes looking at the code as a whole somewhat of a pain in the butt. Sorry! Hint: You can always collapse the comment code blocks to one line so you can see the code as a whole more effectively.

## Better Comments

(**This is very much OPTIONAL**, and nothing will "break" if you don't use the Better Comments plugin!)

I recommend installing the ["Better Comments" plugin for VSCode](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments).

Why? because I will be using to it's syntax for highlighting specific comments extensively throughout the comments inside this codebase (which there will be many!). Better comments is an extensible comment colorizer that allows comment authors to configure custom tokens that apply specific styles to comments (color, bold, italic, underline, etc).

For instance: an exclamation mark "!" signifies an "Alert" and gives the text a RED color, while question mark "?" at the beginning of a line signifies a "Query", and of course a "todo" is a note about some refactoring or additional coding that needs to be done on some section of code immediately following it.

