using Project1_Angular.Contexto;
using Project1_Angular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1_Angular.Servicios
{
    public class ProductoService: IProductoService
    {
        private IContextDB _ContextDB;

        public ProductoService(IContextDB contextDB)
        {
            this._ContextDB = contextDB;
        }

        public List<Productos> GetAllProductos()
        {
            return _ContextDB.Productos.ToList();
        }

        public Productos GetProductosById(int ProductoId)
        {
            return _ContextDB.Productos.Where(item => item.ProductosId == ProductoId).FirstOrDefault();
        }

        public void AddProducto(Productos Producto)
        {
            _ContextDB.Productos.Add(Producto);
            _ContextDB.SaveChanges(true);
        }

        public void UpdateProducto(Productos Producto)
        {
            _ContextDB.Productos.Update(Producto);
            _ContextDB.SaveChanges(true);
        }

        public void DeleteProducto(int ProductosId)
        {
            Productos Producto = _ContextDB.Productos.Where(item => item.ProductosId == ProductosId).FirstOrDefault();
            _ContextDB.Productos.Remove(Producto);
            _ContextDB.SaveChanges(true);
        }
    }
}
