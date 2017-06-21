using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace TestWebAPICSharp.Controllers
{
    public class FormsController : ApiController
    {
        //api/Forms
        //Returns all forms
        public HttpResponseMessage Get() 
        {
            SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnString"].ToString());
            SqlCommand cmd = new SqlCommand();
            SqlDataAdapter adp = new SqlDataAdapter();
            cmd.Connection = conn;
            cmd.CommandText = "SELECT * FROM [dbo].[ZZZCategories]";
            cmd.CommandType = CommandType.Text;

            //SqlParameter tvpParam = cmd.Parameters.AddWithValue("@ID", "1");
            //tpParam.SqlDbType = SqlDbType.UniqueIdentifier;

            conn.Open();
            adp.SelectCommand = cmd;

            StringBuilder json = new StringBuilder();
            int i = 0;
            using(SqlDataReader reader = cmd.ExecuteReader()) 
            {
                i = 0;
                json.Append("[");
                while(reader.Read()) 
                {
                    json.Append("{'" + reader.GetName(i) + "' : '" + reader["name"] + "'},");
                }
                json.Remove(json.Length - 1, 1);
                i++;
                json.Append("]");
            }
            string s = json.ToString();
            conn.Close();


            return Request.CreateResponse(HttpStatusCode.OK, s);
        }

        //api/Forms/Command
        //Command:
        //  unapproved
        //  
        //returns varied reply
        public HttpResponseMessage Get(string command)
        {
            return null;
        }

        //api/Forms/InvestigationID
        //returns the investigation with the associated ID
        public HttpResponseMessage Get(int iID)
        {
            return null;
        }
    }
}
