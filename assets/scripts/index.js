'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
  $("#save_change").on("click", () => {
    const input = $('#exampleInputEmail1').val();
    console.log(input);
  });
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');
