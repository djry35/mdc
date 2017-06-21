using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace TestWebAPICSharp
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            /*
             * Unclear why this doesn't work for specifying controllers. Will need more research.
             * 
             * In the meantime, the route above does just fine for our purposes. Requires more conforming in the controller.
            config.Routes.MapHttpRoute(
                name: "PeopleAPI",
                routeTemplate: "api/people/{option}",
                defaults: new { controller = "People", option = RouteParameter.Optional }
            );*/
        }
    }
}
