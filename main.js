import "./style.css";

const info = {
    name: "Rayan Adlrdard",
    position: "Front-end",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.",
    img: "https://picsum.photos/325/460",
    cv: "https://www.africau.edu/images/default/sample.pdf",
};
document.querySelector("#banner").innerHTML = `
  <div>
    <h2 class="text-5xl font-bold">
        I’m ${info.name} <span class="text-[#FFB400]">${info.position}</span> Developer
    </h2>
    <p>
        ${info.desc}
    </p>
    <a href="${info.cv}" class="bg-[#FFB400] inline-block py-5 px-4 uppercase">HIRE ME</a>
    </div>
    <div>
    <img src="${info.img}" alt="" />
  </div>
`;
