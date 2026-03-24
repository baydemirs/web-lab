import { useEffect, useState } from "react";
import type { Project } from "./types/project";

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("newest");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  // 🔍 Filtre + Arama + Sıralama
  const filteredProjects = projects
    .filter((p: Project) => {
      const matchSearch = p.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "all" ? true : p.category === category;

      return matchSearch && matchCategory;
    })
    .sort((a: Project, b: Project) => {
      if (sort === "newest") return b.year - a.year;
      if (sort === "oldest") return a.year - b.year;
      if (sort === "az") return a.title.localeCompare(b.title);
      if (sort === "za") return b.title.localeCompare(a.title);
      return 0;
    });

  if (loading) return <p style={{ padding: 20 }}>Yükleniyor...</p>;

  return (
    <div style={{ padding: "30px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ marginBottom: "20px" }}>Projeler</h1>

      {/* 🔍 ARAMA */}
      <input
        type="text"
        placeholder="Proje ara..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "15px",
        }}
      />

      {/* 🎯 FİLTRELER */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Tümü</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
        </select>

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="newest">En Yeni</option>
          <option value="oldest">En Eski</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
      </div>

      {/* 📦 PROJELER */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProjects.map((p: Project) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p><strong>Yıl:</strong> {p.year}</p>
            <p><strong>Kategori:</strong> {p.category}</p>
            <p><strong>Teknolojiler:</strong> {p.tech.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}