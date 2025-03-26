import React, { useRef, useState, Suspense } from "react";
import { Button } from "../components/Button";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Loader } from "../components/Loader";
import { Fox } from "../models/Fox";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value || "",
    }));
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const inputs = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter your name",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    try {
      await toast.promise(
        emailjs.send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Abhishek",
            from_email: form.email,
            to_email: "abhishek.chhetri.10@gmail.com",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ),
        {
          pending: "Sending message...",
          success: "Message sent successfully!",
          error: "An error occurred, please try again later!",
        }
      );

      setTimeout(() => {
        setCurrentAnimation("idle");
        setForm({ name: "", email: "", message: "" });
      }, 2000);
    } catch (error) {
      setCurrentAnimation("idle");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex lg:flex-row bg-slate-900 opacity-90 max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text text-white">Get in Touch</h1>
        <form
          onSubmit={handleFormSubmit}
          ref={formRef}
          className="w-full flex flex-col space-y-4"
        >
          {inputs.map((input) => (
            <div key={input.name} className="flex flex-col space-y-1">
              <label className="text-white">
                {input.name.charAt(0).toUpperCase() + input.name.slice(1)}
              </label>
              <input
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                className="input"
                required={input.required}
                value={form[input.name]}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          ))}
          <label className="text-white">Message</label>
          <textarea
            name="message"
            className="input"
            placeholder="Enter your message"
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Button
            variant="primary"
            size="md"
            title="Submit"
            onBlur={handleBlur}
            onFocus={handleFocus}
            loading={loading}
            type="submit"
          />
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Fox
            currentAnimation={currentAnimation}
            position={[0.5, 0.35, 0]}
            rotation={[12.629, -0.6, 0]}
            scale={[0.5, 0.5, 0.5]}
          />
        </Canvas>
      </div>
    </section>
  );
};

export { Contact };
