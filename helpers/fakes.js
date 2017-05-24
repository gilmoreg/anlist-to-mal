module.exports = {
  malXML: '<?xml version="1.0" encoding="utf-8"?><anime><entry><id>269</id></entry></anime>',

  malSearchResponse: {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
    },
    body: '<?xml version="1.0" encoding="utf-8"?><anime><entry><id>269</id></entry></anime>',
    sendAsJson: false,
  },

  malAddSuccess1: {
    message: 'The anime (id: 0) is already in the list.',
    title: 'test',
  },

  malAddSuccess2: {
    message: 'Created',
    title: 'test',
  },

  malAddFail: {
    message: 'Invalid ID',
    title: 'test',
  },

  aniList: {
    episodes_watched: 0,
    list_status: 'plan to watch',
    score: 0,
    priority: 0,
    notes: '',
    title: 'test',
  },

};