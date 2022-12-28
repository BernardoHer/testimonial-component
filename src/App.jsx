import { useState } from 'react';
import Testimonial from './components/Testimonial';
import profile1Photo from './images/photo1.jpg'
import profile2Photo from './images/photo2.jpg'
import profile3Photo from './images/photo3.jpg'
import DarkModeBtn from './components/DarkModeBtn';
import './App.css';

function App() {

  const [theme, setTheme] = useState('light');

  const handleClic = () => {

    if (theme == 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }

  }

  return (
    <div className={'App ' + theme}>
      <DarkModeBtn
        onClickFn={handleClic}
        value={theme == 'dark' ? 'light' : 'dark'} />
      <Testimonial
        img={profile1Photo}
        nombre="Rita Repulsa"
        stars={'⭐⭐⭐⭐⭐'}
        text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laboriosam vel, eos dicta, odit nulla veniam voluptatibus magnam eaque culpa dignissimos temporibus quod? Amet commodi perspiciatis, iusto assumenda optio hic.' />
      <Testimonial
        img={profile2Photo}
        nombre="Jhon Nash"
        stars={'⭐⭐⭐'}
        text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laboriosam vel, eos dicta, odit nulla veniam voluptatibus magnam eaque culpa dignissimos temporibus quod? Amet commodi perspiciatis, iusto assumenda optio hic.' />
      <Testimonial
        img={profile3Photo}
        nombre="Daniela Ruiz"
        stars={'⭐⭐⭐⭐'}
        text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laboriosam vel, eos dicta, odit nulla veniam voluptatibus magnam eaque culpa dignissimos temporibus quod? Amet commodi perspiciatis, iusto assumenda optio hic.' />
    </div>
  );
}

export default App;