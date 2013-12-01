/* This file holds all highscore mappings for the games.
 *
 * name: An array of games the structure is valid for.
 * structure: Holds information about the structure of the hi file.
 *   blocks: This basicaly stands for the nr of highscores saved
 *   fields: Holds the information about the fields in order of appereance.
 *     name: The name of the field. Use something descriptive here. This will be
 *           used as header in the higscore tables.
 *     length: The amount of bytes used by this field
 *     format: The format of the field. The according formatter is called when
 *             processing the higscore data. Fields without format are
 *             considered as separators and are not being processed.
 *     settings: Every field may have settings that are needed for processing
 *               the field.
 *       charMap: The character mapping to use for this field.
 *       offset: The character offset
 *       special: The special mapping for characters that are not in the range
 *                of the char map.
 */
gameMaps = [
  {
    name: [
      "1943",
      "1943j",
      "1943u",
      "1943kai",
    ],
    structure: {
      blocks: 5,
      fields: [
        {name: "score", length: 8, format: "bcd"},
        {name: "name", length: 3, format: "fromCharMap", settings: {
            charMap: "numericUpper",
            special: {
              "24": " ",
              "2B": ".",
              "2C": ":",
              "3A": "&",
              "62": "♥",
              "64": "★",
              "66": "!"
            }
          }
        },
        {name: "separator", length: 5}
      ]
    }
  },
  {
    name: [
      "dkong",
      "dkongjo",
      "dkongj",
      "dkongo",
      "dkongjo1",
      "dkongf",
    ],
    structure: {
      blocks: 5,
      fields: [
        {name: "UnusedA", length: 2},
        {name: "Rank", length: 1},
        {name: "UnusedB", length: 4},
        {name: "score", length: 6, format: "bcd"},
        {name: "UnusedC", length: 2},
        {name: "name", length: 3, format: "fromCharMap", settings: {
            charMap: "upper",
            offset: "11",
            special: {
              "2B": ".",
              "2C": ":",
            }
          }
        },
        {name: "UnusedD", length: 11},
        {name: "ShortScore", length: 3},
        {name: "UnusedE", length: 2},
      ]
    }
  },
  {
    name: [
      "elvactr",
      "elcactj",
      "elvact2u",
    ],
    structure: {
      blocks: 10,
      fields: [
        {name: "garbage", length: 1},
        {name: "score", length: 3, format: "hexToDecimal"},
        {name: "comments", length: 4},
        {name: "name", length: 3, format: "ascii"},
        {name: "trash", length: 1},
      ]
    }
  },
  {
    name: [
      "mslug2",
    ],
    structure: {
      blocks: 10,
      fields: [
        {name: "score", length: 4, format: "asIs"},
        {name: "name", length: 3, format: "ascii"},
        {name: "trash", length: 3},
      ]
    }
  },
  {
    name: [
      "mslugx",
    ],
    structure: {
      blocks: 9,
      fields: [
        {name: "score", length: 4, format: "asIs"},
        {name: "name", length: 3, format: "ascii"},
        {name: "trash", length: 1},

      ]
    }
  },
  {
    name: [
      "simpsons",
    ],
    structure: {
      blocks: 10,
      fields: [
        {name: "name", length: 3, format: "fromCharMap", settings:{
            charMap: "upper",
            offset: "41",
            special: {
              "62": "$",
              "60": "@",
              "5F": "&",
              "5C": "_",
              "5B": ".",
              "5D": "?",
              "40": " ",
              "61": "★",
              "5E": "!",
            }
          }
        },
        {name: "score", length: 2, format: "asIs"},
        {name: "trash", length: 3},
      ]
    }
  },
  {
    name: [
      "splatter",
      "splatterj",
      "splattero",
    ],
    structure: {
      blocks: 8,
      fields:[
        {name: "score", length: 4, format: "asIs", settings:{append:"00"},
        {name: "stage", length: 1},
        {name: "name", lenght 3, format "ascii"},
	{name: "trash", lenght: 1},
      ]
    }
  },
];
