using Project1_Angular.Contexto;
using Project1_Angular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1_Angular.Servicios
{
    public class OrdenesService: IOrdenesService
    {
        private IContextDB _ContextDB;

        public OrdenesService(IContextDB contextDB)
        {
            this._ContextDB = contextDB;
        }

        public List<Ordenes> GetAllOrdenes()
        {
            return _ContextDB.Ordenes.ToList();
        }

        public Ordenes GetOrdenesById(int OrdenId)
        {
            return _ContextDB.Ordenes.Where(item => item.OrdenesId == OrdenId).FirstOrDefault();
        }

        public void AddOrden(Ordenes Orden)
        {
            _ContextDB.Ordenes.Add(Orden);
            _ContextDB.SaveChanges(true);
        }

        public void UpdateOrden(Ordenes Orden)
        {
            _ContextDB.Ordenes.Update(Orden);
            _ContextDB.SaveChanges(true);
        }

        public void DeleteOrden(int OrdenesId)
        {
            Ordenes Orden = _ContextDB.Ordenes.Where(item => item.OrdenesId == OrdenesId).FirstOrDefault();
            _ContextDB.Ordenes.Remove(Orden);
            _ContextDB.SaveChanges(true);
        }
    }
}
