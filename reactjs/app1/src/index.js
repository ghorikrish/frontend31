import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import ProfilePhoto from './149277.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossOrigin="anonymous"
        />
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
            rel="stylesheet"
        />
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="card mt-2">
                        <div className="resume-header text-end shadow">
                            <h1 className="fw-bold text-dark">Ghori Krish</h1>
                            <h5>MERN Stack Developer</h5>
                        </div>
                    </div>
                </div>
                <div className="container mb-3">
                    <div className="row mt-3">
                        <div className="col-5">
                            <div className="card shadow">
                                <div className="card-header"></div>
                                <div className="card-body">
                                    <div className="resume-section">
                                        <div className="text-center">
                                            {/* Uncomment and add a valid src to display an image */}
                                            {/* <img src="149277.jpg" className="rounded img-thumbnail mb-3"
                        style={{ width: '200px', height: '200px' }} alt="Profile Photo" /> */}
                                            {/* <div className="text-center">
                                                <img src={ProfilePhoto} className="rounded img-thumbnail mb-3" style={{ width: '200px', height: '200px' }} alt="Profile Photo" />
                                            </div> */}

                                        </div>
                                        <div>
                                            <h2 className="mt-4"><i className="bi bi-telephone-fill"></i> 9427824534</h2>
                                            <h2 className="mt-3"><i className="bi bi-envelope-fill"></i> ghorikrish999@gmail.com</h2>
                                            <h2 className="mt-3"><i className="bi bi-geo-alt-fill"></i> Bela, Talaja, Bhavnagar</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Education</h4>
                                        <h6 className="fw-bold">Bachelor Of Computer Application</h6>
                                        <h6>MKBU University</h6>
                                        <p>2022-2025</p>
                                    </div>
                                    <div>
                                        <h4>Language</h4>
                                        <ul>
                                            <li>Gujarati</li>
                                            <li>English</li>
                                            <li>Hindi</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4>Expertise</h4>
                                        <ul>
                                            <li>MERN Stack Development</li>
                                            <li>Website Development</li>
                                            <li>Graphic Designing</li>
                                            <li>Frontend Development</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4>Reference</h4>
                                        <ul>
                                            <li>The EasyLearn Academy</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="card shadow">
                                <div className="card-header"></div>
                                <div className="card-body">
                                    <div className="resume-section">
                                        <h2 className="fw-bold">Profile:</h2>
                                        <p>
                                            Passionate and dedicated MERN Stack Developer with a solid understanding of
                                            full-stack web development. Proficient in building and deploying scalable
                                            web applications using MongoDB, Express.js, React.js, and Node.js. Eager to
                                            apply technical knowledge in real-world projects and continuously learn new
                                            technologies. Known for problem-solving skills, attention to detail, and the
                                            ability to work effectively in a team. Seeking an entry-level position to
                                            kickstart a career in web development and contribute to impactful projects.
                                        </p>
                                    </div>
                                    <div>
                                        <h4>Technical Skills</h4>
                                        <ul>
                                            <li>
                                                <h2 className="tag fw-bold">Frontend:</h2> HTML, CSS, JavaScript, React.js
                                            </li>
                                            <li>
                                                <h2 className="tag fw-bold">Backend:</h2> Node.js, Express.js
                                            </li>
                                            <li>
                                                <h2 className="tag fw-bold">Database:</h2> MySQL, MongoDB
                                            </li>
                                            <li>
                                                <h2 className="tag fw-bold">Tools:</h2> Git, GitHub, REST APIs, RESTer
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4>Project</h4>
                                        <ul>
                                            <li>
                                                <h2 className="tag fw-bold">E-commerce Website:</h2>
                                                <p>
                                                    Developed a full-stack e-commerce platform allowing users to browse
                                                    products, add items to the cart, and complete purchases. Implemented
                                                    using React, Node.js, Express, and MongoDB.
                                                </p>
                                            </li>
                                            <li>
                                                <h2 className="tag fw-bold">Task Manager App:</h2>
                                                <p>
                                                    Created a task management app with user authentication, allowing
                                                    users to manage their daily tasks efficiently. Built using the MERN
                                                    stack.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
