export function seedDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* Series
    ============================================ */
  // Documentaries
  // firebase.firestore().collection("series").add({
  //   id: getUUID(),
  //   title: "Tiger King",
  //   description:
  //     "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
  //   genre: "documentaries",
  //   maturity: "18",
  //   urlyt: "https://layarkacaxxi.icu/v/l-pg1unw8xqz7lm",
  //   urlpoto:
  //     "https://cdn-2.tstatic.net/sultra/foto/bank/images/norman-nordstrom-phoenix-dalam-film-dont-breathe-2-buta-sinopsis-lengkap.jpg",
  //   slug: "tiger-king",
  // });

  // // Comedies
  // firebase.firestore().collection("series").add({
  //   id: getUUID(),
  //   title: "The Office",
  //   description:
  //     "A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.",
  //   genre: "comedies",
  //   maturity: "15",
  //   urlyt: "https://layarkacaxxi.icu/v/l-pg1unw8xqz7lm",
  //   urlpoto:
  //     "https://cdn-2.tstatic.net/sultra/foto/bank/images/norman-nordstrom-phoenix-dalam-film-dont-breathe-2-buta-sinopsis-lengkap.jpg",
  //   slug: "the-office",
  // });

  // // Children
  // firebase.firestore().collection("series").add({
  //   id: getUUID(),
  //   title: "Peppa Pig",
  //   description:
  //     "Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with her family and friends.",
  //   genre: "children",
  //   maturity: "0",
  //   urlyt: "https://layarkacaxxi.icu/v/l-pg1unw8xqz7lm",
  //   urlpoto:
  //     "https://cdn-2.tstatic.net/sultra/foto/bank/images/norman-nordstrom-phoenix-dalam-film-dont-breathe-2-buta-sinopsis-lengkap.jpg",
  //   slug: "peppa-pig",
  // });
  // firebase.firestore().collection("series").add({
  //   id: getUUID(),
  //   title: "Dora The Explorer",
  //   description:
  //     "Dora, a seven-year-old girl of Latin American descent, embarks upon numerous adventures in the wilderness with her friend Boots, a monkey, and a variety of fun and useful tools.",
  //   genre: "children",
  //   maturity: "0",
  //   urlyt: "https://layarkacaxxi.icu/v/l-pg1unw8xqz7lm",
  //   urlpoto:
  //     "https://cdn-2.tstatic.net/sultra/foto/bank/images/norman-nordstrom-phoenix-dalam-film-dont-breathe-2-buta-sinopsis-lengkap.jpg",
  //   slug: "dora-the-explorer",
  // });
  // // Crime
  // firebase.firestore().collection("series").add({
  //   id: getUUID(),
  //   title: "Making a Murderer",
  //   description:
  //     "Exonerated after spending nearly two decades in prison for a crime he did not commit, Steven Avery filed suit against Manitowoc County, Wis., and several individuals involved with his arrest.",
  //   genre: "crime",
  //   maturity: "18",
  //   urlyt: "https://layarkacaxxi.icu/v/l-pg1unw8xqz7lm",
  //   urlpoto:
  //     "https://cdn-2.tstatic.net/sultra/foto/bank/images/norman-nordstrom-phoenix-dalam-film-dont-breathe-2-buta-sinopsis-lengkap.jpg",
  //   slug: "making-a-murderer",
  // });

  // // Feel-good
  // firebase.firestore().collection("series").add({
  //   id: getUUID(),
  //   title: "Good Will Hunting",
  //   description:
  //     "Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.",
  //   genre: "feel-good",
  //   maturity: "12",
  //   urlyt: "https://layarkacaxxi.icu/v/l-pg1unw8xqz7lm",
  //   urlpoto:
  //     "https://cdn-2.tstatic.net/sultra/foto/bank/images/norman-nordstrom-phoenix-dalam-film-dont-breathe-2-buta-sinopsis-lengkap.jpg",
  //   slug: "good-will-hunting",
  // });

  // /* Films
  //   ============================================ */
  // // Drama
  // firebase.firestore().collection("films").add({
  //   id: getUUID(),
  //   title: "The Prestige",
  //   description:
  //     "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.",
  //   genre: "drama",
  //   maturity: "15",
  //   urlyt: "https://layarkacaxxi.icu/v/l-pg1unw8xqz7lm",
  //   urlpoto:
  //     "https://cdn-2.tstatic.net/sultra/foto/bank/images/norman-nordstrom-phoenix-dalam-film-dont-breathe-2-buta-sinopsis-lengkap.jpg",
  //   slug: "the-prestige",
  // });

  // // Suspense
  // firebase.firestore().collection("films").add({
  //   id: getUUID(),
  //   title: "Shutter Island",
  //   description:
  //     "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
  //   genre: "suspense",
  //   maturity: "15",
  //   urlyt: "https://layarkacaxxi.icu/v/l-pg1unw8xqz7lm",
  //   urlpoto:
  //     "https://cdn-2.tstatic.net/sultra/foto/bank/images/norman-nordstrom-phoenix-dalam-film-dont-breathe-2-buta-sinopsis-lengkap.jpg",
  //   slug: "shutter-island",
  // });

  // // Children
  // firebase.firestore().collection("films").add({
  //   id: getUUID(),
  //   title: "Hotel Transylvania",
  //   description:
  //     "Dracula, who owns a high-end resort for monsters, attempts to keep his daughter from falling in love with Jonathan, a human.",
  //   genre: "children",
  //   maturity: "0",
  //   urlyt: "https://layarkacaxxi.icu/v/l-pg1unw8xqz7lm",
  //   urlpoto:
  //     "https://cdn-2.tstatic.net/sultra/foto/bank/images/norman-nordstrom-phoenix-dalam-film-dont-breathe-2-buta-sinopsis-lengkap.jpg",
  //   slug: "hotel-transylvania",
  // });

  // Thriller
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Dont Breahte",
    description:
      "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.",
    genre: "thriller",
    maturity: "15",
    urlyt: "https://layarkacaxxi.icu/v/l-pg1unw8xqz7lm",
    urlpoto:
      "https://cdn-2.tstatic.net/sultra/foto/bank/images/norman-nordstrom-phoenix-dalam-film-dont-breathe-2-buta-sinopsis-lengkap.jpg",
    slug: "joker",
  });

  // Romance
  // firebase.firestore().collection("films").add({
  //   id: getUUID(),
  //   title: "A Star Is Born",
  //   description:
  //     "After falling in love with struggling artist Ally, Jackson, a musician, coaxes her to follow her dreams, while he battles with alcoholism and his personal demons.",
  //   genre: "romance",
  //   maturity: "15",
  //   urlyt: "https://layarkacaxxi.icu/v/l-pg1unw8xqz7lm",
  //   urlpoto:
  //     "https://cdn-2.tstatic.net/sultra/foto/bank/images/norman-nordstrom-phoenix-dalam-film-dont-breathe-2-buta-sinopsis-lengkap.jpg",
  //   slug: "a-star-is-born",
  // });
}
