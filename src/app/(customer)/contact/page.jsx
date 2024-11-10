import React from "react";
import style from "./page.module.css";

export default function page() {
  
  return (
    <>
      <div className={style.WrapperContact}>
        <div className={style.mapDiv}>
          <iframe
            className={style.mapFram}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4270.792977721757!2d79.90100431088382!3d6.852766993117031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a8936886579%3A0xa8c769f4b86d85b5!2sUniversity%20of%20Sri%20Jayewardenepura!5e1!3m2!1sen!2slk!4v1731135509384!5m2!1sen!2slk"
            style={{ margin: "5%" + "em" }}
            // allowfullscreen="?"
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          {/* <h1>hello</h1> */}
        </div>

        <div className={style.dataRaw}>
          <div className={style.textField}></div>
        </div>
      </div>
    </>
  );
}
