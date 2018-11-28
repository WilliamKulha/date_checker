import {convertDay} from './../src/module.js'; 
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(function() {
  $('#user-input')
    .submit(function(event) {
      event.preventDefault();
      let userDate = new Date($('#user-date').val());
      let converted = convertDay(userDate.getDay());
      $('#results').show();
      $('#the-form').hide();
      $('.user-input-date-here').text($('#user-date').val());
      $('.user-input-weekday').text(converted);
    });
});
