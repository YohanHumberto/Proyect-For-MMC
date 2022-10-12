using Project1_Angular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1_Angular.Servicios
{
    public interface IOrdenesService
    {
        public List<Ordenes> GetAllOrdenes();

        public Ordenes GetOrdenesById(int OrdenId);

        public void AddOrden(Ordenes Orden);

        public void UpdateOrden(Ordenes Orden);

        public void DeleteOrden(int OrdenesId);
    }
}
