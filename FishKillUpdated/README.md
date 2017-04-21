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




------------Database---------------

The database tables have been split between the tables specific to fish kills, and people involved. The people tables have their own mock database that have been generalized for use outside the fish kills subject. Tables have been created to keep track of various categories for the use of autocomplete fields as well as statistical purposes. 

NOTE: for the purposes of the database, 0 = false, 1 = true. This mainly applies to the bit value fields in the various tables. 

The following tables are associated with general people information:

ZZZPeople
	PID (PRIMARY KEY)
		Type: int
		NULLable: no
		A number to associate with each person for uniqueness.
	FName
		Type: varchar(50)
		NULLable: yes
		The person's first name.
	LName
		Type: varchar(50)
		NULLable: yes
		The person's last name.
	Email
		Type: varchar(MAX)
		NULLable: yes
		The person's current email. A table for alternative emails have been created, but is not used for the purposes of this application. 
	Phone
		Type: varchar(MAX)
		NULLable: yes
		The person's current phone. Alternative phones are not currently kept track of. 
	DemographicID
		Type: int 
		NULLable: yes
		The person's address. See the Demographics table.
ZZZUnapprovedPeople
	PID (PRIMARY KEY)
		Type: int
		NULLable: no
		The person awaiting approval. Once approved, the PID will be removed from this table. See ZZZUnapprovedAgencies.

ZZZUnapprovedAgencies
	Name (PRIMARY KEY)
		Type: varchar(50)
		NULLable: no
		The agency awaiting approval. Through the web application, the admin approves agencies by verifying the full fishkill application submitted by field staff. Other applications will have their AI to detect when agencies are approved.
		Once approved, the field will be deleted from this table. All unapproved agencies are still in the primary table of agencies and treated as approved for database purposes.
ZZZAgencies
	Name (PRIMARY KEY)
		Type: varchar(50)
		NULLable: no
		The name of the agency. These agencies are approved (see ZZZUnapprovedAgencies).

ZZZUnapprovedDivisions
	Name (PRIMARY KEY)
		Type: varchar(50)
		NULLable: no
		The division awaiting approval. See ZZZUnapprovedAgencies.
ZZZDivisions
	Name (PRIMARY KEY)
		Type: varchar(50)
		NULLable: no
		The name of the division. See ZZZUnapprovedAgencies.

ZZZUnapprovedTitles
	Name (PRIMARY KEY)
		Type: varchar(50)
		NULLable: no
		The title awaiting approval. See ZZZUnapprovedAgencies.
ZZZTitles
	Name (PRIMARY KEY)
		Type: varchar(50)
		NULLable: no
		The name of the title. See ZZZUnapprovedAgencies.

ZZZEmails
	Email (PRIMARY KEY)
		Type: varchar(60)
		NULLable: no
		The alternate email for the person specified. Used for archiving purposes.
	PID
		Type: int
		NULLable: no
		The person with the alternate email.

ZZZCities
	Name (PRIMARY KEY)
		Type: varchar(50)
		NULLable: no
		The name of the city. See ZZZUnapprovedAgencies

ZZZDemographics
	DemographicID (PRIMARY KEY)
		Type: int
		NULLable: no
		The ID associated with the location specifics. 
	Address
		Type: varchar(MAX)
		NULLable: yes
		The street address and number.
	City
		Type: varchar(50)
		NULLable: yes
		The city location of the address.
	State
		Type: varchar(50)
		NULLable: yes
		The state location of the address. Generally Missouri, but kept track of just in case.
	Zip
		Type: int
		NULLable: yes
		The zip code.



The following tables are specific to fish kill applications: 
	
