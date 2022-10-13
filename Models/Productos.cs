using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1_Angular.Models
{
    public class Productos
    {
        public int ProductosId { get; set; }

        public string Nombre { get; set; }

        public string Tipo { get; set; }

        public int Cantidad { get; set; }

        public int Precio { get; set; }

        public bool Estado { get; set; }

    }
}
