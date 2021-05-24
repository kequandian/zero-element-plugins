module.exports = {
  xname: 'Flexbox',
  props: {
    align: 'row',
    direction: 'between',
    justify: 'center column'
  },
  children: [{
    presenter: 'BoldTextContent',
    gateway: {
      xname: "Binding",
      props: {
        binding: {
          title: "content"
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