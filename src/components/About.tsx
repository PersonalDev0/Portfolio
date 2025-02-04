import React from 'react';
import Button from './Button';

const About: React.FC = () => {
    return (
        <div>
            <section>
                <h2>Hi, My name is Adriana</h2>
                <h3>I am a web developer and I love to code!</h3>
                <p>proficient in Java, Spring Boot, Node.js, React, MySQL, MongoDB, AWS, Git, and GitHub. Experienced in Agile methodologies, unit testing, and building scalable web applications.</p>
                <Button color="#F5CC44" text="Learn About me"></Button>
            </section>
            <section>
                
            </section>
        </div>
    );
};

export default About;