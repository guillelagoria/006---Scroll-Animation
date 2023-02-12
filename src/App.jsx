import React, { useEffect, useRef } from 'react';
import './App.css';

const App = () => {
    const boxesRef = useRef(null);

    useEffect(() => {
        const triggerBottom = window.innerHeight / 5 * 4;
        const boxes = boxesRef.current.children;

        const checkBoxes = () => {
            Array.from(boxes).forEach(box => {
                const boxTop = box.getBoundingClientRect().top;

                if (boxTop < triggerBottom) {
                    box.classList.add('show');
                } else {
                    box.classList.remove('show');
                }
            });
        };

        window.addEventListener('scroll', checkBoxes);
        checkBoxes();

        return () => {
            window.removeEventListener('scroll', checkBoxes);
        };
    }, []);

    return (
      <>
        <h1>Scroll para ver la animación</h1>
        <div className="boxes" ref={boxesRef}>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
            <div className='box'><h2>Content</h2></div>
        </div>
      </>
    );
};

export default App
