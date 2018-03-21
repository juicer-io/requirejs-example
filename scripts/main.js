require.config({
    paths: {
      'juicer': 'https://assets.juicer.io/embed-amd',
      'jquery': 'jquery',
      'slick': 'slick',
      'backbone': 'backbone',
      'underscore': 'underscore',
      'images-loaded': 'images-loaded',
      'backbone-associations': 'backbone-associations-min'
    },
    shim: {
      'jquery': {
        'exports': 'jQuery'
      },
      'slick': {
        'deps': ['jquery']
      },
      'backbone': {
        'deps': ['jquery', 'underscore'],
        'exports': 'Backbone'
      },
      'backbone-associations': {
        'deps': ['backbone'],
        'exports': 'AssociatedModel'
      },
      'underscore': {
        'exports': '_'
      },
      'images-loaded': {
        'deps': ['jquery'],
        'exports': 'imagesLoaded'
      },
      'juicer': {
        'exports': 'Juicer',
        'deps': ['jquery', 'underscore', 'backbone', 'backbone-associations', 'slick', 'images-loaded']
      }
    }
});

requirejs(['juicer'], function() {
  Juicer.initialize()
});
