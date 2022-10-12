using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1_Angular.Models
{
    public class Ordenes
    {
        public int OrdenesId { get; set; }

        public int Cantidad { get; set; }

        public Productos Producto { get; set; }
        public int ProductoId { get; set; }

        public Clientes Cliente { get; set; }
        public int ClienteId { get; set; }

        public bool Estado { get; set; }
    }
}
