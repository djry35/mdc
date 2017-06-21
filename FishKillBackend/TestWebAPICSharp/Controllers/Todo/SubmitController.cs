using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestWebAPICSharp.Models;

namespace TestWebAPICSharp.Controllers.Todo
{
    public class SubmitController : ApiController
    {
        public HttpResponseMessage Post(List<FormObjects> formJSON)
        {
            FunctionHelper FH = new FunctionHelper();

            return Request.CreateResponse(HttpStatusCode.OK);

            //pull out the following values for cross reference: 
            /*
             * 1. City
             * 2. County
             * 3. Fish Species (other)*
             * 4. Fish Behaviors (other)
             * 5. Fish Injuries (other)
             * 6. People
             * 7. Pollutant Category (other)*
             * 8. Pollutant Subcategory (other)
             * 9. Titles
             * 10. Agencies
             * 11. Emails
             * 12. Waterbodies*
             * 13. Location Information
             * 14. Responsible Parties
             * 
             * A * denotes that the pieces are not fully integrated into the front-end, thus will be susceptible to changes. 
             * 
             * 
             * Find their values in the archive tables in the DB, and update the archive tables if not found. 
             * 
            */
            //fields 1,2,3,4,5,7,9,10,11 are simple fields; that is, they don't have any other information that needs to be grouped from the form JSON and processed.
            //They are easier, so they are done first.
            //(3 will be more complex when it is integrated into the web form correctly)
           /*
            FormField[] simpleFields = new FormField[10];
            simpleFields[0] = formJSON.Find(x => x.name.Contains("rCity"));
            simpleFields[1] = formJSON.Find(x => x.name.Contains("county"));
            simpleFields[2] = formJSON.Find(x => x.name.Contains("otherSpeciesDeadSpec"));
            simpleFields[3] = formJSON.Find(x => x.name.Contains("otherBehaviorSpec"));
            simpleFields[4] = formJSON.Find(x => x.name.Contains("injuryOtherSpec"));
            simpleFields[5] = formJSON.Find(x => x.name.Contains("")); //pollution category == other
            simpleFields[6] = formJSON.Find(x => x.name.Contains("rTitle"));
            simpleFields[7] = formJSON.Find(x => x.name.Contains("")); //emails; this is a little more complicated since there's one for each peopleInvolved
            simpleFields[8] = formJSON.Find(x => x.name.Contains("")); //agencies; same as above

            //pull out investigation values according to investigation table and fill in a row for the investigation
            for(int i = 0; i < 9; i++)
            {
                string s = FH.runGetQuery("");
                if(s == "")
                    FH.runPostQuery("");

            }

            // formJSON.Find(x => x.Name.Contains(<field name>) to find {name, value} pair. Returns null when none match
            FormField dateRecorded = new FormField();
            FormField timeRecorded = new FormField();
            FormField dateSubmitted = new FormField();
            FormField dateInvestigated = new FormField();
            FormField County = new FormField();
            FormField NearestTown = new FormField();
            FormField PollutantSource = new FormField();
            FormField PollutantAgent = new FormField();
            FormField PollutantQuantity = new FormField();
            FormField PollutantQuantityUnits = new FormField();
            FormField PollutantDate = new FormField();
            FormField OtherAnimalsDead = new FormField();
            FormField NaturalFishDeath = new FormField();
            FormField DecayState = new FormField();
            FormField LiveFishPresent = new FormField();
            FormField ResponsibleParty = new FormField();
            FormField MOWaterContamination = new FormField();
            FormField GroundwaterContamination = new FormField();
            FormField DamageSize = new FormField();
            FormField DamageUnits = new FormField();
            FormField EffectDays = new FormField();
            FormField PrecipitationDuring = new FormField();
            FormField PrecipitationBefore = new FormField();
            FormField PrecipitationInchesBefore = new FormField();
            FormField AirTempDuring = new FormField();
            FormField AirTempBefore = new FormField();
            FormField CloudCoverDuring = new FormField();
            FormField CloudCoverBefore = new FormField();
            FormField WaterFlowDuring = new FormField();
            FormField WaterFlowBefore = new FormField();
            FormField TubidityDuring = new FormField();
            FormField TubidityBefore = new FormField();
            FormField ColorDuring = new FormField();
            FormField ColorBefore = new FormField();
            FormField DischargeDuring = new FormField();
            FormField DischargeBefore = new FormField();
            FormField SurfaceScumDuring = new FormField();
            FormField SurfaceScumBefore = new FormField();
            FormField OdorDuring = new FormField();
            FormField OdorBefore = new FormField();
            FormField InvestigationComments = new FormField();
            FormField CorrectiveActionComments = new FormField();

            FH.runPostQuery("INSERT INTO zzzInvestigationRecords values (" + 
                                "0");


            //pull out relevant data for given M-M tables and fill them in.
            //(this is the hard part)
            */

            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}
