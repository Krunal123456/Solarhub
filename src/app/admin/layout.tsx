// import { redirect } from "next/navigation";
// In a real app, you would check Supabase Auth session here
// import { createClient } from "@/lib/supabase/server";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const supabase = createClient();
  // const { data: { session } } = await supabase.auth.getSession();
  // if (!session) {
  //   redirect("/login");
  // }

  return (
    <div className="flex min-h-screen pt-20 bg-muted/20">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r border-border bg-card hidden md:block">
        <nav className="p-4 space-y-2">
          <a href="/admin" className="block px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium">Dashboard</a>
          <a href="/admin/leads" className="block px-4 py-2 hover:bg-muted rounded-lg transition-colors">Leads</a>
          <a href="/admin/projects" className="block px-4 py-2 hover:bg-muted rounded-lg transition-colors">Projects</a>
          <a href="/admin/blogs" className="block px-4 py-2 hover:bg-muted rounded-lg transition-colors">Blogs</a>
        </nav>
      </aside>

      {/* Admin Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
