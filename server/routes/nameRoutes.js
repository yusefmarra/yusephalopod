const firstNames = ['Carnivore', 'Cabbage Boy', 'Staind', 'Crumbley', 'Bubba', 'Shoon', 'Saggy Ron', 'Snuffy',
  'Jiggly', 'Squirrel', 'Fidget', 'Mister', 'LaCroix', 'Lil', 'Yankee', 'PAW', 'Chapped',
  'Trumpet Man', 'Tayne', 'Scampi', 'Pace Picante', 'Yung', 'Yusef', 'Wiggle Worm', 'Senior',
  'Bizzare', 'Lisa Lefteye', 'T Boz', 'Dr Pepper', 'Elvis', 'Antalope Greg', 'Aloy',
  'Uncle', 'Charzard', 'Squirtle', 'Magikarp', 'Blastoise', 'Pikachu', 'Kentucky', 'Colonel Forbin',
  'Evil King', 'Good King', 'Hey', 'Boogie', 'Crunchwrap', 'Slim Jim',
  'Beef Supreme', 'Tofu', 'Big Ol', 'Royku', 'Pandy', 'Doctor', 'Cheesy Gordita', 'Tupac',
  'Colonel Mustard', 'Null', 'Literally', 'Tonsil', 'Cinderella', 'Spicy', 'undefined',
  'Scrapegoat', 'NaN', 'Soft', 'Skeletor', 'Cher', 'Hansome', 'Damp', 'Kitty Kat', 'Tapdancing Boar',
  'Mastadonald', 'Slop', 'Cheddar Mayor', 'Giggles', 'Thor', 'Big Dog', 'Mistery McDaviss', 'Hog'];
const lastNames = ['Cheeseblast', 'Brisketwife', 'Bungletron', 'Cheesebun', 'Spanghetti', 'Spoob', 'Bubbletup',
  'Boontooth', 'Garglebarge', 'Spinner', 'Orange', 'Pamplemousse', 'Syrrup', 'Daddee', 'Klampskine',
  'Splunt', 'Blurtwine', 'Horse Stomp', 'Bornready', 'Nickelback', 'Moonbisket', 'Goosepimple',
  'Taquito', 'Great Dane', 'Mappy Jack', 'Shoonburger', 'Pokeball', 'Modern Thai', 'Swiffer',
  'Mungletoob', 'CraveBurger', 'Chalupa', 'Oopsie', 'Fudgesickle', 'Robotussin', 'Error',
  'Abuelito', 'Labrador', 'Taffy Accident', 'Beardsoup', 'Baktat', 'Oat Meel', 'Burrito',
  'Porkmusk', 'Saint Bernard', 'Mastadon Friend', 'Ticklefoot', 'Spaghetti Factory', 'Cringleslacks',
  'Beeflog', 'Bingletooth', 'Scrumkitty', 'Burgersludge', 'Bloonsocks', 'Long Pants', 'Tuckingsworth',
  'Foam Horse', 'BEEEF HURRIIICANNNE'];

module.exports = app => {
  app.get('/api/name', (req, res) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    res.send({firstName, lastName});
  })
}