import React, { useState } from "react";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailtoLink = `mailto:shahzahid417@gmail.com?subject=${encodeURIComponent(
            form.subject
        )}&body=${encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        )}`;

        window.location.href = mailtoLink;
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-12 px-6 mx-auto max-w-screen-md">

                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Get In Touch
                </h2>

                <p className="mb-10 text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    I'm currently looking for entry-level developer roles
                    and internship opportunities. If you'd like to discuss
                    an opportunity or just say hello, feel free to reach out.
                </p>

                {/* Contact links */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 text-center">

                    <a
                        href="mailto:shahzahid417@gmail.com"
                        className="px-5 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
                    >
                        Email Me
                    </a>

                    <a
                        href="https://github.com/Zahid-ahmed5"
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-3 rounded-lg border border-gray-300 text-gray-900 dark:text-white dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/zahid-ahmed-a73821221/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-3 rounded-lg border border-gray-300 text-gray-900 dark:text-white dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        LinkedIn
                    </a>

                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your name
                        </label>

                        <input
                            type="text"
                            id="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your email
                        </label>

                        <input
                            type="email"
                            id="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Subject
                        </label>

                        <input
                            type="text"
                            id="subject"
                            value={form.subject}
                            onChange={handleChange}
                            required
                            className="block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="Job opportunity, collaboration, etc."
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your message
                        </label>

                        <textarea
                            id="message"
                            rows="6"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="Write your message here..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                    >
                        Send Message
                    </button>

                </form>
            </div>
        </section>
    );
}

export default Contact;