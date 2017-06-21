using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestWebAPICSharp.Models;


namespace TestWebAPICSharp.Controllers
{
    public class WaterStationController : ApiController
    {       
        public HttpResponseMessage Get(int id)
        {
            string query = "SELECT Description, County from dbo.WaterSampleStations WHERE StationID = " + id;

            return Request.CreateResponse(HttpStatusCode.OK, "test failed");
        }
       
        public HttpResponseMessage Get([FromUri]WaterStation ws)
        {
            //string query = "SELECT Description, County from dbo.WaterSampleStations WHERE StationID = " + id;

            return Request.CreateResponse(HttpStatusCode.OK, "test here");
        }
        /*
        public HttpResponseMessage Post(int id, WaterStation ws)
        {

            return Request.CreateResponse(HttpStatusCode.OK, ws.ToString());
        }*/
    }
}
