// /* eslint-disable react-refresh/only-export-components */
// import { useRef, useState } from "react";
// import { LazyMotion, domAnimation, m } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

// // addnew
// import { useTranslation } from "react-i18next";

// const Contact = () => {
//   const { t } = useTranslation();

//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: "Ayman Abusura",
//           from_email: form.email,
//           to_email: "aymansalameh1996@hotmail.com",
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert(t("contact.form.success"));

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           alert(t("contact.form.error"));
//         }
//       );
//   };

//   return (
//     <LazyMotion features={domAnimation}>
//       <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
//         <m.div
//           variants={slideIn("left", "tween", 0.2, 1)}
//           initial="hidden"
//           animate="show"
//           className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
//         >
//           <p className={styles.sectionSubText}>{t("contact.header1")}</p>
//           <h3 className={styles.sectionHeadText}>{t("contact.header2")}</h3>

//           <form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             className="mt-12 flex flex-col gap-8"
//           >
//             <label className="flex flex-col">
//               <span className="text-white font-medium mb-4">
//                 {t("contact.form.field1")}
//               </span>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 required
//                 autoComplete="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder={t("contact.form.input1")}
//                 className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//               />
//             </label>
//             <label className="flex flex-col">
//               <span className="text-white font-medium mb-4">
//                 {t("contact.form.field2")}
//               </span>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 required
//                 autoComplete="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder={t("contact.form.input2")}
//                 className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//               />
//             </label>
//             <label className="flex flex-col">
//               <span className="text-white font-medium mb-4">
//                 {t("contact.form.field3")}
//               </span>
//               <textarea
//                 rows={7}
//                 name="message"
//                 required
//                 id="message"
//                 autoComplete="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 placeholder={t("contact.form.input3")}
//                 className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//               />
//             </label>

//             <button
//               type="submit"
//               className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#804dee]"
//             >
//               {loading ? t("contact.form.sending") : t("contact.form.button")}
//             </button>
//           </form>
//         </m.div>

//         <m.div
//           variants={slideIn("right", "tween", 0.2, 1)}
//           initial="hidden"
//           animate="show"
//           className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
//         >
//           <EarthCanvas />
//         </m.div>
//       </div>
//     </LazyMotion>
//   );
// };

// export default SectionWrapper(Contact, "contact");

/* eslint-disable react-refresh/only-export-components */
import { useRef, useState, Suspense, lazy } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useTranslation } from "react-i18next";


const EarthCanvas = lazy(() => import("./canvas/Earth"));

const Contact = () => {
  const { t } = useTranslation();

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ayman Abusura",
          from_email: form.email,
          to_email: "aymansalameh1996@hotmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert(t("contact.form.success"));

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert(t("contact.form.error"));
        }
      );
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <m.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>{t("contact.header1")}</p>
          <h3 className={styles.sectionHeadText}>{t("contact.header2")}</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {t("contact.form.field1")}
              </span>
              <input
                type="text"
                name="name"
                id="name"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t("contact.form.input1")}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {t("contact.form.field2")}
              </span>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("contact.form.input2")}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {t("contact.form.field3")}
              </span>
              <textarea
                rows={7}
                name="message"
                required
                id="message"
                autoComplete="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t("contact.form.input3")}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#804dee]"
              disabled={loading}
            >
              {loading ? t("contact.form.sending") : t("contact.form.button")}
            </button>
          </form>
        </m.div>

        <m.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          {/* Оборачиваем EarthCanvas в Suspense с CanvasLoader */}
          <Suspense fallback={<div>Loading...</div>}>
            <EarthCanvas />
          </Suspense>
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default SectionWrapper(Contact, "contact");