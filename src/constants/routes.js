const COMIC = {
  COMIC: {
    href: '/comic/comics',
    route: '/comics',
    url: '/comics',
  },
  COMICS: {
    href: '/comic/comic',
    route: '/comic/:id',
    url: '/comic',
  },
};

module.exports = {
  ...COMIC,
  ...COMICS,
};
