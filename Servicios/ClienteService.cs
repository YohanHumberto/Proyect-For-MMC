using Project1_Angular.Contexto;
using Project1_Angular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1_Angular.Servicios
{
    public class ClienteService: IClienteService
    {
        private IContextDB _ContextDB;

        public ClienteService(IContextDB contextDB)
        {
            this._ContextDB = contextDB;
        }

        public List<Clientes> GetAllClientes()
        {
            return _ContextDB.Clientes.ToList();
        }

        public Clientes GetClientesById(int ClienteId)
        {
            return _ContextDB.Clientes.Where(item => item.ClientesId == ClienteId).FirstOrDefault();
        }

        public void AddCliente(Clientes cliente )
        {
            _ContextDB.Clientes.Add(cliente);
            _ContextDB.SaveChanges(true);
        }

        public void UpdateCliente(Clientes cliente)
        {
            _ContextDB.Clientes.Update(cliente);
            _ContextDB.SaveChanges(true);
        }

        public void DeleteCliente(int ClientesId)
        {
            Clientes cliente = _ContextDB.Clientes.Where(item => item.ClientesId == ClientesId).FirstOrDefault();
            _ContextDB.Clientes.Remove(cliente);
            _ContextDB.SaveChanges(true);
        }
    }
}
