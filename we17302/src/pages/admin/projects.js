import { useEffect, useState } from "@/lib";

const AdminProjectsPage = () => {
    // projects  = 3
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                // xóa trên server
                fetch(`http://localhost:3000/projects/${id}`, { method: "DELETE" }).then(() => {
                    // xóa ở client : reRender
                    const newsProject = projects.filter((project) => project.id != id);
                    setProjects(newsProject);
                });
            });
        }
    });

    return `<div class="container mt-5">
                <h1>Quản lý dự án</h1>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên dự án</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${projects
                            .map((project, index) => {
                                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${project.name}</td>
                                    <td width="150">
                                        <button data-id="${
                                            project.id
                                        }" class="btn btn-danger btn-remove">Xóa</button>
                                    </td>
                                </tr>
                            `;
                            })
                            .join("")}
                    </tbody>
                </table>

    </div>`;
};

export default AdminProjectsPage;

// Bước 1: npm i -g json-server
// Bước 2: truy cập folder root
// json-server --watch db.json

// GET /projects -> list
// GET /projects/:id -> single
// POST /projects -> add
// PUT /projects/:id + body -> update
// DELETE /projects/:id -> delete
