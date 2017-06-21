using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestWebAPICSharp.Models;

namespace TestWebAPICSharp.Controllers
{
    public class FishController : ApiController
    {
        [HttpPost]
        public HttpResponseMessage asdf(JObject JO)
        {
            dynamic json = JO;
            JObject JOstuff = json.FormData;
            JArray JOpplNotified = json.peopleNotified;

            var stuff = JOstuff.ToObject<FormObjects>();
            var notified = JOpplNotified.ToObject<List<PersonNotified>>();
            PersonNotified[] pplArray = notified.ToArray();

            if(notified == null)
                return Request.CreateResponse(HttpStatusCode.OK, "notified is null");
            else
                return Request.CreateResponse(HttpStatusCode.OK, pplArray[0].agencyNotified);
        }
    }
}
