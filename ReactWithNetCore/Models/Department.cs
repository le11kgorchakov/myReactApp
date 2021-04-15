using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReactWithNetCore.Models
{
    public class Department
    {
        [Key]
        public int DepartmentId { set; get; }
        public string DepartmentName { set; get; }
    }
}
