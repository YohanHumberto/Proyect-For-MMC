using Microsoft.AspNetCore.Mvc;
using Project1_Angular.Models;
using Project1_Angular.Servicios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1_Angular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClientesController : Controller
    {

        private IClienteService _ClienteService;

        public ClientesController(IClienteService ClienteService)
        {
            this._ClienteService = ClienteService;
        }

     
        [HttpGet]
        public IActionResult GetAllClientes()
        {
            return Ok(_ClienteService.GetAllClientes());
        }

        [HttpGet]
        [Route("{IdCliente:int}")]
        public IActionResult GetClienteById(int IdCliente)
        {
            return Ok(_ClienteService.GetClientesById(IdCliente));
        }

     
        [HttpPost]
        public IActionResult AddClientes([FromForm] Clientes Cliente)
        {

            ResStruct res = new ResStruct()
            {
                Estado = true,
                MSG = "Cliente agregado con exito."
            };

            if (Cliente.Nombre != "" && Cliente.Apellido != "" && Cliente.Email != "") _ClienteService.AddCliente(Cliente);
            else { res.Estado = false; res.MSG = "LAS PROPIEDADES NO PUEDEN ESTAR VACIAS."; }

            return Ok(new { res.Estado, res.MSG });
        }

      
        [HttpPut]
        public IActionResult UpdateClientes(Clientes Cliente)
        {

            ResStruct res = new ResStruct()
            {
                Estado = true,
                MSG = "Cliente actualizado con exito."
            };

            if (Cliente.Nombre != "" && Cliente.Apellido != "" && Cliente.Email != "") _ClienteService.UpdateCliente(Cliente);
            else { res.Estado = false; res.MSG = "LAS PROPIEDADES NO PUEDEN ESTAR VACIAS."; }

            return Ok(new { res.Estado, res.MSG });

        }

     
        [HttpDelete("{IdCliente:int}")]
        public IActionResult DeleteClientes(int IdCliente)
        {
            try
            {
                _ClienteService.DeleteCliente(IdCliente);
                return Ok(new { Estado = true, MSG = "Cliente eliminado con exito." });
            }
            catch (System.Exception e)
            {
                return Ok(new { Estado = false, MSG = "ERROR... NO se pudo eliminar el Cliente", exec = e.Message });
            }
        }
    }

    class ResStruct
    {
        public bool Estado;
        public string MSG;
    }
}