ZZZInvestigationRecords
	InvestigationRecordID (PRIMARY KEY)
		Type: int
		NULLable: no
		The ID that will differentiate each investigative report.
	ApprovedByAdmin
		Type: bit
		NULLable: no
		Identifies if the admin overseeing the reports has seen this particular report and verified/approved it.
	DateRecorded
		Type: date
		NULLable: no
		The date that the incident was reported, not submitted. It can be the same date as when the investigation was carried out and submitted.
	TimeRecorded
		Type: time
		NULLable: yes
		The time the incident was reported. Can be enforced to be non-NULL on the front end if desired. 
	DateSubmitted
		Type: date
		NULLable: no
		The date the incident was submitted, autogenerated by the MVC piece of choice. Right now, the date is generated by the web API.
	DateInvestigated
		Type: date
		NULLable: no
		The date the investigation took place to obtain report data, independent of DateReported and DateSubmitted. 
	LegalGridSquare
		Type: int
		NULLable: yes
		A reference to the table of values representing the location of the incident. See ZZZLegalDescriptors. The report usually includes these, but might be unavailable. 
	PersonReported
		Type: int
		NULLable: no
		Identifies the person who reported the incident. Required to ensure a paper trail.
	PersonObserved
		Type: int
		NULLable: yes
		Identifies the person who observed the incident. Helps with the paper trail, but is not required since the reporter could be the same as the observer, or observer is not available.
	PersonSubmitted
		Type: int
		NULLable: no
		Identifies the person who filled out the online incident report. Used for tracking purposes. 
	County
		Type: varchar(50)
		NULLable: yes
		The county that the incident took place. Generally used in place of the LegalGridSquare since this is simpler to obtain.
	NearestTown
		Type: varchar(50)
		NULLable: yes
		The nearest town with respect to the incident. See County.
	WaterBody
		Type: int
		NULLable: yes
		A reference to the information of the waterbody involved. See the WaterBodies table.
	PollutantSource
		Type: varchar(50)
		NULLable: yes
		The source of the pollutant. Likely a business of sorts.
	PollutantAgent
		Type: varchar(50)
		NULLable: yes
		The name of the pollutant itself involved. Separate from its categories.
	PollutantQuantity
		Type: int
		NULLable: yes
		The amount of the pollutant present, as a quantitative value. Combined with PollutantQuantityUnits. 	
	PollutantQuantityUnits
		Type: varchar(50)
		NULLable: yes
		The units associated with PollutantQuantity.
	PollutantDate
		Type: date
		NULLable: yes
		The date the pollutant started affecting the area.
	OtherAnimalsDead
		Type: bit 
		NULLable: no
		Marks whether or not other animals were found dead. This is a checkbox on the front end, so no specification is assumed false. Thus, this will always have a value.
	NaturalFishDeath
		Type: bit
		NULLable: no 
		Marks whether or not fish died naturally. See OtherAnimalsDead for specification details.
	DecayState
		Type: varchar(50)
		NULLable: yes
		Describes the extent of decay on the dead fish.
	LiveFishPresent
		Type: bit
		NULLable: no
		Marks if there are still fish alive at the scene. See OtherAnimalsDead for specification details. 
	ResponsibleParty
		Type: varchar(50)
		NULLable: yes
		The party who created the incident. Only the name of the party is recorded, and the names are archived in a table of responsible parties. 
	MOWatersContaminated
		Type: bit
		NULLable: no
		Marks if there were waters that were contaminated by the pollutant. See OtherAnimalsDead for specification details.
	GroundwaterContaminated
		Type: bit
		NULLable: no
		Marks if any groundwater was contaminated. See OtherAnimalsDead for specification details. 
	DamageSize
		Type: int
		NULLable: yes
		The length of damage done by the pollutant, natural effects, etc. Combined with DamageUnits.
	DamageUnits
		Type: varchar(50)
		NULLable: yes
		The units associated with DamageSize. Generally acres, inches or miles, but is not enforced. 
	EffectDays
		Type: int
		NULLable: yes
		The number of days the damage source has affected the area. 
	PrecipitationDuring
		Type: bit
		NULLable: yes
		Marks if there were precipitation during the investigation. The front end is a yes/no input, so this can be NULLed if not specified.
	PrecipitationBefore
		Type: bit
		NULLable: yes
		Marks if there were precipitation 24 hours before the investigation. See PrecipitationDuring. 
	PrecipitationInchesBefore
		Type: bit 
		NULLable: yes
		If there was precipitation 24 hours before the investigation, marks number of inches that was present. 
	AirTempDuring
		Type: varchar(50)
		NULLable: yes
		Denotes the air temperature during the investigation. The units are combined with the value to be a string, unlike other fields in the table.
	AirTempBefore
		Type: varchar(50)
		NULLable: yes
		Air temperature 24 hours before investigation. See AirTempDuring.
	CloudCoverDuring
		Type: varchar(50)
		NULLable: yes
		Denotes cloud cover during investigation. The possible values are controlled by the front end.
	CloudCoverBefore
		Type: varchar(50)
		NULLable: yes
		Cloud cover 24 hours before investigation. See CloudCoverDuring.
	WaterFlowDuring
		Type: varchar(50)
		NULLable: yes
		Water flow description during investigation. The possible values are controlled by the front end. 
	WaterFlowBefore
		Type: varchar(50)
		NULLable: yes
		Water flow 24 hours before investigation. See WaterFlowDuring.
	TurbidityDuring
		Type: varchar(50)
		NULLable: yes
		Turbidity description during investigation. Possible values are controlled by the front end. 
	TurbidityBefore
		Type: varchar(50)
		NULLable: yes
		Turbidity description 24 hours before investigation. See TurbidityDuring.
	ColorDuring
		Type: varchar(50)
		NULLable: yes
		Color description during investigation. Values vary depending on user response.
	ColorBefore
		Type: varchar(50)
		NULLable: yes
		Color description 24 hours before investigation. See ColorDuring.
	DischargeDuring
		Type: bit
		NULLable: yes
		Marks whether or not water discharge was being observed during the investigation. 
	DischargeBefore
		Type: bit
		NULLable: yes
		Water discharge 24 hours before investigation. See DischargeDuring. 
	SurfaceScumDuring
		Type: bit
		NULLable: yes
		Marks whether or not surface scum was observed during the investigation. 
	SurfaceScumBefore
		Type: bit
		NULLable: yes
		Surface scum 24 hours before investigation. See SurfaceScumDuring. 
	OdorDuring
		Type: varchar(MAX)
		NULLable: yes
		The description given to the color of the water body during the investigation.
	OdorBefore
		Type: varchar(MAX)
		NULLable: yes
		Water body description 24 hours before the investigation. See OdorDuring.
	InvestigationComments
		Type: varchar(MAX)
		NULLable: yes
		The comments stated by the person submitted regarding details about the investigation. 
	CorrectiveActionComments
		Type: varchar(MAX)
		NULLable: yes
		The comments stated by the person submitted regarding actions that should be/have been taken. 

