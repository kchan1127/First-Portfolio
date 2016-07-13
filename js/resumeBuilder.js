/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*
var name = "Kevin Chan";

//var age = 23;

//console.log(firstName);

//var email = "kevchan@yahoo.com";
//var newEmail = email.replace("yahoo","gmail");
//console.log(newEmail, email);

var formattedName = HTMLheaderName.replace(
  "%data%", name);
$("#header").append(formattedName);

var role = "Web Developer";
var formatRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formatRole);

var contacts = [415-314-1699,"programming"];
var contact = HTMLcontactGeneric.replace("%data%", contacts)
$("#topContacts").append(contacts[0]);
*/
var bio = {
  "name" : "Kevin Chan",
  "role" : "Software Developer",
  "contacts":{
    "mobile" : "415-314-1699",
    "email"  : "kevchan@ucdavis.edu",
    "github" : "kchan1127",
    "location": "San Francsico"
  },
  "welcomeMessage": "New grad looking for a opportunity to learn and grow in the industry!",
  "skills":["HTML", "CSS","JavaScript", "Java"],
"biopic": "images/me.jpg"
};

var education = {
  "schools" : [
  {
    "name": "UC Davis",
    "location": "Davis, CA",
    "degree": "BS",
    "majors": "Computer Science",
    "url":"http://http://www.cs.ucdavis.edu/",
    "dates":"9/2013 - 6/2016"
  }],
  "onlineCourses": [
    {
      "title": "Front End developer",
      "school": "Udacity",
      "date": "6/2016 - 7/2016",
      "url": "https://www.udacity.com"
    }]
};

var work = {
  "jobs":[
    {
      "employer": "CS4Kids",
      "title": "Volunteer Teacher Assistant",
      "location": "Woodland, CA",
      "dates": "1/2016 - 4/2016",
      "description": "Assisted kids in CodeCombat and ScratchMIT."
    }
  ]
};

var projects = {
  "projects":[
    {
      "title": "Portfolio Website",
      "dates": "7/2016 - 8/2016",
      "description": "Developed a website to showcase my talents/skills."
    }
  ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedMessage);

    var mobile;
    var email;
    var github;
    var location;
    for (var contact in bio.contacts){
         formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
         formattedEmail  = HTMLemail.replace("%data%", bio.contacts.email);
         formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
         //formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
         formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
     }
     $("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
     $("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);

     if(bio.skills.length > 0){
       $("#header").append(HTMLskillsStart);
       for(i in bio.skills){
         $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
       }
     }
}
bio.display();

work.display = function(){
  $("#workExperience").append(HTMLworkStart);

  work.jobs.forEach(function(job){
    var formattedEmp = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedDate = HTMLworkDates.replace("%data%", job.dates);
    var formattedDesc = HTMLworkDescription.replace("%data%", job.description);
    var formatworkLoc = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry").append(formattedEmp + formattedTitle);
    $(".work-entry").append(formattedDate);
    $(".work-entry").append(formatworkLoc);
    $(".work-entry").append(formattedDesc);
  })
};
work.display();

projects.display = function(){
  $("#projects").append(HTMLprojectStart);
  projects.projects.forEach(function(project){
    var formprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formprojectDate = HTMLprojectDates.replace("%data%", project.dates);
    var formprojectDesc = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry").append(formprojectTitle);
    $(".project-entry").append(formprojectDate);
    $(".project-entry").append(formprojectDesc);

    //for(var i=0; i < project.images.length; i++){
      //var formprojectImage = HTMLprojectImage.replace("%data%", project.images[i]);
      //$(".project-entry:last").append(formprojectImage);
    //}
  });
}
projects.display();

education.display = function(){
  $("#education").append(HTMLschoolStart);
    // for (var school in education.schools){
  education.schools.forEach(function(school){
      var formatschoolName = HTMLschoolName.replace("%data%", school.name);
      var formatschooldeg = HTMLschoolDegree.replace("%data%", school.degree);
      var formatschoolmajor = HTMLschoolMajor.replace("%data%", school.majors);
      var formatschooldates = HTMLschoolDates.replace("%data%", school.dates);
      var formatschoolLoc = HTMLschoolLocation.replace("%data%", school.location);
      var formatschholurl = HTMLonlineURL.replace("%data%", school.url);
      $(".education-entry").append(formatschoolName);
      $(".education-entry").append(formatschooldates);
      $(".education-entry").append(formatschoolmajor);
      $(".education-entry").append(formatschoolLoc);
  })
};
education.display();

education.displayonlinecourse = function(){
  $("#education:last").append(HTMLonlineClasses);
  $("#education:last").append(HTMLschoolStart);
    // for (var onlineCourse in education.onlineCourses){
  for (var i=0; i < education.onlineCourses.length; i++){
      var formatonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
      var formatonlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      var formatonlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
      var formatonlineurl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
      $(".education-entry:last").append(formatonlineTitle + formatonlineschool);
      $(".education-entry:last").append(formatonlinedates);
      $(".education-entry:last").append(formatonlineurl);
  }
};
education.displayonlinecourse();

$("#mapDiv").append(googleMap);
