A full stack web application for data collection on fish killings and pollution reports.

Below is the breakdown of each MVC component in its full:

FRONT-END UI:

The model component has two pages ('about' page might be added later): the admin and main submission page. The admin page is a projection of submitted forms, editable by the admin only. The submissions page can be accessed by staff to submit their reports digitally. 

The form has the following fields in 'index.html':

Category: Descriptive Data
	Reporter's First Name: string
	Reporter's Last Name: string
	Reporter's Staff Title: string
	Reporter's Address: string
	Reporter's Zipcode: int
	Reporter's Phone Number: string (varied)
	Date of Investigation: 'XX/XX/XXXX'
	Time of Investigation: 'XX:XX[ap]m'
	Nearest Town: string
	County Location: string
	Location Detail: (varied)
	Legal Descriptors: (varied)
	Type of Waterbody: string
	Waterbody Name: string
Category: People Involved
	Agency: string
	First Name: string
	Last Name: string
	Phone: string (varied)
	Email: string (varied)
	Date: 'XX/XX/XXXX'
	