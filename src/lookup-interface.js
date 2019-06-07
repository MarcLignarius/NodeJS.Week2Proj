import { DoctorLookup } from './doctor-lookup.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#doctorSearch').submit(function(event) {
    event.preventDefault();
    $('#showDoctors').text("");
    let name = $('#name').val();
    let healthIssue = $('#healthIssue').val();
    $('#name').val("");
    $('#healthIssue').val("");
    let doctorLookup = new doctorLookup;
    let promise = doctorLookup.findDoctor(name, healthIssue);
    promise.then(function(response) {
      let body = JSON.parse(response);
      if (body.length === 0)
      {
        $('#showDoctors').text(`Your search did not return any results. Please try another search.`)
      } else {
        // body.forEach(function(doctor) {
        //   $('#showDoctors').append(`<strong>${doctor.name}</strong><br> ${doctor.street}<br>${doctor.city}, ${doctor.state}, ${doctor.postal_code}<br> ${doctor.phone}<br> <a href='${doctor.website_url}'>${doctor.website_url}</a><hr>`)
        // }, function(error) {
        //   $('#showError').text(`There was an error processing your request: ${error.message}`);
        })
      }
    })
  })
});
