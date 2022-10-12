using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1_Angular.Models
{
    public class Clientes
    {
        public int ClientesId { get; set; }

        public string Nombre { get; set; }

        public string Apellido { get; set; }

        public string Email { get; set; }

        public bool Estado { get; set; }
    }
}
