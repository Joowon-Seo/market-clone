const form = document.getElementById("write-form");

const handleSubmitForm = async (event) => {
  event.preventDefault();
  const body = new FormData(form);
  body.append("insertAt", new Date().getTime());
  try {
    const res = await fetch("/items", {
      method: "POST",
      body,
    });
    const data = await res.json();
    console.log(data);
    if (data === 200) {
      window.location.pathname = "/";
      console.log("들어오나?");
    }
  } catch (e) {
    console.error("글쓰기에 실패했습니다.");
  }
};

form.addEventListener("submit", handleSubmitForm);
