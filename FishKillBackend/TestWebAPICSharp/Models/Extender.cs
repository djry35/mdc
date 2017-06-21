using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestWebAPICSharp.Models
{
    public static class Extender
    {

        public static bool IsNullOrEmpty<T>(this IEnumerable<T> enumerable)
        {
            if (enumerable == null)
                return true;

            return !enumerable.Any();
        }

    }
}