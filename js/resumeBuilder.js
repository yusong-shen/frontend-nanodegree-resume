/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
    "jobs":  [
        {
            "employer": "International Bank",
            "title": "Unix engineer",
            "location": "London, UK",
            "dates": "2004 to current",
            "description": "Derivative trading support"
        },
        {
            "employer": "International BankG",
            "title": "Unix SA",
            "location": "Frankfurt, Germany",
            "dates": "2000 to 2004",
            "description": "AIX, Solaris and Linux sysadmin"
        }
    ]
};

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle

		$(".work-entry:last").append(
			formattedEmployerTitle)

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(
			formattedDates)

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(
			formattedDescription)

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(
			formattedLocation)

	}	
}


/*
bio contains a name, role, welcomeMessage, contacts object and skills array. 
The contacts object should contain (but doesn't have to) a mobile number, 
email address, github username, twitter handle and location. 
I have added a github link
*/
var bio = {
    "name": "Benedetto Lo Giudice",
    "role": "Front-End Developer Apprentice",
    "welcomeMessage": "",
    "contacts": {
        "email": "benedettologiudice@gmail.com",
        "githublink": "https://github.com/bennythejudge",
        "github": "bennythejudge",
        "location" : "London, UK, Europe",
        "linkedin": "https://www.linkedin.com/in/benedettologiudice"
    },
    "skills": [ "Solaris", "Linux", "Perl", "Python"],
    "bioPic": "images/fry.jpg"
};


bio.display = function () {
    'use strict';
    var formattedName = HTMLheaderName.replace("%data%", bio.name),
        formattedRole = HTMLheaderRole.replace("%data%", bio.role),
        f_photo = HTMLbioPic.replace("%data%", bio.bioPic),
        github = HTMLgithub.replace("%data%", "<a class=\"contacts-link\" href=\"" + bio.contacts.githublink + "\" target=\"_blank\">" + bio.contacts.github + "</a>"),
        f_email = HTMLemail.replace("%data%", "<a class=\"contacts-link\" href=\"mailto:" + bio.contacts.email + "\">" + bio.contacts.email + "</a>"),
        f_location = HTMLlocation.replace("%data%", bio.contacts.location),
        // f_linkedin = HTMLlinkedin.replace("%data%", "<a class=\"contacts-link\" href=\"" + bio.contacts.linkedin + "\" target=\"_blank\">" + bio.contacts.linkedin + "</a>"),
        formattedSkill,
        skill,
        HTMLContacts;

    // Display stuff please
    $("#header").append(formattedName);
    $("#header").append(formattedRole);
    // contacts
    $("#header").append(f_photo);
    HTMLContacts = '<dl id="topContacts"></dl>';
    $("#header").append(HTMLContacts);
    $("#topContacts").append(f_location);
    $("#topContacts").append(github);
    // $("#topContacts").append(f_linkedin);
    $("#topContacts").append(f_email);

    // $("#header").append(f_welcome_msg);
    // skills
    if (bio.skills.length > 0) {
        $("#topContacts").append(HTMLskillsStart);
        for (skill in bio.skills) {
            if (bio.skills.hasOwnProperty(skill)) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

/*
education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.
*/
var education = {
        "schools":
            [
                {
                    "name": "High School",
                    "location": "Perugia, Italy",
                    "degree": "High School Diploma",
                    "major": ["Science", "English"],
                    "dates": "From: 1980 To: 1984",
                    "url": "#"
                },
                {
                    "name": "Open University",
                    "location": "Milton Keynes",
                    "degree": "Certificate in Math and Computing",
                    "major": [ "CS", "Math"],
                    "dates": "From: 2006 To: 2010",
                    "url": "http://open.ac.uk"
                },
                {
                    "name": "Open University",
                    "location": "Milton Keynes",
                    "degree": "Diploma in Computing",
                    "major": [ "CS", "Java"],
                    "dates": "From: 2006 To: 2011",
                    "url": "http://open.ac.uk"
                }
            ]
};


/*
projects contains an array of projects. Each project object in projects should 
contain a title, dates worked, description, and an images array with URL strings 
for project images.
*/
var projects = {
    "projects":
        [
            {
                "title": "TFL train arrivals",
                "dates": "2014",
                "description": "TFL Train arrival board",
                "images": ["images/197x148.gif"],
                "link": "http://www.webificio.it/dboard"
            },
            {
                "title": "BhaktiEvent e-store",
                "dates": "2013",
                "description": "e-store for German Charity Bhakti Marga",
                "images": ["images/197x148.gif"],
                "link": "http://www.bhaktievent.de"
            },
            {
                "title": "Iain Sinclair Official Unofficial",
                "dates": "2008",
                "description": "Official Unofficial website of British writer Iain Sinclair",
                "images": ["images/197x148.gif"],
                "link": "http://www.iainsinclair.org.uk"
            }
        ]
};


/////////// main /////////////////////////////////////
work.display();
bio.display();

