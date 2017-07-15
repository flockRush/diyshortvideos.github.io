var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var json_to_files  = require('metalsmith-json-to-files');
var googleAnalytics = require('metalsmith-google-analytics');
var pdf = require('metalsmith-pdf');


Metalsmith(__dirname)
  .metadata({
    title: "The #1 Targeted Social Audience Building App: Flockrush",
    description: "Flockrush is a feature rich strategy-driven app for marketing teams to efficiently build big, targeted social audiences.",
    generator: "Metalsmith",
    url: "http://www.flockrush.com",
    latitude: "43.6437147",
    longitude: "79.4085915",
    type: "website",
    image: "/img/Flockrush-icon-Logo.svg"
  })

  .source('./src')
  .destination('./')
  .clean(false)
  .use(json_to_files({"source_path": "./json/"}))
  .use(markdown())
  .use(permalinks())
//
  .use(headingsidentifier())
//  .use(googleAnalytics('UA-42771649-1'))

  .use(layouts({
    engine: 'handlebars',
    "default": "layout.html",
    "directory": "./layouts/",
    "partials": "./layouts/partials/"
}))
  .build(function(err, files) {
    if (err) { throw err; }
  });
