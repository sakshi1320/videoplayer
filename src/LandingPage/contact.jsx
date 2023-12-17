import Swal from "sweetalert2";

export function Contact() {
  return (
    <>
      <div className="mt-1" style={{ height: "10px", background: "white" }}></div>
      <div id="contact">
        <h1>CONTACT US</h1>
        <form>
          <input type="text" placeholder="Full Name" required></input>
          <input type="text" placeholder="Type Your Email" required></input>
          <textarea placeholder="Write Here...." name="message"></textarea>
          <button
            type="submit"
            onClick={() => {
              Swal.fire({
                title: "Thank You",
                text: "we will contact you soon",
                icon: "success",
                allowOutsideClick: false,
              });
            }}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
