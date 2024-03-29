module.export = {
  xname: 'Flexbox',
  props: {
    align: 'start',
    direction: 'row'
  },
  gateway: {
    xname: 'Binding',
    binding: {
      url: 'imgUrl'
    }
  },
  cart: {
    xname: "HoverShadowCart",
    props: {
      padding: '16px'
    }
  },
  container: 'PlainList'
};