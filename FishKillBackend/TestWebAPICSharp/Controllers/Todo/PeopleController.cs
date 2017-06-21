using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TestWebAPICSharp.Controllers
{
    public class PeopleController : ApiController
    {
        public HttpResponseMessage Get(string id)
        {
            return Request.CreateResponse(HttpStatusCode.OK, "this is people");
        }

        /*
         * ????????????????????????????
         * 
        public HttpResponseMessage GetLNAME(string id)
        {
            return Request.CreateResponse(HttpStatusCode.OK, "this is LNAME");
        }
        */
        public HttpResponseMessage Get(string id, string FNAME)
        {
            return Request.CreateResponse(HttpStatusCode.OK, "this is more specific people");
        }


        public HttpResponseMessage Get(string id, string FNAME, string LNAME)
        {
            return Request.CreateResponse(HttpStatusCode.OK, "this is more specific people");
        }

        /*    
        [Route("customers/{customerId}/orders/{orderId}")]
        public HttpResponseMessage asdf(string id, string FNAME, string LNAME)
        {
            return Request.CreateResponse(HttpStatusCode.OK, "this is custom route");
        }*/
    }
}
