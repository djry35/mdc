using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Management;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using TestWebAPICSharp.Models;

namespace TestWebAPICSharp.Controllers
{
    public class AutocompleteController : ApiController
    {

        //api/autocomplete/
       public HttpResponseMessage GetPeople(string id)
        {
            return Request.CreateResponse(HttpStatusCode.OK, "this is people");
        }



        //api/autocomplete/command?data=[data]
        //commands:
        //  pollutants?data=[category]
        //  people?data=[FNAME,LNAME]
        public HttpResponseMessage Getasd(string id, string data)
        {
            SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnString"].ToString());
            SqlCommand cmd = new SqlCommand();
            SqlDataAdapter adp = new SqlDataAdapter();
            cmd.Connection = conn;
            switch(id)
            {
                case "pollutants":
                    cmd.CommandText = "SELECT Name FROM [dbo].[ZZZPollutantSubcategories] WHERE ParentCategory like '" + data + "'";
                    break;
                case "people":
                    string[] arr = data.Split(',');
                    cmd.CommandText = "SELECT * FROM [dbo].[ZZZPeople] INNER JOIN [dbo].[ZZZPeopleAgencies] on (PID) " +
                        "INNER JOIN [dbo].[ZZZPeopleDivisions] on (PID) INNER JOIN [dbo].[ZZZTitledPeople] on (PID) " +
                        "WHERE [dbo].[ZZZPEOPLE].FNAME like " + arr[0] + " AND [dbo].[ZZZPEOPLE].LNAME like " + arr[1]; 
                    break;
            }

            cmd.CommandType = CommandType.Text;

            conn.Open();

            FunctionHelper FH = new FunctionHelper();
            string s = FH.parseSQLResult(cmd);

            conn.Close();


            return Request.CreateResponse(HttpStatusCode.OK, s);
       
        }


        //api/autocomplete/command
        //commands:
        //  counties
        //  injuries
        //  species
        //  pollutants
        //  waterbodies
        //  divisions
        //  agencies
        public HttpResponseMessage Getsdfasdf(string id)
        {
            SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnString"].ToString());
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = conn;
            switch(id)
            {
                case "counties":
                    cmd.CommandText = "SELECT Name FROM [dbo].[ZZZCounties]";
                    break;
                case "injuries":
                    cmd.CommandText = "SELECT Name FROM [dbo].[ZZZInjuries]";
                    break;
                case "species":
                    cmd.CommandText = "SELECT Name FROM [dbo].[ZZZFishSpecies]";
                    break;
                case "pollutants":
                    cmd.CommandText = "SELECT Name FROM [dbo].[ZZZPollutantCategories]";
                    break;
                case "waterbodies":
                    cmd.CommandText = "SELECT Name FROM [dbo].[ZZZWaterBodies]";
                    break;
                case "divisions":
                    cmd.CommandText = "SELECT Name FROM [dbo].[ZZZDivisions]";
                    break;
                case "agencies":
                    cmd.CommandText = "SELECT Name FROM [dbo].[ZZZAgencies]";
                    break;
                default:
                    return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            
            cmd.CommandType = CommandType.Text;

            conn.Open();

            FunctionHelper FH = new FunctionHelper();
            string s = FH.parseSQLResult(cmd);
            
            conn.Close();

            //returns MDC\RAYMOD....is that also true via HTTP/AJAX?
            ManagementObjectSearcher searcher = new ManagementObjectSearcher("SELECT UserName FROM Win32_ComputerSystem");
            ManagementObjectCollection collection = searcher.Get();
            string username = (string)collection.Cast<ManagementBaseObject>().First()["UserName"];


            return Request.CreateResponse(HttpStatusCode.OK, username);
        }
    }
}
