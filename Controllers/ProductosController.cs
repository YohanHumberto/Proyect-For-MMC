using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Project1_Angular.Contexto;
using Project1_Angular.Models;

namespace Project1_Angular.Controllers
{
    public class ProductosController : Controller
    {
        private readonly ContextDB _context;

        public ProductosController(ContextDB context)
        {
            _context = context;
        }

        // GET: Productos
        public IActionResult Index()
        {
            return Ok(_context.Productos.ToList());
        }

        // GET: Productos/Details/5
        public IActionResult Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var productos = _context.Productos
                .FirstOrDefault(m => m.ProductosId == id);
            if (productos == null)
            {
                return NotFound();
            }

            return Ok(productos);
        }

        // POST: Productos/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public IActionResult Create([FromBody] Productos productos)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _context.Add(productos);
                    _context.SaveChanges();
                    return Ok(new { productos, MSG = "Producto creado correctamente" });
                }

                return Ok(new { productos, MSG = "Este modelo no es valido" });

            }
            catch (DbUpdateConcurrencyException e)
            {
                return Ok(new { MSG = "Ha ocurrido un error" + e.Message });
            }
        }

        // POST: Productos/Edit
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<IActionResult> Edit([FromBody] Productos productos)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _context.Update(productos);
                    await _context.SaveChangesAsync();
                    return Ok(new { productos, MSG = "Producto editado correctamente" });
                }

                return Ok(new { productos, MSG = "Este modelo no es valido" });

            }
            catch (DbUpdateConcurrencyException e)
            {
                return Ok(new { MSG = "Ha ocurrido un error" + e.Message });
            }
        }

        // Delete: Productos/Delete/5
        [HttpDelete, ActionName("Delete")]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var productos = await _context.Productos.FindAsync(id);
            _context.Productos.Remove(productos);
            await _context.SaveChangesAsync();
            return Ok("Producto eliminado");
        }

    }
}
