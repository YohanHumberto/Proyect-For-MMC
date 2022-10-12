using Microsoft.EntityFrameworkCore;
using Project1_Angular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1_Angular.Contexto
{
    public class ContextDB : DbContext, IContextDB
    {
        public ContextDB(DbContextOptions<ContextDB> options) : base(options)
        {

        }

        public DbSet<Productos> Productos { get; set; }

        public DbSet<Clientes> Clientes { get; set; }

        public DbSet<Ordenes> Ordenes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Productos>().ToTable("Productos");
            modelBuilder.Entity<Clientes>().ToTable("Clientes");
            modelBuilder.Entity<Ordenes>().ToTable("Ordenes");
        }

    }
}
