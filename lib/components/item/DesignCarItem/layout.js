module.exports = {
  xname: 'Flexbox',
  props: {
    align: 'start',
    direction: 'between row'
  },
  children: [{
    presenter: 'ContentInfo',
    gateway: {
      xname: "Binding",
      props: {
        binding: {
          logo: 'url',
          title: "title",
          subtitle: "description"
        }
      }
    }
  }, {
    presenter: 'ContentAction',
    gateway: {
      xname: "Binding",
      props: {
        binding: {
          timestamp: "update_time"
        }
      }
    }
  }]
};