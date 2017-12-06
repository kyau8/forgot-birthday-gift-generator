// OVERVIEW
// User selects a series of answers to questions, to return a suggested gift selection

const gifts = {
    drugstore: [
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'yes',
            relationship: 'partner',
            returnGift: 'a pair of winter gloves',
            giftCopy: "You know that strange land where single, lost gloves go? We don't know where it is either, but you can help keep your partner's hands warm (when you're not holding them) with a pair of backup gloves. Looking for something extra special? Pick up a touch-screen friendly pair!",
            giftImage: 'images/gloves.png'
        },
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'maybe',
            relationship: 'partner',
            returnGift: 'some lip balm',
            giftCopy: "Fight the chap with some fancy-schmancy lip balm! Like any expensive, new-fangled technological device, it's useful, portable, and compact. Feeling extra adventurous? Go for the tint - we could all use more colour in our lives.",
            giftImage: 'images/lipbalm.png'
        },
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'no',
            relationship: 'partner',
            returnGift: 'probiotics',
            giftCopy: 'Things may not be going so smoothly on the outside, but hey, at least everything can be moving smoothly and regularly on the inside, right? Anticipating possible arguments? Maybe pick up some antiacids to neutralize any possible burns.',
            giftImage: 'images/probiotics.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'yes',
            relationship: 'partner',
            returnGift: 'a framed picture of your face',
            giftCopy: "Send them a not-so-subtle reminder that they love you. Even if your personality (or time management skills) are a little lacking, perhaps you can gain some points back with your dashingly-good looks. Alternatively, you could frame something else that they love, if it isn't you. Sometimes it's good for the soul to admit the truth.",
            giftImage: 'images/pictureframe.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'maybe',
            relationship: 'partner',
            returnGift: 'a sleep mask',
            giftCopy: "Let them enjoy some well-deserved rest and relaxation with a sleep mask! And just in case they don't like the gift, it'll probably be beneficial for them not to have to see your face for a few days...",
            giftImage: 'images/sleepmask.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'no',
            relationship: 'partner',
            returnGift: 'a bottle of gummy vitamins',
            giftCopy: "Why buy ordinary candy when you can get the vitamin-packed stuff? Remind your partner that they're sweet as candy but contain so much more! They may have to visit the dentist after, but that's a problem for future them.",
            giftImage: 'images/gummyvitamins.png'
        },
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'yes',
            relationship: 'friend',
            returnGift: 'lotioned triple-ply tissues',
            giftCopy: "They will catch a cold one day and deserve the high-quality, snot-absorbent stuff. Don't let your friend suffer with dry, sandpapery, nostril-destroying tissues! They may not thank you now, but we guarantee they will later. Bonus: Add some cough drops and tea bags for a little 'Cold Emergency Kit'!",
            giftImage: 'images/tissue.png'
        },
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'maybe',
            relationship: 'friend',
            returnGift: 'a heated blanket',
            giftCopy: "Give them an extra excuse to jump straight into nap mode with a warm and snuggly heated blanket. Buying a flimsily-made version? Maybe throw in a fire extinguisher - you never know.",
            giftImage: 'images/heatedblanket.png'
        },
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'no',
            relationship: 'friend',
            returnGift: 'a lottery ticket',
            giftCopy: "It's simple, straightforward, and let's be honest, you really don't have to do much. Since you're not particularly fond of your friend anyways, you may be pleased to know that they probably won't win anyways.",
            giftImage: 'images/lotteryticket.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'yes',
            relationship: 'friend',
            returnGift: 'a mini first aid kit',
            giftCopy: "You know those things we know we should have but always put off buying? Help them level up their #adulting skills with this practical gift, perfect for their apartment or car! Add a cute note about how you always want them to be at their best, high five yourself for being so sweet, and send it on its way!",
            giftImage: 'images/firstaidkit.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'maybe',
            relationship: 'friend',
            returnGift: 'a bottle of sunscreen',
            giftCopy: "It may sound corny, but SPF is SO IMPORTANT. Help protect your friend by getting them some fancy sunscreen for the face (yes, there's a difference between sunscreen for the face and the body). Feeling extra generous? Throw in a beach towel, grab a beach read, and gift them a little 'Fun in the Sun' kit!",
            giftImage: 'images/sunscreen.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'no',
            relationship: 'friend',
            returnGift: 'a bottle of spray eyeglass cleaner',
            giftCopy: "Not the snazziest thing on the market, am I right? But trust us when we emphasize that there's no better feeling than a sparkly clean pair of glasses - it makes you see the world in an uninhibited, unspeckled, way. Go the extra mile with the addition of a fancy microfibre cleaning cloth.",
            giftImage: 'images/spraybottle.png'
        }
    ],
    groceryStore: [
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'yes',
            relationship: 'partner',
            returnGift: 'lots of wine',
            giftCopy: "Did you need a gift generator to tell you this? Grab a couple bottles of wine, and try to whip up some mildly fancy romantic dinner at home. If you're not a good cook, maybe pick up something strong to mask any strange flavours you concoct. If your partner's non-alcoholic, try some fun, bubbly, sparking juice!",
            giftImage: 'images/toomuchwine.png'
        },
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'maybe',
            relationship: 'partner',
            returnGift: 'some fancy salts & aromatic spices',
            giftCopy: "Don't be salty about our suggestion - have you heard of Hawaiian Sea Salt? Fleur de Sel? Lemon Flake Salt? Smoked Salt? Go spice and salt-crazy with a fancy 'Salty Cooking Kit' for your partner! Your food will be delicious for days, and we guarantee it'll hit the salt this thyme.",
            giftImage: 'images/saltspaices.png'
        },
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'no',
            relationship: 'partner',
            returnGift: 'a basket full of junk food',
            giftCopy: "Hear us out. Junk food is nothing to scoff at. Cheezies, gummy bears, twizzlers, and more - the possibilities are endless. Grab some of your partner's favourites and plan for a cozy night full of binging! Feeling adventurous (or evil?). Ahem, you could go down that black licorice route.",
            giftImage: 'images/junkfood.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'yes',
            relationship: 'partner',
            returnGift: 'some cheese, bread, & pears',
            giftCopy: "Remind your partner that you two make the perfect pear by taking them on a romantic picnic lunch! Remember to remind them that your gift giving abilities will only get breader in the years to come.",
            giftImage: 'images/cheese.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'maybe',
            relationship: 'partner',
            returnGift: "an 'Ice Cream Sundae' Kit",
            giftCopy: "Remind your partner of a sweeter, more innocent time with delicious ice cream and some amazing toppings, like crushed nuts, candy, and those dreaded (or loved) maraschino cherries. If they don't like the present, well, the brain freeze from the ice cream might stall them long enough for you to find a quick escape.",
            giftImage: 'images/icecreamsundae.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'no',
            relationship: 'partner',
            returnGift: 'Lemon/Orange',
            giftCopy: "Buy some pretty citrus fruit and add a short note asking your partner not to be sour. Proceed to take the whole 'making lemonade out of lemons' scenario literally - at least you can both quench your thirst in between all the yelling!",
            giftImage: 'images/lemonandorange.png'
        },
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'yes',
            relationship: 'friend',
            returnGift: "a 'Poppity Popcorn Kit'",
            giftCopy: "Grab a couple packs of instant popcorn and various flavourings! You can go sugary, go sea salt and spicy, or go cheesy! The possibilities are endless. Want to go the extra mile? Send along a Netflix subscription, and watch them fall into that popcorn-guzzling, binge-watching hole.",
            giftImage: 'images/popcorn.png'
        },
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'maybe',
            relationship: 'friend',
            returnGift: 'some hot chocolate mix',
            giftCopy: "Keep your relationship warm with some fancy hot chocolate mix and pretty marshmallows! Add a bar of quality chocolate and a little grater (to grate said chocolate). Want to take things up a notch! Bring them to the skating rink first - hot chocolate always tastes better when you're so cold you can't feel the rest of your body.",
            giftImage: 'images/hotchocolate.png'
        },
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'no',
            relationship: 'friend',
            returnGift: 'a pack of toilet paper',
            giftCopy: "You need toilet paper, I need toilet paper, we all need toilet paper. If they're not going to enjoy the present, at least get them something they'll use. Plus, you never know - maybe you're helping them evade some eventual toilet-related emergency?",
            giftImage: 'images/toiletpaper.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'yes',
            relationship: 'friend',
            returnGift: "a 'guilty pleasure' pastry",
            giftCopy: "We're not talking about birthday cake, or cookies, or other sharable snacks for the party. We're talking about that delicious pastry that your friend adores - buy them one (or a dozen), just for them to consume ALL BY THEMSELVES.",
            giftImage: 'images/pastry.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'maybe',
            relationship: 'friend',
            returnGift: "some 'delicious' fruit",
            giftCopy: "Ever heard of durian? It's unforgettable AND spikey, so basically the perfect present for that 'okay' friend. Trying to dig into the fruit will also be a hoot, so you'll have dessert and a show! Not available? Try dragonfruit, persimmons, or pomelo! It's time to go on an adventure.",
            giftImage: 'images/durian.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'no',
            relationship: 'friend',
            returnGift: 'a prepaid credit card or gift card',
            giftCopy: "Yes, we've reached that stage in this gift generator. Grab some rectangular plastic and load that baby up with some moola! Your present will be forgettable and bleh, but at least you'll get no complaints.",
            giftImage: 'images/creditcard.png'
        }
    ],
    noStore: [
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'yes',
            relationship: 'partner',
            returnGift: 'a cozy night in',
            giftCopy: "Light a cozy fire, grab some throws and pillows, string up some lights, and build a snuggly little blanket fort! Settle in for a romantic night with your partner. Snacks are highly encouraged, but work with what you have available. And remember, keep all flammables away from any open flames.",
            giftImage: 'images/fireplace.png'
        },
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'maybe',
            relationship: 'partner',
            returnGift: 'a sock puppet',
            giftCopy: "Let's be honest. Pretty much no one will actually like this gift, but we're banking on the fact that your partner is a kind soul who will appreciate your effort and willingness to humiliate yourself with this ratty old thing. Note: We recommend the use of new, fresh socks for the sake of your hand, and your relationship.",
            giftImage: 'images/sockpuppet.png'
        },
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'no',
            relationship: 'partner',
            returnGift: 'a laundry-free month',
            giftCopy: "Rather than sharing the load, give your partner a break by doing their laundry for a month! It sounds simple but we guarantee they will be very, very grateful. Remember to sort the delicates and use laundry bags for the appropriate items (you don't want to destroy their clothes).",
            giftImage: 'images/laundry.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'maybe',
            relationship: 'partner',
            returnGift: 'some origami fun',
            giftCopy: "Make use of your resources with some origami fun. While we suggest using some pretty, patterned origami paper, we realize that you may have reached that stage in the gift-giving process when you should just use anything you can get your hands on.",
            giftImage: 'images/origami.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'yes',
            relationship: 'partner',
            returnGift: 'a delicious home-cooked meal',
            giftCopy: "Head into the kitchen and whip up something delicious for the two of you to enjoy! Not a great cook? Don't worry about making it too complex, because it's the thought that counts. Take it up a notch by enjoying your meal on your patio or balcony! And don't forget to clean up after the meal.",
            giftImage: 'images/dinner.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'no',
            relationship: 'partner',
            returnGift: 'an old mixed tape',
            giftCopy: "Dig around in your old boxes to find that 'vintage' mixed tape you made years ago. Music is timeless, right? Be sure to go full hipster and buy them a cassette player next year for their birthday, so they might actually have the chance to listen to this tape of yours.",
            giftImage: 'images/cassette.png'
        },
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'yes',
            relationship: 'friend',
            returnGift: 'a handmade card',
            giftCopy: "C'mon, you didn't think this would be easy, did you? Grab your markers, scavenge around for your crayons, and get your hamburger fold on! You may want to throw a few dollars into your card afterwards, for some added pizzazz. Added 'value', you know?",
            giftImage: 'images/birthdaycard.png'
        },
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'maybe',
            relationship: 'friend',
            returnGift: 'mason jar cookie mix',
            giftCopy: "Go back in time to 2014, before the rise of the mason jar salad. Add some baking ingredients (flour, sugar, chocolate chips, etc.) in seemingly measured portions, tie a bow, and BAM! They probably won't ever make the cookies, but at least it looks pretty!",
            giftImage: 'images/masonjar.png'
        },
        {
            season: [
                'winter',
                'fall'
            ],
            relationshipInvestment: 'no',
            relationship: 'friend',
            returnGift: 'a mediocre regifted gift',
            giftCopy: "It's that time of the year when you pull out that 'thing' that you got that is absolutely useless (to you). One person's trash is another person's treasure, right? Put it in a pretty bag and hope that they weren't the one who gifted you that gift in the first place!",
            giftImage: 'images/regift.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'yes',
            relationship: 'friend',
            returnGift: 'a fun day with you',
            giftCopy: "Listen, you're clearly not the most organized person in the world, but the fact that you've wandered your way onto this page shows that your intentions are good. We'll make the assumption that you're a stand-up individual, so why not make use of your natural greatness by planning a great hang-out day with the lucky birthday person?",
            giftImage: 'images/wink.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'maybe',
            relationship: 'friend',
            returnGift: 'your favourite book',
            giftCopy: "Normally, we would encourage you to go out and buy them another copy, but if you're reeeeally crunched for time, you could consider wrapping up your copy. Write a sweet anecdote about why you love the book (and explaining the state that it's in), and then remind yourself to replenish your own shelf. Up your game by gifting a DIY bookmark.",
            giftImage: 'images/book.png'
        },
        {
            season: [
                'spring',
                'summer'
            ],
            relationshipInvestment: 'no',
            relationship: 'friend',
            returnGift: '...wait what?',
            giftCopy: "Listen, if you really don't care about this person, then why are you getting them a present anyways? It's ok to not be friends with everyone. Save your money and time by investing into relationships that you want to be in, and you may find that the gift-giving process can be a lot more enjoyable when you actually care. That said, we don't want to leave you hanging, so just grab a plant or a spare box of cookies lying around your apartment and gift them that.",
            giftImage: 'images/neutral.png'
        },
    ]
};

