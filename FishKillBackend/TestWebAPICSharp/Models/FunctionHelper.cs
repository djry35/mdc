using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Text;
using System.Data;
using System.Configuration;

namespace TestWebAPICSharp.Models
{
    public class FunctionHelper
    {
        public FunctionHelper()
        {

        }

        //parses the SQL query result into a readable JSON:
        // { <Column Name>, <Column Value> }
        // ...
        public string parseSQLResult(SqlCommand cmd)
        {
            StringBuilder json = new StringBuilder();
            using (SqlDataReader reader = cmd.ExecuteReader())
            {
                json.Append("[");
                while (reader.Read())
                {
                    json.Append("[");
                    for (int i = 0; i < reader.FieldCount; i++)
                    {
                        json.Append("{'" + reader.GetName(i) + "', '" + reader.GetString(i) + "'}, ");
                    }
                    json.Remove(json.Length - 2, 2);
                    json.Append("], ");
                }
                json.Remove(json.Length - 2, 2);
                json.Append("]");
            }

            string s = json.ToString();
            return s;
        }

        public string runGetQuery(string query)
        {
            SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnString"].ToString());
            SqlCommand cmd = new SqlCommand();
            SqlDataAdapter adp = new SqlDataAdapter();
            cmd.Connection = conn;
            cmd.CommandText = query;
            cmd.CommandType = CommandType.Text;
            conn.Open();
            string s = parseSQLResult(cmd);

            conn.Close();

            return s;
        }

        public void runPostQuery(string query)
        {
            SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBConnString"].ToString());
            SqlCommand cmd = new SqlCommand();
            SqlDataAdapter adp = new SqlDataAdapter();
            cmd.Connection = conn;
            cmd.CommandText = query;
            cmd.CommandType = CommandType.Text;
            conn.Open();

            conn.Close();
        }
    }

    
}