ZZZBehaviorsObserved
	InvestigationID
		Type: int 
		NULLable: no
		The investigation that has the particular fish behavior observed.
	Behavior
		Type: varchar(50)
		NULLable: no
		The particular behavior observed. 
ZZZFishBehaviors
	Description (PRIMARY KEY)
		Type: varchar(50)
		NULLable: no
		A unique description for a behavior observed. See ZZZUnapprovedAgencies

ZZZInjuries
	Name (PRIMARY KEY)
		Type: varchar(50)
		NULLable: no
		The injury that could be observed. See ZZZUnapprovedAgencies
ZZZInjuriesObserved
	InvestigationID
		Type: int 
		NULLable: no
		The investigation that has the particular fish injury observed.
	Injury
		Type: varchar(50)
		NULLable: no
		The particular injury observed. 

ZZZLocationInformation
	LegalGridSquare (PRIMARY KEY)
		Type: int
		NULLable: no
		The ID for the combination of descriptors
	TN
		Type: int
		NULLable: yes
		The township number of the location.
	RW
		Type: int
		NULLable: yes
		The region number of the location.
	S
		Type: int
		NULLable: yes
		The section number of the location.
	X1
		Type: nchar(10)
		NULLable: yes
		The X coordinate of the point indentifying the specific incident location.
	Y1
		Type: nchar(10)
		NULLable: yes
		The Y coordinate of the point indentifying the specific incident location.
	X2
		Type: nchar(10)
		NULLable: yes
		The X coordinate of the second point indentifying the specific incident location. 
		This point combined with the above point makes a line covering the incident area. 
	Y2
		Type: nchar(10)
		NULLable: yes
		The Y coordinate of the second point indentifying the specific incident location. See X2.