$(function() {
    // Listen for the form submission
    $('form').on('submit', function(e) {
        e.preventDefault();
        // Hide the form whem submit is clicked
        $('form').css('display', 'none');
        $('.mainHeader').css('display','none');
        $('.about').css('display','none');
        $('.results').css('display', 'block');
        // Find out which option in question one was checked. Store this value for later
        const userStore = $('input[name=retailOutlet]:checked').val();
        const userSeason = $('input[name=season]:checked').val();
        const userRelationship = $('input[name=relationshipInvestment]:checked').val();
        const userRelation = $('input[name=relationship]:checked').val();
        // Use a for loop to run through the giftArray. Use an if statement to check to see which values match, and return the value in the 'returnGift' key value pair back to the user.
        const giftArray = gifts[userStore];
        let relationArray = [];
        var giftWinner = [];
        // Use a for loop to run through giftArray, to select an object based on the retail store selected. This would narrow the selections down to two objects. Push these two objects into the relationArray.
        for (let i = 0; i <= giftArray.length - 1; i = i + 1) {
            if (giftArray[i]['relationshipInvestment'] === userRelationship && giftArray[i]['relationship'] === userRelation) {
                relationArray.push(giftArray[i]);
            }
        }
        // Using the season selected by the user, loop through the season property in the objects in the relationArray to find the right match. Save that object into the giftWinner array
        for (let n = 0; n <= relationArray.length - 1; n = n + 1) {
            for (let a = 0; a <= relationArray[n]['season'].length - 1; a = a + 1) {
                let seasonOption = relationArray[n]['season'][a];
                if (seasonOption === userSeason) {
                    giftWinner.push(relationArray[n]);
                }
            }
        }
        // Print the correct responses and image to the page
        $('.giftResponse').html(`You should get them <br/>${giftWinner[0].returnGift}`);
        $('.resultsCopy').html(`<p>${giftWinner[0].giftCopy}</p>`);
        const image = $('<img>').attr('src', giftWinner[0].giftImage);
        $('.resultsContents').html(image);
    });

    // Display the form when the 'Return to Quiz' button is clicked
    $('returnButton').on('click', function(e){
        $('.results').css('display', 'none');
    });

});




