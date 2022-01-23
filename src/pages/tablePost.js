import axios from "axios";
import { reRender } from "../utils/rerender";

const TablePost = {
    async render(){
        const { data } = await axios.get('http://localhost:3001/posts');
        return `
        ${data.map((post, index) => `
            <tr>
                <td>${index + 1}</td>
                <td><img src="${post.img}" width="50" /></td>
                <td>${post.title}</td>
                <td>
                    <button data-id="${post.id}" class="btn bg-red-500 p-3 rounded text-white inline-block">Delete</button>
                </td>
            </tr>
        `).join("")}
        `
    },
    afterRender(){
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', () => {
                const confirm = window.confirm("Are you sure??");
                if(confirm){
                    axios.delete('http://localhost:3001/posts/'+id).then(() => {
                    reRender(TablePost, '#table-news');
                    })
                }
            })
        });
    }
}
export default TablePost;