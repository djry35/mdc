using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Linq;
using System.Web;

namespace TestWebAPICSharp.Models
{
    //Dummy var to match the file it's in.
    public class FormObjects { public FormObjects() {} }

    public class FormData
    {
        public FormData()
        {

        }
        [DefaultValue(null)]
        public string rFirstName { get; set; }
        [DefaultValue(null)]
        public string rLastName { get; set; }
        [DefaultValue(null)]
        public string rTitle { get; set; }
        [DefaultValue(null)]
        public string rAddress { get; set; }
        [DefaultValue(null)]
        public string rCity { get; set; }
        [DefaultValue(null)]
        public string rZipCode { get; set; }
        [DefaultValue(null)]
        public string rPhone { get; set; }
        [DefaultValue(null)]
        public string investigationDate { get; set; }
        [DefaultValue(null)]
        public string investigationTime { get; set; }
        [DefaultValue(null)]
        public string nearestTown { get; set; }
        [DefaultValue(null)]
        public string county { get; set; }
        [DefaultValue(null)]
        public string startingUTM_X { get; set; }
        [DefaultValue(null)]
        public string startingUTM_Y { get; set; }
        [DefaultValue(null)]
        public string endingUTM_X { get; set; }
        [DefaultValue(null)]
        public string endingUTM_Y { get; set; }
        [DefaultValue(null)]
        public string legalTN { get; set; }
        [DefaultValue(null)]
        public string legalRW { get; set; }
        [DefaultValue(null)]
        public string legalS { get; set; }
        [DefaultValue(null)]
        public string waterbodyName { get; set; }
        [DefaultValue(null)]
        public string pollutionCategory { get; set; }
        [DefaultValue(null)]
        public string agOpsSubcategory { get; set; }
        [DefaultValue(null)]
        public string agOtherSpec { get; set; }
        [DefaultValue(null)]
        public string indOpsSubcategory { get; set; }
        [DefaultValue(null)]
        public string indOtherSpec { get; set; }
        [DefaultValue(null)]
        public string munOpsSubcategory { get; set; }
        [DefaultValue(null)]
        public string munOtherSpec { get; set; }
        [DefaultValue(null)]
        public string transOpsSubcategory { get; set; }
        [DefaultValue(null)]
        public string transOtherSpec { get; set; }
        [DefaultValue(null)]
        public string causePol { get; set; }
        [DefaultValue(null)]
        public string sourcePol { get; set; }
        [DefaultValue(null)]
        public string quantityPol { get; set; }
        [DefaultValue(null)]
        public string eventDatePol { get; set; }
        [DefaultValue(null)]
        public string moWatersContamination { get; set; }
        [DefaultValue(null)]
        public string groundwaterContamination { get; set; }
        [DefaultValue(null)]
        public string otherDead { get; set; }
        [DefaultValue(null)]
        public string naturalDeadCt { get; set; }
        [DefaultValue(null)]
        public string speciesCategory { get; set; }
        [DefaultValue(null)]
        public string otherSpeciesDeadSpec { get; set; }
        [DefaultValue(null)]
        public string liveFishPresent { get; set; }
        [DefaultValue(null)]
        public string injuriesObserved { get; set; }
        [DefaultValue(null)]
        public string injuryCategory { get; set; }
        [DefaultValue(null)]
        public string injuryOtherSpec { get; set; }
        [DefaultValue(null)]
        public string behaviorCategory { get; set; }
        [DefaultValue(null)]
        public string otherBehaviorSpec { get; set; }
        [DefaultValue(null)]
        public string dmgEval { get; set; }
        [DefaultValue(null)]
        public string durationEffects { get; set; }
        [DefaultValue(null)]
        public string precipitationDuring { get; set; }
        [DefaultValue(null)]
        public string airTempDuring { get; set; }
        [DefaultValue(null)]
        public string waterDescColorDuring { get; set; }
        [DefaultValue(null)]
        public string dischargeDuring { get; set; }
        [DefaultValue(null)]
        public string scumDuring { get; set; }
        [DefaultValue(null)]
        public string waterDescOdorDuring { get; set; }
        [DefaultValue(null)]
        public string precipitationAfter { get; set; }
        [DefaultValue(null)]
        public string precAmtSpec { get; set; }
        [DefaultValue(null)]
        public string airTempAfter { get; set; }
        [DefaultValue(null)]
        public string waterDescColorAfter { get; set; }
        [DefaultValue(null)]
        public string dischargeAfter { get; set; }
        [DefaultValue(null)]
        public string scumAfter { get; set; }
        [DefaultValue(null)]
        public string waterDescOdorAfter { get; set; }
        [DefaultValue(null)]
        public string FieldInvestigators { get; set; }
        [DefaultValue(null)]
        public string investigationComments { get; set; }
        [DefaultValue(null)]
        public string investigationActions { get; set; }
    }

    public class PersonNotified
    {
        public PersonNotified()
        {

        }
        [DefaultValue(null)]
        public string agencyNotified { get; set; }
        [DefaultValue(null)]
        public string personNotifiedFName { get; set; }
        [DefaultValue(null)]
        public string personNotifiedLName { get; set; }
        [DefaultValue(null)]
        public string phoneNotified { get; set; }
        [DefaultValue(null)]
        public string emailNotified { get; set; }
        [DefaultValue(null)]
        public string dateNotified { get; set; }
        [DefaultValue(null)]
        public string timeNotified { get; set; }
    }

    public class PersonInvestigated
    {
        public PersonInvestigated()
        {

        }
        [DefaultValue(null)]
        public string personInvestigatedFName { get; set; }
        [DefaultValue(null)]
        public string personInvestigatedLName { get; set; }
        [DefaultValue(null)]
        public string divisionInvestigated { get; set; }
        [DefaultValue(null)]
        public string phoneInvestigated { get; set; }
        [DefaultValue(null)]
        public string hoursInvestigated { get; set; }
        [DefaultValue(null)]
        public string dateInvestigated { get; set; }
    }

    public class WaterSampleStation
    {
        public WaterSampleStation()
        {

        }
        [DefaultValue(null)]
        public string waterStationID { get; set; }
        [DefaultValue(null)]
        public string waterStationDescription { get; set; }
        [DefaultValue(null)]
        public string waterStationCounty { get; set; }
        [DefaultValue(null)]
        public string waterStationCoordinate { get; set; }
        [DefaultValue(null)]
        public string waterStationDO { get; set; }
        [DefaultValue(null)]
        public string waterStationTemp { get; set; }
        [DefaultValue(null)]
        public string waterStationPH { get; set; }
        [DefaultValue(null)]
        public string waterStationNH { get; set; }
        [DefaultValue(null)]
        public string waterStationComments { get; set; }
        [DefaultValue(null)]
        public string waterStationDateRecorded { get; set; }
        [DefaultValue(null)]
        public string waterStationTimeRecorded { get; set; }
    }

}