ZZZCounties
	Name (PRIMARY KEY)
		Type: varchar(50)
		NULLable: no
		The particular county. See ZZZUnapprovedAgencies.
ZZZUnapprovedCounties
	Name 
		Type: varchar(50)
		NULLable: no
		The particular county awaiting approval. See ZZZUnapprovedAgencies.

ZZZResponsibleParties
	Name (PRIMARY KEY)
		Type: varchar(50)
		NULLable: no
		The responsible party for the pollutant. These are separated from people since businesses and corporations could be responsible, but if this is the case we do not keep track of other information regarding them. 
ZZZFieldInvestigators
	PID
		Type: varchar(50)
		NULLable: no
		The person who was a field investigator. 
	InvestigationID
		Type: int
		NULLable: no
		The investigation that the field investigator looked into.
	Agency
		Type: varchar(50)
		NULLable: yes
		The agency the person was a part of at the time of investigation. This can change between investigations, or during the same investigation. In that case, two records will be inserted into the database, however this hasn't been implemented. 
	Division
		Type: varchar(50)
		NULLable: yes
		The division the person was a part of. See Agency.
	Title
		Type: varchar(50)
		NULLable: yes
		The title of the person. See Agency.
ZZZPeopleInvestigated
	InvestigationID
		Type: int
		NULLable: no
		The investigation involved.
	PID
		Type: int
		NULLable: no
		The person who was part of the investigation.
	Hours
		Type: numeric, 2 decimals
		NULLable: yes
		The number of hours the person was investigating, for reimbursement purposes. 
	Date
		Type: date
		NULLable: yes
		The date the person was involved.
	Time
		Type: time
		NULLable: yes
		The time the person was involved.
	Agency
		Type: varchar(50)
		NULLable: yes
		The agency the person was a part of at time of involvement. Since agencies can change at any time, this is kept track of here, although it is usually the agency the person has in their record in the person table.
	Division
		Type: varchar(50)
		NULLable: yes
		The division the person had. See Agency.
	Title
		Type: varchar(50)
		NULLable: yes
		The title the person had. See Agency.
ZZZPeopleInvolved
	InvestigationID
		Type: int
		NULLable: no
		The investigation involved.
	PID
		Type: int
		NULLable: no
		The person who was involved in the incident. 
	Date
		Type: date
		NULLable: yes
		The date the person was involved.
	Time
		Type: time
		NULLable: yes
		The time the person was involved.
	Agency
		Type: varchar(50)
		NULLable: yes
		The agency the person was a part of at time of involvement. Since agencies can change at any time, this is kept track of here, although it is usually the agency the person has in their record in the person table. The person involved also could be part of the general public, in which case this is NULLed. 
	Division
		Type: varchar(50)
		NULLable: yes
		The division the person had. See Agency.
	Title
		Type: varchar(50)
		NULLable: yes
		The title the person had. See Agency.

ZZZPollutantCategories
	Name (PRIMARY KEY)
		Type: varchar(50)
		NULLable: no
		The category for the pollutant. Used for autofilling and standardization.
ZZZPollutantSubcategories
	Name (PRIMARY KEY)
		Type: varchar(50)
		NULLable: no
		The subcategory for the pollutant. Used for autofilling and standardization.
	ParentCategory
		Type: varchar(50)
		NULLable: no
		The subcategory's parent category, for autofilling and standardization. 
ZZZUnapprovedCategories
	Name 
		Type: varchar(50)
		NULLable: no
		The category for the pollutant awaiting approval. Used for autofilling and standardization. See ZZZUnapprovedAgencies.
ZZZUnapprovedSubcategories
	Name
		Type: varchar(50)
		NULLable: no
		The subcategory for the pollutant awaiting approval. Used for autofilling and standardization. See ZZZUnapprovedAgencies. This is different than the others in that no foreign keys are generated for this table; approval will involve a more manual process. 
	ParentCategory
		Type: varchar(50)
		NULLable: no
		The subcategory's parent category, for autofilling and standardization. 
