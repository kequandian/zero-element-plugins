module.exports = {
  xname: 'Flexbox',
  props: {
    align: 'start',
    direction: 'between row'
  },
  children: [{
    presenter: 'ContentText',
    gateway: {
      xname: "Binding",
      props: {
        binding: {
          title: "title",
          subtitle: "description"
        }
      }
    }
  }, {
    presenter: 'ItemImage',
    gateway: {
      xname: "Binding",
      props: {
        binding: {
          logo: 'url'
        }
      }
    }
  }]
};