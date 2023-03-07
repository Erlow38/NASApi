
window.onload = () => {
    const transition = document.querySelector(".transition");

    transition.classList.remove("is-active");

    const links = document.querySelectorAll("a.transition");

    for (let i = 0; i < links.length; i++) {
        const link = links[i];

        console.log(link);

        link.addEventListener("click", (e) => {
        e.preventDefault();
        let target = e.target.href;
        console.log(target);

        transition.classList.add("is-active");

        setTimeout(() => {
            window.location.href = target;
        }, 500);
        });
    }
};