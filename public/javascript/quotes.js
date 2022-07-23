const quoteData = [
  {
    q: `An upcoming vacation gives us something to eagerly anticipate.`,
    a: `Jaime Kurtz`,
  },
  {
    q: `On vacation, I totally unplug. I don’t bring a laptop with me.`,
    a: `Will Wright`,
  },
  {
    q: `Read a lot when you’re on vacation, but nothing that has to do with your business.`,
    a: `H. Jackson Brown, Jr`,
  },
  {
    q: `A vacation spot out of season always has a very special magic.`,
    a: `Max von Sydow`,
  },
  { q: `Travel brings power and love back into your life.`, a: `Rumi` },
  {
    q: `No man needs a vacation so much as the man who has just had one.`,
    a: `Elbert Hubbard`,
  },
  {
    q: `After a while, just staying alive becomes a full-time job. No wonder we need a vacation.`,
    a: `Michael Zadoorian`,
  },
  {
    q: `Life’s short. Eat dessert first, work less and vacation MORE!!`,
    a: `Lea Mishell`,
  },
  {
    q: `Neglecting vacation is neglecting success because every success needs an accumulated positive energy!`,
    a: `Mehmet Murat ildan`,
  },
  {
    q: `No matter what happens, travel gives you a story to tell.`,
    a: `Jewish Proverb`,
  },
  {
    q: `Each person deserves a day away in which no problems are confronted, no solutions searched for. Each of us needs to withdraw from the cares which will not withdraw from us.`,
    a: `Maya Angelou`,
  },
  {
    q: `The vacation we often need is freedom from our own mind.`,
    a: `Jack Adam Weber`,
  },
  {
    q: `A vacation helps to relieve stress and boredom, gives us a change of scenery, provides us with adventure, and helps to bring us closer to the people in our lives.`,
    a: `E. S. Woods`,
  },
  {
    q: `When people went on vacation, they shed their home skins, thought they could be a new person.`,
    a: `Aimee Friedman`,
  },
  {
    q: `The world is a book, and those who don’t travel only read one page.`,
    a: `Augustine of Hippo`,
  },
  {
    q: `Travelling unveils new dimensions of this world not known to the naked eye.`,
    a: `Wayne Chirisa`,
  },
  {
    q: `Take a vacation from your stressful thoughts by changing your thoughts.`,
    a: `Debasish Mridha`,
  },
  {
    q: `No one wants to die with vacation time on the books.`,
    a: `Andrea Goeglein`,
  },
  {
    q: `Vacation is that time when you wish you had something to do while doing nothing.`,
    a: `Frank Tyger`,
  },
  {
    q: `Isn’t it amazing how much stuff we get done the day before vacation?`,
    a: `Zig Ziglar`,
  },
  {
    q: `My best vacation is somewhere I could hide, somewhere warm and not a lot of people around.`,
    a: `Derek Jeter`,
  },
  {
    q: `A vacation is having nothing to do and all day to do it in.`,
    a: `Robert Orben`,
  },
  {
    q: `In matters of healing the body or the mind, vacation is a true genius!`,
    a: `Mehmet Murat ildan`,
  },
  { q: `The journey itself is my home.`, a: `Matsuo Basho` },
  {
    q: `Don’t wait for a vacation to enjoy life. Start to enjoy it now, today, wherever you are.`,
    a: `Debasish Mridha`,
  },
  { q: `A wise man travels to discover himself.`, a: `James Russell Lowell` },
  {
    q: `We need to develop a ‘vacation attitude’ every day by being focused on what we need to accomplish by the end of each day.`,
    a: `Catherine Pulsifer`,
  },
  {
    q: `When you go on vacation with people, you learn a lot about them.`,
    a: `Sarah Mlynowski`,
  },
  {
    q: `One of the biggest challenges about going on vacation is planning the trip.`,
    a: `Paul Brodie`,
  },
  {
    q: `A good vacation is over when you begin to yearn for your work.`,
    a: `Morris Fishbein`,
  },
  { q: `Here’s to a vacation of no regrets!`, a: `Joan Rylen` },
  {
    q: `Reaching the top requires taking a good break every time you need it! On the way up, you must never hesitate to stop for a while!`,
    a: `Mehmet Murat ildan`,
  },
  { q: `When all else fails, take a vacation.`, a: `Betty Williams` },
  {
    q: `All that is gold does not glitter. Not all those who wander are lost.`,
    a: `J.R.R. Tolkien`,
  },
  {
    q: `A vacation is what you take when you can no longer take what you’ve been taking.`,
    a: `Earl Wilson`,
  },
  {
    q: `The average vacation is one-tenth playing—nine-tenths paying.`,
    a: `Arnold Glasow`,
  },
  {
    q: `Enjoy the vacation without going; enjoy the conversation without talking.`,
    a: `Debasish Mridha`,
  },
  { q: `Extend your vacation whenever possible.`, a: `A.D. Posey` },
  {
    q: `The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.`,
    a: `Marcel Proust`,
  },
  {
    q: `Happiness consists of living each day as if it were the first day of your honeymoon and the last day of your vacation.`,
    a: `Leo Tolstoy`,
  },
  {
    q: `Every man who possibly can should force himself to a holiday of a full month in a year, whether he feels like taking it or not.`,
    a: `William James`,
  },
  {
    q: `The only time that love takes a holiday is when we go on vacation together.`,
    a: `Anthony T.Hincks`,
  },
  {
    q: `Travel and change of place impart new vigor to the mind.`,
    a: `Seneca`,
  },
  {
    q: `Vacations mean a change of pace, a gentleness with ourselves, a time of rest and renewal, and a time to stretch ourselves and encounter new people, new lands, new ways, and new options.`,
    a: `Anne Wilson Schaef`,
  },
  {
    q: `My favorite place to vacation is anyplace by the ocean.`,
    a: `Nina Arianda`,
  },
  {
    q: `Don’t feel guilty about vacationing. What are you truly living and working for anyways? Death is all too real.`,
    a: `Richie Norton`,
  },
  {
    q: `The paradox of relaxation is the renewal of mind; rekindle of spirit and revitalize of strength.`,
    a: `Lailah Gifty Akita`,
  },
  {
    q: `Once the travel bug bites there is no known antidote, and I know that I shall be happily infected until the end of my life.`,
    a: `Michael Palin`,
  },
  {
    q: `If you think adventure is dangerous, try routine; it is lethal`,
    a: `Paulo Coelho`,
  },
  { q: `If I’m going on vacation, I just work ahead.`, a: `Mort Walker` },
  {
    q: `Travelling in the company of those we love is home in motion`,
    a: `Leigh Hunt`,
  },
  {
    q: `As soon as I saw you, I knew an adventure was about to happen.`,
    a: `A. A. Milne, Winnie the Pooh`,
  },
  { q: `To travel is to live.`, a: `Hans Christian Anderson` },
  {
    q: `The world is a book and those who do not travel read only one page.`,
    a: `St. Augustine`,
  },
  {
    q: `We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.`,
    a: `Jawaharial Nehru`,
  },
  {
    q: `People do not decide to become extraordinary. They decide to accomplish extraordinary things.`,
    a: `Edmund Hillary`,
  },
  {
    q: `Travelling – it leaves you speechless, then turns you into a storyteller.`,
    a: `Ibn Battuta`,
  },
  { q: `People don’t take trips; trips take people.`, a: `John Steinbeck` },
  {
    q: `Taking a vacation can actually increase the likelihood of getting a raise or a promotion.`,
    a: `Shawn Achor`,
  },
  {
    q: `Only the traveling is good which reveals to me the value of home and enables me to enjoy it better.`,
    a: `Henry David Thoreau`,
  },
  { q: `When in doubt, go on vacation!`, a: `Unknown` },
  {
    q: `I would like to spend my whole life traveling, if I could borrow another life to spend at home.`,
    a: `William Hazlitt`,
  },
  {
    q: `The gladdest moments in human life, methinks, is a departure into unknown lands.`,
    a: `Sir Richard Burton`,
  },
  { q: `Wherever you go becomes a part of you somehow.`, a: `Anita Desai` },
  {
    q: `Life is either a daring adventure, or nothing at all.`,
    a: `Helen Keller`,
  },
  {
    q: `We wander for distraction, but we travel for fulfilment.`,
    a: `Hilaire Belloc`,
  },
  {
    q: `A travel adventure has no substitute. It is the ultimate experience, your one big opportunity for flair.`,
    a: `Rosalind Massow`,
  },
  {
    q: `If we were meant to stay in one place, we’d have roots instead of feet.`,
    a: `Rachel Wolchin`,
  },
  {
    q: `To get away from one’s working environment is, in a sense, to get away from one’s self; and this is often the chief advantage of travel and change.`,
    a: `Charles Horton Cooley`,
  },
  {
    q: `Jobs fill your pocket, but adventures fill your soul.`,
    a: `Jamie Lyn Beatty Thi`,
  },
  { q: `Life is meant for good friends and great adventures.`, a: `Anonymous` },
  {
    q: `Do you really want to look back on your life and see how wonderful it could have been had you not been afraid to live it?`,
    a: `Caroline Myss`,
  },
  {
    q: `Investment in travel is an investment in yourself.`,
    a: `Matthew Karsten`,
  },
  { q: `Take only memories, leave only footprints.`, a: `Chief Seattle` },
  {
    q: `If you have lost your clarity and purpose, a vacation is a great way to find it again.`,
    a: `David Fuller`,
  },
  {
    q: `For my part, I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move.`,
    a: `Robert Louis Stevenson`,
  },
  { q: `A vacation is necessary.`, a: `Unknown` },
  {
    q: `I travel because it makes me realize how much I haven’t seen, how much I’m not going to see, and how much I still need to see.`,
    a: `Carew Papritz`,
  },
  {
    q: `A one day holiday can at times be better than a one-week vacation if you totally unplug for that one day!`,
    a: `Catherine Pulsifer`,
  },
  {
    q: `One’s destination is never a place, but a new way of seeing things.`,
    a: `Henry Miller`,
  },
  {
    q: `Once a year, go somewhere you have never been before.`,
    a: `Dalai Lama`,
  },
  {
    q: `Because in the end, you won’t remember the time you spent working in the office or mowing your lawn. Climb that goddamn mountain.`,
    a: `Jack Kerouac`,
  },
  {
    q: `I love places that make you realize how tiny you and your problems are.`,
    a: `Anonymous`,
  },
  {
    q: `As you grow older, you learn a few things. One of them is to actually take the time you’ve allotted for vacation.`,
    a: `John Battelle`,
  },
  {
    q: `It isn’t how much time you spend somewhere that makes it memorable: it’s how you spend the time.`,
    a: `David Brenner`,
  },
  { q: `Adventure is worthwhile.`, a: `Aesop` },
  {
    q: `Few vacations are as gratifying as those devoted to personal growth.`,
    a: `Pat Koch Thaler`,
  },
  {
    q: `The time to relax is when you don’t have time for it.`,
    a: `Sydney J. Harris`,
  },
  { q: `Vacations are necessities, not luxuries.`, a: `Linda Bloom` },
  {
    q: `Travel not to find yourself but to remember who you’ve been all along.`,
    a: `Anonymous`,
  },
  {
    q: `He who returns from a journey is not the same as he who left.`,
    a: `Chinese Proverb`,
  },
  {
    q: `After all, the best part of a holiday is perhaps not so much to be resting yourself, as to see all the other fellows busy working.`,
    a: `Kenneth Grahame`,
  },
  {
    q: `There can’t possibly be anything more beautiful than Seaside Beach at sunset.`,
    a: `Bryn McCarren`,
  },
  {
    q: `If you live where you want to go on vacation, you will always be on vacation.`,
    a: `Matt Fox`,
  },
  {
    q: `Resurrection, rebirth, reincarnation, resprout, revive! All these words can be summarised only in one word: Vacation!`,
    a: `Mehmet Murat ildan`,
  },
  {
    q: `What paradise and vacation have in common is that you have to pay for both, and the coin is your previous life.`,
    a: `Joseph Brodsky`,
  },
  { q: `Every travel is a blessed adventure.`, a: `Lailah Gifty Akita` },
  {
    q: `A vacation is three times more work without the payment.`,
    a: `Debasish Mridha`,
  },
  {
    q: `Vacation time is something we all accrue, but only the wisest of us recognize its importance.`,
    a: `Andrea Goeglein`,
  },
  {
    q: `After all, the function of a vacation is regenerative, not luxurious. It’s to restore our equipment so that we can live our ordinary lives better.`,
    a: `Malcolm Bradbury`,
  },
  {
    q: `In order for a holiday to be a great holiday, it must somehow involve water-related activity, because water is a magician who relaxes our soul and body!`,
    a: `Mehmet Murat ildan`,
  },
  {
    q: `I think people need hope when times are tough. I think they also need escape and adventure and fantasy. Books are like cheap mini vacations.`,
    a: `Michelle M. Pillow`,
  },
  {
    q: `Seven a.m. on the first day of summer vacation was, to her mind, a dangerous time to be awake. Even God had to be sleeping in.`,
    a: `Victoria Kahler`,
  },
  {
    q: `Today was about chasing sun-rays, beach waves, & sunsets. All things beautiful that give you peace are worth chasing. Everything else isn’t.`,
    a: `April Mae Monterrosa`,
  },
  { q: `In every voyage, be fully present.`, a: `Lailah Gifty Akita` },
  {
    q: `To reach the goals of your life, you need discipline, you need luck and you need something as important as these two: Vacations!`,
    a: `Mehmet Murat ildan`,
  },
  {
    q: `A little piece of everywhere I go becomes a big part of everything I do.`,
    a: `Richie Norton`,
  },
  {
    q: `How you feel about home after holiday says a lot about home.`,
    a: `Joyce Rachelle`,
  },
  {
    q: `If you live where you want to go on vacation, you will always be on vacation.`,
    a: `Matt Fox`,
  },
  { q: `Find the exotic where you are.`, a: `Adrienne Posey` },
];

function pickQuote() {
  //get a random number to pick one of the quotes
  let c = Math.floor(Math.random() * 109);
  document.getElementById("quoteArea").textContent = quoteData[c].q;
  document.getElementById("quoteAuthor").textContent = quoteData[c].a;
}

pickQuote();

////////////////////////////
