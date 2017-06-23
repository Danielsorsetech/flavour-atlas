# flavour-atlas
Open flavour atlas data and visualization tools

# Rationale

Our language shapes our perception of reality. That, too, is true for our gastroculinary experiences; flavours, aromas, taste, mouthfeel, textures. And even the appearance and color of our food, or the sounds while eating!

So it is not just when we want to communicate about our experience that we benefit from having the vocabulary to describe it, but also when we reflect on it ourselves. We are able to more consciously enjoy our food - or possibly, understand what feels off about it.

And sometimes, the food you want to describe is literally at the tip of your tongue, but the words to describe it aren't. The wine world realized than others, and came up with the concept of aroma or flavour wheels to help us classify and differentiate flavours and taste and group words. This concept has since been adopted to many other foods - coffee, chocolate, honey, olive oil, beer.

This project got started because I wanted to buy a kit of flavour wheels to carry around as a pocket reference, and to help me write my food blog. Alas, this did not exist. Some of the graphs I wanted (such as for bread, texture, and others) didn't exist, either! And those graphs are all in a different format, size, and nobody publishes their raw data, only the final wheels (even if they are sometimes admittedly extremely pretty).

I also realized that a wheel might not always be the best form of visualization. They are great if you want to draw radar charts, or can actually rotate them - but while writing, a horizontal graph might work better. And interactively, maybe you'd want something that pops up, unfolds, and is able to connect to other charts which share the flavour?

My "I'm going to spend a few euros on Amazon" turned toward drawing data on a flipchart and looking at JavaScript libraries. I have gone wrong somewhere in life.

# Goals

## Ease of data entry

The actual data format is (mostly) trivial. It is almost always a simple, hierarchical grouping that becomes more specific as you go further down.
To anyone who has had a brush with programming before, that is a pretty simple data model, and YaML is an obvious choice to start with.
As a user or contributor, you will not need to know much. See those really simple plain text lists? That's all you need to be able to write, or just modify.
My goal is to make it very easy to contribute new lists, or translations. You're an expert on picking apart apple flavours? Great! Go ahead and send in your list!

## Multiple visualizations

Based on when and where one wants to use them, different visualizations are useful. From the plain raw text lists to sophisticated pretty wheels or interactive tree maps, or perhaps even a 3D mind map with *all* associations, it should all be possible from the same data.
Regardless of whether you want to print the data, look at it on your desktop, or on your mobile.

## Ease of use

This should not require any software to be installed. It will all start with a simple web page and all code will run directly in your browser. (If anyone ever feels like writing an app, be my guest.)

## Openness

All contributions to this should be open. I want to help build a shared vocabularly, not a hard to contribute to pretty thing you buy somewhere and then are stuck with.
Lists to be accepted into this project will be licensed under Creative Commons Attribution-ShareAlike 4.0.
The visualization code itself will be under the GNU Affero General Public License 3.

# Note

For the technically inclined, be prepared that I will rebase this repository often and hide all the stumbling around I did in my first JavaScript project, and while messing around with layouts of the directories.
This won't look pretty for a while. You have been warned.
