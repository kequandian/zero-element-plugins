module.exports = {
  xname: 'Flexbox',
  props: {
    align: 'start',
    direction: 'row',
  },
  gateway: {
    xname: 'Binding',
    props: {
      binding: {
        imgUrl: 'imgUrl',
        theName: 'theName',
      }
    }
  },
  container: 'PlainList'
}