ZZZPollutantsInvolved
	InvestigationID
		Type: int
		NULLable: no
		The investigation being identified.
	Category
		Type: varchar(50)
		NULLable: no
		The category of the pollutant involved.
	Subcategory
		Type: varchar(50)
		NULLable: yes
		The subcategory of the pollutant involved, if denoted. 

ZZZWaterBodies
	WaterBodyID
		Type: int
		NULLable: no
		The ID for the particular waterbody info
	Name
		Type: varchar(50)
		NULLable: no
		The name of the waterbody. Standardized to be unique along with the ID.
	Type
		Type: varchar(50)
		NULLable: no
		The type of the waterbody. Limited to the selection field on the front end.
	Size
		Type: int
		NULLable: yes
		The size of the waterbody, or the size affected. Can be differentiated easily.
	SizeUnits
		Type: varchar(50)
		NULLable: yes
		The units associated with size.
	Owner
		Type: int
		NULLable: yes
		The PID of the owner of the waterbody, if applicable.

ZZZUnapprovedWaterbodies
	WaterbodyID (PRIMARY KEY)
		Type: int
		NULLable: no
		The waterbody awaiting approval. See ZZZUnapprovedAgencies.

ZZZWaterSampleStations
	StationID (PRIMARY KEY)
		Type: int
		NULLable: no
		The ID of the station
	Description
		Type: varchar(MAX)
		NULLable: no
		The description identifying the sample station uniquely. 
	County
		Type: varchar(50)
		NULLable: yes
		The county the sample station is in. Should be ensured that the county is separate and not just in the description.

ZZZStationsInvolved
	StationID
		Type: int
		NULLable: no
		The ID of the station involved in the investigation.
	InvestigationID
		Type: int
		NULLable: no
		The ID of the investigation being questioned. 
	XCoordinate
		Type: numeric, 2 decimal places
		NULLable: yes
		The X value of the point the water station is located at.
	YCoordinate
		Type: numeric, 2 decimal places
		NULLable: yes
		The Y value of the point the water station is located at.	
	Date
		Type: date
		NULLable: yes 
		The date the station was observed. Unclear if this field should be NULLable.
	Time
		Type: time
		NULLable: yes
		The time the station was observed.
	DO
		Type: numeric, 2 decimal places
		NULLable: yes
		The DO value observed. 
	Temp
		Type: numeric, 2 decimal places
		NULLable: yes
		The temperature observed.
	TempUnits
		Type: varchar(50)
		NULLable: yes
		The units associated with the temperature.
	PH
		Type: numeric, 2 decimal places
		NULLable: yes
		The PH value observed.
	NH3
		Type: numeric, 2 decimal places
		NULLable: yes
		The NH3 value observed.
	Comments
		Type: varchar(MAX)
		NULLable: yes
		Any comments associated with the observation of the water station. 


ZZZFishDead
	InvestigationID
		Type: int
		NULLable: no
		The investigation in question.
	Species
		Type: varchar(50)
		NULLable: no
		The fish species found dead in the investigation.
	SizeInches
		Type: int
		NULLable: yes
		The size of the fish of the particular species found dead. Right now, multiple rows will be used in this table for each species to differentiate between the sizes found dead. 
	NumberDead
		Type: int
		NULLable: yes
		The number dead of the species with the particular length. 
	WaterbodyID
		Type: int
		NULLable: yes
		The waterbody the dead fish were observed. 
	StationID
		Type: int
		NULLable: yes
		The station the dead fish were observed. 

ZZZFishSpecies
	Name (PRIMARY KEY)
		Type: varchar(50)
		NULLable: no
		The various fish species that can be identified. For standardization. 
		
ZZZUnapprovedFishSpecies
	Name 
		Type: varchar(50)
		NULLable: no
		The fish species that haven't been approved yet. See ZZZUnapprovedAgencies. 
