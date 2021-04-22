namespace webAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class p1 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.ProductDedails", "ID", "dbo.Products");
            DropIndex("dbo.ProductDedails", new[] { "ID" });
            DropPrimaryKey("dbo.ProductDedails");
            AddColumn("dbo.ProductDedails", "Product_ID", c => c.Int());
            AlterColumn("dbo.ProductDedails", "ID", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.ProductDedails", "ID");
            CreateIndex("dbo.ProductDedails", "Product_ID");
            AddForeignKey("dbo.ProductDedails", "Product_ID", "dbo.Products", "ID");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ProductDedails", "Product_ID", "dbo.Products");
            DropIndex("dbo.ProductDedails", new[] { "Product_ID" });
            DropPrimaryKey("dbo.ProductDedails");
            AlterColumn("dbo.ProductDedails", "ID", c => c.Int(nullable: false));
            DropColumn("dbo.ProductDedails", "Product_ID");
            AddPrimaryKey("dbo.ProductDedails", "ID");
            CreateIndex("dbo.ProductDedails", "ID");
            AddForeignKey("dbo.ProductDedails", "ID", "dbo.Products", "ID");
        }
    }
}
